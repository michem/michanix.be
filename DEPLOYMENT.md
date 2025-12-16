# Deployment Documentation - michanix.be

## Server Information

| Property | Value |
|----------|-------|
| **Provider** | DigitalOcean |
| **Droplet Name** | rstudio-michanix-website |
| **Location** | AMS3 (Amsterdam) |
| **Image** | RStudio + H2O 1.2 on Ubuntu 18.04 |
| **Resources** | 4 GB Memory / 80 GB Disk |
| **IP Address** | 161.35.156.3 |
| **Domain** | michanix.be, www.michanix.be |

## Current Production Setup

### Directory Structure on Server

```
/srv/michanix.be/           # Git repository clone
├── build-site.sh           # Build and deploy script
├── public/                 # Generated site (after build)
└── ...                     # Source files

/var/www/michanix.be/html/  # Production web root (served by Nginx)
```

### Build Process

The site is built using R blogdown, which uses Hugo under the hood:

```bash
# build-site.sh
#!/bin/bash
cd /srv/michanix.be
git pull
Rscript -e 'blogdown::build_site()'
cp -r public/. /var/www/michanix.be/html/
```

### Automated Deployment

A cron job runs the build script hourly:

```cron
0 * * * * /srv/michanix.be/build-site.sh
```

This means:
- Changes pushed to GitHub are deployed within 1 hour
- The script pulls latest code, rebuilds, and copies to production

### Web Server (Nginx)

- **Config Location**: `/etc/nginx/sites-available/michanix.be`
- **Enabled via**: `/etc/nginx/sites-enabled/michanix.be`
- **SSL**: Let's Encrypt certificate via Certbot

### Key Commands

```bash
# SSH into server
ssh root@161.35.156.3

# Manual build
cd /srv/michanix.be
bash build-site.sh

# Check Nginx status
sudo systemctl status nginx

# Restart Nginx after config changes
sudo nginx -t && sudo systemctl restart nginx

# View cron jobs
crontab -e

# Check SSL certificate
sudo certbot certificates
```

---

## Dev/Prod Workflow

To safely review changes before they go to production, implement this staging workflow:

### Option 1: Branch-Based Workflow (Recommended)

Use Git branches to separate development from production:

```
main branch     → Production (deployed automatically)
develop branch  → Development (deployed to staging)
```

#### Setup on Server

1. **Create staging directory and web root**:

```bash
# Create staging site directory
sudo mkdir -p /srv/michanix.be-staging
sudo mkdir -p /var/www/staging.michanix.be/html
sudo chown -R $USER:$USER /var/www/staging.michanix.be/html

# Clone repository for staging
cd /srv
git clone https://github.com/michem/michanix.be.git michanix.be-staging
cd michanix.be-staging
git checkout develop  # or create: git checkout -b develop
```

2. **Create staging build script** (`/srv/michanix.be-staging/build-staging.sh`):

```bash
#!/bin/bash
cd /srv/michanix.be-staging
git fetch origin
git reset --hard origin/develop
Rscript -e 'blogdown::build_site()'
cp -r public/. /var/www/staging.michanix.be/html/
```

3. **Create Nginx config for staging** (`/etc/nginx/sites-available/staging.michanix.be`):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name staging.michanix.be;
    root /var/www/staging.michanix.be/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

4. **Enable staging site**:

```bash
sudo ln -s /etc/nginx/sites-available/staging.michanix.be /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx
```

5. **Add DNS record** in DigitalOcean:
   - Type: A
   - Hostname: staging
   - Value: 161.35.156.3

6. **Optional: Add SSL to staging**:

```bash
sudo certbot --nginx -d staging.michanix.be
```

7. **Optional: Password protect staging**:

```bash
# Create password file
sudo apt install apache2-utils
sudo htpasswd -c /etc/nginx/.htpasswd reviewer

# Add to staging nginx config inside server block:
auth_basic "Staging Site";
auth_basic_user_file /etc/nginx/.htpasswd;
```

8. **Update cron** to build both:

```cron
0 * * * * /srv/michanix.be/build-site.sh
30 * * * * /srv/michanix.be-staging/build-staging.sh
```

#### Development Workflow

```
1. Create feature branch from develop
   git checkout develop
   git checkout -b feature/my-change

2. Make changes locally, test with:
   Rscript -e 'blogdown::serve_site()'

3. Push to GitHub
   git push -u origin feature/my-change

4. Create PR: feature/my-change → develop
   - Merge to develop for staging review

5. Review at https://staging.michanix.be

6. When ready: Create PR: develop → main
   - Merge to main for production deployment
```

### Option 2: Preview Before Merge (Simpler)

If you don't want to maintain a staging server, use local preview:

#### Local Development

```bash
# Serve site locally with live reload
Rscript -e 'blogdown::serve_site()'
# Opens at http://localhost:4321
```

#### GitHub Actions Preview (Optional)

Add `.github/workflows/preview.yml`:

```yaml
name: Preview Build

on:
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true

      - uses: r-lib/actions/setup-r@v2

      - uses: r-lib/actions/setup-renv@v2

      - name: Build site
        run: Rscript -e 'blogdown::build_site()'

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public/
```

This builds on every PR so you can verify the build succeeds before merging.

### Option 3: Manual Promotion

Keep current setup but add manual promotion step:

1. **Update production build script** to require manual trigger:

Replace cron with webhook or manual SSH:

```bash
# Remove from cron, run manually instead:
ssh root@161.35.156.3 'bash /srv/michanix.be/build-site.sh'
```

2. **Add alias locally** (in `~/.bashrc` or `~/.zshrc`):

```bash
alias deploy-michanix="ssh root@161.35.156.3 'bash /srv/michanix.be/build-site.sh'"
```

---

## Recommended Setup: Branch-Based with Staging

For the best balance of safety and simplicity:

| Environment | Branch | URL | Auto-deploy |
|-------------|--------|-----|-------------|
| Development | `develop` | staging.michanix.be | Every 30 min |
| Production | `main` | www.michanix.be | Every hour |

### Workflow Summary

```
[Local] → [develop branch] → [staging.michanix.be] → [main branch] → [www.michanix.be]
           Push                 Review                  PR/Merge         Auto-deploy
```

---

## Maintenance

### Renew SSL Certificate

Certbot auto-renews, but to force:

```bash
sudo certbot renew
```

### Update R Packages

```bash
cd /srv/michanix.be
R
> renv::restore()  # Install locked versions
> renv::update()   # Update packages
> renv::snapshot() # Save new versions to renv.lock
```

### View Logs

```bash
# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Cron logs
grep CRON /var/log/syslog
```

### Backup

The site is fully contained in the Git repository. The server can be rebuilt from scratch by:

1. Clone repository
2. Run `renv::restore()` for R packages
3. Run `blogdown::build_site()`
4. Configure Nginx
5. Set up SSL with Certbot

---

## Quick Reference

| Task | Command |
|------|---------|
| SSH to server | `ssh root@161.35.156.3` |
| Manual deploy | `bash /srv/michanix.be/build-site.sh` |
| Local preview | `Rscript -e 'blogdown::serve_site()'` |
| Check Nginx | `sudo systemctl status nginx` |
| View cron | `crontab -e` |
| Restart Nginx | `sudo systemctl restart nginx` |

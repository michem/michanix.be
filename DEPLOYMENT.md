# Deployment Documentation - michanix.be

## Server Architecture

| Environment | Server | IP | OS | Domain |
|-------------|--------|----|----|--------|
| **Staging** | michanix-staging | 146.190.31.165 | Ubuntu 24.04 | staging.michanix.be |
| **Production** | rstudio-michanix-website | 161.35.156.3 | Ubuntu 18.04 | www.michanix.be |

Both servers are hosted on DigitalOcean in AMS3 (Amsterdam).

---

## Staging Server (146.190.31.165)

### Setup

See [SERVER_SETUP.md](SERVER_SETUP.md) for complete setup instructions.

### Directory Structure

```
/srv/michanix.be-staging/       # Git repository (develop branch)
├── coming-soon/
│   └── dist/                   # Pre-built React app
└── build-staging.sh            # Deploy script

/var/www/staging.michanix.be/html/  # Web root
```

### Deploy Process

The staging site uses a pre-built React "Coming Soon" page. No build required on server.

```bash
# build-staging.sh
git fetch origin develop
git reset --hard origin/develop
cp -r coming-soon/dist/. /var/www/staging.michanix.be/html/
```

### Cron

```cron
30 * * * * /srv/michanix.be-staging/build-staging.sh >> /var/log/staging-build.log 2>&1
```

---

## Production Server (161.35.156.3)

### Directory Structure

```
/srv/michanix.be/               # Git repository (main branch)
├── build-site.sh               # Build and deploy script
├── content/                    # Blogdown content
├── themes/                     # Hugo themes
└── public/                     # Generated site (after build)

/var/www/michanix.be/html/      # Web root
```

### Build Process

Production uses R blogdown to build the site:

```bash
# build-site.sh
cd /srv/michanix.be
git pull
Rscript -e 'blogdown::build_site()'
cp -r public/. /var/www/michanix.be/html/
```

### Cron

```cron
0 * * * * /srv/michanix.be/build-site.sh
```

---

## Development Workflow

```
┌─────────────┐     ┌─────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Local     │────▶│   develop   │────▶│ staging.michanix │────▶│    main     │
│ Development │     │   branch    │     │      .be         │     │   branch    │
└─────────────┘     └─────────────┘     └──────────────────┘     └─────────────┘
                          │                      │                       │
                          │                      │                       │
                          ▼                      ▼                       ▼
                      git push              Review site            www.michanix.be
                                           (30 min deploy)         (1 hour deploy)
```

### Steps

1. **Develop locally**
   ```bash
   cd coming-soon
   npm run dev          # Local dev server
   npm run build        # Build for staging
   ```

2. **Push to develop**
   ```bash
   git add -A
   git commit -m "Your changes"
   git push origin develop
   ```

3. **Review on staging** (auto-deploys within 30 min)
   - https://staging.michanix.be

4. **Promote to production**
   - Create PR: `develop` → `main`
   - Merge PR
   - Auto-deploys within 1 hour to https://www.michanix.be

---

## Quick Reference

| Task | Staging | Production |
|------|---------|------------|
| SSH | `ssh root@146.190.31.165` | `ssh root@161.35.156.3` |
| Manual deploy | `bash /srv/michanix.be-staging/build-staging.sh` | `bash /srv/michanix.be/build-site.sh` |
| Logs | `/var/log/staging-build.log` | `/var/log/syslog` (grep CRON) |
| Nginx config | `/etc/nginx/sites-available/staging.michanix.be` | `/etc/nginx/sites-available/michanix.be` |
| Web root | `/var/www/staging.michanix.be/html/` | `/var/www/michanix.be/html/` |

---

## SSL Certificates

Both servers use Let's Encrypt certificates managed by Certbot with auto-renewal.

```bash
# Check certificate status
sudo certbot certificates

# Force renewal
sudo certbot renew
```

---

## Troubleshooting

### Staging

```bash
ssh root@146.190.31.165

# Check deploy logs
tail -f /var/log/staging-build.log

# Manual deploy
bash /srv/michanix.be-staging/build-staging.sh

# Nginx errors
tail -f /var/log/nginx/error.log
```

### Production

```bash
ssh root@161.35.156.3

# Check cron logs
grep CRON /var/log/syslog

# Manual build
bash /srv/michanix.be/build-site.sh

# Nginx errors
tail -f /var/log/nginx/error.log
```

---

## Future: Migrating Production to New Server

When ready to migrate production to the new Ubuntu 24.04 server:

1. Update DNS A record for `michanix.be` and `www.michanix.be` to point to new server
2. Set up production site on new server (similar to staging setup)
3. Update cron jobs
4. Decommission old server (161.35.156.3)

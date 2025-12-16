# Server Setup Guide - Staging Environment

This guide walks you through setting up the staging environment on your DigitalOcean server.

**Note:** The React app is pre-built and committed to the repository. No Node.js required on server.

## Prerequisites

- SSH access to `root@161.35.156.3`
- Domain managed in DigitalOcean (or your DNS provider)

---

## Step 1: Add DNS Record

In your DigitalOcean dashboard (or DNS provider):

1. Go to **Networking** → **Domains** → **michanix.be**
2. Add a new **A record**:
   - **Hostname**: `staging`
   - **Value**: `161.35.156.3`
   - **TTL**: 3600 (default)

This will point `staging.michanix.be` to your server.

---

## Step 2: Server Setup

SSH into your server:

```bash
ssh root@161.35.156.3
```

### 2.1 Create directories

```bash
# Create staging web root
sudo mkdir -p /var/www/staging.michanix.be/html
sudo chown -R root:root /var/www/staging.michanix.be/html
sudo chmod -R 755 /var/www/staging.michanix.be
```

### 2.2 Clone repository for staging

```bash
cd /srv
git clone https://github.com/michem/michanix.be.git michanix.be-staging
cd michanix.be-staging
git checkout develop
```

### 2.3 Deploy the pre-built site

```bash
# Copy pre-built files to web root
cp -r /srv/michanix.be-staging/coming-soon/dist/. /var/www/staging.michanix.be/html/
```

---

## Step 3: Configure Nginx

### 3.1 Create Nginx config

```bash
sudo nano /etc/nginx/sites-available/staging.michanix.be
```

Paste this configuration:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name staging.michanix.be;
    root /var/www/staging.michanix.be/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 3.2 Enable the site

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/staging.michanix.be /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 3.3 Verify it works

Visit `http://staging.michanix.be` in your browser. You should see the "Coming Soon" page.

---

## Step 4: Add SSL Certificate

```bash
sudo certbot --nginx -d staging.michanix.be
```

Follow the prompts. Certbot will automatically update your Nginx config.

---

## Step 5: Set Up Automated Deployment

### 5.1 Make the build script executable

```bash
chmod +x /srv/michanix.be-staging/build-staging.sh
```

### 5.2 Test the build script

```bash
bash /srv/michanix.be-staging/build-staging.sh
```

### 5.3 Add to cron

```bash
crontab -e
```

Add this line (deploys staging every 30 minutes):

```cron
30 * * * * /srv/michanix.be-staging/build-staging.sh >> /var/log/staging-build.log 2>&1
```

Your existing cron should now look like:

```cron
0 * * * * /srv/michanix.be/build-site.sh
30 * * * * /srv/michanix.be-staging/build-staging.sh >> /var/log/staging-build.log 2>&1
```

---

## Step 6: Optional - Password Protection

To prevent public access to staging:

```bash
# Install apache2-utils if not present
sudo apt install apache2-utils

# Create password file (you'll be prompted for password)
sudo htpasswd -c /etc/nginx/.htpasswd reviewer
```

Edit the Nginx config:

```bash
sudo nano /etc/nginx/sites-available/staging.michanix.be
```

Add inside the `server` block:

```nginx
    auth_basic "Staging - Password Required";
    auth_basic_user_file /etc/nginx/.htpasswd;
```

Restart Nginx:

```bash
sudo nginx -t && sudo systemctl restart nginx
```

---

## Summary

After completing these steps:

| Environment | Branch | URL | Updates |
|-------------|--------|-----|---------|
| **Staging** | `develop` | https://staging.michanix.be | Every 30 min |
| **Production** | `main` | https://www.michanix.be | Every hour |

### Workflow

1. Make changes to React app locally in `coming-soon/`
2. Build locally: `cd coming-soon && npm run build`
3. Commit the `dist/` folder
4. Push to `develop` branch → appears on staging within 30 min
5. Review at https://staging.michanix.be
6. Create PR from `develop` → `main`
7. Merge → goes live on production within 1 hour

---

## Troubleshooting

### Check deploy logs

```bash
tail -f /var/log/staging-build.log
```

### Manual deploy

```bash
cd /srv/michanix.be-staging
bash build-staging.sh
```

### Check Nginx errors

```bash
sudo tail -f /var/log/nginx/error.log
```

### DNS not propagating

DNS changes can take up to 48 hours. Check propagation at:
https://www.whatsmydns.net/#A/staging.michanix.be

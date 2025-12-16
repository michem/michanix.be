# Server Setup Guide - Staging Environment

This guide walks you through setting up the staging environment on your DigitalOcean server.

## Server Information

| Property | Value |
|----------|-------|
| **IP Address** | 146.190.31.165 |
| **OS** | Ubuntu 24.04 (LTS) x64 |
| **Resources** | 2 GB Memory / 1 Intel vCPU / 70 GB Disk |
| **Location** | AMS3 (Amsterdam) |
| **Domain** | staging.michanix.be |

---

## Quick Setup (Copy & Paste)

SSH into your server and run this entire block:

```bash
ssh root@146.190.31.165
```

```bash
# Update system and install Nginx + Certbot
apt update && apt upgrade -y
apt install -y nginx certbot python3-certbot-nginx git

# Create web root
mkdir -p /var/www/staging.michanix.be/html
chmod -R 755 /var/www/staging.michanix.be

# Clone repository
cd /srv
git clone https://github.com/michem/michanix.be.git michanix.be-staging
cd michanix.be-staging
git checkout develop

# Deploy pre-built site
cp -r coming-soon/dist/. /var/www/staging.michanix.be/html/

# Create Nginx config
cat > /etc/nginx/sites-available/staging.michanix.be << 'EOF'
server {
    listen 80;
    listen [::]:80;

    server_name staging.michanix.be;
    root /var/www/staging.michanix.be/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

# Enable site and restart Nginx
ln -s /etc/nginx/sites-available/staging.michanix.be /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx

# Setup SSL (will prompt for email)
certbot --nginx -d staging.michanix.be

# Setup auto-deploy cron (every 30 min)
chmod +x /srv/michanix.be-staging/build-staging.sh
(crontab -l 2>/dev/null; echo "30 * * * * /srv/michanix.be-staging/build-staging.sh >> /var/log/staging-build.log 2>&1") | crontab -

echo "Setup complete! Visit https://staging.michanix.be"
```

---

## DNS Configuration

Make sure your DNS is configured:

| Type | Hostname | Value |
|------|----------|-------|
| A | staging | 146.190.31.165 |

---

## Manual Steps (if not using Quick Setup)

### Step 1: Update system and install packages

```bash
apt update && apt upgrade -y
apt install -y nginx certbot python3-certbot-nginx git
```

### Step 2: Create directories

```bash
mkdir -p /var/www/staging.michanix.be/html
chmod -R 755 /var/www/staging.michanix.be
```

### Step 3: Clone repository

```bash
cd /srv
git clone https://github.com/michem/michanix.be.git michanix.be-staging
cd michanix.be-staging
git checkout develop
```

### Step 4: Deploy the site

```bash
cp -r coming-soon/dist/. /var/www/staging.michanix.be/html/
```

### Step 5: Configure Nginx

```bash
nano /etc/nginx/sites-available/staging.michanix.be
```

Paste:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name staging.michanix.be;
    root /var/www/staging.michanix.be/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable and restart:

```bash
ln -s /etc/nginx/sites-available/staging.michanix.be /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx
```

### Step 6: SSL Certificate

```bash
certbot --nginx -d staging.michanix.be
```

### Step 7: Auto-deploy cron

```bash
chmod +x /srv/michanix.be-staging/build-staging.sh
crontab -e
```

Add:

```cron
30 * * * * /srv/michanix.be-staging/build-staging.sh >> /var/log/staging-build.log 2>&1
```

---

## Summary

| Environment | Branch | URL | Server | Updates |
|-------------|--------|-----|--------|---------|
| **Staging** | `develop` | https://staging.michanix.be | 146.190.31.165 | Every 30 min |
| **Production** | `main` | https://www.michanix.be | 161.35.156.3 | Every hour |

### Development Workflow

1. Make changes locally in `coming-soon/`
2. Build: `cd coming-soon && npm run build`
3. Commit including `dist/` folder
4. Push to `develop` → staging updates within 30 min
5. Review at https://staging.michanix.be
6. PR `develop` → `main` → production updates within 1 hour

---

## Troubleshooting

```bash
# Check deploy logs
tail -f /var/log/staging-build.log

# Manual deploy
bash /srv/michanix.be-staging/build-staging.sh

# Nginx errors
tail -f /var/log/nginx/error.log

# Test Nginx config
nginx -t
```

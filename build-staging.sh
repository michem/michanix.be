#!/bin/bash
# Build script for staging site (develop branch)
# Deploys the React coming-soon page to staging.michanix.be

set -e

cd /srv/michanix.be-staging

# Pull latest from develop branch
git fetch origin develop
git reset --hard origin/develop

# Install dependencies and build React app
cd coming-soon
npm ci
npm run build

# Deploy to staging web root
cp -r dist/. /var/www/staging.michanix.be/html/

echo "Staging site deployed successfully!"

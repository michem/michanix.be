#!/bin/bash
# Build script for staging site (develop branch)
# Deploys the React coming-soon page to staging.michanix.be
#
# NOTE: The React app is pre-built and committed to the repo.
# No Node.js required on server - just git pull and copy.

set -e

cd /srv/michanix.be-staging

# Pull latest from develop branch
git fetch origin develop
git reset --hard origin/develop

# Deploy pre-built files to staging web root
cp -r coming-soon/dist/. /var/www/staging.michanix.be/html/

echo "Staging site deployed successfully!"

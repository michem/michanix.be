#!/bin/bash

cd /srv/michanix.be
git pull
Rscript -e 'blogdown::build_site()'
cp -r public/. /var/www/michanix.be/html/
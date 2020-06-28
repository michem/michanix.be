#!/bin/bash

cd /home/colin/colinquirk.com
git pull
Rscript -e 'blogdown::build_site()'
cp -r public/. /var/www/colinquirk.com/html/
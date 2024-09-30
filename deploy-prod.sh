#!/bin/bash

# get latest changes
git restore . && git pull origin main
# build
bundle update --bundler # without this, version mismatches in gemlock file may have an issue
bundle exec jekyll build

# rm backup, create backup, deploy new site
sudo rm -rf /var/www/laudebeesandcandles.bak/
sudo mv /var/www/laudebeesandcandles/ /var/www/laudebeesandcandles.bak/
sudo mv _site/ /var/www/laudebeesandcandles/

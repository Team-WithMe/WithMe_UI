#!/bin/sh

find . -name "node_modules" -print -type d -depth -exec rm -rf {} \;
echo -e "\033[32m" ----- clean node_modules end ----- "\033[m"
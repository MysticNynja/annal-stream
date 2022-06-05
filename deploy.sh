#!usr/bin/env sh

set -e 

npm install
npm run build

cd dist

git config --global user.email "iamwillyork@outlook.com"
git config --global user.name "Will York"
git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:MysticNynja/annal-stream.git master:gh-pages

cd -

#!usr/bin/env sh

set -e 

npm install
npm run build

cd dist

git init
git add -A
git commit -m "New Deployment"
git config user.email "iamwillyork@outlook.com"
git config user.name "Will York"
git push -f git@github.com:MysticNynja/annal-stream.git master:gh-pages

cd -

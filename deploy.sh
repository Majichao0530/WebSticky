set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Majichao0530/WebSticky.git master:gh-pages

cd -
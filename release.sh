git branch -D master
git checkout -b master origin/master
mv .git .circleci public
cd public
git status --porcelain
if [ -n "`git status --porcelain`" ]; then
  git add .
  git commit -m "update"
  git push origin master
fi

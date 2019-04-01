if [ -n "`git status --porcelain`" ]; then
  git add . || exit 1
  git commit -m "update" || exit 1
  git push origin master || exit 1
fi

THEME_REPO=https://github.com/dim0627/hugo_theme_beg
THEME_NAME=themes/beg

theme: $(THEME_NAME)

$(THEME_NAME):
	git clone $(THEME_REPO) $(THEME_NAME)
ci-local:
	circleci local execute
release:
	hugo
	git add .
	git commit -m "update"
	git push origin master

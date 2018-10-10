THEME_REPO=https://github.com/suzuki-shunsuke/tale-hugo
THEME_NAME=themes/tale

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

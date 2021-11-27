THEME_REPO=https://github.com/suzuki-shunsuke/hugo_theme_beg
THEME_NAME=themes/beg

theme: $(THEME_NAME)

$(THEME_NAME):
	git clone $(THEME_REPO) $(THEME_NAME)

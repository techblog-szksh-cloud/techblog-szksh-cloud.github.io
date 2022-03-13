// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Melody',
  tagline: "Shunsuke Suzuki's personal blog",
  url: 'https://techblog.szksh.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'techblog-szksh-cloud', // Usually your GitHub org/user name.
  projectName: 'techblog-szksh-cloud.github.io', // Usually your repo name.
  favicon: 'http://github.com/suzuki-shunsuke.png',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false, // Optional: disable the docs plugin
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2018 Shunsuke Suzuki.`,
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Melody',
        logo: {
          alt: 'Shunsuke Suzuki',
          src: 'http://github.com/suzuki-shunsuke.png',
        },
        items: [
          {
            href: 'https://github.com/techblog-szksh-cloud/techblog-szksh-cloud.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'http://github.com/suzuki-shunsuke',
            label: 'GitHub User Profile',
            position: 'right',
          },
          {
            href: 'http://github.com/suzuki-shunsuke/resume',
            label: 'Resume',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © 2017 Shunsuke Suzuki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

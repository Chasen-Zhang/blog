// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chasen',
  tagline: `Just because we can't see the path doesn't mean it's not there.`,
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './src/plugins/pxToVw',
    './src/plugins/globalSassVarInject'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chasen',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.jpeg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About Me', position: 'left'},
          {
            href: 'https://github.com/Chasen-Zhang',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/chasenzsq',
              },
              {
                href: 'https://github.com/Chasen-Zhang',
                label: 'GitHub',
                position: 'right',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'DATABEND',
            items: [
              {
                label: 'Databend',
                to: 'https://databend.com',
              },
              {
                label: 'Databend.rs',
                to: 'https://databend.rs',
              },
              {
                label: 'DatabendRepo',
                to: 'https://github.com/datafuselabs/databend',
              },
              {
                label: '3306π',
                to: 'https://3306pai.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chasen. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

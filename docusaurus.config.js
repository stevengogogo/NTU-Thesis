const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: '國立臺灣大學碩博士論文模板',
  tagline:
    'Templates for your master thesis or doctoral dissertations at National Taiwan University.',
  url: 'https://hsins.github.io',
  baseUrl: '/NTU-Thesis/',
  favicon: 'img/favicon.png',
  organizationName: 'Hsins',
  projectName: 'NTU-Thesis',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('./src/plugins/prism_themes/monokai'),
    },
    colorMode: {
      defaultMode: 'light',
    },
    image: './img/seal.png',
    metadatas: [{ name: 'twitter:card', content: 'summary' }],
    navbar: {
      title: '國立臺灣大學碩博士論文模板',
      logo: {
        alt: 'National Taiwan University Thesis Template',
        src: 'img/favicon.png',
      },
      items: [
        {
          to: 'docs',
          label: '說明文件',
          activeBaseRegex:
            'docs$|docs\\/(introduction|installation|typesetting|plotting|conversion|contribution|faq|reference)',
          position: 'left',
        },
        // {
        //   to: 'tutorial',
        //   activeBasePath: 'tutorial',
        //   label: '教學影片',
        //   position: 'left',
        // },
        {
          to: 'docs/development',
          activeBasePath: 'docs/development',
          label: '模板開發',
          position: 'left',
        },
        // {
        //   to: 'download',
        //   activeBasePath: 'download',
        //   label: '檔案下載',
        //   position: 'left',
        // },
        { to: 'contact', label: '聯絡作者', position: 'left' },
        // {
        //   to: 'blog',
        //   activeBasePath: 'blog',
        //   label: '開發紀錄',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/Hsins/NTU-Thesis',
          position: 'right',
          className: 'header-github-link header-icon-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '說明文件',
          items: [
            {
              label: 'Videos',
              to: 'videos',
            },
          ],
        },
        {
          title: '聯絡作者',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Hsins/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Get in touch',
              to: 'contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hsins.`,
    },
    // googleAnalytics: {
    //   trackingID: '',
    // },
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Hsins/NTU-Thesis/edit/master/website/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          feedOptions: {
            type: 'all',
          },
        },
      },
    ],
  ],
  plugins: [
    // path.resolve(__dirname, './src/plugins/cookbooks'),
    path.resolve(__dirname, './src/plugins/redirects'),
  ],
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AKASHA docs",
  tagline: "Build your own application with AKASHA",
  url: "https://akasha-docs.pages.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "AKASHAorg", // Usually your GitHub org/user name.
  projectName: "akasha-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/AKASHAorg/akasha-docs',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/AKASHAorg/akasha-docs',
        // },
        docs: {
          // required to set the doc with / slug as landing page
          routeBasePath: "/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-sdk-main",
        entryPoints: ["./akasha-core/sdk/src/index.ts"],
        entryPointStrategy: "expand",
        tsconfig: "akasha-core/sdk/tsconfig.json",
        readme: "none",
        out: "./sdk/api-reference",
        name: "AKASHA SDK reference",
        categorizeByGroup: false,
        // plugin
        plugin: ["typedoc-plugin-missing-exports"],
        internalModule: "sdk",
        // end_plugin
        excludeInternal: true,
        categoryOrder: ["API", "Services"],
        sidebar: {
          categoryLabel: "SDK reference",
          position: 3,
        },
        hideMembersSymbol: true,
        frontmatter: {
          pagination_prev: null,
          pagination_next: null,
          hide_title: true,
          description: "Test Description",
        },
      },
    ],
    // [
    //   "docusaurus-plugin-typedoc",
    //   {
    //     id: "akasha-ui-hooks",
    //     entryPoints: ["./akasha-core/ui/hooks/src/generated/hooks-new.ts"],
    //     entryPointStrategy: "expand",
    //     tsconfig: "./akasha-core/ui/hooks/tsconfig.json",
    //     readme: "docs/react-hooks/_hooks-list_.md",
    //     out: "./react-hooks",
    //     name: "React hooks",
    //     excludeInternal: true,
    //     sidebar: {
    //       categoryLabel: "React hooks",
    //       position: 5,
    //     },
    //     frontmatter: null,
    //   },
    // ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "AKASHA Docs",
        // logo: {
        // alt: 'My Site Logo',
        // src: 'img/logo.svg',
        // },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          // {to: '/blog', label: 'Tutorials', position: 'left'},
          {
            href: "https://github.com/AKASHAorg/akasha-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Quick start",
                to: "/dev-quickstart",
              },
              {
                label: "Integrations",
                to: "/integrations",
              },
              {
                label: "SDK",
                to: "/sdk",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/JqqKasJ",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/AKASHAorg",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Tutorials',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/AKASHAorg",
              },
              {
                label: "Docs GitHub",
                href: "https://github.com/AKASHAorg/akasha-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AKASHA Foundation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,

        // Public API key
        apiKey: process.env.ALGOLIA_API_KEY,

        indexName: process.env.ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;

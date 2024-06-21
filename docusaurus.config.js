// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
        entryPoints: ["./akasha-core/libs/sdk/src/index.ts"],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/sdk/tsconfig.json",
        readme: "none",
        out: "./docs/sdk/api-reference",
        name: "AKASHA SDK reference",
        categorizeByGroup: false,
        excludeInternal: true,
        categoryOrder: ["API", "Services"],
        sidebar: {
          categoryLabel: "SDK reference",
          position: 5,
        },
        fileExtension: "mdx"
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-ui-hooks",
        entryPoints: ["./akasha-core/libs/hooks/src/generated/index.ts", "./akasha-core/libs/hooks/src/store/index.ts", "./akasha-core/libs/hooks/src/index.ts"],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/hooks/tsconfig.json",
        readme: "none",
        out: "./docs/react-hooks",
        name: "React hooks",
        excludeInternal: true,
        sidebar: {
          categoryLabel: "React Hooks",
          sidebarLabel: "React Hooks",
          position: 6,
        },
        stripYamlFrontmatter: true,
        fileExtension: "mdx"
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "ui-events-bus",
        entryPoints: ["./akasha-core/libs/typings/src/ui/ui-events.ts"],
        entryPointStrategy: "resolve",
        tsconfig: "./akasha-core/libs/typings/tsconfig.json",
        out: "./docs/event-bus/ui-events-bus",
        name: "UI Events",
        stripYamlFrontmatter: true,
        hidePageTitle: true,
        enumMembersFormat: 'table',
        fileExtension: "mdx"
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "AKASHA Docs",
        items: [
          {
            href: "https://github.com/AKASHAorg/akasha-docs",
            label: "View on GitHub",
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
                label: "Telegram",
                href: "https://t.me/worldofethereum",
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
              {
                label: "GitHub",
                href: "https://github.com/AKASHAorg",
              },
              {
                label: "Docs GitHub",
                href: "https://github.com/AKASHAorg/akasha-docs",
              },
              {
                label: "Blog",
                href: "https://blog.akasha.org",
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} AKASHA Foundation`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

if (process.env['NODE_ENV'] === 'production' && !!config.themeConfig) {
    config.themeConfig.algolia = {
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
    }
}

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require("prism-react-renderer");
const { directiveDescriptor } = require("@graphql-markdown/helpers");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AKASHA Documentation",
  tagline: "Build your own application with AKASHA Core",
  url: "https://akasha-docs.pages.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  // @ts-ignore
  onBrokenAnchors: "ignore",
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
        id: "akasha-sdk-services",
        entryPoints: ["./akasha-core/libs/sdk/src/services.sdk.ts"],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/sdk/tsconfig.json",
        readme: "none",
        out: "./docs/data-fetching-and-mutations/sdk/services",
        entryFileName: "Services.md",
        name: "AKASHA SDK Services",
        categorizeByGroup: false,
        excludeInternal: true,
        hidePageTitle: true,
        hidePageHeader: true,
        fileExtension: ".md",
        flattenOutputFiles: true,
        sidebarLinks: {},
        sidebar: {
          label: "SDK Services",
        },
        enumMembersFormat: "table",
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        indexFormat: "table",
        membersWithOwnFile: [],
        navigationModel: {
          excludeFolders: true,
        },
        plugin: ["typedoc-plugin-merge-modules"],
        mergeModulesRenameDefaults: true,
        mergeModulesMergeMode: "module",
      },
    ],
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
                to: "/setup",
              },
              {
                label: "Extensions",
                to: "/extensions",
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
        copyright: `Copyright ©2015 - ${new Date().getFullYear()} AKASHA Foundation`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: [
          "bash",
          "diff",
          "graphql",
          "yaml",
          "json",
          "json5",
        ],
      },
    }),
};

if (process.env["NODE_ENV"] === "production" && !!config.themeConfig) {
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
    searchPagePath: "search",

    //... other Algolia params
  };
}

export default config;

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
        id: "akasha-sdk-main",
        name: "AKASHA Core SDK",
        entryPoints: [],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/sdk/tsconfig.json",
        readme: "./akasha-core/libs/sdk/README.md",
        out: "./docs/data-fetching-and-mutations/sdk",
        entryFileName: "_index_generated.md",
        fileExtension: ".md",
        mergeReadme: true,
        hidePageTitle: true,
        hidePageHeader: true,
        excludeInternal: true,
        flattenOutputFiles: true,
        categorizeByGroup: false,
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
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-sdk-services",
        name: "AKASHA Core SDK Services",
        entryPoints: [],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/sdk/tsconfig.json",
        readme: "./akasha-core/libs/sdk/README_SDK_SERVICES.md",
        out: "./docs/data-fetching-and-mutations/sdk/services",
        entryFileName: "Services.md",
        fileExtension: ".md",
        mergeReadme: true,
        hidePageTitle: true,
        hidePageHeader: true,
        excludeInternal: true,
        flattenOutputFiles: true,
        categorizeByGroup: false,
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
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-sdk-api",
        name: "AKASHA Core SDK API",
        entryPoints: [],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/sdk/tsconfig.json",
        readme: "./akasha-core/libs/sdk/README_SDK_API.md",
        out: "./docs/data-fetching-and-mutations/sdk/api",
        entryFileName: "API.md",
        fileExtension: ".md",
        mergeReadme: true,
        hidePageTitle: true,
        hidePageHeader: true,
        excludeInternal: true,
        flattenOutputFiles: true,
        categorizeByGroup: false,
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
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-hooks-custom",
        name: "AKASHA Core Custom Hooks",
        entryPoints: [],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/hooks/tsconfig.json",
        readme: "./akasha-core/libs/hooks/README.md",
        out: "./docs/data-fetching-and-mutations/hooks/custom-hooks",
        entryFileName: "index.md",
        fileExtension: ".md",
        mergeReadme: true,
        hidePageTitle: true,
        hidePageHeader: true,
        excludeInternal: true,
        flattenOutputFiles: true,
        categorizeByGroup: false,
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
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-hooks-generated",
        name: "AKASHA Core Apollo Hooks",
        entryPoints: [],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/hooks/tsconfig.json",
        readme: "./akasha-core/libs/hooks/README_GENERATED.md",
        out: "./docs/data-fetching-and-mutations/hooks/apollo-hooks",
        entryFileName: "index.md",
        fileExtension: ".md",
        mergeReadme: true,
        hidePageTitle: true,
        hidePageHeader: true,
        excludeInternal: true,
        flattenOutputFiles: true,
        categorizeByGroup: false,
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
    [
      "docusaurus-plugin-remote-content",
      {
        name: "extension-devkit-readme", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/AKASHAorg/extension-devkit/refs/heads/main/",
        outDir: "docs/devkit",
        documents: ["README.md"],
        modifyContent: (_, content) => {
          return {
            filename: "_devkit_readme.md",
            content,
          };
        },
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
        magicComments: [
          {
            className: "code-block-diff-add-line",
            line: "diff-add",
            block: { start: "diff-add-start", end: "diff-add-end" },
          },
          {
            className: "code-block-diff-remove-line",
            line: "diff-remove",
            block: { start: "diff-remove-start", end: "diff-remove-end" },
          },
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

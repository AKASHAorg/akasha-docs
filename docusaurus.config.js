// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const { directiveDescriptor } = require("@graphql-markdown/helpers");
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
        hidePageTitle: true,
        hidePageHeader: true,
        fileExtension: ".mdx",
        flattenOutputFiles: true,
        sidebarLinks: {},
        enumMembersFormat: 'table',
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
        sidebar: {
          categoryLabel: "SDK reference",
          position: 5,
        }
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "akasha-ui-hooks",
        entryPoints: [
          "./akasha-core/libs/hooks/src/generated/index.ts",
          "./akasha-core/libs/hooks/src/index.ts"
        ],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/hooks/tsconfig.json",
        readme: "none",
        entryFileName: "readme.md",
        out: "./docs/react-hooks/hooks",
        name: "Hooks List",
        fileExtension: '.md',
        flattenOutputFiles: true,
        enumMembersFormat: 'table',
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        indexFormat: "table",
        membersWithOwnFile: [],
        groupOrder: ["Functions", "*"],
        navigationModel: {
          excludeFolders: true,
          excludeGroups: true,
        },
        plugin: ["typedoc-plugin-merge-modules"],
        mergeModulesRenameDefaults: true,
        mergeModulesMergeMode: "project",
        textContentMappings: {
          "kind.function.plural": "Hooks",
          "kind.function.singular": "Hook",
        }
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "ui-events-bus",
        entryPoints: ["./akasha-core/libs/typings/src/ui/ui-events.ts"],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/typings/tsconfig.json",
        out: "./docs/event-bus/ui-events",
        name: "UI Events",
        hidePageHeader: true,
        hidePageTitle: true,
        flattenOutputFiles: true,
        // the output result is the same because readme.md is the same as index.md
        // but in this case it's clearer where we are linking
        entryFileName: 'readme.md',
        readme: './docs/event-bus/_ui_event_bus.md',
        mergeReadme: true,
        enumMembersFormat: 'table',
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        membersWithOwnFile: [],
        groupOrder: ["Type Aliases", "*"],
        navigationModel: {
          excludeFolders: true,
        },
        plugin: ["typedoc-plugin-merge-modules"],
        mergeModulesRenameDefaults: true,
        mergeModulesMergeMode: "project",
      }
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "global-events-bus",
        entryPoints: ["./akasha-core/libs/sdk/src/common/event-bus.ts"],
        entryPointStrategy: "expand",
        tsconfig: "./akasha-core/libs/sdk/tsconfig.json",
        out: "./docs/event-bus/global-events",
        name: "Global Events",
        hidePageHeader: true,
        hidePageTitle: true,
        flattenOutputFiles: true,
        // the output result is the same because readme.md is the same as index.md
        // but in this case it's clearer where we are linking
        entryFileName: 'readme.md',
        readme: './docs/event-bus/_global_event_bus.md',
        mergeReadme: true,
        enumMembersFormat: 'table',
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        membersWithOwnFile: [],
        groupOrder: ["Type Aliases", "*"],
        navigationModel: {
          excludeFolders: true,
        },
        plugin: ["typedoc-plugin-merge-modules"],
        mergeModulesRenameDefaults: true,
        mergeModulesMergeMode: "project",
      }
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "design-system-core",
        entryPoints: ["./akasha-core/libs/design-system-core/src/components/*"],
        entryPointStrategy: "expand",
        exclude: ["**/*+(.test|.spec).tsx"],
        tsconfig: "./akasha-core/libs/design-system-core/tsconfig.json",
        out: "./docs/design-system/design-system-core",
        name: "Design System Core",
        hidePageTitle: true,
        hidePageHeader: true,
        flattenOutputFiles: true,
        sidebarLinks: {},
        enumMembersFormat: 'table',
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        indexFormat: "table",
        membersWithOwnFile: [],
        groupOrder: ["Classes", "Functions", "Type Aliases", "*"],
        // entryFileName is required because there is a link
        // in the design-system-components to the readme file
        entryFileName: "README.md",
        navigationModel: {
          excludeFolders: true,
        },
        plugin: ["typedoc-plugin-merge-modules"],
        mergeModulesRenameDefaults: true,
        mergeModulesMergeMode: "module",
        textContentMappings: {
          "kind.function.plural": "Components",
          "kind.class.singular": "Class Component",
          "kind.class.plural": "Class Components",
          "kind.typeAlias.singular": "Prop",
          "kind.typeAlias.plural": "Props",
        }
      }
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "design-system-components",
        entryPoints: ["./akasha-core/libs/design-system-components/src/components/*"],
        entryPointStrategy: "expand",
        exclude: ["**/*+(.test|.spec).tsx"],
        tsconfig: "./akasha-core/libs/design-system-components/tsconfig.json",
        out: "./docs/design-system/design-system-components",
        name: "Design System Components",
        hidePageTitle: true,
        hidePageHeader: true,
        flattenOutputFiles: true,
        sidebarLinks: {},
        enumMembersFormat: 'table',
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        indexFormat: "table",
        membersWithOwnFile: [],
        groupOrder: ["Classes", "Functions", "Type Aliases", "*"],
        navigationModel: {
          excludeFolders: true,
        },
        plugin: ["typedoc-plugin-merge-modules"],
        mergeModulesRenameDefaults: true,
        mergeModulesMergeMode: "module",
        textContentMappings: {
          "kind.function.plural": "Components",
          "kind.class.singular": "Class Component",
          "kind.class.plural": "Class Components",
          "kind.typeAlias.singular": "Prop",
          "kind.typeAlias.plural": "Props",
        }
      }
    ],
    [
      "@graphql-markdown/docusaurus",
      /** @type {import('@graphql-markdown/types').ConfigOptions} */
      {
        id: "composedb-models",
        schema: "./akasha-core/libs/composedb/lib/schema.graphql",
        rootPath: "./docs",
        baseURL: "composedb-models",
        // homepage: "./docs/composedb-models/index.md",
        runOnBuild: true,
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader"
        },
        groupByDirective: true,
        enumMembersFormat: 'table',
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        propertiesFormat: "table",
        indexFormat: "table",
        membersWithOwnFile: [],
        navigationModel: {
          excludeFolders: true,
        },
        printTypeOptions: {
          hierachy: 'api',
          deprecated: 'skip'
        }
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
                label: "Glossary",
                to: "/glossary"
              },
              {
                label: "Extensions",
                to: "/extensions",
              }
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
        additionalLanguages: ['bash', 'diff', 'graphql', 'yaml', 'json', 'json5'],
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

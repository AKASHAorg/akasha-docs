# Extension Tutorials
The following section provides a step-by-step guide on how to create different types of extensions using the AKASHA Core. It covers creating necessary folders, initializing the project, and running relevant Yarn commands.

## Bootstrapping a new extension

:::info
Before we begin make sure you have already followed the [Dev QuickStart](../dev-quickstart.md) guide
:::

The extensions should be created in the `extensions` folder which is in the root of the AKASHA Core project. So if you want to bootstrap a new app you should do it by creating a new folder in `extensions/apps`, for widgets in `extensions/widgets` and for plugins in `extensions/plugins`.

Start by creating the folder based on what you want to build.

For example to bootstrap a plugin run `mkdir -p extensions/plugins/my-awesome-plugin` from the root of the AKASHA Core project.

Change directory to the newly created folder and run `yarn init`

This command will create a `package.json` which we will modify it for our needs:

```json5 {3-4,6-7} showLineNumbers title="package.json"
{
  // name is important at the publishing step. for now it can be anything.
  "name": "my-awesome-extension"
  "version": "1.0.0",
  "packageManager": "yarn@4.1.1",
  "author": "",
  "type": "module"
}
```

:::caution
The extension name in the [Extension Publishing](../extension-publishing/) step should be the same as the package name you set here.
:::


In order to maintain consistency between different apps, we recommend creating a similar top level folder structure:

```treeview title="Basic App Directory Structure"
├── src
│   ├── components
│   │   ├── app.tsx // root React component of your app
│   │   ├── index.tsx // single-spa-react lifecycle exports
│   └── index.tsx // registration function export
├── package.json
├── project.json
├── README.md
├── tsconfig.json
├── yarn.lock
└── webpack.config.js
```

#### Next, let's setup the build system.

### Setting up NX
NX is used as the build system for the AKASHA Core monorepository.
To set it up create a `project.json` file in the root of your app with the following content:

```json5
{
  "name": "my-awesome-extension",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "extensions/{extensionType}/my-awesome-extension",
  "projectType": "application",
  "targets": {
    "prepare": {
      "dependsOn": [
        "@akashaorg/ui-awf-hooks:build",
        "@akashaorg/design-system-core:prepare",
        "@akashaorg/design-system-components:prepare",
        "@akashaorg/awf-sdk:build",
        "@akashaorg/ui-lib-extensions:prepare",
        "@akashaorg/typings:prepare"
      ],
      "executor": "nx:run-commands",
      "options": {
        "cwd": "extensions/{extensionType}/my-awesome-extension",
        "command": "tsc --build"
      }
    },
    "build": {
      "dependsOn": ["prepare"],
      "executor": "nx:run-commands",
      "options": {
        "cwd": "extensions/{extensionType}/my-awesome-extension",
        "command": "webpack --config webpack.config.cjs"
      },
      "outputs": [
        "{projectRoot}/lib",
        "{workspaceRoot}/dist/{extensionType}/my-awesome-extension"
      ]
    }
  },
  "tags": ["scope:extension", "type:{extensionType}"]
}
```

:::info
Please adjust the following fields with your actual paths.
`sourceRoot`, `targets.prepare.options.cwd`, `targets.build.options.cwd` and replace the `{extensionType}` in `targets.build.outputs[1]` according to what you are building: `apps`, `widgets` or `plugins`.
Finally, adjust the `tags` field with the replacing the `{extensionType}` accordingly.
:::


### Setting Webpack
As you already saw in the previous step, AKASHA Core is using Webpack as module bundler.

To set it up you will have to create a new file `webpack.config.cjs` in the root folder of your extension:

```js
const path = require('path');
const baseConfig = require('../../webpack.config');

module.exports = Object.assign(baseConfig, {
  context: path.resolve(__dirname),
  output: Object.assign(baseConfig.output, {
    path: path.resolve(__dirname, '../../../dist/{extensionType}/my-awesome-extension'),
    publicPath: 'auto',
  }),
});
```

:::info
Again, don't forget to replace `{extensionType}` in `output.path` with one of `apps`, `widgets` or `plugins`
:::

#### Typescript

Typescript is the easiest to setup. Create a new file `tsconfig.json` and paste the following:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib",
    "rootDir": "./src"
  },

  "include": ["./src/**/*"]
}
```

Congrats! The extension is now bootstrapped!
Of course, there is no code to execute, yet.

Event if you create some components, it will not show them anywhere. This is because AppLoader is not aware of the existance of your extension.
Let's fix this; in development mode, we have provided a way in which you can tell AppLoader that your extension exists and it should be loaded from localhost.

### World Config and Extension Overrides

:::caution
This section is still a work in progress. Expect some flows to change.
:::

A deployed instance of the AKASHA Core is actually a [world](../glossary.md#world). Worlds contains collection of extensions installed by default and uninstallable by the users.
This collection of extensions is defined in the world config. The akasha.world instance has it's config file defined [here](https://github.com/AKASHAorg/akasha-core/blob/next/worlds/akasha.world/src/index.ts)

The most important parts of that file are:

```ts
if (__DEV__ || __LOAD_LOCAL_SOURCES__) {
  registryOverrides = (await import('./registry-overrides')).default;
}
```
So if `__DEV__` global variable is true (equivalent to `process.env.NODE_ENV`) it will import some registryOverrides (no need to know what they are yet).

and in the next lines:

```ts {19} showLineNumbers title="AKASHA World config"
 const loaderConfig: WorldConfig = {
    title: 'AKASHA World',
    worldIcon: {
      basePath: '/icons/world/',
      darkModeSuffix: '_dark',
      extension: '.png',
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    layout: '@akashaorg/ui-widget-layout',
    homepageApp: '@akashaorg/app-antenna',
    defaultApps: [
      // ..some app names
    ],
    defaultWidgets: [
      //... some widget names
    ],
    registryOverrides,
    socialLinks: [
      // ...
    ],
  };
```
Notice that those `registryOverrides` are passed down to `AppLoader`.

Internally the AppLoader will also check if this property is present in the config and will try to load the extensions from there, instead of requesting it from the registry.

So in order to specify from where to load an extension, we must add a new entry to the `registry-overrides.ts` file like this:

```ts title="registry-overrides.ts"

const overrides = [
  {
    name: 'my-awesome-extension',
    integrationType: AkashaAppApplicationType.App, // change this to reflect the kind of extension you are creating
    sources: [`${origin}/{extensionType}/my-awesome-extension`],
    ...missingRequiredFields // these are not important in development
  }
  // ...the already existing overrides
]
```

Now going back to the world config, we can specify to load the extension as installed by default.

If you are creating an app, you can add it to the `defaultApps` array and if you are developing a widget, add it to the `defaultWidgets`.

That's it. Now the AppLoader will know to loaded as default and also where to load it from.

:::caution
Your extension is not ready to be built, yet. Please continue to one of the tutorials which will guide you on how to create an extension.
:::

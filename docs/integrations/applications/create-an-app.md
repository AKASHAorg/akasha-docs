---
sidebar_position: 1
---

# Create an application

Applications are the core of AKASHA. They are the building blocks that powers a [World](../../glossary.md#world).

## App Folder Structure

In order to maintain consistency between different apps, we recommend creating a similar top level folder structure:

```treeview title='Basic App Directory Structure'
├── src
│   ├── components
│   │   ├── app.tsx // root component of your app
│   │   ├── index.tsx // single-spa-react lifecycle exports
│   └── index.tsx // registration function export
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock
└── webpack.config.js
```

## Loading/Unloading Apps

Before loading and unloading apps, they must be registered in the app-loader module.

// @TODO: describe how to register apps

## Registration Object Interface

Every application is required to export a `register` function that will be called by the App Loader. It's recommended to be exported from an `index.ts` file in the `src` folder of your app.

Minimum required properties of the returned object in order to be loaded are:

```typescript title=src/index.ts
export default register (registrationOptions) {
  return {
    mountsIn: 'string',
    loadingFn: () => import('my-application'), // must return a promise
    activeWhen: (location, pathToActiveWhen) => pathToActiveWhen('/my-app-route')(location), // must be a boolean
    routes: {}, // other apps can use these routes to navigate to this app
    menuItems: {} // used by the sidebar widget to generate a menu
  };
}
```

:::tip ReactJS

We only support [React](https://reactjs.org/) as the UI library for now.

:::

### Creating a basic `Hello Akasha World` app

From the root of the repository you have cloned in the [quickstart guide](/dev-quickstart):

**1. Create a folder in `ui/apps/hello-ethereum-world`**

```bash title="create the application folder"
$ mkdir ui/apps/hello-ethereum-world
```

**2. Change directory to that folder**

```bash
 $ cd ui/apps/hello-ethereum-world
```

**3. Run `yarn init` and complete the prompts**

```bash
$ yarn init
yarn init v1.22.18
question name (hello-ethereum-world): @test/hello-ethereum-world
question version (1.0.0): (empty)
question description: A simple hello world app
question entry point (index.js): lib/index.js
question repository url: (empty)
question author: Etherean
question license (MIT): (empty)
question private: true
```

**4 Edit package.json to add the following fields:**

```json title="editing /ui/apps/hello-ethereum-world/package.json"
  "scripts": {
    "build": "tsc --build",
    "pack": "NODE_OPTIONS='--max-old-space-size=4096' webpack --config webpack.config.js",
    "postpack": "copyfiles -f ./dist/* ../../build/apps/auth-app",
  },
  "dependencies": {
    "single-spa-react": "4.6.0"
  },
  "devDependencies": {
    "@types/react": "17.0.20",
    "@types/react-dom": "17.0.9"
  },
  "peerDependencies": {
    "react": "17.0.2",
    "react-dom": "17.0.2",
  }
```

**5. create the webpack configuration file**

```js title="create /ui/apps/hello-ethereum-world/webpack.config.js"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require("../../webpack.config");

module.exports = Object.assign(baseConfig, {
  context: path.resolve(__dirname),
  output: Object.assign(baseConfig.output, {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  }),
});
```

**6. create the `src` and `src/components` folders**

```bash title="creating ui/apps/hello-ethereum-world/src"
$ mkdir -p src/components
```

**7. create the `src/index.jsx` file with the following contents**

```jsx title="creating ui/apps/hello-ethereum-world/src/index.jsx"
import "systemjs-webpack-interop/auto-public-path";

export const register = (options) => ({
  activeWhen: (location, pathToActiveWhen) => {
    return pathToActiveWhen(rootRoute)(location);
  },
  loadingFn: () => import("./components"),
  mountsIn: opts.layoutConfig?.pluginSlotId,
  logo: { type: LogoTypeSource.ICON, value: "appAkasha" },
  i18nNamespace: ["app-hello-ethereum-world"],
});
```

**8. create the `src/components/index.jsx` file with the following contents**

```jsx title="creating ui/apps/hello-ethereum-world/src/components/index.jsx"
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./app";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary: (error, errorInfo, props) => {
    if (props.logger) {
      props.logger.error(`${JSON.stringify(error)}, ${errorInfo}`);
    }
    return "Something went wrong";
  },
});

export const bootstrap = reactLifecycles.bootstrap;

export const mount = reactLifecycles.mount;

export const unmount = reactLifecycles.unmount;
```

**9. Create a basic React component in `src/components/app.jsx` file**

```jsx title="creating ui/apps/hello-ethereum-world/src/components/app.jsx"
import * as React from "react";

const HelloEthereumWorldApp = (props) => {
  return <div>Hello Akasha World</div>;
};

export default HelloEthereumWorldApp;
```

### Repository setup for the newly created app

**1. Repo setup: nx, registryOverrides, examples/ethereum.world/src/index update**

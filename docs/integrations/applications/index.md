---
sidebar_position: 1
sidebar_label: Apps Overview
---

# Applications Overview

Applications are the main building blocks of a world and it can be seen as a standalone SPA (Single Page Application) except that they are loaded, mounted and unmounted by the underlying system (App Loader) which is a thin layer on top of the [single-spa](https://single-spa.js.org/) library.

Some of the examples of apps that are available in Ethereum World are:
 - Social App
 - Authentication App
 - Search App
 - Profile App

## App Folder Structure
In order to maintain consistency between different apps, we recommend creating a similar top level folder structure:

```title=Basic App Directory Structure
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



## Registration Object Interface

Every application is required to export a `register` function that will be called by the App Loader. It's recommended to be exported from an `index.ts` file in the `src` folder of your app.

```typescript title=src/index.ts
export default register (registrationOptions) {
  //
  return {
    //
  };
}

```

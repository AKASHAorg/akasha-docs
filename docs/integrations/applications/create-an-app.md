---
sidebar_position: 2
---

# Create an application

Applications are the core of AKASHA. They are the building blocks that powers a world (link to world definition here).

## Loading/Unloading Apps

Before loading and unloading apps, they must be registered in the app-loader module.

// @TODO: describe how to register apps

## Registration Object Interface

Every application is required to export a `register` function that will be called by the App Loader. It's recommended to be exported from an `index.tsx` file in the `src` folder of your app.

:::tip ReactJS

We only support [React](https://reactjs.org/) as the UI library for now.

:::

### Creating a basic `@akashaorg/app-example` app

Run the following command from the root of the repository you have cloned in the [quickstart guide](/dev-quickstart):

```bash
$ npx create-react-app @akashaorg/app-example --template file:./tools/cra-template-akasha-typescript
```

or

```bash
$ yarn create react-app @akashaorg/app-example --template file:./tools/cra-template-akasha-typescript
```

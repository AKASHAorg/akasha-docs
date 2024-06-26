---
sidebar_position: 1
sidebar_label: Apps Overview
---

# Applications Overview

An application is a micro-frontend that complements and extends your web3 social network experience. Applications are the main building blocks of a world and it can be seen as a standalone SPA's (Single Page Application) except that they 
are loaded, mounted and unmounted by the underlying system `(App Loader)` which is a thin layer built on top of the [single-spa](https://single-spa.js.org/) microfrontends library.

Some of default apps that are available in Akasha World include:

- Antenna
- Authentication
- Search
- Profile
- Settings

## Interface

To ensure compatibility with AKASHA Core and our loading system, applications are required to export a `register function`. For instance, in the `antenna` the main
[index](https://github.com/AKASHAorg/akasha-core/blob/next/extensions/apps/antenna/src/index.tsx), there is a named export `register` added which can also be modified to suit your needs.

::::info
The register function should be synchronous and defined as a named export.
::::

The register function takes only one argument which is an object of the type [IntegrationRegistrationOptions](https://github.com/AKASHAorg/akasha-core/blob/next/libs/typings/src/ui/app-loader.ts). The returned value of the `register` function should be an object with the [IAppConfig](https://github.com/AKASHAorg/akasha-core/blob/next/libs/typings/src/ui/apps.ts) type. The required parameters are:

**[loadingFn](../loading-function)** - defines how the application is mounted/unmounted by importing the single-spa-react lifecycle methods.

**mountsIn** -> the slot id of the area (defined in the layout widget) on which the app mounts.

**menuItems** -> used by the Sidebar Widget to construct the menu.

Optionally apps (and widgets) can also define
[extensions](../extensions) and
[contentBlocks](../content-blocks) properties which are explained in their own docs.

## Application's layout and the mounting point.

Applications have a specific mounting area that is defined by the layout widget. This configuration is then passed down to app register function's `opts` parameter as `layoutConfig`. The layout Widhet used in the Akasha World defines the application's mount point in the central area, right below the topbar. (More details [here](../layout-widget))

Only one app can be loaded at any given time based on the URL's pathname.
Example:
- url: `https://localhost:8181/example-app`
  - -> will load the `example-app`
- url: `https://localhost:8181/@akashaorg/app-settings-ewa`
  - -> will load the `@akashaorg/app-settings-ewa`

## Plugins

Apps and Widgets can also provide additional functionalities
through [plugins](../plugins). Plugins are not rendered
into the view and their purpose is to allow other apps to implement additional (domain specific) logic provided. Some examples of plugins include:

- a custom profile app can expose an api to fetch or update a profile
- a plugin that saves data locally

## Initialization and order of loading

Initialization and registration is done by the `app-loader` in the following order:

- initialize plugins (calls the `getPlugin` function of every app)
- register `layout-widget` (calls the `register` method on the layout-widget)
- initialize apps and widgets (calls the `initialize` method on the apps and widgets - if provided)
- register apps and widgets (calls the `register` method on the apps and widgets)

::::caution
The plugins are initialized first so they are already available in the `opts` param of the register function and in the root component of the apps and widgets. However, the plugin you are trying to access can be provided by an app that is not installed so additional fallback logic should be added to avoid breaking your app.
::::
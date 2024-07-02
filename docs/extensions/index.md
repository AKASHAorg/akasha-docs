---
sidebar_position: 3
sidebar_label: Extensions
---

# Extensions Overview

The functionality of a world is split into multiple individual, semi-independent micro-apps ([micro-frontends](https://micro-frontends.org/)) that are developed by independent teams and submitted to the AKASHA Core's integration registry.

Extensions are available in the **Extensions App**, a digital distribution service or marketplace that allows Ethereans to browse and manage them (install, uninstall, activate or deactivate).

We believe that these extensions done by and for the Ethereum community will greatly impact how humans interact, create and exchange information. You can contribute and bring your ideas in Akasha World by creating as many extensions as you want, publishing them in the Extensions App and making them available to a growing community of users.

### What can an extension do?
Good examples, though not yet available, could be:
- an **Events** App - using [Apps](./applications.md)
- an **Activity Overview** Widget - using [Widgets](./widgets.md)
- upvoting or downvoting a comment - using [ExtensionPoints](./extension_points.md)
- turning a post into an NFT - using [ContentBlocks](./content_blocks.md)
- an API to a 3rd party service - using [Plugins](./plugins.md)

So, there are multiple ways in which you can enrich the functionality of a world

### What's the difference between Apps, Widget, ContentBlock, etc?
Here is a table with main differences between different types of extensions

|                                | Apps |     Widgets     | ExtensionPoints |  ContentBlocks | Plugins |
|--------------------------------|:----:|:---------------:|:---------------:|:--------------:|:-------:|
| Installable                    | yes  |     yes         | no<sup>1</sup>  | no<sup>1</sup> |   yes   |
| Can have subroutes             | yes  | no<sup>2</sup>  |        no       |       no       |   no    |
| Always shown/loaded            | no   | yes<sup>3</sup> |        no       |       no       |   yes   |
| Shown/usable in the editor     | no   |   no            |        no       |      yes       |   yes   |

- <sup>1</sup> They are 'provided' by the Apps
- <sup>2</sup> It can react to a route change (changing the view based on current route)
- <sup>3</sup> Not visible on mobile view. You can also choose to display it on certain pages/routes


## How it works
Extensions are packed individually as javascript modules and loaded at runtime based on the current route.
This global routing is handled automatically by the underlying single-spa library which ensures that on every route change an activityFunction is called and in case that it no longer matches (in other words returns false) it will unmount the extension and mount another one if necessary.

In the case of apps, this matching function internally called by the [AppLoader](https://github.com/AKASHAorg/akasha-core/tree/next/libs/app-loader) library which is a wrapper over the single-spa.
In the case of widgets, this matching function can be provided by the config of the widget - if there is a need for a contextual widget
For example, the [MiniProfileWidget](https://github.com/AKASHAorg/akasha-core/blob/next/extensions/widgets/mini-profile/src/index.ts) config contains the `activeWhen` property to control the route on which this widget should mount.

Extensions - which are packed as javascript modules - have to be served from a webserver (or a gateway in case of the IPFS network) and later fetched and imported by the AppLoader (more specifically using [SystemJS](https://github.com/systemjs/systemjs) dynamic module loader).

### The Registration part
Before rendering the extensions into the view we need first to get information about what, where and when to render them.
To do this, all extensions must export a function called `register` which will be called by the AppLoader and the configuration object returned from that function will be stored (in memory) for the lifetime of the session.

After the registration function is called and the config object is retrieved, the AppLoader will prepare the rest of the steps:
- register extension into the single-spa
- register the menuItems - which can later be consumed by the extensions
- register the content-blocks - if provided
- register the extension-points - if provided

### The Bootstrapping, Mounting and Unmounting part

The lifecycles functions through which single-spa library handles the registered extensions is documented [here](https://single-spa.js.org/docs/building-applications#registered-application-lifecycle).

TL;DR is that the single-spa also provides framework-specific adapter libraries and for React there is a helper library called [single-spa-react](https://single-spa.js.org/docs/ecosystem-react).

Using this helper library we can wrap the root component of the extension and export the lifecycles. The required lifecycle functions are `bootstrap`, `mount` and `unmount`.

These lifecycles must be provided to the AppLoader via the config object's `loadingFn` property which is an async function that dynamically imports the lifecycles.

For example:
```tsx title="MyRootReactComponent.tsx"
import * as React from 'react';
import ReactDOMClient from 'react-doc/client';

const MyRootComponent = () => {
  return <div>Hello World</div>
}

const lifecycles = singleSpaReact({
  React, // required
  ReactDOMClient, // required
  rootComponent: MyRootComponent // required
  errorBoundary(err, errInfo, props) {
    return (
      <div>
        Something went terribly wrong and this error boundary
        saved the entire World from a crash
      </div>
    )
  }
});

// there 3 lifecycle functions are required
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
```
For additional singleSpaReact options please visit [single-spa-react options](https://single-spa.js.org/docs/ecosystem-react#options) page.


then in the config object - which is returned from the registration function the `loadingFn` property should import the file:
```ts title="index.ts"

export function register() {
  return {
    // the configuration object
    // ... other config options
    loadingFn: () => import ('./myRootReactComponent')
  }
}

```

This allows the sigle-spa library to only load the source code of the extension when first requested and avoid downloading all
the source-code of extensions upfront (code-splitting) while keeping the entry file (the file that exports the registration function) as small as possible.

:::info
This pattern is used for almost all of the dynamic entities such as apps, widgets, content-blocks and extension-points
:::


### Routing

Besides the routing provided by the single-spa, extensions can also have an 'internal' routing using the library of choice. For example, the extensions that are developed by AKASHA are using [TanStack Router](https://tanstack.com/router/latest);

For example, when navigating to https://localhost:8131/@akashaorg/app-antenna/antenna the following apps and widgets will be loaded:

```
URL: 'https://localhost:8131/[ApplicationName]/[Subroute]'
ApplicationName: '@akashaorg/app-antenna' -> routing handled by single-spa
  Subroute: 'antenna' -> this will be handled by the internal router

Widgets:
  - '@akashaorg/ui-widget-layout' // the layout
  - '@akashaorg/ui-widget-sidebar' // the sidebar
  - '@akashaorg/ui-widget-topbar' // the topbar
  - ... other widgets that matches the route
```

:::info
It is highly recommended to only have an internal router for apps. Widgets are considered to be always mounted and not to change their content based on the route.
:::

### The Installing and Uninstalling part
The extensions can be discovered, installed and uninstalled in the [Extensions App](https://github.com/AKASHAorg/akasha-core/tree/next/extensions/apps/extensions).

The installation process for extensions begins with the [app release model](../composedb-models/types/interfaces/akasha-app-release-interface.mdx), which includes a sources field specifying the locations (URLs or file paths) from where the extension scripts should be loaded.

The AppLoader will import the sources and then proceed to the registration part.

The release info will be also saved client-side using the IndexedDB api.

In the uninstallation process, the app-loader unloads the application and the entry of the release info is removed from IndexedDB.

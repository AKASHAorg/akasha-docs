---
sidebar_position: 3
sidebar_label: Extensions
---

# Extensions

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

|                                | Apps | Widgets | ExtensionPoints | ContentBlocks | Plugins |
|--------------------------------|:----:|:-------:|:---------------:|:-------------:|:-------:|
| Installable                    | yes  |   yes   |        no[^1]   |      no[^1]   |   yes   |
| Can have subroutes             | yes  |  no[^2] |        no       |      no       |   no    |
| Always shown/loaded            | no   | yes[^3] |        no       |      no       |   yes   |
| Shown/usable in the editor     | no   |   no    |        no       |     yes       |   yes   |

[^3]: They are 'provided' by the Apps
[^2]: It can react to a route change (changing the view based on current route)
[^1]: Not visible on mobile view. You can also choose to display it on certain pages/routes



<!-- Currently we have 2 different types of integrations:

- [Apps](applications.md)
- [Widgets](widgets.md) -->



<!-- ## How it works

Integrations are loaded/unloaded by the [app-loader module](https://github.com/AKASHAorg/akasha-core/blob/next/libs/app-loader/README.md) which is an abstraction layer over the [single-spa](https://single-spa.js.org/) library.

Minimum requirement for an integration to be loaded is to export a `register` function that will be called by the App Loader. It is recommended to be exported from an `index.ts` file in the `src` folder of your app.
For more information about the registration object interface, see the [Registration Object Interface](./applications#registration-object-interface) section. -->

---
sidebar_position: 2
sidebar_label: Integrations Overview
---

# Integrations

The functionality of a world is split into multiple individual, semi-independent micro-apps ([micro-frontends](https://micro-frontends.org/)) that are developed by independent teams and submitted to the AKASHA's integration registry smart contract.

Good examples, still not available, could be upvoting or downvoting a comment, turning a post into an NFT or sending tips.

Integrations are available in the **Integration Center**, a digital distribution service or marketplace that allows Ethereans to browse and manage them (install, uninstall, activate or deactivate).

We believe that these integrations done by and for the Ethereum community will greatly impact how humans interact, create and exchange information. You can contribute and bring your ideas in Ethereum World by creating as many integrations as you want, publishing them in the Integration Center and making them available to a growing community of users.

Currently we have 2 different types of integrations:

- [Apps](applications)
- [Widgets](widgets)

## How it works

Integrations are loaded/unloaded by the [app-loader module](https://github.com/AKASHAorg/akasha-core/tree/next/ui/app-loader) which is an abstraction layer over the [single-spa](https://single-spa.js.org/) library.

Minimum requirement for an integration to be loaded is to export a `register` function that will be called by the App Loader. It's recommended to be exported from an `index.ts` file in the `src` folder of your app.
For more information about the registration object interface, see the [Registration Object Interface](./applications/index.md#registration-object-interface) section.

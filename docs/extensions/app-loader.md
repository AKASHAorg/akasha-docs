---
sidebar_position: 55
sidebar_label: App Loader
---

# App Loader

App loader is the engine behind the whole UI architecture. It is a wrapper over the [single-spa](https://single-spa.js.org/) library which acts like a router between microfrontends.

The `rootComponent` is the primary function for mounting the view. It is required to be defined for each of the AKASHA Core's micro-frontend type:

- application
- widget
- extension-point
- content-block

Single-spa library (which is implemented under the hood) handles these micro-frontends through some lifecycle methods:

- bootstrap
- mount
- unmount
- update (optional)

::::

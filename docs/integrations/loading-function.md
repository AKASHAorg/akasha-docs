---
sidebar_position: 5
sidebar_label: Loading Function
---

# Loading Function

The `loadingFn` is the primary function for mounting the view. It is required to be defined for each of the AKASHA Core's micro-frontend type:

- application
- widget
- extension-point
- content-block

Single-spa library (which is implemented under the hood) handles these micro-frontends through some lifecycle methods:

- bootstrap
- mount
- unmount
- update (optional)

::::info
The `update` lifecycle method is not currently used in this project.

The loading function should return a Promise which when resolved, returns these lifecycle hooks.

For React, and other popular ui libraries, single-spa provides adapter libraries to automatically call the rendering functions of these ui libs. For React, it's called `single-spa-react`. If you are interested to dive deeper, you can check their [docs](https://single-spa.js.org/docs/getting-started-overview)
::::
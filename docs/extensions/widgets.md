---
sidebar_position: 2
sidebar_label: Widgets Overview
---

# Widgets Overview

A widget is a small functional unit that can be reused across multiple pages/apps. It usually covers very specific functionalities like displaying relevant information or allowing to perform common actions.

A widget cannot have its own routes, hence you cannot navigate to a widget. Widgets are meant to not change or unmount when the route changes however there is no restriction for this and the interface allows [contextual widgets](#contextual-widgets).

Widgets are mounted only in specific areas as defined by the [Layout Widget](/integrations/layout-widget) (which is also a widget) and some areas may be hidden on certain viewports/screen sizes. For example the widget area in the current implementation of the Layout Widget is hidden on mobile devices.

Beside the central area which is used by the apps, there are other sections in the layout that can be used by widget. As an example, the sidebar, the top bar and the cards on the right of the screen are all widgets.

Examples of widgets are:

- `Trending` widget showing latest profiles and trending topics
- `Topbar` widget showing the World logo and buttons for navigation, authentication and sidebar toggle.
- `Mini Profile` widget which shows brief overview of the beam author's profile on the full beam page

## Interface

The overall structure and interface of the widget is similar to an app. Widgets should export (named) a `register` function which returns an object with two required properties:

```tsx
export const register = () => {
  return {
    loadingFn: () => importPromise,
    mountsIn: string,
  };
};
```

**[loadingFn](../loading-function)** - defines how the application is mounted/unmounted by importing the single-spa-react lifecycle methods.

**mountsIn** -> the slot id of the area (defined in the layout widget) on which the app mounts.

## Contextual widgets

Route based mounting of a widget is possible using the optional `activeWhen` property

```tsx
export const register = () => {
  return {
    ...
    activeWhen: (location, pathToActiveWhen) => {
      return pathToActiveWhen('/some/path')(location);
    }
  }
}
```

The second parameter of `activeWhen` is a utility function. This utility function converts a URL path into an activity function which when called with the current Location, returns a boolean.
The path that is passed to `pathToActiveWhen` can also contain dynamic values.

Example:

```
<!-- dynamic values -->
pathToActiveWhen(/users/:userId/profile)
✅ https://app.com/users/123/profile
✅ https://app.com/users/123/profile/sub-profile/
🚫 https://app.com/users//profile/sub-profile/
🚫 https://app.com/users/profile/sub-profile/

<!-- multiple paths -->
pathToActiveWhen(['/some/path/1', '/app1'])
✅ https://app.com/some/path/1
✅ https://app.com/app1/anything/everything
🚫 https://app.com/other/app1
🚫 https://app.com/some/1
```

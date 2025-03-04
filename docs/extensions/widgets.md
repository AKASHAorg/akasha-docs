---
sidebar_position: 52
sidebar_label: Widgets
---

# Widgets

A widget is a small functional unit that can be reused across multiple pages/apps. It usually covers very specific functionalities like displaying relevant information or allowing to perform common actions.

A widget cannot have its own routes, hence you cannot navigate to a widget. Widgets are meant to not change or unmount when the route changes however there is no restriction for this and the interface allows [contextual widgets](#contextual-widgets).

Widgets are mounted only in specific areas as defined by the [Layout Widget](../layout-widget.md) (which is also a widget because it should be rendered on every page) and some areas may be hidden on certain viewports/screen sizes. For example the widget area in the current implementation of the Layout Widget is hidden on mobile devices.

Beside the central area which is used by the apps, there are other sections in the layout that can be used by widget. As an example, the sidebar, the top bar and the cards on the right of the screen are all widgets.

Examples of widgets are:

- `Trending` widget showing latest profiles and trending topics
- `Topbar` widget showing the World logo and buttons for navigation, authentication and sidebar toggle.
- `Mini Profile` widget which shows brief overview of the beam author's profile on the full beam page

## Registration
Widget registration follows the same steps as any extension registration which is documented [here](./index.md#the-registration-part)

::::info
The register function must be synchronous and defined as a named export.
::::

The register function takes only one argument which is an object of the type [IntegrationRegistrationOptions](https://github.com/AKASHAorg/akasha-core/blob/next/libs/typings/src/ui/app-loader.ts).

## Configuration object interface

The config object returned has the [WidgetInterface](https://github.com/AKASHAorg/akasha-core/blob/next/libs/typings/src/ui/widgets.ts#L17-L19) type. The required parameters are:

```tsx
export const register = () => {
  return {
    rootComponent: () => importPromise,
    mountsIn: string,
  };
};
```

**[rootComponent](./app-loader.md)** - React component importing function.

**mountsIn** -> the slot id of the area (defined in the layout widget) on which the widget mounts.

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
`activeWhen` property can be a string, a function or an array of strings and functions:

`
  activeWhen: '/users'
  // or
  activeWhen: ['/user', '/users/:userId']
  // or
  activeWhen: (location, pathToActiveWhen) => pathToActiveWhen('/user')(location)
  // or
  activeWhen: [
    '/user',
    (location, pathToActiveWhen) => pathToActiveWhen('/users/my-user-id')(location)
  ]
`

`activeWhen` property also supports dynamic values.

Example:

```
<!-- dynamic values -->
pathToActiveWhen(/users/:userId/profile)
✅ https://app.com/users/123/profile
✅ https://app.com/users/123/profile/sub-profile/
🚫 https://app.com/users/profile/sub-profile/
🚫 https://app.com/users/profile/sub-profile/
```
You can also use your own matching logic like:
```
{
  activeWhen: (location) => {
    return location.pathname === 'some/path'
  }
}
```

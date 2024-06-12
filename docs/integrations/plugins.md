---
sidebar_position: 7
sidebar_label: Plugins
---

# Plugins

Integration with other apps can also happen at the data layer. Until now, we've presented a few ways in which apps can display different functionalities belonging to other apps (through [extension points](./extensions) and [content-blocks](./content-blocks)) but in some cases we are only interested in data. This is where we use plugins.

::::info
Plugins do not `render` anything in the view but can be used to store, retrieve and manipulate data.
::::

For example, let's say we are building an app, and we require a property from a specific profile app. We can do this by accessing the methods exposed by that specific profile through plugins.

It is **NOT** mandatory for the applications to also provide a plugin. However, the plugin system is a quite powerful way to integrate with other apps at the data layer.

## Creating plugins

Creating a plugin requires another named export from the root index file called `getPlugin`. This is an `async` method that should return an object. There is no standard in the shape on this object however keep in mind that changing it should be done preserving backward compatibility.

Example of a plugin:

```ts
// this plugin saves data to localstorage.
export const getPlugin = async () => {
  return {
    saveToLocalStorage: (key: string, data: string) => localStorage.setItem(key, data),
    getFromLocalStorage: (key) => localStorage.getItem(key),
  };
};
```

## Accessing and using plugins

To access a plugin in the register function you should use the function's param. Example:

```ts
export const register = (opts) => {
  const plugin = opts.plugins[appNameHere];

  plugin.saveToLocalStorage('someKey', someData);

  return {
    // ...
  };
};
```

In the same way you can access the plugins from your root React component through props.
Example:

```tsx
const MyRootComponent = (props: RootComponentProps) => {
  const examplePlugin = props.plugins[appNameHere];
  examplePlugin.saveToLocalStorage('someKey', someData);

  return <>Hello World!</>;
};
```

::::tip
In React you can use the already provided `useRootComponentProps` to avoid prop-drilling.

```tsx
import { useRootComponentProps } from '@akashaorg/ui-awf-hooks';

const MyReactComponent = () => {
  const { plugins } = useRootComponentProps();
  const examplePlugin = plugins[appNameHere];
  examplePlugin.saveLocalData(someData);
  return <>Hello Plugins!</>;
};
```
::::
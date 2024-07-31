---
sidebar_position: 3
sidebar_label: Plugins
---

# Plugins

Integration with other apps can also happen at the data layer. Until now, we've presented a few ways in which apps can display different functionalities belonging to other apps (through [extension points](./extension_points.md) and [content-blocks](./content_blocks.md)) but in some cases we are only interested in data. This is where we use plugins.

::::info
Plugins do not `render` anything in the view but can be used to store, retrieve and manipulate data.
::::

For example, let's say we are building an app, and we require a property from a specific profile app. We can do this by accessing the methods exposed by that specific profile through plugins.

It is **NOT** mandatory for the applications to also provide a plugin. However, the plugin system is a quite powerful way to integrate with other apps at the data layer.

## Registration
Unlike the apps and widget plugins are registered using the `registerPlugin` function. registerPlugin should be a named export from the entry file. This is an `async` method that should return an object. There is no standard in the shape on this object however keep in mind that changing it should be done preserving backward compatibility.

Example of a plugin registration function:

```ts title="index.ts"

export const registerPlugin = async () => {
  return {
    // my plugin properties
  };
};
```

Plugins are registered first, before

## Accessing and using plugins

Plugins are passed to the register function and as well as to the root extension's component via props.

Example of usage of a plugin in the register function:

```ts
export const register = (opts) => {
  const plugin = opts.plugins[someAppName];

  plugin.someFunction();

  return {
    // ...
  };
};
```

Example of using plugins in the React root component:

```tsx
const MyRootComponent = (props: RootComponentProps) => {
  const examplePlugin = props.plugins[appNameHere];
  examplePlugin.someFunction();

  return <div>Hello World!</div>;
};
```

::::tip
In React you can use the already provided `useRootComponentProps` to avoid prop-drilling.

```tsx
import { useRootComponentProps } from '@akashaorg/ui-awf-hooks';

// deeply nested react component
const MyReactComponent = () => {
  const { plugins } = useRootComponentProps();
  const examplePlugin = plugins[appNameHere];
  examplePlugin.saveLocalData(someData);
  return <>Hello Plugins!</>;
};
```
::::

---
sidebar_position: 81
sidebar_label: Navigate between different apps
---

Often times we'll need to navigate the user to another app.

From our [previous tutorial](./tanstack-react-router.md) we've learned that there is another global router that it's involved in routing and matching different apps. this means that the global router should also be involved when navigating to another app.

The global navigation is done using the `routing` plugin. This is a core plugin and always available (cannot be uninstalled) in a world.

To access the routing plugin we can use a React hook called `useRootComponentProps` that is using the context to get the rootProps and also provides some utility methods to select them.

Let's continue from the `home.tsx` page that we've created in the previous tutorial. Here is what it looks like:

```tsx title=components/pages/home.tsx
export const HomePage = () => {
    return (
      <div>
        Home page
      </div>
    );
  };
```

We will create a button that will navigate to the world's global antenna. For this we'll need some information about that app:
- name
- routes info

Luckily both of these info are available in the [source-code](https://github.com/AKASHAorg/akasha-core/blob/next/extensions/apps/antenna/src/index.tsx) (the name is also available in the Extensions app but we'll just use one source here).

so the name (form package.json) is "@akashaorg/app-antenna" and the routes are:

```js
routes: {
    defaultRoute: routes[GLOBAL_ANTENNA],
    [MY_ANTENNA]: routes[MY_ANTENNA],
    [BEAM]: routes[BEAM],
    [TAGS]: routes[TAGS],
    [REFLECT]: routes[REFLECT],
    [REFLECTION]: routes[REFLECTION],
}
```

WIP...




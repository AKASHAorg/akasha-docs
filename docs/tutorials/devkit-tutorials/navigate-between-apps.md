---
sidebar_position: 2
sidebar_label: Navigate between different apps
title: Navigate between apps
---

Often times we'll need to navigate the user to another app.

From our [previous tutorial](./tanstack-react-router.md) we've learned that there is another global router that it's involved in routing and matching different apps. this means that the global router should also be involved when navigating to another app.

The global navigation is done using the `routing` plugin. This is a core plugin and always available (cannot be uninstalled) in a world.

To access the routing plugin we can use a React hook called `useRootComponentProps` that is using the context to get the rootProps and also provides some utility methods to select them.

Let's continue from the `home.tsx` page that we've created in the previous tutorial. Here is what it looks like:

```tsx title="components/pages/home.tsx"
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

so the name (form package.json) is `@akashaorg/app-antenna` and the routes are:

```ts
routes: {
    defaultRoute: routes[GLOBAL_ANTENNA],
    [MY_ANTENNA]: routes[MY_ANTENNA],
    [BEAM]: routes[BEAM],
    [TAGS]: routes[TAGS],
    [REFLECT]: routes[REFLECT],
    [REFLECTION]: routes[REFLECTION],
}
```

For simplicity we will just redirect to the `defaultRoute` so let's change our home page to do that:

```tsx title="components/pages/home.tsx"
// diff-add-start
import { useRootComponentProps } from '@akashaorg/ui-core-hooks';
import { Button } from './ui/button';
// diff-add-end

export const HomePage = () => {
  // diff-add-start
  const { getCorePlugins } = useRootComponentProps();

  const globalRouter = getCorePlugins().routing;
  
  const onNavigate = () => {
    globalRouter.navigateTo({
      appName: '@akashaorg/app-antenna',
      getNavigationUrl: (appRoutes) => appRoutes.defaultRoute,
    });
  }
  // diff-add-end

  return (
    <div>
      Home page
      // diff-add
      <Button onClick={onNavigate}>Go to Antenna</Button>
    </div>
  );
};
```

Ok, there are a couple of things that are happening here. Let's take it line by line:

`const { getCorePlugins } = useRootComponentProps();` - [useRootComponentProps](https://github.com/AKASHAorg/akasha-core/blob/next/libs/hooks/src/use-root-props.tsx#L29) is a special hook that uses React's context to get the rootProps (the ones that are passed to the rootComponent from app-loader). This hook requires the context provider to be mounted on the parent component. This is why we are wrapping the RootComponent with the `withProviders` HOC. Using `useRootComponentProps` we avoid prop drilling and also we can provide useful methods to simplify prop selectors. In this case `getCorePlugins` is selecting the core plugins from these props (`const getCorePlugins() => props.plugins.core`).

`const globalRouter = getCorePlugins().routing;` - here from the corePlugins we are selecting the routing plugin and assign it to the globalRouter variable;

Now, in the `onNavigate` handler we are using `routing` plugin's method navigateTo to do the navigation. `navigateTo` requires an object with 2 properties, `appName` and `getNavigationUrl`

`appName` is the name of the app we want to navigate to;
`getNavigationUrl` a callback function (acting like a selector) that returns a path/subroute from the app that we want to navigte to. This method has one argument, `appRoutes` which are the `routes: {}` object that an application exposes from the register function.

> If an app is not exposing any routes but we still want to navigate to it and we know the path, we can just return the path string, for example `/antenna`. Moreover if we want to just navigate to index route (path `/`) we can omit the `getNavigationUrl` entirely.

> Note: using this selector will ensure that the navigation will not break if the path changes. For example, if we don't select from the `appRoutes` and we return the path directly then if that path changes our navigation will no longer work.






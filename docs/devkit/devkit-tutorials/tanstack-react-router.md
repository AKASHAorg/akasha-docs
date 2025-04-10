---
sidebar_position: 1
sidebar_label: Add Tanstack React Router
title: Adding a router
---

In this tutorial we will implement @tanstack/react-router package and add a few routes to navigate to.

:::info
The fully working implementation is available on the devkit's [examples/tanstack-react-router](https://github.com/AKASHAorg/extension-devkit/tree/examples/tanstack-react-router) branch.
:::

### Installation

Install the package:

```bash title="Run from the root of the project"
yarn add @tanstack/react-router
```

### Implementation

Let's start by creating a new file in the `components` directory

```bash title="Run from the root of the project"
touch src/components/routes.tsx
```

open it and import the required methods and components from `@tanstack/react-router` and create the rootRoute:

```tsx title="components/routes.tsx"
import { createRootRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});
```

Next we will need to create the routeTree and then export the router instance:

```tsx title="components/routes.tsx"
// diff-add-start
import { createRootRoute, Outlet, createRouter } from "@tanstack/react-router";
// diff-add-end

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});
// diff-add-start
const routeTree = rootRoute;
export const router = createRouter({
  routeTree,
});
// diff-add-end
```

For now, our router does not contain any routes so let's create 3 routes called `home`, `docs` and `components`.
For these we'll need the React components so let's quickly create them:

```bash title="Run from the root of the project"
mkdir src/components/pages
touch src/components/pages/{home,docs,components}.tsx
```

now, let's export a react component from each file

```tsx title="src/components/pages/home.tsx"
export const HomePage = () => {
  return <div>Home page</div>;
};
```

```tsx title="src/components/pages/docs.tsx"
export const DocsPage = () => {
  return <div>Docs page</div>;
};
```

```tsx title="src/components/pages/components.tsx"
export const ComponentsPage = () => {
  return <div>Components page</div>;
};
```

Now, using these newly created components let's add the routes to our router:

```tsx title="src/components/routes.tsx"
// diff-remove-start
import { createRootRoute, Outlet, createRouter } from "@tanstack/react-router";
// diff-remove-end
// diff-add-start
import { createRootRoute, createRoute, Outlet, redirect, createRouter } from '@tanstack/react-router';
import { HomePage } from "./pages/home";
import { DocsPage } from "./pages/docs";
import { ComponentsPage } from "./pages/components";
// diff-add-end

const rootRoute = createRootRoute({
    component: () => <Outlet />,
});

// we will also need to add an index route
// we can define homePage as the index route or a distinct index route that redirects to the /home path
// diff-add-start
const indexRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  beforeLoad: () => {
    throw redirect({
      to: '/home',
      replace: true
    });
  };
})
const homeRoute = createRoute({
  component: HomePage,
  path: '/home',
  getParentRoute: () => rootRoute
});
const docsRoute = createRoute({
  component: DocsPage,
  path: '/docs',
  getParentRoute: () => rootRoute
});
const componentsRoute = createRoute({
  component: ComponentsPage,
  path: '/components',
  getParentRoute: () => rootRoute,
});
// diff-add-end

// diff-remove
const routeTree = rootRoute;

// diff-add-start
const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute,
  componentsRoute,
]);
// diff-add-end

export const router = createRouter({
    routeTree,
});
```

Next we will change the `src/components/index.tsx` to import the router and export a new rootComponent:

```tsx title="src/components/index.tsx"
// diff-remove
import App from "./app";
import { withProviders } from "@akashaorg/ui-core-hooks";
// diff-add-start
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";
// diff-add-end
import "../assets/style.css";

// diff-remove
export default withProviders(App);

// diff-add-start
const RootComponent = () => {
  return <RouterProvider router={router} />;
};

export default withProviders(RootComponent);
// diff-add-end
```

We can now go ahead and get rid of the old `app.tsx` file as it's not used anymore.

```bash title="Run from the root of the project"
rm -f src/components/app.tsx
```

There is still one important change that we need to make because of how the routing works in the outside layer of the apps.

Apps are rendered in a world when their name matches the path of the current URL, for example an app with name `my-application` will be rendered when the path of the URL will be `/my-application` (www.akasha.world/my-application). This is handled by a global router (single-spa) and apps are required to handle only the subroutes:

assuming we are navigating to this path:

`http://akasha.world/my-application/internal-application-path`

the global router will match the app named `my-application` and render it. Then that application will take over and route to the `/internal-application-path` accordingly.

This means that we need instruct the router to only consider routes starting from `/my-application`. Most of the routers have support for this functionality using a `basePath` argument.

Let's modify the `routes.tsx` file to allow this change:

```tsx title="components/routes.tsx"
import { createRootRoute, createRoute, Outlet, redirect, createRouter } from '@tanstack/react-router';

import { HomePage } from "./pages/home";
import { DocsPage } from "./pages/docs";
import { ComponentsPage } from "./pages/components";

const rootRoute = createRootRoute({
    component: () => <Outlet />,
});

// we will also need to add an index route
// we can define homePage as the index route or a distinct index route that redirects to the /home path

const indexRoute = createRoute({
   path: '/',
   getParentRoute: () => rootRoute,
   beforeLoad: () => {
       throw redirect({
           to: '/home',
           replace: true
       });
   };
});

const homeRoute = createRoute({
  component: HomePage,
  path: '/home',
  getParentRoute: () => rootRoute,
});

const docsRoute = createRoute({
  component: DocsPage,
  path: '/docs',
  getParentRoute: () => rootRoute,
});

const componentsRoute = createRoute({
  component: ComponentsPage,
  path: '/components',
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([
   homeRoute,
   docsRoute,
   componentsRoute,
]);

// diff-remove-start
export const router = createRouter({
  routeTree,
});
// diff-remove-end

// diff-add-start
export const getRouter = (basePath) => {
  return createRouter({
    routeTree,
    basepath: basePath,
  });
// diff-add-end
}
```

With this change we can now pass the `basePath` to the router.

The value of the basePath is passed down by the app-loader to the rootComponent as prop so let's quickly do this change:

```tsx title="components/index.tsx"
import { withProviders } from "@akashaorg/ui-core-hooks";
import { RouterProvider } from "@tanstack/react-router";
// diff-remove
import { router } from "./routes";
// diff-add
import { getRouter } from "./routes";
import { IRootComponentProps } from "@akashaorg/typings/lib/ui";
import "../assets/style.css";

// diff-add-start
const RootComponent = (props: IRootComponentProps) => {
  return <RouterProvider router={getRouter(props.baseRouteName)} />;
};
// diff-add-end

export default withProviders(RootComponent);
```

Lastly, let's populate the world's sidebar with our routes so the users can directly navigate to our pages.

Lets' open the `src/index.tsx` file and create our subRoutes:

```tsx title="src/index.tsx"
import {
  IAppConfig,
  IntegrationRegistrationOptions,
  MenuItemAreaType,
  LogoTypeSource,
} from "@akashaorg/typings/lib/ui";

/**
 * Changes in this file requires a full reload in the browser!
 */

const SidebarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 stroke-secondaryLight dark:stroke-secondaryDark"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    />
  </svg>
);

export const register = (opts: IntegrationRegistrationOptions): IAppConfig => {
  return {
    rootComponent: () => import("./components"),
    mountsIn: opts.layoutSlots?.applicationSlotId as string,
    // this is required for other apps to be able to navigte to our routes
    // diff-add-start
    routes: {
      defaultRoute: "/home",
      docs: "/docs",
      components: "/components",
    },
    // diff-add-end
    menuItems: {
      label: "Extension Devkit",
      logo: { type: LogoTypeSource.ICON, value: <SidebarIcon /> },
      area: [MenuItemAreaType.UserAppArea],
      // diff-add-start
      subRoutes: [
        {
          index: 1,
          label: "Home",
          route: "/home",
        },
        {
          index: 2,
          label: "Docs",
          route: "/docs",
        },
        {
          index: 3,
          label: "Components",
          route: "/components",
        },
        // diff-add-end
      ],
    },
  };
};
```

That's it! We should now be able to have multiple routes and expose them in the sidebar.

[@tanstack/react-router](https://tanstack.com/router/latest) has many more features so make sure to read their [docs](https://tanstack.com/router/latest/docs/framework/react/overview).

In the [next tutorial](./navigate-between-apps.md) we'll learn how to navigate between different apps. This will cover the `routes` property that we've set in the `src/index.tsx` file.

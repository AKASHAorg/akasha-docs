---
sidebar_position: 6
sidebar_label: Extension Points
---

# Extensions (extension-points)

Extension points are components exposed by an app that can be mounted at any level inside the same app or other apps or widgets. These components can provide additional functionalities to the already rendered elements. For example a like button extension point can be rendered on a beam card, but also on the profile app. A follow button can be rendered on a user's profile and also on a profile-related widget etc.

## Extension points example usecase
- insert a like button into a beam-card
- display the beam editor anywhere you want in your extension
- display the "Flag" button on any entity - provided by the Vibes App

## Registration
The extension points are automatically registered when the parent app registers. Extension points cannot be standalone, they are provided by an app via the app's configuration object.

```ts title="index.js of MyApplication"
export const register = () => {
  return {
    // ...
    extensions: [{ ...myExtensionConfig }],
  };
};
```

## Configuration Object interface
The config object is defined within the parent app's config. This is managed using the `extensions` key,
which is an array containing the config object for each extension-point.

To define an extension-point the following properties must be set:

|            | Required |                 Description                        |
|:----------:|:--------:|:--------------------------------------------------:|
| loadingFn  |   yes    | the [loadingFn](../extensions/loading_function.md) |
| mountsIn   |   yes    | the slot in which this extension will be mounted   |
<!-- | activeWhen |   no     | the activity function                              | -->


Example:

```ts title="index.ts of MyAwesomeApp"

// the register function of an app
export const register = () => {
  // this is the config object of an app
  return {
    // ...app's config options
    extensions: [
      {
        loadingFn: () => import('path/to/extension1.tsx'),
        mountsIn: 'profile-card/profile-menu-extensions'
      },
      {
        loadingFn: () => import('path/to/extension2.tsx'),
        mountsIn: 'beam-card/beam-card-footer-extensions'
      }
    ]
  }
}

```
## Declaring extension slots

It is a good idea to allow other apps to extend your components with additional functionality.

For apps written with React, AKASHA Core provides a small library which is already available under the name [@akashaorg/ui-lib-extensions](https://github.com/AKASHAorg/akasha-core/tree/next/libs/extensions/src/react)

The library exports React component [`<Extension />`](https://github.com/AKASHAorg/akasha-core/blob/next/libs/extensions/src/react/extension.tsx) which will do the heavy lifting for mounting/unmounting the extensions by matching the `name` prop with the `mountsIn` property on the extension's interface.

::::info
Extensions are not namespaced because the idea is to have multiple extensions from multiple apps matching into a slot.
::::

Example usage:

```tsx title="Defining a mounting point of an extension-point"
import { Extension } from '@akashaorg/ui-lib-extensions/lib/react/extension';

const MyReactComponent = () => {
  return (
    <>
      <Extension
        name="my-app/some-extension-id"
        {...someProps}
      />
    </>
  );
};
```

::::info
`someProps` may vary according to needs but make sure that you provide most common resource ids. for example if MyReactComponent is presenting a beam, make sure you pass down a beam id so that the extension-point can use this data to identify the resource.
::::

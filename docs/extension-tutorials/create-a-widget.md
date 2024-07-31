---
sidebar_position: 2
sidebar_label: Create a Widget
---

# Create a widget

This tutorial asumes that you already bootstrapped an extension as explained [here](./index.md).

After the bootstrap is done, change directory to the extension you've just created and add a new folder `src`

Now let's create the entry file for the widget.

```bash
touch src/index.ts
```

Open the index file and create and export the registration function

```ts title="export widget's registration function"

export const register = () => {
  return {}
}

```

Next, we'll need to add the following properties to the config object:

|           |  Required  |                     Description                                 |
|:---------:|:----------:|:---------------------------------------------------------------:|
| loadingFn |   true     |  the [loading function](../extensions/loading_function.md)      |
| mountsIn  |   true     |  where to show this widget                                      |


Let's create a simple React component in a new file in the `src` folder.

```bash
touch src/my-widget-component.tsx
```

This file will be dynamically imported using the `loadingFn` and must export `single-spa-react` lifecycle methods:

```tsx title="src/my-widget-component.tsx"

import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

const MyWidget = () => {
  return <div>Hello World</div>
}

export const {bootstrap, mount, unmount} = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: MyWidget,
  errorBoundary: () => {
    return (
      <div>Error in widget</div>
    )
  }
})

```

Now we are ready to complete the configuration of our widget:

```ts
export const register = (options: IntegrationRegistrationOptions) => {
  return {
    loadingFn: () => import('my-widget-component'),
    mountsIn: options.layoutSlots.widgetSlotId,
  }
}
```

Well done! Now if you rebuild the project you will see the widget in the right side of the page.

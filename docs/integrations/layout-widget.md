---
sidebar_position: 5
sidebar_label: Layout widget
---

# Layout Widget

The layout of a world is defined by a layout widget. It defines a few areas in which the apps and widgets can be mounted.

- topbar area
- sidebar area
- plugin/app area
- widget area

On a desktop screen, main areas are divided like in the schematic below:

```
|------------|-------------------------|-------------|
|            |       Topbar Area       |             |
|            |-------------------------|             |
|            |                         | Widget Area |
| Sidebar    |                         |_____________|
| Area       |        App Area         |             |
|            |                         | Root Widget |
|            |                         | Area        |
|            |                         |             |
|----------------------------------------------------|
```

These areas are passed down to each app's and widget's `register()` function as props.

## Areas that are defined in akasha.world's default layout widget

### Topbar Area

This is the area where the topbar should be mounted.

**Features**

- sticky top
- loaded on every page

**Example**

```ts title="Creating a new topbar widget"
export const register = (widgetRegistrationOptions) => {
  return {
    mountsIn: widgetRegistrationOptions.layoutConfig?.topbarSlotId,
    // ...other properties
  };
};
```

### Sidebar Area

The area that defines the placement of the sidebar.

**Features**

- sticky top
- loaded on every page
- can be toggled via a [uiEvents](./ui-event-bus.md) bus
- toggled off when on mobile

**Example**

```ts title="Creating a new sidebar widget"
export const register = (widgetRegistrationOptions) => {
  return {
    mountsIn: widgetRegistrationOptions.layoutConfig?.sidebarSlotId,
    // ...other properties
  };
};
```

### App Area

This is the main area where the apps are mounted.

**Example**

```ts title="Mounting an app in the app area"
export const register = (applicationRegistrationOptions) => {
  return {
    mountsIn: applicationRegistrationOptions.layoutConfig?.pluginSlotId,
    // ...other properties
  };
};
```

### Widget Area

This is the area where the widgets are mounted. The order in which they are mounted is dependent on how fast each loads and not in the order they are defined.

The area is split into 2 sub-sections, one above the other:

- widget area - widgets that are directly related to the currently active app (example: mini profile widget that is loaded when the full beam page is active)

- root widget area - widgets that are not related to the currently mounted app (example: trending widget is not related to the notifications page but is still visible there).

**Examples**

```ts title="Mounting a widget in the widget area"
export const register = (applicationRegistrationOptions) => {
  return {
    mountsIn: applicationRegistrationOptions.layoutConfig?.widgetSlotId,
    // ...other properties
  };
};
```

```ts title="Mounting a widget in the root widget area"
export const register = (widgetRegistrationOptions) => {
  return {
    mountsIn: widgetRegistrationOptions.layoutConfig?.rootWidgetSlotId,
    // ...other properties
  };
};
```

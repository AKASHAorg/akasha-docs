---
sidebar_position: 5
sidebar_label: Layout Widget
---

# Layout Widget

The layout of a world is controlled by its Layout widget. It outlines specific areas in which the apps and widgets can be mounted.

## Akasha World's default layout widget
Akasha World's layout widget defines these areas;

- Topbar Area
- Sidebar Area
- App Area
- Widget Area

On a desktop screen, it will look like in the schematic below:

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
- toggled off by default, on mobile

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

This is where the applications are mounted.

**Example**

```ts title="Mounting an app in the app area"
export const register = (applicationRegistrationOptions) => {
  return {
    mountsIn: applicationRegistrationOptions.layoutConfig?.applicationSlotId,
    // ...other properties
  };
};
```

### Widget Area

This is where the widgets are mounted. The order in which they are mounted is dependent on how fast each loads and not in the order they are defined.

This area is split into 2 sub-sections, one above the other:

- Widget Area - widgets that are directly related to the currently active app (Example: `mini profile widget` that is loaded when the full beam page is active on the antenna app)

- Root Widget Area - widgets that are not related to the currently mounted app (example: `trending widget`  which shows latest profiles and trending topics).

**Examples**

```ts title="Mounting a widget in the widget area"
export const register = (widgetRegistrationOptions) => {
  return {
    mountsIn: widgetRegistrationOptions.layoutConfig?.widgetSlotId,
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

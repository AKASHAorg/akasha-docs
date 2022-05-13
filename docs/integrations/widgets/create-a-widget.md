---
sidebar_position: 2
---

# Create a widget

Creating a widget is similar to [creating an app](./integrations/applications/create-an-app.md) but with a few differences:
 - by convention, widgets can only be mounted in the `widget-area`, `sidebar-area` or `topbar-area`. See [Layout Widget](../layout-widget.md) for more details.
 - widgets are not allowed to have their own routes so you cannot navigate to them.

You can find a complete example of a widget as the [Trending Widget](https://github.com/AKASHAorg/akasha-world-framework/tree/next/ui/widgets/trending).

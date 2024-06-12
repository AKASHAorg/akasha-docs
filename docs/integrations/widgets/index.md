---
sidebar_position: 2
sidebar_label: Widgets Overview
---

# Widgets Overview

A widget is a small functional unit that can be reused across multiple pages/apps. It usually covers very specific functionalities like displaying relevant information or allowing to perform common actions.

A widget cannot have its own routes, hence you cannot navigate to a widget and they have a predefined areas in the world's layout. The areas are defined by the [Layout Widget](/integrations/layout-widget) and some areas may be hidden on certain viewports/screen sizes. For example the widget area in the current implementation of the Layout Widget is hidden on mobile devices.

Examples of widgets are:

- `Trending` widget showing latest profiles and trending topics
- `Topbar` widget showing the World logo and buttons for navigation, authentication and sidebar toggle.
- `Mini Profile` widget which shows brief overview of the beam author's profile on the full beam page

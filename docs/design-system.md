---
sidebar_position: 3
sidebar_label: Design System
---

# Design System

AKASHA Core’s user interface is built with design system components from [akasha-ui](https://akasha-ui.pages.dev/docs), aligning with AKASHA’s visual language and offering full customisation.

Most components from `akasha-ui` are included in the `ui` package of `akasha-core` for universal use, while others are placed in relevant extensions.

Components from shadcn are inside the `components` folder of the `ui` package and are imported like so:

```tsx
import { Switch } from "@akashaorg/ui/lib/components/switch";
```

Whereas components from the `akasha-ui` are placed in the `akasha-components` folder of the `ui` package and imported like so:

```tsx
import { IconContainer } from "@akashaorg/ui/lib/akasha-components/icon-container";
```

For detailed information about `akasha-ui` and the Design System, please check the [akasha-ui documentation](https://akasha-ui.pages.dev/docs).

---
sidebar_position: 4
sidebar_label: Design System
---
# Design System

AKASHA Core's Design System is a library of UI components built with [Twind](https://twind.dev/), a tailwind-in-js solution. The components implement the visual design language of AKASHA, and can be customised with tailwind style directives through the `customStyle` property.

It is split into two distinct libraries
- [Core](./core) 
- [Components](./components)

For a showcase of the components you can visit our [storybook](https://storybook-awf.netlify.app/), and check out the DSCORE and DSCOMPONENTS sections.

To use a component, import it from the corresponding package. For example, to use a Stack, which is defined under `Core`, you import it like so:

```tsx
import Stack from '@akashaorg/design-system-core/lib/components/Stack';
```
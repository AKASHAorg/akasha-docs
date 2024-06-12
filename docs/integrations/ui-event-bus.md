---
sidebar_position: 8
sidebar_label: Event Bus
---

# Event Bus

Communication between integrations is done through the event bus. Currently we have 2 event buses:

## Global Event Bus

Global event bus is accessible through the sdk `(sdk.api.globalChannel)`. Almost all calls to the sdk APIs methods will also trigger an event on the global event bus.
The Global event bus is a `rxjs ReplaySubject`.

## UI Event Bus

UI event bus is accessible as props in root component of the integration `(props.uiEvents)`. Currently this event bus is used to trigger UI changes such as showing/hiding the sidebar, mounting/unmounting extension-points, trigger theme change across all integrations, etc. The UI event bus is a `rxjs Subject`.

::::info
We will merge this 2 event buses in the future.
::::
---
sidebar_position: 9
sidebar_label: Event Bus
---

# Event Bus
Extensions often need to communicate and react to changes occuring in other extensions. For example, when a user logs in through the
Authentication App, almost all of other extensions needs to update their state accordingly. Managing such inter-extension communication
is done using an event bus.

In short, an event bus allows publish/subscribe-style communication between different integrations without being directly dependent to
each other. Extensions can emit or subscribe to these events independently which reduces inter-extension dependency.

## UIEvents Bus

UI event bus is accessible as props in root component of the integration `(props.uiEvents)`. Currently this event bus is used to trigger UI changes such as showing/hiding the sidebar, mounting/unmounting extension-points, trigger theme change across all integrations, etc. The UI event bus is a `rxjs Subject`.

## GlobalEvent Bus

Global event bus is accessible through the sdk `(sdk.api.globalChannel)`. Almost all calls to the sdk APIs methods will also trigger an event on the global event bus.
The Global event bus is a `rxjs ReplaySubject`.


## Why not using plugin system for inter-app communication?
Using the plugin system for inter-extension communication is perfectly fine but it comes with some drawbacks when compared to an event bus:

- **Tight Coupling**: direct api calls create a tighter coupling between extensions.
- **Point-to-point Communication**: Plugins usually facilitate point-to-point communication, which can be less efficient when multiple extensions need to react to the same change.
- **Increased Complexity**: Updates to a plugin are not automatically reflected in the view so developers still needs to come up with their own synchronization mechanisms.
- **Static Contracts**: Using plugins for inter-extension communication create static contracts that needs to be maintained, versioned, etc.


::::info
We will merge this 2 event buses in the future.
::::

# Event bus

Communication between integrations is done through the event bus.

Currently we have 2 event busses:

### Global event bus

Global event bus is accessible through the sdk (sdk.api.globalChannel)
Almost all calls to the sdk APIs methods will also trigger an event on the global event bus.
Global event bus is a rxjs ReplaySubject.

### Ui event bus

Ui event bus is accessible as props in root component of the integration (props.uiEvents).
Currently this event bus is used to trigger UI changes such as showing/hiding the sidebar, mounting/unmounting extension-points, trigger theme change across all integrations, etc.
UI event bus is a rxjs Subject.

> Note: we will merge this 2 event buses in the future.

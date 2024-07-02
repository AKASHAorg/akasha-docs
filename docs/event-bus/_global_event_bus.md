# Global Event Bus

## Usage
Global event bus is provided by the sdk.

Example usage:
```ts
import getSDK from '@akashaorg/awf-sdk';
import { filter } from 'rxjs';
import { GlobalEventBusData, WEB3_EVENTS } from '@akashaorg/typings/lib/sdk';

// get the event bus
const globalChannel = getSDK().api.globalChannel;

// filter the events
const observable = globalChannel.pipe(filter(data => data.event === WEB3_EVENTS.CHAIN_CHANGED));

// subscribe to data
const subscription = observable.subscribe((event: GlobalEventBusData<{ chainId: number }>) => {
  // chaindId = event.data.chainId;
});

// afterwards, when you are done with the subscription
// you can also unsubscribe it

// subscription.unsubscribe();
```

---
sidebar_position: 41
sidebar_label: SDK
---

# SDK Overview

The AKASHA SDK is used in every world instance and provides the core functionality to interact with different services and 3rd parties (ex. Metamask, Textile, Infura, etc.).

### Core concepts

- dependency injection (inversify)
- RxJS

### Usage

To instantiate the SDK, you can use one of the methods it exports:

```typescript
import getSDK from "@akashaorg/awf-sdk";

const sdk = getSDK();

// use the sdk here
```

or:

```ts
import { init } from "@akashaorg/awf-sdk";

const sdk = init();
```

The main difference between the two is that `getSDK()` ensures that the sdk object is instantiated only once (singleton) whereas `init()` will instantiate it every time it's called.

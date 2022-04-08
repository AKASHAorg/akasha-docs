---
sidebar_position: 1
sidebar_label: SDK Overview
---

# SDK Overview

The AKASHA SDK is used in every world instance and provides the core functionality to interact with different services and 3rd parties (ex. Metamask, Textile, Infura, etc.).


### Core concepts

- dependency injection (inversify)
- RxJS

### Installation

// provide instalation instructions

### Usage

```ts

import getSDK from '@akashaproject/awf-sdk';

const sdk = getSDK();

```

### SDK Object
* `sdk` => `Object`
  * .`api` => `Object`
  * .`services` => `Object`

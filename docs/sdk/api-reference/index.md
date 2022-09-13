---
id: "index"
title: "AKASHA SDK reference"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

AKASHA SDK is a modular set of utilities and apis that can be used to build
your own app.

## Namespaces

- [sdk](namespaces/sdk.md)
- [typings](namespaces/typings.md)

## Interfaces

- [AWF\_SDK](interfaces/AWF_SDK.md)
- [SDK\_API](interfaces/SDK_API.md)
- [SDK\_Services](interfaces/SDK_Services.md)

## Functions

### default

**default**(): [`AWF_SDK`](interfaces/AWF_SDK.md)

Creates a new SDK instance or returns a previusly created one.

**`example`**
```ts
import getSDK from '@akashaorg/awf-sdk';
const sdk = getSDK();
```

#### Returns

[`AWF_SDK`](interfaces/AWF_SDK.md)

#### Defined in

[sdk/src/index.ts:70](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/index.ts#L70)

___

### init

**init**(): [`AWF_SDK`](interfaces/AWF_SDK.md)

Creates a new SDK instance.

**`example`**
```ts
import {init} from '@akashaorg/awf-sdk';
const sdk = init();
```

#### Returns

[`AWF_SDK`](interfaces/AWF_SDK.md)

#### Defined in

[sdk/src/index.ts:87](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/index.ts#L87)

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

- [SDK\_API](interfaces/SDK_API.md)
- [SDK\_Services](interfaces/SDK_Services.md)

## Type aliases

### AWF\_SDK

 **AWF\_SDK**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | [`SDK_API`](interfaces/SDK_API.md) |
| `services` | [`SDK_Services`](interfaces/SDK_Services.md) |

#### Defined in

[sdk/src/index.ts:58](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/index.ts#L58)

## Functions

### default

**default**(): [`AWF_SDK`](#awf_sdk)

Creates a new SDK instance or returns a previusly created one.

**`example`**
```ts
import getSDK from '@akashaorg/awf-sdk';
const sdk = getSDK();
```

#### Returns

[`AWF_SDK`](#awf_sdk)

#### Defined in

[sdk/src/index.ts:75](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/index.ts#L75)

___

### init

**init**(): [`AWF_SDK`](#awf_sdk)

Creates a new SDK instance.

**`example`**
```ts
import {init} from '@akashaorg/awf-sdk';
const sdk = init();
```

#### Returns

[`AWF_SDK`](#awf_sdk)

#### Defined in

[sdk/src/index.ts:92](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/index.ts#L92)

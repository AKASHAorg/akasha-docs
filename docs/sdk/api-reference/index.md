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

## Modules

- [sdk](modules/sdk.md)

## Namespaces

- [typings](namespaces/typings.md)

## Interfaces

- [SDK\_API](interfaces/SDK_API.md)
- [SDK\_Services](interfaces/SDK_Services.md)

## Type Aliases

### AWF\_SDK

 **AWF\_SDK**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | [`SDK_API`](interfaces/SDK_API.md) |
| `services` | [`SDK_Services`](interfaces/SDK_Services.md) |

#### Defined in

[sdk/src/index.ts:48](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/index.ts#L48)

## Functions

### default

**default**(): [`AWF_SDK`](#awf_sdk)

Creates a new SDK instance or returns a previusly created one.

**`Example`**

```ts
import getSDK from '@akashaorg/awf-sdk';
const sdk = getSDK();
```

#### Returns

[`AWF_SDK`](#awf_sdk)

#### Defined in

[sdk/src/index.ts:65](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/index.ts#L65)

___

### init

**init**(): [`AWF_SDK`](#awf_sdk)

Creates a new SDK instance.

**`Example`**

```ts
import {init} from '@akashaorg/awf-sdk';
const sdk = init();
```

#### Returns

[`AWF_SDK`](#awf_sdk)

#### Defined in

[sdk/src/index.ts:82](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/index.ts#L82)

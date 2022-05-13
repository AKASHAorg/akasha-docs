---
id: "sdk.Stash"
title: "Class: Stash"
sidebar_label: "Stash"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).Stash

## Implements

- [`IStashService`](../interfaces/sdk.IStashService.md)<[`IQuickLRU`](../namespaces/sdk.md#iquicklru)\>

## Constructors

### constructor

**new Stash**()

## Methods

### computeKey

**computeKey**(`objKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objKey` | `Record`<`never`, `unknown`\> |

#### Returns

`string`

#### Implementation of

[IStashService](../interfaces/sdk.IStashService.md).[computeKey](../interfaces/sdk.IStashService.md#computekey)

#### Defined in

[sdk/src/stash/index.ts:32](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/stash/index.ts#L32)

___

### create

**create**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`IQuickLRU`](../namespaces/sdk.md#iquicklru)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`LRUOptions`](../interfaces/sdk.LRUOptions.md) | Object with props maxSize: number and maxAge: number |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`IQuickLRU`](../namespaces/sdk.md#iquicklru)\>

a new instance of QuickLRU

#### Implementation of

[IStashService](../interfaces/sdk.IStashService.md).[create](../interfaces/sdk.IStashService.md#create)

#### Defined in

[sdk/src/stash/index.ts:17](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/stash/index.ts#L17)

___

### getUiStash

**getUiStash**(): `default`<`string`, `unknown`\>

General purpose stash for caching ui related data

#### Returns

`default`<`string`, `unknown`\>

#### Implementation of

[IStashService](../interfaces/sdk.IStashService.md).[getUiStash](../interfaces/sdk.IStashService.md#getuistash)

#### Defined in

[sdk/src/stash/index.ts:25](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/stash/index.ts#L25)

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

- [`IStashService`](../interfaces/typings.IStashService.md)<[`IQuickLRU`](../namespaces/sdk.md#iquicklru)\>

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

[IStashService](../interfaces/typings.IStashService.md).[computeKey](../interfaces/typings.IStashService.md#computekey)

#### Defined in

[sdk/src/stash/index.ts:31](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/stash/index.ts#L31)

___

### create

**create**(`args`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`IQuickLRU`](../namespaces/sdk.md#iquicklru)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`LRUOptions`](../interfaces/typings.LRUOptions.md) | Object with props maxSize: number and maxAge: number |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`IQuickLRU`](../namespaces/sdk.md#iquicklru)\>

a new instance of QuickLRU

#### Implementation of

[IStashService](../interfaces/typings.IStashService.md).[create](../interfaces/typings.IStashService.md#create)

#### Defined in

[sdk/src/stash/index.ts:16](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/stash/index.ts#L16)

___

### getUiStash

**getUiStash**(): `default`<`string`, `unknown`\>

General purpose stash for caching ui related data

#### Returns

`default`<`string`, `unknown`\>

#### Implementation of

[IStashService](../interfaces/typings.IStashService.md).[getUiStash](../interfaces/typings.IStashService.md#getuistash)

#### Defined in

[sdk/src/stash/index.ts:24](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/stash/index.ts#L24)

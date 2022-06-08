---
id: "sdk.IStashService"
title: "Interface: IStashService<IStash>"
sidebar_label: "IStashService"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).IStashService

## Type parameters

| Name |
| :------ |
| `IStash` |

## Implemented by

- [`Stash`](../classes/sdk.Stash.md)

## Methods

### computeKey

**computeKey**(`objKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objKey` | `Record`<`string`, `unknown`\> |

#### Returns

`string`

#### Defined in

sdk/typings/lib/interfaces/stash.d.ts:9

___

### create

**create**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`IStash`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LRUOptions`](sdk.LRUOptions.md) |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`IStash`\>

#### Defined in

sdk/typings/lib/interfaces/stash.d.ts:7

___

### getUiStash

**getUiStash**(): `IStash`

#### Returns

`IStash`

#### Defined in

sdk/typings/lib/interfaces/stash.d.ts:8

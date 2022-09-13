---
id: "typings.IStashService"
title: "Interface: IStashService<IStash>"
sidebar_label: "IStashService"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).IStashService

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

typings/sdk/stash.d.ts:9

___

### create

**create**(`args`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`IStash`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`LRUOptions`](typings.LRUOptions.md) |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`IStash`\>

#### Defined in

typings/sdk/stash.d.ts:7

___

### getUiStash

**getUiStash**(): `IStash`

#### Returns

`IStash`

#### Defined in

typings/sdk/stash.d.ts:8

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

## Constructors

### constructor

**new Stash**()

#### Defined in

[sdk/src/stash/index.ts:12](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/stash/index.ts#L12)

## Methods

### computeKey

**computeKey**(`objKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objKey` | `Record`<`never`, `unknown`\> |

#### Returns

`string`

#### Defined in

[sdk/src/stash/index.ts:35](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/stash/index.ts#L35)

___

### create

**create**(`args`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | Object with props maxSize: number and maxAge: number |
| `args.maxAge` | `number` | - |
| `args.maxSize` | `number` | - |

#### Returns

`Object`

a new instance of QuickLRU

| Name | Type |
| :------ | :------ |
| `data` | `default`<`never`, `never`\> |

#### Defined in

[sdk/src/stash/index.ts:21](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/stash/index.ts#L21)

___

### getUiStash

**getUiStash**(): `default`<`string`, `unknown`\>

General purpose stash for caching ui related data

#### Returns

`default`<`string`, `unknown`\>

#### Defined in

[sdk/src/stash/index.ts:29](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/stash/index.ts#L29)

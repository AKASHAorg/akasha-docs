---
id: "sdk.AWF_IEntry"
title: "Interface: AWF_IEntry"
sidebar_label: "AWF_IEntry"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IEntry

## Implemented by

- [`AWF_Entry`](../classes/sdk.AWF_Entry.md)

## Methods

### editEntry

**editEntry**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](sdk.DataProviderInput.md)[] |
| `opt.entryID` | `string` |
| `opt.post` | `Object` |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:29

___

### entriesByAuthor

**entriesByAuthor**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |
| `opt.pubKey` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:39

___

### entriesByTag

**entriesByTag**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.name` | `string` |
| `opt.offset?` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:48

___

### getEntries

**getEntries**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:13

___

### getEntry

**getEntry**(`entryId`): `Observable`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryId` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:8

___

### getFeedEntries

**getFeedEntries**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:62

___

### getLinkPreview

**getLinkPreview**(`link`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:57

___

### postEntry

**postEntry**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](sdk.DataProviderInput.md)[] |
| `opt.post` | `Object` |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:21

___

### removeEntry

**removeEntry**(`entryID`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryID` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:38

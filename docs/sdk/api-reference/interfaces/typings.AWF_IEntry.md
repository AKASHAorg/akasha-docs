---
id: "typings.AWF_IEntry"
title: "Interface: AWF_IEntry"
sidebar_label: "AWF_IEntry"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).AWF_IEntry

## Implemented by

- [`AWF_Entry`](../classes/sdk.AWF_Entry.md)

## Methods

### editEntry

**editEntry**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](typings.DataProviderInput.md)[] |
| `opt.entryID` | `string` |
| `opt.post` | `Object` |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`unknown`

#### Defined in

typings/sdk/posts.d.ts:17

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

typings/sdk/posts.d.ts:27

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

typings/sdk/posts.d.ts:32

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

typings/sdk/posts.d.ts:5

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

typings/sdk/posts.d.ts:4

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

typings/sdk/posts.d.ts:38

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

typings/sdk/posts.d.ts:37

___

### postEntry

**postEntry**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](typings.DataProviderInput.md)[] |
| `opt.post` | `Object` |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`unknown`

#### Defined in

typings/sdk/posts.d.ts:9

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

typings/sdk/posts.d.ts:26

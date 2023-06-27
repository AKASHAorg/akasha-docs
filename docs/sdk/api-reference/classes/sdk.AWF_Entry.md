---
id: "sdk.AWF_Entry"
title: "Class: AWF_Entry"
sidebar_label: "AWF_Entry"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).AWF_Entry

## Constructors

### constructor

**new AWF_Entry**(`log`, `gql`, `auth`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/posts/entry.ts:32](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L32)

## Methods

### editEntry

**editEntry**(`opt`): `Promise`<`undefined` \| [`EditEntryMutation`](../modules/sdk.md#editentrymutation)\>

Update an existing entry

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](../modules/sdk.md#dataproviderinput)[] |
| `opt.entryID` | `string` |
| `opt.post` | `Object` |
| `opt.post.mentions?` | `string`[] |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`Promise`<`undefined` \| [`EditEntryMutation`](../modules/sdk.md#editentrymutation)\>

#### Defined in

[sdk/src/posts/entry.ts:99](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L99)

___

### entriesByAuthor

**entriesByAuthor**(`opt`): `Promise`<[`GetPostsByAuthorQuery`](../modules/sdk.md#getpostsbyauthorquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |
| `opt.pubKey` | `string` |

#### Returns

`Promise`<[`GetPostsByAuthorQuery`](../modules/sdk.md#getpostsbyauthorquery)\>

#### Defined in

[sdk/src/posts/entry.ts:136](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L136)

___

### entriesByTag

**entriesByTag**(`opt`): `Promise`<[`GetPostsByTagQuery`](../modules/sdk.md#getpostsbytagquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.name` | `string` |
| `opt.offset?` | `number` |

#### Returns

`Promise`<[`GetPostsByTagQuery`](../modules/sdk.md#getpostsbytagquery)\>

#### Defined in

[sdk/src/posts/entry.ts:151](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L151)

___

### getEntries

**getEntries**(`opt`): `Promise`<[`GetEntriesQuery`](../modules/sdk.md#getentriesquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

`Promise`<[`GetEntriesQuery`](../modules/sdk.md#getentriesquery)\>

#### Defined in

[sdk/src/posts/entry.ts:58](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L58)

___

### getEntry

**getEntry**(`entryId`): `Promise`<[`GetEntryQuery`](../modules/sdk.md#getentryquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryId` | `string` |

#### Returns

`Promise`<[`GetEntryQuery`](../modules/sdk.md#getentryquery)\>

#### Defined in

[sdk/src/posts/entry.ts:48](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L48)

___

### getFeedEntries

**getFeedEntries**(`opt`): `Promise`<[`GetCustomFeedQuery`](../modules/sdk.md#getcustomfeedquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |

#### Returns

`Promise`<[`GetCustomFeedQuery`](../modules/sdk.md#getcustomfeedquery)\>

#### Defined in

[sdk/src/posts/entry.ts:200](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L200)

___

### getLinkPreview

**getLinkPreview**(`link`): `Promise`<[`GetLinkPreviewMutation`](../modules/sdk.md#getlinkpreviewmutation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `string` |

#### Returns

`Promise`<[`GetLinkPreviewMutation`](../modules/sdk.md#getlinkpreviewmutation)\>

#### Defined in

[sdk/src/posts/entry.ts:188](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L188)

___

### postEntry

**postEntry**(`opt`): `Promise`<`undefined` \| [`CreateEntryMutation`](../modules/sdk.md#createentrymutation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](../modules/sdk.md#dataproviderinput)[] |
| `opt.post` | `Object` |
| `opt.post.mentions?` | `string`[] |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`Promise`<`undefined` \| [`CreateEntryMutation`](../modules/sdk.md#createentrymutation)\>

#### Defined in

[sdk/src/posts/entry.ts:68](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L68)

___

### removeEntry

**removeEntry**(`entryID`): `Promise`<[`RemoveEntryMutation`](../modules/sdk.md#removeentrymutation)\>

Remove an entry's content by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryID` | `string` |

#### Returns

`Promise`<[`RemoveEntryMutation`](../modules/sdk.md#removeentrymutation)\>

#### Defined in

[sdk/src/posts/entry.ts:166](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L166)

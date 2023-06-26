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

[sdk](../namespaces/sdk.md).AWF_Entry

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

**editEntry**(`opt`): `Promise`<`undefined` \| [`EditEntryMutation`](../namespaces/sdk.md#editentrymutation)\>

Update an existing entry

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](../namespaces/sdk.md#dataproviderinput)[] |
| `opt.entryID` | `string` |
| `opt.post` | `Object` |
| `opt.post.mentions?` | `string`[] |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`Promise`<`undefined` \| [`EditEntryMutation`](../namespaces/sdk.md#editentrymutation)\>

#### Defined in

[sdk/src/posts/entry.ts:106](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L106)

___

### entriesByAuthor

**entriesByAuthor**(`opt`): `Promise`<[`GetPostsByAuthorQuery`](../namespaces/sdk.md#getpostsbyauthorquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |
| `opt.pubKey` | `string` |

#### Returns

`Promise`<[`GetPostsByAuthorQuery`](../namespaces/sdk.md#getpostsbyauthorquery)\>

#### Defined in

[sdk/src/posts/entry.ts:137](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L137)

___

### entriesByTag

**entriesByTag**(`opt`): `Promise`<[`GetPostsByTagQuery`](../namespaces/sdk.md#getpostsbytagquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.name` | `string` |
| `opt.offset?` | `number` |

#### Returns

`Promise`<[`GetPostsByTagQuery`](../namespaces/sdk.md#getpostsbytagquery)\>

#### Defined in

[sdk/src/posts/entry.ts:152](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L152)

___

### getEntries

**getEntries**(`opt`): `Promise`<[`GetEntriesQuery`](../namespaces/sdk.md#getentriesquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

`Promise`<[`GetEntriesQuery`](../namespaces/sdk.md#getentriesquery)\>

#### Defined in

[sdk/src/posts/entry.ts:59](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L59)

___

### getEntry

**getEntry**(`entryId`): `Promise`<[`GetEntryQuery`](../namespaces/sdk.md#getentryquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryId` | `string` |

#### Returns

`Promise`<[`GetEntryQuery`](../namespaces/sdk.md#getentryquery)\>

#### Defined in

[sdk/src/posts/entry.ts:49](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L49)

___

### getFeedEntries

**getFeedEntries**(`opt`): `Promise`<[`GetCustomFeedQuery`](../namespaces/sdk.md#getcustomfeedquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |

#### Returns

`Promise`<[`GetCustomFeedQuery`](../namespaces/sdk.md#getcustomfeedquery)\>

#### Defined in

[sdk/src/posts/entry.ts:201](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L201)

___

### getLinkPreview

**getLinkPreview**(`link`): `Promise`<[`GetLinkPreviewMutation`](../namespaces/sdk.md#getlinkpreviewmutation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `string` |

#### Returns

`Promise`<[`GetLinkPreviewMutation`](../namespaces/sdk.md#getlinkpreviewmutation)\>

#### Defined in

[sdk/src/posts/entry.ts:189](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L189)

___

### postEntry

**postEntry**(`opt`): `Promise`<`undefined` \| [`CreateEntryMutation`](../namespaces/sdk.md#createentrymutation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](../namespaces/sdk.md#dataproviderinput)[] |
| `opt.post` | `Object` |
| `opt.post.mentions?` | `string`[] |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`Promise`<`undefined` \| [`CreateEntryMutation`](../namespaces/sdk.md#createentrymutation)\>

#### Defined in

[sdk/src/posts/entry.ts:69](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L69)

___

### removeEntry

**removeEntry**(`entryID`): `Promise`<[`RemoveEntryMutation`](../namespaces/sdk.md#removeentrymutation)\>

Remove an entry's content by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryID` | `string` |

#### Returns

`Promise`<[`RemoveEntryMutation`](../namespaces/sdk.md#removeentrymutation)\>

#### Defined in

[sdk/src/posts/entry.ts:167](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/entry.ts#L167)

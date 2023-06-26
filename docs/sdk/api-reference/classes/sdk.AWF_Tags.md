---
id: "sdk.AWF_Tags"
title: "Class: AWF_Tags"
sidebar_label: "AWF_Tags"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).AWF_Tags

## Constructors

### constructor

**new AWF_Tags**(`log`, `gql`, `auth`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/posts/tags.ts:20](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L20)

## Methods

### createTag

**createTag**(`tagName`): `Promise`<[`CreateTagMutation`](../modules/sdk.md#createtagmutation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Promise`<[`CreateTagMutation`](../modules/sdk.md#createtagmutation)\>

#### Defined in

[sdk/src/posts/tags.ts:68](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L68)

___

### getTag

**getTag**(`tagName`): `Promise`<`undefined` \| { `data`: [`GetTagQuery`](../modules/sdk.md#gettagquery)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Promise`<`undefined` \| { `data`: [`GetTagQuery`](../modules/sdk.md#gettagquery)  }\>

#### Defined in

[sdk/src/posts/tags.ts:36](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L36)

___

### getTags

**getTags**(`opt`): `Promise`<[`GetTagsQuery`](../modules/sdk.md#gettagsquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

`Promise`<[`GetTagsQuery`](../modules/sdk.md#gettagsquery)\>

#### Defined in

[sdk/src/posts/tags.ts:50](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L50)

___

### getTrending

**getTrending**(): `Promise`<[`SearchTagsQuery`](../modules/sdk.md#searchtagsquery)\>

Returns most recent used tags

#### Returns

`Promise`<[`SearchTagsQuery`](../modules/sdk.md#searchtagsquery)\>

#### Defined in

[sdk/src/posts/tags.ts:91](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L91)

___

### searchTags

**searchTags**(`name`): `Promise`<[`SearchTagsQuery`](../modules/sdk.md#searchtagsquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`SearchTagsQuery`](../modules/sdk.md#searchtagsquery)\>

#### Defined in

[sdk/src/posts/tags.ts:59](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L59)

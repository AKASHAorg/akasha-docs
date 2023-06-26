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

[sdk](../namespaces/sdk.md).AWF_Tags

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

**createTag**(`tagName`): `Promise`<[`CreateTagMutation`](../namespaces/sdk.md#createtagmutation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Promise`<[`CreateTagMutation`](../namespaces/sdk.md#createtagmutation)\>

#### Defined in

[sdk/src/posts/tags.ts:69](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L69)

___

### getTag

**getTag**(`tagName`): `Promise`<`undefined` \| { `data`: [`GetTagQuery`](../namespaces/sdk.md#gettagquery)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Promise`<`undefined` \| { `data`: [`GetTagQuery`](../namespaces/sdk.md#gettagquery)  }\>

#### Defined in

[sdk/src/posts/tags.ts:37](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L37)

___

### getTags

**getTags**(`opt`): `Promise`<[`GetTagsQuery`](../namespaces/sdk.md#gettagsquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

`Promise`<[`GetTagsQuery`](../namespaces/sdk.md#gettagsquery)\>

#### Defined in

[sdk/src/posts/tags.ts:51](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L51)

___

### getTrending

**getTrending**(): `Promise`<[`SearchTagsQuery`](../namespaces/sdk.md#searchtagsquery)\>

Returns most recent used tags

#### Returns

`Promise`<[`SearchTagsQuery`](../namespaces/sdk.md#searchtagsquery)\>

#### Defined in

[sdk/src/posts/tags.ts:91](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L91)

___

### searchTags

**searchTags**(`name`): `Promise`<[`SearchTagsQuery`](../namespaces/sdk.md#searchtagsquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`SearchTagsQuery`](../namespaces/sdk.md#searchtagsquery)\>

#### Defined in

[sdk/src/posts/tags.ts:60](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/tags.ts#L60)

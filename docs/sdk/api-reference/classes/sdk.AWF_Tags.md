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

## Implements

- [`AWF_ITags`](../interfaces/typings.AWF_ITags.md)

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

[sdk/src/posts/tags.ts:27](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L27)

## Properties

### graphQLDocs

 `Readonly` **graphQLDocs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CreateTag` | `DocumentNode` |
| `GetTag` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetTags` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `SearchTags` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |

#### Defined in

[sdk/src/posts/tags.ts:26](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L26)

## Methods

### createTag

**createTag**(`tagName`): `Observable`<{ `data`: { `createTag`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Observable`<{ `data`: { `createTag`: `string`  }  }\>

#### Implementation of

[AWF_ITags](../interfaces/typings.AWF_ITags.md).[createTag](../interfaces/typings.AWF_ITags.md#createtag)

#### Defined in

[sdk/src/posts/tags.ts:88](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L88)

___

### getTag

**getTag**(`tagName`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getTag`: [`Tag_Response`](../interfaces/typings.Tag_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getTag`: [`Tag_Response`](../interfaces/typings.Tag_Response.md)  }\>

#### Implementation of

[AWF_ITags](../interfaces/typings.AWF_ITags.md).[getTag](../interfaces/typings.AWF_ITags.md#gettag)

#### Defined in

[sdk/src/posts/tags.ts:43](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L43)

___

### getTags

**getTags**(`opt`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `tags`: [`TagsResult_Response`](../interfaces/typings.TagsResult_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `tags`: [`TagsResult_Response`](../interfaces/typings.TagsResult_Response.md)  }\>

#### Implementation of

[AWF_ITags](../interfaces/typings.AWF_ITags.md).[getTags](../interfaces/typings.AWF_ITags.md#gettags)

#### Defined in

[sdk/src/posts/tags.ts:58](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L58)

___

### getTrending

**getTrending**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchTags`: [`SearchTagsResult_Response`](../interfaces/typings.SearchTagsResult_Response.md)[]  }\>

Returns most recent used tags

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchTags`: [`SearchTagsResult_Response`](../interfaces/typings.SearchTagsResult_Response.md)[]  }\>

#### Implementation of

[AWF_ITags](../interfaces/typings.AWF_ITags.md).[getTrending](../interfaces/typings.AWF_ITags.md#gettrending)

#### Defined in

[sdk/src/posts/tags.ts:124](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L124)

___

### searchTags

**searchTags**(`name`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchTags`: [`SearchTagsResult_Response`](../interfaces/typings.SearchTagsResult_Response.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchTags`: [`SearchTagsResult_Response`](../interfaces/typings.SearchTagsResult_Response.md)[]  }\>

#### Implementation of

[AWF_ITags](../interfaces/typings.AWF_ITags.md).[searchTags](../interfaces/typings.AWF_ITags.md#searchtags)

#### Defined in

[sdk/src/posts/tags.ts:73](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/posts/tags.ts#L73)

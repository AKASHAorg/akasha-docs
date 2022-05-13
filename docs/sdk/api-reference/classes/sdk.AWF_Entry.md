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

## Implements

- [`AWF_IEntry`](../interfaces/sdk.AWF_IEntry.md)

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

[sdk/src/posts/entry.ts:48](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L48)

## Properties

### graphQLDocs

 `Readonly` **graphQLDocs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CreateEntry` | `DocumentNode` |
| `EditEntry` | `DocumentNode` |
| `GetCustomFeed` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetEntries` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetEntry` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetLinkPreview` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetPostsByAuthor` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetPostsByTag` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `RemoveEntry` | `DocumentNode` |

#### Defined in

[sdk/src/posts/entry.ts:36](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L36)

## Methods

### editEntry

**editEntry**(`opt`): `Observable`<{ `data`: { `editPost`: `boolean`  }  }\>

Update an existing entry

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](../interfaces/sdk.DataProviderInput.md)[] |
| `opt.entryID` | `string` |
| `opt.post` | `Object` |
| `opt.post.mentions?` | `string`[] |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`Observable`<{ `data`: { `editPost`: `boolean`  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[editEntry](../interfaces/sdk.AWF_IEntry.md#editentry)

#### Defined in

[sdk/src/posts/entry.ts:149](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L149)

___

### entriesByAuthor

**entriesByAuthor**(`opt`): `Observable`<{ `data`: { `getPostsByAuthor`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |
| `opt.pubKey` | `string` |

#### Returns

`Observable`<{ `data`: { `getPostsByAuthor`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[entriesByAuthor](../interfaces/sdk.AWF_IEntry.md#entriesbyauthor)

#### Defined in

[sdk/src/posts/entry.ts:191](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L191)

___

### entriesByTag

**entriesByTag**(`opt`): `Observable`<{ `data`: { `getPostsByTag`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.name` | `string` |
| `opt.offset?` | `string` |

#### Returns

`Observable`<{ `data`: { `getPostsByTag`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[entriesByTag](../interfaces/sdk.AWF_IEntry.md#entriesbytag)

#### Defined in

[sdk/src/posts/entry.ts:216](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L216)

___

### getEntries

**getEntries**(`opt`): `Observable`<{ `data`: { `posts`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |

#### Returns

`Observable`<{ `data`: { `posts`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[getEntries](../interfaces/sdk.AWF_IEntry.md#getentries)

#### Defined in

[sdk/src/posts/entry.ts:84](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L84)

___

### getEntry

**getEntry**(`entryId`): `Observable`<{ `data`: { `getPost`: [`Post_Response`](../interfaces/sdk.Post_Response.md)  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryId` | `string` |

#### Returns

`Observable`<{ `data`: { `getPost`: [`Post_Response`](../interfaces/sdk.Post_Response.md)  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[getEntry](../interfaces/sdk.AWF_IEntry.md#getentry)

#### Defined in

[sdk/src/posts/entry.ts:64](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L64)

___

### getFeedEntries

**getFeedEntries**(`opt`): `Observable`<{ `data`: { `getCustomFeed`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `number` |

#### Returns

`Observable`<{ `data`: { `getCustomFeed`: [`PostsResult_Response`](../interfaces/sdk.PostsResult_Response.md)  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[getFeedEntries](../interfaces/sdk.AWF_IEntry.md#getfeedentries)

#### Defined in

[sdk/src/posts/entry.ts:299](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L299)

___

### getLinkPreview

**getLinkPreview**(`link`): `Observable`<{ `data`: { `getLinkPreview`: [`LinkPreview_Response`](../interfaces/sdk.LinkPreview_Response.md)  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `string` |

#### Returns

`Observable`<{ `data`: { `getLinkPreview`: [`LinkPreview_Response`](../interfaces/sdk.LinkPreview_Response.md)  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[getLinkPreview](../interfaces/sdk.AWF_IEntry.md#getlinkpreview)

#### Defined in

[sdk/src/posts/entry.ts:277](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L277)

___

### postEntry

**postEntry**(`opt`): `Observable`<{ `data`: { `createPost`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.data` | [`DataProviderInput`](../interfaces/sdk.DataProviderInput.md)[] |
| `opt.post` | `Object` |
| `opt.post.mentions?` | `string`[] |
| `opt.post.quotes?` | `string`[] |
| `opt.post.tags?` | `string`[] |
| `opt.post.title?` | `string` |

#### Returns

`Observable`<{ `data`: { `createPost`: `string`  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[postEntry](../interfaces/sdk.AWF_IEntry.md#postentry)

#### Defined in

[sdk/src/posts/entry.ts:104](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L104)

___

### removeEntry

**removeEntry**(`entryID`): `Observable`<{ `data`: { `removePost`: `boolean`  }  }\>

Remove an entry's content by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryID` | `string` |

#### Returns

`Observable`<{ `data`: { `removePost`: `boolean`  }  }\>

#### Implementation of

[AWF_IEntry](../interfaces/sdk.AWF_IEntry.md).[removeEntry](../interfaces/sdk.AWF_IEntry.md#removeentry)

#### Defined in

[sdk/src/posts/entry.ts:241](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/posts/entry.ts#L241)

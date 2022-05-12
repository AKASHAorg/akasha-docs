---
id: "sdk.AWF_Comments"
title: "Class: AWF_Comments"
sidebar_label: "AWF_Comments"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_Comments

## Implements

- [`AWF_IComments`](../interfaces/sdk.AWF_IComments.md)

## Constructors

### constructor

**new AWF_Comments**(`log`, `gql`, `auth`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | [`Gql`](sdk.Gql.md) |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/posts/comments.ts:39](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L39)

## Properties

### graphQLDocs

 `Readonly` **graphQLDocs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AddComment` | `DocumentNode` |
| `EditComment` | `DocumentNode` |
| `GetComment` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetComments` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `RemoveComment` | `DocumentNode` |

#### Defined in

[sdk/src/posts/comments.ts:31](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L31)

## Methods

### addComment

**addComment**(`opt`): `Observable`<{ `data`: { `addComment`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.comment` | `Object` |
| `opt.comment.mentions?` | `string`[] |
| `opt.comment.postID` | `string` |
| `opt.comment.replyTo?` | `string` |
| `opt.comment.tags?` | `string`[] |
| `opt.data` | [`DataProviderInput`](../interfaces/sdk.DataProviderInput.md)[] |

#### Returns

`Observable`<{ `data`: { `addComment`: `string`  }  }\>

#### Implementation of

[AWF_IComments](../interfaces/sdk.AWF_IComments.md).[addComment](../interfaces/sdk.AWF_IComments.md#addcomment)

#### Defined in

[sdk/src/posts/comments.ts:85](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L85)

___

### editComment

**editComment**(`opt`): `Observable`<{ `data`: { `editComment`: `boolean`  }  }\>

Update an existing comment

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.comment` | `Object` |
| `opt.comment.mentions?` | `string`[] |
| `opt.comment.postID` | `string` |
| `opt.comment.replyTo?` | `string` |
| `opt.comment.tags?` | `string`[] |
| `opt.commentID` | `string` |
| `opt.data` | [`DataProviderInput`](../interfaces/sdk.DataProviderInput.md)[] |

#### Returns

`Observable`<{ `data`: { `editComment`: `boolean`  }  }\>

#### Implementation of

[AWF_IComments](../interfaces/sdk.AWF_IComments.md).[editComment](../interfaces/sdk.AWF_IComments.md#editcomment)

#### Defined in

[sdk/src/posts/comments.ts:130](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L130)

___

### getComment

**getComment**(`commentID`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `getComment`: [`Comment_Response`](../interfaces/sdk.Comment_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `getComment`: [`Comment_Response`](../interfaces/sdk.Comment_Response.md)  }\>

#### Implementation of

[AWF_IComments](../interfaces/sdk.AWF_IComments.md).[getComment](../interfaces/sdk.AWF_IComments.md#getcomment)

#### Defined in

[sdk/src/posts/comments.ts:55](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L55)

___

### getComments

**getComments**(`opt`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `getComments`: [`Comments_Response`](../interfaces/sdk.Comments_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |
| `opt.postID` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `getComments`: [`Comments_Response`](../interfaces/sdk.Comments_Response.md)  }\>

#### Implementation of

[AWF_IComments](../interfaces/sdk.AWF_IComments.md).[getComments](../interfaces/sdk.AWF_IComments.md#getcomments)

#### Defined in

[sdk/src/posts/comments.ts:70](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L70)

___

### removeComment

**removeComment**(`commentID`): `Observable`<{ `data`: { `removeComment`: `boolean`  }  }\>

Remove a comment's data by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`Observable`<{ `data`: { `removeComment`: `boolean`  }  }\>

#### Implementation of

[AWF_IComments](../interfaces/sdk.AWF_IComments.md).[removeComment](../interfaces/sdk.AWF_IComments.md#removecomment)

#### Defined in

[sdk/src/posts/comments.ts:173](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/posts/comments.ts#L173)

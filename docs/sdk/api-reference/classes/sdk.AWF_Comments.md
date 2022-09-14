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

# sdk.api.comments

Comments Module

## Implements

- [`AWF_IComments`](../interfaces/typings.AWF_IComments.md)

## Constructors

### constructor

**new AWF_Comments**(`log`, `gql`, `auth`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/posts/comments.ts:43](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L43)

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

[sdk/src/posts/comments.ts:35](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L35)

## Methods

### addComment

**addComment**(`opt`): `Observable`<{ `data`: { `addComment`: `string`  }  }\>

Create a new comment

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.comment` | `Object` |
| `opt.comment.mentions?` | `string`[] |
| `opt.comment.postID` | `string` |
| `opt.comment.replyTo?` | `string` |
| `opt.comment.tags?` | `string`[] |
| `opt.data` | [`DataProviderInput`](../interfaces/typings.DataProviderInput.md)[] |

#### Returns

`Observable`<{ `data`: { `addComment`: `string`  }  }\>

#### Implementation of

[AWF_IComments](../interfaces/typings.AWF_IComments.md).[addComment](../interfaces/typings.AWF_IComments.md#addcomment)

#### Defined in

[sdk/src/posts/comments.ts:86](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L86)

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
| `opt.data` | [`DataProviderInput`](../interfaces/typings.DataProviderInput.md)[] |

#### Returns

`Observable`<{ `data`: { `editComment`: `boolean`  }  }\>

#### Implementation of

[AWF_IComments](../interfaces/typings.AWF_IComments.md).[editComment](../interfaces/typings.AWF_IComments.md#editcomment)

#### Defined in

[sdk/src/posts/comments.ts:130](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L130)

___

### getComment

**getComment**(`commentID`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getComment`: [`Comment_Response`](../interfaces/typings.Comment_Response.md)  }\>

Get comment data

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getComment`: [`Comment_Response`](../interfaces/typings.Comment_Response.md)  }\>

#### Implementation of

[AWF_IComments](../interfaces/typings.AWF_IComments.md).[getComment](../interfaces/typings.AWF_IComments.md#getcomment)

#### Defined in

[sdk/src/posts/comments.ts:58](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L58)

___

### getComments

**getComments**(`opt`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getComments`: [`Comments_Response`](../interfaces/typings.Comments_Response.md)  }\>

Get a list of comments for a post

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |
| `opt.postID` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getComments`: [`Comments_Response`](../interfaces/typings.Comments_Response.md)  }\>

#### Implementation of

[AWF_IComments](../interfaces/typings.AWF_IComments.md).[getComments](../interfaces/typings.AWF_IComments.md#getcomments)

#### Defined in

[sdk/src/posts/comments.ts:72](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L72)

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

[AWF_IComments](../interfaces/typings.AWF_IComments.md).[removeComment](../interfaces/typings.AWF_IComments.md#removecomment)

#### Defined in

[sdk/src/posts/comments.ts:172](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/posts/comments.ts#L172)

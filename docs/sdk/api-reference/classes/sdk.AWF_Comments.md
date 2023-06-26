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

[sdk/src/posts/comments.ts:34](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L34)

## Methods

### addComment

**addComment**(`opt`): `Promise`<`undefined` \| [`AddCommentMutation`](../namespaces/sdk.md#addcommentmutation)\>

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
| `opt.data` | [`DataProviderInput`](../namespaces/sdk.md#dataproviderinput)[] |

#### Returns

`Promise`<`undefined` \| [`AddCommentMutation`](../namespaces/sdk.md#addcommentmutation)\>

#### Defined in

[sdk/src/posts/comments.ts:103](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L103)

___

### editComment

**editComment**(`opt`): `Promise`<`undefined` \| [`EditCommentMutation`](../namespaces/sdk.md#editcommentmutation)\>

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
| `opt.data` | [`DataProviderInput`](../namespaces/sdk.md#dataproviderinput)[] |

#### Returns

`Promise`<`undefined` \| [`EditCommentMutation`](../namespaces/sdk.md#editcommentmutation)\>

#### Defined in

[sdk/src/posts/comments.ts:147](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L147)

___

### getComment

**getComment**(`commentID`): `Promise`<[`GetCommentQuery`](../namespaces/sdk.md#getcommentquery)\>

Get comment data

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`Promise`<[`GetCommentQuery`](../namespaces/sdk.md#getcommentquery)\>

#### Defined in

[sdk/src/posts/comments.ts:50](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L50)

___

### getComments

**getComments**(`opt`): `Promise`<[`GetCommentsQuery`](../namespaces/sdk.md#getcommentsquery)\>

Get a list of comments for a post

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |
| `opt.postID` | `string` |

#### Returns

`Promise`<[`GetCommentsQuery`](../namespaces/sdk.md#getcommentsquery)\>

#### Defined in

[sdk/src/posts/comments.ts:58](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L58)

___

### getReplies

**getReplies**(`opt`): `Promise`<[`GetRepliesQuery`](../namespaces/sdk.md#getrepliesquery)\>

Get a list of replies for a comment

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.commentID` | `string` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |
| `opt.postID` | `string` |

#### Returns

`Promise`<[`GetRepliesQuery`](../namespaces/sdk.md#getrepliesquery)\>

#### Defined in

[sdk/src/posts/comments.ts:75](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L75)

___

### removeComment

**removeComment**(`commentID`): `Promise`<[`RemoveCommentMutation`](../namespaces/sdk.md#removecommentmutation)\>

Remove a comment's data by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`Promise`<[`RemoveCommentMutation`](../namespaces/sdk.md#removecommentmutation)\>

#### Defined in

[sdk/src/posts/comments.ts:181](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L181)

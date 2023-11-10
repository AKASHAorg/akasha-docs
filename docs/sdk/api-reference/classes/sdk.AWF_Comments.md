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

[sdk](../modules/sdk.md).AWF_Comments

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

**addComment**(`opt`): `Promise`<`undefined` \| [`AddCommentMutation`](../modules/sdk.md#addcommentmutation)\>

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
| `opt.data` | [`DataProviderInput`](../modules/sdk.md#dataproviderinput)[] |

#### Returns

`Promise`<`undefined` \| [`AddCommentMutation`](../modules/sdk.md#addcommentmutation)\>

#### Defined in

[sdk/src/posts/comments.ts:92](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L92)

___

### editComment

**editComment**(`opt`): `Promise`<`undefined` \| [`EditCommentMutation`](../modules/sdk.md#editcommentmutation)\>

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
| `opt.data` | [`DataProviderInput`](../modules/sdk.md#dataproviderinput)[] |

#### Returns

`Promise`<`undefined` \| [`EditCommentMutation`](../modules/sdk.md#editcommentmutation)\>

#### Defined in

[sdk/src/posts/comments.ts:135](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L135)

___

### getComment

**getComment**(`commentID`): `Promise`<[`GetCommentQuery`](../modules/sdk.md#getcommentquery)\>

Get comment data

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`Promise`<[`GetCommentQuery`](../modules/sdk.md#getcommentquery)\>

#### Defined in

[sdk/src/posts/comments.ts:49](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L49)

___

### getComments

**getComments**(`opt`): `Promise`<[`GetCommentsQuery`](../modules/sdk.md#getcommentsquery)\>

Get a list of comments for a post

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |
| `opt.postID` | `string` |

#### Returns

`Promise`<[`GetCommentsQuery`](../modules/sdk.md#getcommentsquery)\>

#### Defined in

[sdk/src/posts/comments.ts:57](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L57)

___

### getReplies

**getReplies**(`opt`): `Promise`<[`GetRepliesQuery`](../modules/sdk.md#getrepliesquery)\>

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

`Promise`<[`GetRepliesQuery`](../modules/sdk.md#getrepliesquery)\>

#### Defined in

[sdk/src/posts/comments.ts:67](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L67)

___

### removeComment

**removeComment**(`commentID`): `Promise`<[`RemoveCommentMutation`](../modules/sdk.md#removecommentmutation)\>

Remove a comment's data by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`Promise`<[`RemoveCommentMutation`](../modules/sdk.md#removecommentmutation)\>

#### Defined in

[sdk/src/posts/comments.ts:180](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/posts/comments.ts#L180)

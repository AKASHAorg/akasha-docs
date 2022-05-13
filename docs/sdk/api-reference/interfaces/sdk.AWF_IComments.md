---
id: "sdk.AWF_IComments"
title: "Interface: AWF_IComments"
sidebar_label: "AWF_IComments"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IComments

## Implemented by

- [`AWF_Comments`](../classes/sdk.AWF_Comments.md)

## Methods

### addComment

**addComment**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.comment` | `Object` |
| `opt.comment.mentions?` | `string`[] |
| `opt.comment.postID` | `string` |
| `opt.comment.replyTo?` | `string` |
| `opt.comment.tags?` | `string`[] |
| `opt.data` | [`DataProviderInput`](sdk.DataProviderInput.md)[] |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:50

___

### editComment

**editComment**(`opt`): `unknown`

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
| `opt.data` | [`DataProviderInput`](sdk.DataProviderInput.md)[] |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:59

___

### getComment

**getComment**(`commentID`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:44

___

### getComments

**getComments**(`opt`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.limit` | `number` |
| `opt.offset?` | `string` |
| `opt.postID` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:45

___

### removeComment

**removeComment**(`commentID`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/posts.d.ts:69

---
id: "sdk.AWF_Profile"
title: "Class: AWF_Profile"
sidebar_label: "AWF_Profile"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).AWF_Profile

## Constructors

### constructor

**new AWF_Profile**(`gql`, `auth`, `ipfs`, `ceramic`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `ipfs` | [`AWF_IpfsConnector`](sdk.AWF_IpfsConnector.md) |
| `ceramic` | [`default`](sdk.default.md) |

#### Defined in

[sdk/src/profiles/index.ts:25](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/profiles/index.ts#L25)

## Properties

### \_ceramic

 `Readonly` **\_ceramic**: [`default`](sdk.default.md)

#### Defined in

[sdk/src/profiles/index.ts:23](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/profiles/index.ts#L23)

## Methods

### getProfileStats

**getProfileStats**(`id`): `Promise`<{ `data`: { `totalBeams`: `number` = 0; `totalFollowers`: `number` = 0; `totalFollowing`: `number` = 0; `totalReflections`: `number` = 0; `totalTopics`: `number` = 0 }  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | DID string of the profile |

#### Returns

`Promise`<{ `data`: { `totalBeams`: `number` = 0; `totalFollowers`: `number` = 0; `totalFollowing`: `number` = 0; `totalReflections`: `number` = 0; `totalTopics`: `number` = 0 }  }\>

#### Defined in

[sdk/src/profiles/index.ts:41](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/profiles/index.ts#L41)

___

### saveMediaFile

**saveMediaFile**(`data`): `Promise`<{ `CID`: `string` = cid; `blob`: `Blob` = resized.image; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = resized.size }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | media file data |
| `data.config?` | `Object` | - |
| `data.config.autoRotate?` | `boolean` | - |
| `data.config.maxHeight` | `number` | - |
| `data.config.maxWidth` | `number` | - |
| `data.config.mimeType?` | `string` | - |
| `data.config.quality?` | `number` | - |
| `data.content` | `any` | - |
| `data.isUrl?` | `boolean` | - |
| `data.name?` | `string` | - |

#### Returns

`Promise`<{ `CID`: `string` = cid; `blob`: `Blob` = resized.image; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = resized.size }\>

#### Defined in

[sdk/src/profiles/index.ts:83](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/profiles/index.ts#L83)

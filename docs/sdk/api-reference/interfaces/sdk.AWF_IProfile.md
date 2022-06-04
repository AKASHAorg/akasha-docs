---
id: "sdk.AWF_IProfile"
title: "Interface: AWF_IProfile"
sidebar_label: "AWF_IProfile"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IProfile

## Implemented by

- [`AWF_Profile`](../classes/sdk.AWF_Profile.md)

## Properties

### graphQLDocs

**graphQLDocs**: `Object`

#### Type declaration

| Name                  | Type  |
| :-------------------- | :---- |
| `AddProfileProvider`  | `any` |
| `Follow`              | `any` |
| `GetProfile`          | `any` |
| `GlobalSearch`        | `any` |
| `IsFollowing`         | `any` |
| `MakeDefaultProvider` | `any` |
| `RegisterUsername`    | `any` |
| `ResolveProfile`      | `any` |
| `SaveMetaData`        | `any` |
| `SearchProfiles`      | `any` |
| `UnFollow`            | `any` |

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:4

## Methods

### addProfileProvider

**addProfileProvider**(`opt`): `unknown`

#### Parameters

| Name  | Type                                              |
| :---- | :------------------------------------------------ |
| `opt` | [`DataProviderInput`](sdk.DataProviderInput.md)[] |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:21

---

### follow

**follow**(`ethAddress`): `unknown`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `ethAddress` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:45

---

### getFollowers

**getFollowers**(`pubKey`, `limit`, `offset?`): `unknown`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `pubKey`  | `string` |
| `limit`   | `number` |
| `offset?` | `number` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:117

---

### getFollowing

**getFollowing**(`pubKey`, `limit`, `offset?`): `unknown`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `pubKey`  | `string` |
| `limit`   | `number` |
| `offset?` | `number` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:124

---

### getInterests

**getInterests**(`pubKey`): `unknown`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `pubKey` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:129

---

### getProfile

**getProfile**(`opt`): `unknown`

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `opt`             | `Object`   |
| `opt.ethAddress?` | `string`   |
| `opt.fields?`     | `string`[] |
| `opt.pubKey?`     | `string`   |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:36

---

### getTagSubscriptions

**getTagSubscriptions**(): `unknown`

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:100

---

### getTrending

**getTrending**(): `unknown`

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:91

---

### globalSearch

**globalSearch**(`keyword`): `unknown`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `keyword` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:110

---

### isFollowing

**isFollowing**(`opt`): `unknown`

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `opt`           | `Object` |
| `opt.follower`  | `string` |
| `opt.following` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:55

---

### isSubscribedToTag

**isSubscribedToTag**(`tagName`): `unknown`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tagName` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:105

---

### makeDefaultProvider

**makeDefaultProvider**(`opt`): `unknown`

#### Parameters

| Name  | Type                                              |
| :---- | :------------------------------------------------ |
| `opt` | [`DataProviderInput`](sdk.DataProviderInput.md)[] |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:26

---

### registerUserName

**registerUserName**(`userName`): `unknown`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `userName` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:31

---

### saveMediaFile

**saveMediaFile**(`data`): `Promise`<{ `CID`: `string` ; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number` } }\>

#### Parameters

| Name                      | Type      |
| :------------------------ | :-------- |
| `data`                    | `Object`  |
| `data.config?`            | `Object`  |
| `data.config.autoRotate?` | `boolean` |
| `data.config.maxHeight`   | `number`  |
| `data.config.maxWidth`    | `number`  |
| `data.config.mimeType?`   | `string`  |
| `data.config.quality?`    | `number`  |
| `data.content`            | `any`     |
| `data.isUrl?`             | `boolean` |
| `data.name?`              | `string`  |

#### Returns

`Promise`<{ `CID`: `string` ; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number` } }\>

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:63

---

### searchProfiles

**searchProfiles**(`name`): `unknown`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:87

---

### toggleTagSubscription

**toggleTagSubscription**(`tagName`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `tagName` | `string` |

#### Returns

`void`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:96

---

### unFollow

**unFollow**(`ethAddress`): `unknown`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `ethAddress` | `string` |

#### Returns

`unknown`

#### Defined in

sdk/typings/lib/interfaces/profile.d.ts:50

---
id: "sdk.AWF_IAuth"
title: "Interface: AWF_IAuth"
sidebar_label: "AWF_IAuth"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IAuth

Auth API

## Implemented by

- [`AWF_Auth`](../classes/sdk.AWF_Auth.md)

## Methods

### authenticateMutationData

**authenticateMutationData**(`data`): `Observable`<{ `signedData`: `unknown` ; `token`: `unknown` }\>

#### Parameters

| Name   | Type                                                                           |
| :----- | :----------------------------------------------------------------------------- |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] |

#### Returns

`Observable`<{ `signedData`: `unknown` ; `token`: `unknown` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:52

---

### checkIfSignedUp

**checkIfSignedUp**(`ethAddress`): `Observable`<`unknown`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `ethAddress` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:13

---

### decryptMessage

**decryptMessage**(`message`): `Observable`<{ `data`: { `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number` } }\>

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `message` | `any` |

#### Returns

`Observable`<{ `data`: { `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number` } }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:56

---

### deleteMessage

**deleteMessage**(`messageId`): `Observable`<{ `data`: `boolean` }\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `messageId` | `string` |

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:74

---

### enableSync

**enableSync**(): `void`

enable key sync between opened tabs

#### Returns

`void`

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:12

---

### getCurrentUser

**getCurrentUser**(): `Observable`<{ `data`: [`CurrentUser`](sdk.CurrentUser.md) }\>

#### Returns

`Observable`<{ `data`: [`CurrentUser`](sdk.CurrentUser.md) }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:32

---

### getMessages

**getMessages**(`args`): `Observable`<{ `data`: [`IMessage`](sdk.IMessage.md)[] }\>

#### Parameters

| Name   | Type               |
| :----- | :----------------- |
| `args` | `InboxListOptions` |

#### Returns

`Observable`<{ `data`: [`IMessage`](sdk.IMessage.md)[] }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:65

---

### getSession

**getSession**(): `Observable`<{ `data`: { `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users` } }\>

#### Returns

`Observable`<{ `data`: { `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users` } }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:22

---

### getToken

**getToken**(): `Observable`<{ `data`: `string` }\>

#### Returns

`Observable`<{ `data`: `string` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:29

---

### hasNewNotifications

**hasNewNotifications**(): `Observable`<{ `data`: `boolean` }\>

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:68

---

### markMessageAsRead

**markMessageAsRead**(`messageId`): `Observable`<{ `data`: `boolean` }\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `messageId` | `string` |

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:71

---

### signData

**signData**(`data`, `base64Format?`): `Observable`<{ `data`: { `pubKey`: `string` ; `serializedData`: `unknown` ; `signature`: `string` \| `Uint8Array` } }\>

#### Parameters

| Name            | Type                                                                           |
| :-------------- | :----------------------------------------------------------------------------- |
| `data`          | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] |
| `base64Format?` | `boolean`                                                                      |

#### Returns

`Observable`<{ `data`: { `pubKey`: `string` ; `serializedData`: `unknown` ; `signature`: `string` \| `Uint8Array` } }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:38

---

### signIn

**signIn**(`args`): `Observable`<{ `data`: [`CurrentUser`](sdk.CurrentUser.md) & { `isNewUser`: `boolean` } }\>

#### Parameters

| Name                   | Type                                           |
| :--------------------- | :--------------------------------------------- |
| `args`                 | `Object`                                       |
| `args.checkRegistered` | `boolean`                                      |
| `args.provider?`       | [`EthProviders`](../enums/sdk.EthProviders.md) |

#### Returns

`Observable`<{ `data`: [`CurrentUser`](sdk.CurrentUser.md) & { `isNewUser`: `boolean` } }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:14

---

### signOut

**signOut**(): `Observable`<{ `data`: `boolean` }\>

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:35

---

### validateInvite

**validateInvite**(`inviteCode`): `Observable`<{ `data`: `boolean` }\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `inviteCode` | `string` |

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:77

---

### verifySignature

**verifySignature**(`args`): `Observable`<{ `data`: `boolean` }\>

#### Parameters

| Name             | Type                                                       |
| :--------------- | :--------------------------------------------------------- |
| `args`           | `Object`                                                   |
| `args.data`      | `string` \| `Record`<`string`, `unknown`\> \| `Uint8Array` |
| `args.pubKey`    | `string`                                                   |
| `args.signature` | `string` \| `Uint8Array`                                   |

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Defined in

sdk/typings/lib/interfaces/auth.d.ts:45

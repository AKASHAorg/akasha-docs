---
id: "sdk.AWF_Auth"
title: "Class: AWF_Auth"
sidebar_label: "AWF_Auth"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_Auth

# sdk.api.auth

Authentication module

## Implements

- [`AWF_IAuth`](../interfaces/sdk.AWF_IAuth.md)

## Constructors

### constructor

**new AWF_Auth**(`db`, `web3`, `globalChannel`, `log`, `settings`, `gql`)

#### Parameters

| Name            | Type                                    |
| :-------------- | :-------------------------------------- |
| `db`            | [`DB`](sdk.DB.md)                       |
| `web3`          | [`Web3Connector`](sdk.Web3Connector.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md)           |
| `log`           | [`Logging`](sdk.Logging.md)             |
| `settings`      | [`Settings`](sdk.Settings.md)           |
| `gql`           | `Gql`                                   |

#### Defined in

[sdk/src/auth/index.ts:72](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L72)

## Properties

### SIGN_OUT_EVENT

`Readonly` **SIGN_OUT_EVENT**: `"@sign_out"`

#### Defined in

[sdk/src/auth/index.ts:70](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L70)

---

### SYNC_CHANNEL

`Readonly` **SYNC_CHANNEL**: `"@sync_data"`

#### Defined in

[sdk/src/auth/index.ts:69](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L69)

---

### SYNC_REQUEST

`Readonly` **SYNC_REQUEST**: `"@sync_request"`

#### Defined in

[sdk/src/auth/index.ts:67](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L67)

---

### SYNC_RESPONSE

`Readonly` **SYNC_RESPONSE**: `"@sync_response"`

#### Defined in

[sdk/src/auth/index.ts:68](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L68)

---

### currentUserKey

`Readonly` **currentUserKey**: `"@currentUserType"`

#### Defined in

[sdk/src/auth/index.ts:66](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L66)

---

### encoder

`Readonly` **encoder**: `TextEncoder`

#### Defined in

[sdk/src/auth/index.ts:71](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L71)

---

### providerKey

`Readonly` **providerKey**: `"@providerType"`

#### Defined in

[sdk/src/auth/index.ts:65](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L65)

---

### waitForAuth

`Readonly` **waitForAuth**: `"waitForAuth"`

#### Defined in

[sdk/src/auth/index.ts:64](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L64)

## Methods

### \_connectAddress

**\_connectAddress**(`provider`): `Promise`<`string`\>

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `provider` | [`EthProviders`](../enums/sdk.EthProviders.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[sdk/src/auth/index.ts:278](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L278)

---

### authenticateMutationData

**authenticateMutationData**(`data`): `Observable`<{ `signedData`: { `data`: { `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig } } ; `token`: { `data`: `string` } }\>

Utility method for sending mutation graphql requests

#### Parameters

| Name   | Type                                                                           |
| :----- | :----------------------------------------------------------------------------- |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] |

#### Returns

`Observable`<{ `signedData`: { `data`: { `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig } } ; `token`: { `data`: `string` } }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[authenticateMutationData](../interfaces/sdk.AWF_IAuth.md#authenticatemutationdata)

#### Defined in

[sdk/src/auth/index.ts:551](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L551)

---

### checkIfSignedUp

**checkIfSignedUp**(`ethAddress`): `Observable`<{ `data`: { `errors?`: `never` } }\>

Verifies if an ethereum address is already registered
Throws an UserNotRegistered error for addresses that are not registered

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `ethAddress` | `string` |

#### Returns

`Observable`<{ `data`: { `errors?`: `never` } }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[checkIfSignedUp](../interfaces/sdk.AWF_IAuth.md#checkifsignedup)

#### Defined in

[sdk/src/auth/index.ts:133](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L133)

---

### connectAddress

**connectAddress**(`provider`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `provider` | [`EthProviders`](../enums/sdk.EthProviders.md) |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Defined in

[sdk/src/auth/index.ts:293](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L293)

---

### decryptMessage

**decryptMessage**(`message`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number` }\>

Allows decryption of privately sent messages to the current identity

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `message` | `any` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number` }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[decryptMessage](../interfaces/sdk.AWF_IAuth.md#decryptmessage)

#### Defined in

[sdk/src/auth/index.ts:563](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L563)

---

### deleteMessage

**deleteMessage**(`messageId`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `messageId` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[deleteMessage](../interfaces/sdk.AWF_IAuth.md#deletemessage)

#### Defined in

[sdk/src/auth/index.ts:659](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L659)

---

### enableSync

**enableSync**(): `void`

enable key sync between opened tabs

#### Returns

`void`

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[enableSync](../interfaces/sdk.AWF_IAuth.md#enablesync)

#### Defined in

[sdk/src/auth/index.ts:92](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L92)

---

### getCurrentUser

**getCurrentUser**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md)\>

Returns the currently logged in user object
It will try to login if there is a previous session detected

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md)\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getCurrentUser](../interfaces/sdk.AWF_IAuth.md#getcurrentuser)

#### Defined in

[sdk/src/auth/index.ts:433](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L433)

---

### getMessages

**getMessages**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`IMessage`](../interfaces/sdk.IMessage.md)[]\>

Returns all the inbox messages from Textile Users

#### Parameters

| Name   | Type               | Description      |
| :----- | :----------------- | :--------------- |
| `args` | `InboxListOptions` | InboxListOptions |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`IMessage`](../interfaces/sdk.IMessage.md)[]\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getMessages](../interfaces/sdk.AWF_IAuth.md#getmessages)

#### Defined in

[sdk/src/auth/index.ts:589](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L589)

---

### getSession

**getSession**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users` }\>

Returns current session objects for textile

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users` }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getSession](../interfaces/sdk.AWF_IAuth.md#getsession)

#### Defined in

[sdk/src/auth/index.ts:386](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L386)

---

### getToken

**getToken**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

Generate a textile access token

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getToken](../interfaces/sdk.AWF_IAuth.md#gettoken)

#### Defined in

[sdk/src/auth/index.ts:413](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L413)

---

### hasNewNotifications

**hasNewNotifications**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

Checks the Textile Users inbox and looks for specific
notification message type

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[hasNewNotifications](../interfaces/sdk.AWF_IAuth.md#hasnewnotifications)

#### Defined in

[sdk/src/auth/index.ts:628](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L628)

---

### markMessageAsRead

**markMessageAsRead**(`messageId`): `Observable`<{ `data`: `boolean` }\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `messageId` | `string` |

#### Returns

`Observable`<{ `data`: `boolean` }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[markMessageAsRead](../interfaces/sdk.AWF_IAuth.md#markmessageasread)

#### Defined in

[sdk/src/auth/index.ts:639](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L639)

---

### signAuthMessage

**signAuthMessage**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:297](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L297)

---

### signComposedMessage

**signComposedMessage**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:312](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L312)

---

### signData

**signData**(`data`, `base64Format?`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }\>

Sign data with the identity key

#### Parameters

| Name           | Type                                                                           | Default value |
| :------------- | :----------------------------------------------------------------------------- | :------------ |
| `data`         | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] | `undefined`   |
| `base64Format` | `boolean`                                                                      | `false`       |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[signData](../interfaces/sdk.AWF_IAuth.md#signdata)

#### Defined in

[sdk/src/auth/index.ts:485](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L485)

---

### signIn

**signIn**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md) & { `isNewUser`: `boolean` }\>

#### Parameters

| Name                   | Type                                           |
| :--------------------- | :--------------------------------------------- |
| `args`                 | `Object`                                       |
| `args.checkRegistered` | `boolean`                                      |
| `args.provider?`       | [`EthProviders`](../enums/sdk.EthProviders.md) |
| `args.resumeSignIn?`   | `boolean`                                      |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md) & { `isNewUser`: `boolean` }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[signIn](../interfaces/sdk.AWF_IAuth.md#signin)

#### Defined in

[sdk/src/auth/index.ts:154](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L154)

---

### signOut

**signOut**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

Destroy all the session objects

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[signOut](../interfaces/sdk.AWF_IAuth.md#signout)

#### Defined in

[sdk/src/auth/index.ts:457](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L457)

---

### signTokenMessage

**signTokenMessage**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:331](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L331)

---

### validateInvite

**validateInvite**(`inviteCode`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `inviteCode` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[validateInvite](../interfaces/sdk.AWF_IAuth.md#validateinvite)

#### Defined in

[sdk/src/auth/index.ts:672](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L672)

---

### verifySignature

**verifySignature**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

Verify if a signature was made by a specific Public Key

#### Parameters

| Name             | Type                                                       |
| :--------------- | :--------------------------------------------------------- |
| `args`           | `Object`                                                   |
| `args.data`      | `string` \| `Record`<`string`, `unknown`\> \| `Uint8Array` |
| `args.pubKey`    | `string`                                                   |
| `args.signature` | `string` \| `Uint8Array`                                   |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[verifySignature](../interfaces/sdk.AWF_IAuth.md#verifysignature)

#### Defined in

[sdk/src/auth/index.ts:515](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/auth/index.ts#L515)

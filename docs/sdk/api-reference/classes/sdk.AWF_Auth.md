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

## Implements

- [`AWF_IAuth`](../interfaces/sdk.AWF_IAuth.md)

## Constructors

### constructor

**new AWF_Auth**(`db`, `web3`, `globalChannel`, `log`, `settings`, `gql`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`DB`](sdk.DB.md) |
| `web3` | [`Web3Connector`](sdk.Web3Connector.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |
| `log` | [`Logging`](sdk.Logging.md) |
| `settings` | [`Settings`](sdk.Settings.md) |
| `gql` | [`Gql`](sdk.Gql.md) |

#### Defined in

[sdk/src/auth/index.ts:65](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L65)

## Properties

### SIGN\_OUT\_EVENT

 `Readonly` **SIGN\_OUT\_EVENT**: ``"@sign_out"``

#### Defined in

[sdk/src/auth/index.ts:63](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L63)

___

### SYNC\_CHANNEL

 `Readonly` **SYNC\_CHANNEL**: ``"@sync_data"``

#### Defined in

[sdk/src/auth/index.ts:62](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L62)

___

### SYNC\_REQUEST

 `Readonly` **SYNC\_REQUEST**: ``"@sync_request"``

#### Defined in

[sdk/src/auth/index.ts:60](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L60)

___

### SYNC\_RESPONSE

 `Readonly` **SYNC\_RESPONSE**: ``"@sync_response"``

#### Defined in

[sdk/src/auth/index.ts:61](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L61)

___

### currentUserKey

 `Readonly` **currentUserKey**: ``"@currentUserType"``

#### Defined in

[sdk/src/auth/index.ts:59](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L59)

___

### encoder

 `Readonly` **encoder**: `TextEncoder`

#### Defined in

[sdk/src/auth/index.ts:64](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L64)

___

### providerKey

 `Readonly` **providerKey**: ``"@providerType"``

#### Defined in

[sdk/src/auth/index.ts:58](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L58)

___

### waitForAuth

 `Readonly` **waitForAuth**: ``"waitForAuth"``

#### Defined in

[sdk/src/auth/index.ts:57](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L57)

## Methods

### \_connectAddress

**_connectAddress**(`provider`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`EthProviders`](../enums/sdk.EthProviders.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[sdk/src/auth/index.ts:271](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L271)

___

### authenticateMutationData

**authenticateMutationData**(`data`): `Observable`<{ `signedData`: { `data`: { `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }  } ; `token`: { `data`: `string`  }  }\>

Utility method for sending mutation graphql requests

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] |

#### Returns

`Observable`<{ `signedData`: { `data`: { `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }  } ; `token`: { `data`: `string`  }  }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[authenticateMutationData](../interfaces/sdk.AWF_IAuth.md#authenticatemutationdata)

#### Defined in

[sdk/src/auth/index.ts:544](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L544)

___

### checkIfSignedUp

**checkIfSignedUp**(`ethAddress`): `Observable`<{ `data`: { `errors?`: `never`  }  }\>

Verifies if an ethereum address is already registered
Throws an UserNotRegistered error for addresses that are not registered

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Observable`<{ `data`: { `errors?`: `never`  }  }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[checkIfSignedUp](../interfaces/sdk.AWF_IAuth.md#checkifsignedup)

#### Defined in

[sdk/src/auth/index.ts:126](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L126)

___

### connectAddress

**connectAddress**(`provider`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`EthProviders`](../enums/sdk.EthProviders.md) |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Defined in

[sdk/src/auth/index.ts:286](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L286)

___

### decryptMessage

**decryptMessage**(`message`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number`  }\>

Allows decryption of privately sent messages to the current identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[decryptMessage](../interfaces/sdk.AWF_IAuth.md#decryptmessage)

#### Defined in

[sdk/src/auth/index.ts:556](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L556)

___

### deleteMessage

**deleteMessage**(`messageId`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[deleteMessage](../interfaces/sdk.AWF_IAuth.md#deletemessage)

#### Defined in

[sdk/src/auth/index.ts:652](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L652)

___

### enableSync

**enableSync**(): `void`

enable key sync between opened tabs

#### Returns

`void`

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[enableSync](../interfaces/sdk.AWF_IAuth.md#enablesync)

#### Defined in

[sdk/src/auth/index.ts:85](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L85)

___

### getCurrentUser

**getCurrentUser**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md)\>

Returns the currently logged in user object
It will try to login if there is a previous session detected

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md)\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getCurrentUser](../interfaces/sdk.AWF_IAuth.md#getcurrentuser)

#### Defined in

[sdk/src/auth/index.ts:426](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L426)

___

### getMessages

**getMessages**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`IMessage`](../interfaces/sdk.IMessage.md)[]\>

Returns all the inbox messages from Textile Users

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `InboxListOptions` | InboxListOptions |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`IMessage`](../interfaces/sdk.IMessage.md)[]\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getMessages](../interfaces/sdk.AWF_IAuth.md#getmessages)

#### Defined in

[sdk/src/auth/index.ts:582](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L582)

___

### getSession

**getSession**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users`  }\>

Returns current session objects for textile

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getSession](../interfaces/sdk.AWF_IAuth.md#getsession)

#### Defined in

[sdk/src/auth/index.ts:379](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L379)

___

### getToken

**getToken**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

Generate a textile access token

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[getToken](../interfaces/sdk.AWF_IAuth.md#gettoken)

#### Defined in

[sdk/src/auth/index.ts:406](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L406)

___

### hasNewNotifications

**hasNewNotifications**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

Checks the Textile Users inbox and looks for specific
notification message type

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[hasNewNotifications](../interfaces/sdk.AWF_IAuth.md#hasnewnotifications)

#### Defined in

[sdk/src/auth/index.ts:621](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L621)

___

### markMessageAsRead

**markMessageAsRead**(`messageId`): `Observable`<{ `data`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

`Observable`<{ `data`: `boolean`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[markMessageAsRead](../interfaces/sdk.AWF_IAuth.md#markmessageasread)

#### Defined in

[sdk/src/auth/index.ts:632](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L632)

___

### signAuthMessage

**signAuthMessage**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:290](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L290)

___

### signComposedMessage

**signComposedMessage**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:305](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L305)

___

### signData

**signData**(`data`, `base64Format?`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }\>

Sign data with the identity key

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] | `undefined` |
| `base64Format` | `boolean` | `false` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<{ `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[signData](../interfaces/sdk.AWF_IAuth.md#signdata)

#### Defined in

[sdk/src/auth/index.ts:478](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L478)

___

### signIn

**signIn**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md) & { `isNewUser`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.checkRegistered` | `boolean` |
| `args.provider?` | [`EthProviders`](../enums/sdk.EthProviders.md) |
| `args.resumeSignIn?` | `boolean` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`CurrentUser`](../interfaces/sdk.CurrentUser.md) & { `isNewUser`: `boolean`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[signIn](../interfaces/sdk.AWF_IAuth.md#signin)

#### Defined in

[sdk/src/auth/index.ts:147](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L147)

___

### signOut

**signOut**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

Destroy all the session objects

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[signOut](../interfaces/sdk.AWF_IAuth.md#signout)

#### Defined in

[sdk/src/auth/index.ts:450](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L450)

___

### signTokenMessage

**signTokenMessage**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:324](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L324)

___

### validateInvite

**validateInvite**(`inviteCode`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[validateInvite](../interfaces/sdk.AWF_IAuth.md#validateinvite)

#### Defined in

[sdk/src/auth/index.ts:665](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L665)

___

### verifySignature

**verifySignature**(`args`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

Verify if a signature was made by a specific Public Key

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.data` | `string` \| `Record`<`string`, `unknown`\> \| `Uint8Array` |
| `args.pubKey` | `string` |
| `args.signature` | `string` \| `Uint8Array` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/sdk.AWF_IAuth.md).[verifySignature](../interfaces/sdk.AWF_IAuth.md#verifysignature)

#### Defined in

[sdk/src/auth/index.ts:508](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/auth/index.ts#L508)

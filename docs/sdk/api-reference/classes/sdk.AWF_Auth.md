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

- [`AWF_IAuth`](../interfaces/typings.AWF_IAuth.md)

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
| `gql` | `Gql` |

#### Defined in

[sdk/src/auth/index.ts:75](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L75)

## Properties

### SIGN\_OUT\_EVENT

 `Readonly` **SIGN\_OUT\_EVENT**: ``"@sign_out"``

#### Defined in

[sdk/src/auth/index.ts:73](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L73)

___

### SYNC\_CHANNEL

 `Readonly` **SYNC\_CHANNEL**: ``"@sync_data"``

#### Defined in

[sdk/src/auth/index.ts:72](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L72)

___

### SYNC\_REQUEST

 `Readonly` **SYNC\_REQUEST**: ``"@sync_request"``

#### Defined in

[sdk/src/auth/index.ts:70](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L70)

___

### SYNC\_RESPONSE

 `Readonly` **SYNC\_RESPONSE**: ``"@sync_response"``

#### Defined in

[sdk/src/auth/index.ts:71](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L71)

___

### currentUserKey

 `Readonly` **currentUserKey**: ``"@currentUserType"``

#### Defined in

[sdk/src/auth/index.ts:69](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L69)

___

### encoder

 `Readonly` **encoder**: `TextEncoder`

#### Defined in

[sdk/src/auth/index.ts:74](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L74)

___

### providerKey

 `Readonly` **providerKey**: ``"@providerType"``

#### Defined in

[sdk/src/auth/index.ts:68](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L68)

___

### waitForAuth

 `Readonly` **waitForAuth**: ``"waitForAuth"``

#### Defined in

[sdk/src/auth/index.ts:67](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L67)

## Methods

### \_connectAddress

**_connectAddress**(`provider`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`EthProviders`](../enums/typings.EthProviders.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[sdk/src/auth/index.ts:281](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L281)

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

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[authenticateMutationData](../interfaces/typings.AWF_IAuth.md#authenticatemutationdata)

#### Defined in

[sdk/src/auth/index.ts:566](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L566)

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

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[checkIfSignedUp](../interfaces/typings.AWF_IAuth.md#checkifsignedup)

#### Defined in

[sdk/src/auth/index.ts:136](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L136)

___

### connectAddress

**connectAddress**(`provider`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`EthProviders`](../enums/typings.EthProviders.md) |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Defined in

[sdk/src/auth/index.ts:296](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L296)

___

### decryptMessage

**decryptMessage**(`message`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number` ; `to`: `string`  }\>

Allows decryption of privately sent messages to the current identity

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `body`: `Record`<`string`, `any`\> ; `createdAt`: `number` ; `from`: `string` ; `id`: `string` ; `readAt`: `number` ; `to`: `string`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[decryptMessage](../interfaces/typings.AWF_IAuth.md#decryptmessage)

#### Defined in

[sdk/src/auth/index.ts:578](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L578)

___

### deleteMessage

**deleteMessage**(`messageId`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[deleteMessage](../interfaces/typings.AWF_IAuth.md#deletemessage)

#### Defined in

[sdk/src/auth/index.ts:714](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L714)

___

### enableSync

**enableSync**(): `void`

enable key sync between opened tabs

#### Returns

`void`

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[enableSync](../interfaces/typings.AWF_IAuth.md#enablesync)

#### Defined in

[sdk/src/auth/index.ts:95](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L95)

___

### getConversation

**getConversation**(`pubKey`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[sdk/src/auth/index.ts:660](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L660)

___

### getCurrentUser

**getCurrentUser**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`CurrentUser`](../interfaces/typings.CurrentUser.md)\>

Returns the currently logged in user object
It will try to login if there is a previous session detected

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`CurrentUser`](../interfaces/typings.CurrentUser.md)\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[getCurrentUser](../interfaces/typings.AWF_IAuth.md#getcurrentuser)

#### Defined in

[sdk/src/auth/index.ts:448](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L448)

___

### getMessages

**getMessages**(`args`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`IMessage`](../interfaces/typings.IMessage.md)[]\>

Returns all the inbox messages from Textile Users

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `InboxListOptions` | InboxListOptions |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`IMessage`](../interfaces/typings.IMessage.md)[]\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[getMessages](../interfaces/typings.AWF_IAuth.md#getmessages)

#### Defined in

[sdk/src/auth/index.ts:624](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L624)

___

### getSession

**getSession**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users`  }\>

Returns current session objects for textile

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `buck`: `Buckets` ; `client`: `Client` ; `user`: `Users`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[getSession](../interfaces/typings.AWF_IAuth.md#getsession)

#### Defined in

[sdk/src/auth/index.ts:401](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L401)

___

### getTextileUsage

**getTextileUsage**(`options?`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`GetUsageResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `unknown` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`GetUsageResponse`\>

#### Defined in

[sdk/src/auth/index.ts:719](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L719)

___

### getToken

**getToken**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

Generate a textile access token

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[getToken](../interfaces/typings.AWF_IAuth.md#gettoken)

#### Defined in

[sdk/src/auth/index.ts:428](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L428)

___

### hasNewNotifications

**hasNewNotifications**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

Checks the Textile Users inbox and looks for specific
notification message type

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[hasNewNotifications](../interfaces/typings.AWF_IAuth.md#hasnewnotifications)

#### Defined in

[sdk/src/auth/index.ts:683](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L683)

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

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[markMessageAsRead](../interfaces/typings.AWF_IAuth.md#markmessageasread)

#### Defined in

[sdk/src/auth/index.ts:694](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L694)

___

### sendMessage

**sendMessage**(`to`, `content`): `Promise`<`UserMessage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `content` | `unknown` |

#### Returns

`Promise`<`UserMessage`\>

#### Defined in

[sdk/src/auth/index.ts:611](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L611)

___

### signAuthMessage

**signAuthMessage**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:300](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L300)

___

### signComposedMessage

**signComposedMessage**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:315](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L315)

___

### signData

**signData**(`data`, `base64Format?`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }\>

Sign data with the identity key

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] | `undefined` |
| `base64Format` | `boolean` | `false` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `pubKey`: `string` ; `serializedData`: `any` ; `signature`: `string` \| `Uint8Array` = sig }\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[signData](../interfaces/typings.AWF_IAuth.md#signdata)

#### Defined in

[sdk/src/auth/index.ts:500](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L500)

___

### signIn

**signIn**(`args`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`CurrentUser`](../interfaces/typings.CurrentUser.md) & { `isNewUser`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.checkRegistered` | `boolean` |
| `args.provider?` | [`EthProviders`](../enums/typings.EthProviders.md) |
| `args.resumeSignIn?` | `boolean` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`CurrentUser`](../interfaces/typings.CurrentUser.md) & { `isNewUser`: `boolean`  }\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[signIn](../interfaces/typings.AWF_IAuth.md#signin)

#### Defined in

[sdk/src/auth/index.ts:157](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L157)

___

### signOut

**signOut**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

Destroy all the session objects

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[signOut](../interfaces/typings.AWF_IAuth.md#signout)

#### Defined in

[sdk/src/auth/index.ts:472](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L472)

___

### signTokenMessage

**signTokenMessage**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Defined in

[sdk/src/auth/index.ts:334](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L334)

___

### validateInvite

**validateInvite**(`inviteCode`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[validateInvite](../interfaces/typings.AWF_IAuth.md#validateinvite)

#### Defined in

[sdk/src/auth/index.ts:739](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L739)

___

### verifySignature

**verifySignature**(`args`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

Verify if a signature was made by a specific Public Key

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.data` | `string` \| `Record`<`string`, `unknown`\> \| `Uint8Array` |
| `args.pubKey` | `string` |
| `args.signature` | `string` \| `Uint8Array` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`boolean`\>

#### Implementation of

[AWF_IAuth](../interfaces/typings.AWF_IAuth.md).[verifySignature](../interfaces/typings.AWF_IAuth.md#verifysignature)

#### Defined in

[sdk/src/auth/index.ts:530](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L530)

___

### serializeMessage

`Static` **serializeMessage**(`content`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

`Uint8Array`

#### Defined in

[sdk/src/auth/index.ts:601](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/auth/index.ts#L601)

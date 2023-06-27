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

[sdk](../modules/sdk.md).AWF_Auth

# sdk.api.auth

Authentication module

## Constructors

### constructor

**new AWF_Auth**(`db`, `web3`, `globalChannel`, `log`, `settings`, `gql`, `lit`, `ceramic`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`DB`](sdk.DB.md) |
| `web3` | [`Web3Connector`](sdk.Web3Connector.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |
| `log` | [`Logging`](sdk.Logging.md) |
| `settings` | [`Settings`](sdk.Settings.md) |
| `gql` | `Gql` |
| `lit` | [`default`](sdk.default-1.md) |
| `ceramic` | [`default`](sdk.default.md) |

#### Defined in

[sdk/src/auth/index.ts:72](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L72)

## Properties

### SIGN\_OUT\_EVENT

 `Readonly` **SIGN\_OUT\_EVENT**: ``"@sign_out"``

#### Defined in

[sdk/src/auth/index.ts:69](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L69)

___

### SYNC\_CHANNEL

 `Readonly` **SYNC\_CHANNEL**: ``"@sync_data"``

#### Defined in

[sdk/src/auth/index.ts:68](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L68)

___

### SYNC\_REQUEST

 `Readonly` **SYNC\_REQUEST**: ``"@sync_request"``

#### Defined in

[sdk/src/auth/index.ts:66](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L66)

___

### SYNC\_RESPONSE

 `Readonly` **SYNC\_RESPONSE**: ``"@sync_response"``

#### Defined in

[sdk/src/auth/index.ts:67](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L67)

___

### currentUserKey

 `Readonly` **currentUserKey**: ``"@currentUserType"``

#### Defined in

[sdk/src/auth/index.ts:65](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L65)

___

### encoder

 `Readonly` **encoder**: `TextEncoder`

#### Defined in

[sdk/src/auth/index.ts:70](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L70)

___

### providerKey

 `Readonly` **providerKey**: ``"@providerType"``

#### Defined in

[sdk/src/auth/index.ts:64](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L64)

___

### waitForAuth

 `Readonly` **waitForAuth**: ``"waitForAuth"``

#### Defined in

[sdk/src/auth/index.ts:63](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L63)

## Methods

### \_connectAddress

**_connectAddress**(`provider`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`EthProviders`](../enums/typings.EthProviders.md) |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[sdk/src/auth/index.ts:291](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L291)

___

### addDevKeyFromBase64Message

**addDevKeyFromBase64Message**(`message`, `name?`): `Promise`<`void`\>

validate and add pubKey to the dev account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | encrypted message with claims info |
| `name?` | `string` | human-readable string to identify the key |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/auth/index.ts:533](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L533)

___

### authenticateMutationData

**authenticateMutationData**(`data`): `Promise`<{ `signedData`: { `signature`: `string` = 'fakeSignature' } ; `token`: `string` = 'fakeToken' }\>

Utility method for sending mutation graphql requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] | mutation data |

#### Returns

`Promise`<{ `signedData`: { `signature`: `string` = 'fakeSignature' } ; `token`: `string` = 'fakeToken' }\>

#### Defined in

[sdk/src/auth/index.ts:428](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L428)

___

### checkIfSignedUp

**checkIfSignedUp**(`ethAddress`): `Promise`<`boolean`\>

Verifies if an ethereum address is already registered
Throws an UserNotRegistered error for addresses that are not registered

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ethAddress` | `string` | the eth address |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/src/auth/index.ts:137](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L137)

___

### connectAddress

**connectAddress**(`provider`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`EthProviders`](../enums/typings.EthProviders.md) |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[sdk/src/auth/index.ts:307](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L307)

___

### createEncryptedMessage

**createEncryptedMessage**(`to`, `message`): `Promise`<`JWE`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | DID of the recipient |
| `message` | `string` | body text to be encrypted |

#### Returns

`Promise`<`JWE`\>

#### Defined in

[sdk/src/auth/index.ts:467](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L467)

___

### enableSync

**enableSync**(): `void`

enable key sync between opened tabs

#### Returns

`void`

#### Defined in

[sdk/src/auth/index.ts:96](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L96)

___

### getConversation

**getConversation**(`_pubKey`): `Promise`<{ `data`: `never`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_pubKey` | `string` |

#### Returns

`Promise`<{ `data`: `never`[]  }\>

#### Defined in

[sdk/src/auth/index.ts:603](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L603)

___

### getCurrentUser

**getCurrentUser**(): `Promise`<``null`` \| { `ethAddress?`: `string` ; `id?`: `string` ; `pubKey?`: `string`  }\>

Returns the currently logged-in user object
It will try to log in if there is a previous session detected

#### Returns

`Promise`<``null`` \| { `ethAddress?`: `string` ; `id?`: `string` ; `pubKey?`: `string`  }\>

#### Defined in

[sdk/src/auth/index.ts:336](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L336)

___

### getDevKeys

**getDevKeys**(): `Promise`<{ `addedAt`: `string` ; `name?`: `string` ; `pubKey`: `string`  }[]\>

#### Returns

`Promise`<{ `addedAt`: `string` ; `name?`: `string` ; `pubKey`: `string`  }[]\>

#### Defined in

[sdk/src/auth/index.ts:545](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L545)

___

### getMessages

**getMessages**(`args?`): `Promise`<{ `data`: [`IMessage`](../namespaces/typings.md#imessage)[]  }\>

Returns all the inbox messages from Textile Users

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | InboxListOptions |
| `args.limit?` | `number` | - |

#### Returns

`Promise`<{ `data`: [`IMessage`](../namespaces/typings.md#imessage)[]  }\>

#### Defined in

[sdk/src/auth/index.ts:592](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L592)

___

### getSession

**getSession**(): `Promise`<{ `data`: `undefined` \| { `ethAddress?`: `string` ; `id?`: `string` ; `pubKey?`: `string`  }  }\>

Returns current session objects for textile

#### Returns

`Promise`<{ `data`: `undefined` \| { `ethAddress?`: `string` ; `id?`: `string` ; `pubKey?`: `string`  }  }\>

#### Defined in

[sdk/src/auth/index.ts:315](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L315)

___

### getToken

**getToken**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[sdk/src/auth/index.ts:667](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L667)

___

### hasNewNotifications

**hasNewNotifications**(): `Promise`<{ `data`: `boolean`  }\>

Checks the Textile Users inbox and looks for specific
notification message type

#### Returns

`Promise`<{ `data`: `boolean`  }\>

#### Defined in

[sdk/src/auth/index.ts:612](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L612)

___

### markMessageAsRead

**markMessageAsRead**(`messageId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/src/auth/index.ts:621](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L621)

___

### removeDevKey

**removeDevKey**(`pubKey`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/auth/index.ts:550](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L550)

___

### sendMessage

**sendMessage**(`to`, `content`): `Promise`<{ `data`: {}  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `content` | `unknown` |

#### Returns

`Promise`<{ `data`: {}  }\>

#### Defined in

[sdk/src/auth/index.ts:579](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L579)

___

### signData

**signData**(`data`, `base64Format?`): `Promise`<{ `signature`: `string` = 'fakeSignature' }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` \| `Record`<`string`, `unknown`\> \| `Record`<`string`, `unknown`\>[] | `undefined` |
| `base64Format` | `boolean` | `false` |

#### Returns

`Promise`<{ `signature`: `string` = 'fakeSignature' }\>

#### Defined in

[sdk/src/auth/index.ts:380](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L380)

___

### signDataWithDID

**signDataWithDID**(`data`): `Promise`<`DagJWS`\>

Sign data with the identity key

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Record`<`string`, `unknown`\> |

#### Returns

`Promise`<`DagJWS`\>

#### Defined in

[sdk/src/auth/index.ts:393](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L393)

___

### signIn

**signIn**(`args`): `Promise`<{ `data`: ``null`` \| { `ethAddress?`: `string` ; `id?`: `string` ; `pubKey?`: `string`  } & { `isNewUser`: `boolean`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.checkRegistered` | `boolean` |
| `args.provider?` | [`EthProviders`](../enums/typings.EthProviders.md) |
| `args.resumeSignIn?` | `boolean` |

#### Returns

`Promise`<{ `data`: ``null`` \| { `ethAddress?`: `string` ; `id?`: `string` ; `pubKey?`: `string`  } & { `isNewUser`: `boolean`  }  }\>

#### Defined in

[sdk/src/auth/index.ts:144](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L144)

___

### signOut

**signOut**(): `Promise`<{ `data`: `boolean`  }\>

Destroy all the session objects

#### Returns

`Promise`<{ `data`: `boolean`  }\>

#### Defined in

[sdk/src/auth/index.ts:360](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L360)

___

### validateDevKeyFromBase64Message

**validateDevKeyFromBase64Message**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/auth/index.ts:477](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L477)

___

### validateInvite

**validateInvite**(`inviteCode`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/src/auth/index.ts:640](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L640)

___

### verifyDIDSignature

**verifyDIDSignature**(`args`): `Promise`<`undefined` \| `VerifyJWSResult`\>

Verify if a signature was made by a specific Public Key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `string` \| `DagJWS` | object containing the signature, the serialized data and the public key |

#### Returns

`Promise`<`undefined` \| `VerifyJWSResult`\>

#### Defined in

[sdk/src/auth/index.ts:409](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L409)

___

### serializeMessage

`Static` **serializeMessage**(`content`): `undefined` \| `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

`undefined` \| `Uint8Array`

#### Defined in

[sdk/src/auth/index.ts:569](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/auth/index.ts#L569)

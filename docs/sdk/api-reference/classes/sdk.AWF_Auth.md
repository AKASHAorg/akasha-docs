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

[sdk/src/auth/index.ts:64](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L64)

## Properties

### currentUserKey

 `Readonly` **currentUserKey**: ``"@currentUserType"``

#### Defined in

[sdk/src/auth/index.ts:61](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L61)

___

### encoder

 `Readonly` **encoder**: `TextEncoder`

#### Defined in

[sdk/src/auth/index.ts:62](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L62)

___

### waitForAuth

 `Readonly` **waitForAuth**: ``"waitForAuth"``

#### Defined in

[sdk/src/auth/index.ts:60](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L60)

## Methods

### \_connectAddress

**_connectAddress**(): `Promise`<`undefined` \| ``null`` \| `string`\>

#### Returns

`Promise`<`undefined` \| ``null`` \| `string`\>

#### Defined in

[sdk/src/auth/index.ts:250](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L250)

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

[sdk/src/auth/index.ts:523](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L523)

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

[sdk/src/auth/index.ts:418](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L418)

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

[sdk/src/auth/index.ts:89](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L89)

___

### connectAddress

**connectAddress**(): `Promise`<`undefined` \| ``null`` \| `string`\>

#### Returns

`Promise`<`undefined` \| ``null`` \| `string`\>

#### Defined in

[sdk/src/auth/index.ts:271](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L271)

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

[sdk/src/auth/index.ts:457](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L457)

___

### getCurrentUser

**getCurrentUser**(): `Promise`<``null`` \| { `ethAddress?`: `string` ; `id?`: `string`  }\>

#### Returns

`Promise`<``null`` \| { `ethAddress?`: `string` ; `id?`: `string`  }\>

#### Defined in

[sdk/src/auth/index.ts:298](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L298)

___

### getDevKeys

**getDevKeys**(): `Promise`<{ `addedAt`: `string` ; `name?`: `string` ; `pubKey`: `string`  }[]\>

#### Returns

`Promise`<{ `addedAt`: `string` ; `name?`: `string` ; `pubKey`: `string`  }[]\>

#### Defined in

[sdk/src/auth/index.ts:535](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L535)

___

### getSession

**getSession**(): `Promise`<{ `data`: `undefined` \| { `ethAddress?`: `string` ; `id?`: `string`  }  }\>

Returns current session objects for textile

#### Returns

`Promise`<{ `data`: `undefined` \| { `ethAddress?`: `string` ; `id?`: `string`  }  }\>

#### Defined in

[sdk/src/auth/index.ts:278](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L278)

___

### getToken

**getToken**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[sdk/src/auth/index.ts:605](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L605)

___

### prepareIndexedID

**prepareIndexedID**(`id`): `Promise`<{ `capability`: `undefined` \| `Cacao` ; `jws`: `DagJWS` = jws }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `capability`: `undefined` \| `Cacao` ; `jws`: `DagJWS` = jws }\>

#### Defined in

[sdk/src/auth/index.ts:399](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L399)

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

[sdk/src/auth/index.ts:540](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L540)

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

[sdk/src/auth/index.ts:569](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L569)

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

[sdk/src/auth/index.ts:364](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L364)

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

[sdk/src/auth/index.ts:377](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L377)

___

### signIn

**signIn**(`args`): `Promise`<{ `data`: ``null`` \| { `ethAddress?`: `string` ; `id?`: `string`  } & { `isNewUser`: `boolean`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.checkRegistered` | `boolean` |
| `args.provider?` | [`EthProviders`](../enums/typings.EthProviders.md) |
| `args.resumeSignIn?` | `boolean` |

#### Returns

`Promise`<{ `data`: ``null`` \| { `ethAddress?`: `string` ; `id?`: `string`  } & { `isNewUser`: `boolean`  }  }\>

#### Defined in

[sdk/src/auth/index.ts:98](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L98)

___

### signOut

**signOut**(): `Promise`<{ `data`: `boolean`  }\>

Destroy all the session objects

#### Returns

`Promise`<{ `data`: `boolean`  }\>

#### Defined in

[sdk/src/auth/index.ts:338](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L338)

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

[sdk/src/auth/index.ts:467](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L467)

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

[sdk/src/auth/index.ts:578](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L578)

___

### verifyDIDSignature

**verifyDIDSignature**(`args`): `Promise`<`undefined` \| `VerifyJWSResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string` \| `DagJWS` |

#### Returns

`Promise`<`undefined` \| `VerifyJWSResult`\>

#### Defined in

[sdk/src/auth/index.ts:406](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L406)

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

[sdk/src/auth/index.ts:559](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/auth/index.ts#L559)

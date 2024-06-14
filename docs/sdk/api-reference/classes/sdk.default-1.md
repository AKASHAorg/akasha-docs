---
id: "sdk.default-1"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).default

## Constructors

### constructor

**new default**(`db`, `web3`, `globalChannel`, `log`, `settings`, `gql`)

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

[sdk/src/common/lit.ts:38](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/lit.ts#L38)

## Methods

### connect

**connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/lit.ts:54](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/lit.ts#L54)

___

### decryptText

**decryptText**(`encryptedString`, `encryptedSymmetricKey`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `encryptedString` | `string` |
| `encryptedSymmetricKey` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/common/lit.ts:87](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/lit.ts#L87)

___

### disconnect

**disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/lit.ts:107](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/lit.ts#L107)

___

### encryptText

**encryptText**(`text`): `Promise`<{ `encryptedString`: `any` ; `encryptedSymmetricKey`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Promise`<{ `encryptedString`: `any` ; `encryptedSymmetricKey`: `any`  }\>

#### Defined in

[sdk/src/common/lit.ts:61](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/lit.ts#L61)

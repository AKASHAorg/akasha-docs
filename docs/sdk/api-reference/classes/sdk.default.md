---
id: "sdk.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).default

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

[sdk/src/common/ceramic.ts:29](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L29)

## Methods

### connect

**connect**(): `Promise`<`DIDSession`\>

#### Returns

`Promise`<`DIDSession`\>

#### Defined in

[sdk/src/common/ceramic.ts:50](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L50)

___

### disconnect

**disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/ceramic.ts:100](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L100)

___

### getComposeClient

**getComposeClient**(): `ComposeClient`

#### Returns

`ComposeClient`

#### Defined in

[sdk/src/common/ceramic.ts:81](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L81)

___

### getOptions

**getOptions**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `endpointURL` | `string` |

#### Defined in

[sdk/src/common/ceramic.ts:94](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L94)

___

### hasSession

**hasSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

[sdk/src/common/ceramic.ts:85](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L85)

___

### restoreSession

**restoreSession**(`serialisedSession`): `Promise`<`DIDSession`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialisedSession` | `string` |

#### Returns

`Promise`<`DIDSession`\>

#### Defined in

[sdk/src/common/ceramic.ts:72](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L72)

___

### setCeramicEndpoint

**setCeramicEndpoint**(`endPoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endPoint` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/ceramic.ts:89](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ceramic.ts#L89)

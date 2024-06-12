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

[sdk](../modules/sdk.md).default

## Constructors

### constructor

**new default**(`db`, `web3`, `globalChannel`, `log`, `settings`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`DB`](sdk.DB.md) |
| `web3` | [`Web3Connector`](sdk.Web3Connector.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |
| `log` | [`Logging`](sdk.Logging.md) |
| `settings` | [`Settings`](sdk.Settings.md) |
| `config` | [`AWF_Config`](sdk.AWF_Config.md) |

#### Defined in

[sdk/src/common/ceramic.ts:29](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L29)

## Methods

### connect

**connect**(): `Promise`<`DIDSession`\>

#### Returns

`Promise`<`DIDSession`\>

#### Defined in

[sdk/src/common/ceramic.ts:71](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L71)

___

### disconnect

**disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/ceramic.ts:137](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L137)

___

### geResourcesHash

**geResourcesHash**(): `Promise`<{ `hash`: `string` = hash; `resources`: `string`[]  }\>

#### Returns

`Promise`<{ `hash`: `string` = hash; `resources`: `string`[]  }\>

#### Defined in

[sdk/src/common/ceramic.ts:118](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L118)

___

### getComposeClient

**getComposeClient**(): `ComposeClient`

#### Returns

`ComposeClient`

#### Defined in

[sdk/src/common/ceramic.ts:103](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L103)

___

### getOptions

**getOptions**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `endpointURL` | `string` |

#### Defined in

[sdk/src/common/ceramic.ts:131](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L131)

___

### hasSession

**hasSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

[sdk/src/common/ceramic.ts:107](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L107)

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

[sdk/src/common/ceramic.ts:94](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L94)

___

### serialize

**serialize**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[sdk/src/common/ceramic.ts:111](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L111)

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

[sdk/src/common/ceramic.ts:126](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/ceramic.ts#L126)

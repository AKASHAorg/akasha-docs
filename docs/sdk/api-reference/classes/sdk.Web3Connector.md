---
id: "sdk.Web3Connector"
title: "Class: Web3Connector"
sidebar_label: "Web3Connector"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).Web3Connector

## Constructors

### constructor

**new Web3Connector**(`logFactory`, `globalChannel`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logFactory` | [`Logging`](sdk.Logging.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |
| `config` | [`AWF_Config`](sdk.AWF_Config.md) |

#### Defined in

[sdk/src/common/web3.connector.ts:61](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L61)

## Properties

### network

 `Readonly` **network**: ``"sepolia"``

#### Defined in

[sdk/src/common/web3.connector.ts:29](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L29)

___

### networkId

 `Readonly` **networkId**: `Readonly`<{ `goerli`: ``5`` = 5; `kovan`: ``42`` = 42; `mainnet`: ``1`` = 1; `rinkeby`: ``4`` = 4; `ropsten`: ``3`` = 3; `sepolia`: ``11155111`` = 11155111 }\>

#### Defined in

[sdk/src/common/web3.connector.ts:32](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L32)

## Accessors

### provider

`get` **provider**(): `undefined` \| `BrowserProvider`

Get access to the web3 provider instance

#### Returns

`undefined` \| `BrowserProvider`

#### Defined in

[sdk/src/common/web3.connector.ts:234](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L234)

___

### state

`get` **state**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `address` | `undefined` \| `string` |
| `chainId` | `undefined` \| `number` |
| `connected` | `boolean` |
| `providerType` | `undefined` \| ``null`` \| `string` |

#### Defined in

[sdk/src/common/web3.connector.ts:222](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L222)

___

### walletProvider

`get` **walletProvider**(): `undefined` \| `Eip1193Provider`

#### Returns

`undefined` \| `Eip1193Provider`

#### Defined in

[sdk/src/common/web3.connector.ts:240](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L240)

## Methods

### checkCurrentNetwork

**checkCurrentNetwork**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/web3.connector.ts:329](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L329)

___

### connect

**connect**(): `Promise`<{ `connected`: `boolean` ; `unsubscribe?`: () => `void`  }\>

#### Returns

`Promise`<{ `connected`: `boolean` ; `unsubscribe?`: () => `void`  }\>

#### Defined in

[sdk/src/common/web3.connector.ts:131](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L131)

___

### disconnect

**disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/web3.connector.ts:256](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L256)

___

### getCurrentEthAddress

**getCurrentEthAddress**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[sdk/src/common/web3.connector.ts:325](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L325)

___

### getCurrentTheme

**getCurrentTheme**(): `ThemeMode`

#### Returns

`ThemeMode`

#### Defined in

[sdk/src/common/web3.connector.ts:149](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L149)

___

### getRequiredNetwork

**getRequiredNetwork**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | { `chainId`: ``11155111`` ; `name`: `string`  } |
| `data.chainId` | ``11155111`` |
| `data.name` | `string` |

#### Defined in

[sdk/src/common/web3.connector.ts:300](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L300)

___

### getSigner

**getSigner**(): `Promise`<`undefined` \| `JsonRpcSigner`\>

#### Returns

`Promise`<`undefined` \| `JsonRpcSigner`\>

#### Defined in

[sdk/src/common/web3.connector.ts:280](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L280)

___

### lookupAddress

**lookupAddress**(`address`): `Promise`<{ `ens`: ``null`` \| `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `ens`: ``null`` \| `string`  }\>

#### Defined in

[sdk/src/common/web3.connector.ts:291](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L291)

___

### signMessage

**signMessage**(`message`): `Promise`<`undefined` \| `string`\>

Enforce personal_sign method for message signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Human readable string to sign |

#### Returns

`Promise`<`undefined` \| `string`\>

#### Defined in

[sdk/src/common/web3.connector.ts:272](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L272)

___

### switchToRequiredNetwork

**switchToRequiredNetwork**(): `Promise`<{ `data`: `any`  }\>

#### Returns

`Promise`<{ `data`: `any`  }\>

#### Defined in

[sdk/src/common/web3.connector.ts:307](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L307)

___

### toggleDarkTheme

**toggleDarkTheme**(`enable?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |

#### Returns

`void`

#### Defined in

[sdk/src/common/web3.connector.ts:165](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/web3.connector.ts#L165)

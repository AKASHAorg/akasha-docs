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

[sdk](../namespaces/sdk.md).Web3Connector

## Constructors

### constructor

**new Web3Connector**(`logFactory`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logFactory` | [`Logging`](sdk.Logging.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/common/web3.connector.ts:46](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L46)

## Properties

### network

 `Readonly` **network**: ``"goerli"``

#### Defined in

[sdk/src/common/web3.connector.ts:31](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L31)

___

### networkId

 `Readonly` **networkId**: `Readonly`<{ `goerli`: ``5`` = 5; `kovan`: ``42`` = 42; `mainnet`: ``1`` = 1; `rinkeby`: ``4`` = 4; `ropsten`: ``3`` = 3; `sepolia`: ``11155111`` = 11155111 }\>

#### Defined in

[sdk/src/common/web3.connector.ts:34](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L34)

## Accessors

### provider

`get` **provider**(): `BaseProvider`

Get access to the web3 provider instance

#### Returns

`BaseProvider`

#### Defined in

[sdk/src/common/web3.connector.ts:92](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L92)

## Methods

### checkCurrentNetwork

**checkCurrentNetwork**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/web3.connector.ts:178](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L178)

___

### connect

**connect**(`provider?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `provider` | [`EthProviders`](../enums/typings.EthProviders.md) | `EthProviders.None` | Number representing the provider option |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/src/common/web3.connector.ts:64](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L64)

___

### detectInjectedProvider

**detectInjectedProvider**(): `Promise`<{ `data`: [`INJECTED_PROVIDERS`](../enums/typings.INJECTED_PROVIDERS.md)  }\>

#### Returns

`Promise`<{ `data`: [`INJECTED_PROVIDERS`](../enums/typings.INJECTED_PROVIDERS.md)  }\>

#### Defined in

[sdk/src/common/web3.connector.ts:182](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L182)

___

### disconnect

**disconnect**(): `Promise`<`void`\>

Remove the web3 connection

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/common/web3.connector.ts:110](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L110)

___

### getCurrentEthAddress

**getCurrentEthAddress**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[sdk/src/common/web3.connector.ts:174](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L174)

___

### getRequiredNetwork

**getRequiredNetwork**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | { `chainId`: ``5`` ; `name`: `string`  } |
| `data.chainId` | ``5`` |
| `data.name` | `string` |

#### Defined in

[sdk/src/common/web3.connector.ts:142](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L142)

___

### getSigner

**getSigner**(): `undefined` \| `Wallet` \| `JsonRpcSigner`

#### Returns

`undefined` \| `Wallet` \| `JsonRpcSigner`

#### Defined in

[sdk/src/common/web3.connector.ts:131](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L131)

___

### requestWalletPermissions

**requestWalletPermissions**(): `Promise`<`any`\> \| `Observable`<`never`\>

#### Returns

`Promise`<`any`\> \| `Observable`<`never`\>

#### Defined in

[sdk/src/common/web3.connector.ts:80](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L80)

___

### signMessage

**signMessage**(`message`): `undefined` \| `Promise`<`string`\>

Enforce personal_sign method for message signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Human readable string to sign |

#### Returns

`undefined` \| `Promise`<`string`\>

#### Defined in

[sdk/src/common/web3.connector.ts:127](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L127)

___

### switchToRequiredNetwork

**switchToRequiredNetwork**(): `Promise`<{ `data`: `any`  }\>

#### Returns

`Promise`<{ `data`: `any`  }\>

#### Defined in

[sdk/src/common/web3.connector.ts:149](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/web3.connector.ts#L149)

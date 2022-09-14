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

## Implements

- [`IWeb3Connector`](../interfaces/typings.IWeb3Connector.md)<`ethers.providers.BaseProvider` \| `ethers.providers.Web3Provider`\>

## Constructors

### constructor

**new Web3Connector**(`logFactory`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logFactory` | [`Logging`](sdk.Logging.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/common/web3.connector.ts:47](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L47)

## Properties

### network

 `Readonly` **network**: ``"rinkeby"``

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[network](../interfaces/typings.IWeb3Connector.md#network)

#### Defined in

[sdk/src/common/web3.connector.ts:33](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L33)

___

### networkId

 `Readonly` **networkId**: `Readonly`<{ `goerli`: `number` = 5; `kovan`: `number` = 42; `mainnet`: `number` = 1; `rinkeby`: `number` = 4; `ropsten`: `number` = 3 }\>

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[networkId](../interfaces/typings.IWeb3Connector.md#networkid)

#### Defined in

[sdk/src/common/web3.connector.ts:36](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L36)

## Accessors

### provider

`get` **provider**(): `BaseProvider` \| `Web3Provider`

Get access to the web3 provider instance

#### Returns

`BaseProvider` \| `Web3Provider`

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[provider](../interfaces/typings.IWeb3Connector.md#provider)

#### Defined in

[sdk/src/common/web3.connector.ts:89](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L89)

## Methods

### checkCurrentNetwork

**checkCurrentNetwork**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`void`\>

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[checkCurrentNetwork](../interfaces/typings.IWeb3Connector.md#checkcurrentnetwork)

#### Defined in

[sdk/src/common/web3.connector.ts:169](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L169)

___

### connect

**connect**(`provider?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `provider` | [`EthProviders`](../enums/typings.EthProviders.md) | `EthProviders.None` | Number representing the provider option |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[connect](../interfaces/typings.IWeb3Connector.md#connect)

#### Defined in

[sdk/src/common/web3.connector.ts:60](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L60)

___

### detectInjectedProvider

**detectInjectedProvider**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`INJECTED_PROVIDERS`](../enums/typings.INJECTED_PROVIDERS.md)\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<[`INJECTED_PROVIDERS`](../enums/typings.INJECTED_PROVIDERS.md)\>

#### Defined in

[sdk/src/common/web3.connector.ts:172](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L172)

___

### disconnect

**disconnect**(): `Promise`<`void`\>

Remove the web3 connection

#### Returns

`Promise`<`void`\>

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[disconnect](../interfaces/typings.IWeb3Connector.md#disconnect)

#### Defined in

[sdk/src/common/web3.connector.ts:99](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L99)

___

### getCurrentAddress

**getCurrentAddress**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

the current eth address that is connected to the provider

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[getCurrentAddress](../interfaces/typings.IWeb3Connector.md#getcurrentaddress)

#### Defined in

[sdk/src/common/web3.connector.ts:136](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L136)

___

### getRequiredNetworkName

**getRequiredNetworkName**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Defined in

[sdk/src/common/web3.connector.ts:140](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L140)

___

### getSigner

**getSigner**(): `JsonRpcSigner` \| `Wallet`

#### Returns

`JsonRpcSigner` \| `Wallet`

#### Defined in

[sdk/src/common/web3.connector.ts:122](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L122)

___

### requestWalletPermissions

**requestWalletPermissions**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`any`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`any`\>

#### Defined in

[sdk/src/common/web3.connector.ts:76](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L76)

___

### signMessage

**signMessage**(`message`): `Promise`<`string`\>

Enforce personal_sign method for message signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Human readable string to sign |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IWeb3Connector](../interfaces/typings.IWeb3Connector.md).[signMessage](../interfaces/typings.IWeb3Connector.md#signmessage)

#### Defined in

[sdk/src/common/web3.connector.ts:118](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L118)

___

### switchToRequiredNetwork

**switchToRequiredNetwork**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`any`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`any`\>

#### Defined in

[sdk/src/common/web3.connector.ts:147](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/common/web3.connector.ts#L147)

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

- [`IWeb3Connector`](../interfaces/sdk.IWeb3Connector.md)<`ethers.providers.BaseProvider` \| `ethers.providers.Web3Provider`\>

## Constructors

### constructor

**new Web3Connector**(`logFactory`, `globalChannel`)

#### Parameters

| Name            | Type                          |
| :-------------- | :---------------------------- |
| `logFactory`    | [`Logging`](sdk.Logging.md)   |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/common/web3.connector.ts:46](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L46)

## Properties

### network

`Readonly` **network**: `"rinkeby"`

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[network](../interfaces/sdk.IWeb3Connector.md#network)

#### Defined in

[sdk/src/common/web3.connector.ts:32](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L32)

---

### networkId

`Readonly` **networkId**: `Readonly`<{ `goerli`: `number` = 5; `kovan`: `number` = 42; `mainnet`: `number` = 1; `rinkeby`: `number` = 4; `ropsten`: `number` = 3 }\>

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[networkId](../interfaces/sdk.IWeb3Connector.md#networkid)

#### Defined in

[sdk/src/common/web3.connector.ts:35](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L35)

## Accessors

### provider

`get` **provider**(): `BaseProvider` \| `Web3Provider`

Get access to the web3 provider instance

#### Returns

`BaseProvider` \| `Web3Provider`

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[provider](../interfaces/sdk.IWeb3Connector.md#provider)

#### Defined in

[sdk/src/common/web3.connector.ts:88](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L88)

## Methods

### checkCurrentNetwork

**checkCurrentNetwork**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`void`\>

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[checkCurrentNetwork](../interfaces/sdk.IWeb3Connector.md#checkcurrentnetwork)

#### Defined in

[sdk/src/common/web3.connector.ts:168](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L168)

---

### connect

**connect**(`provider?`): `Promise`<`boolean`\>

#### Parameters

| Name       | Type                                           | Default value       | Description                             |
| :--------- | :--------------------------------------------- | :------------------ | :-------------------------------------- |
| `provider` | [`EthProviders`](../enums/sdk.EthProviders.md) | `EthProviders.None` | Number representing the provider option |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[connect](../interfaces/sdk.IWeb3Connector.md#connect)

#### Defined in

[sdk/src/common/web3.connector.ts:59](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L59)

---

### detectInjectedProvider

**detectInjectedProvider**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`INJECTED_PROVIDERS`](../enums/sdk.INJECTED_PROVIDERS.md)\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<[`INJECTED_PROVIDERS`](../enums/sdk.INJECTED_PROVIDERS.md)\>

#### Defined in

[sdk/src/common/web3.connector.ts:171](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L171)

---

### disconnect

**disconnect**(): `Promise`<`void`\>

Remove the web3 connection

#### Returns

`Promise`<`void`\>

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[disconnect](../interfaces/sdk.IWeb3Connector.md#disconnect)

#### Defined in

[sdk/src/common/web3.connector.ts:98](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L98)

---

### getCurrentAddress

**getCurrentAddress**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

the current eth address that is connected to the provider

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[getCurrentAddress](../interfaces/sdk.IWeb3Connector.md#getcurrentaddress)

#### Defined in

[sdk/src/common/web3.connector.ts:135](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L135)

---

### getRequiredNetworkName

**getRequiredNetworkName**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Defined in

[sdk/src/common/web3.connector.ts:139](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L139)

---

### getSigner

**getSigner**(): `JsonRpcSigner` \| `Wallet`

#### Returns

`JsonRpcSigner` \| `Wallet`

#### Defined in

[sdk/src/common/web3.connector.ts:121](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L121)

---

### requestWalletPermissions

**requestWalletPermissions**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`any`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`any`\>

#### Defined in

[sdk/src/common/web3.connector.ts:75](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L75)

---

### signMessage

**signMessage**(`message`): `Promise`<`string`\>

Enforce personal_sign method for message signature

#### Parameters

| Name      | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `message` | `string` | Human readable string to sign |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IWeb3Connector](../interfaces/sdk.IWeb3Connector.md).[signMessage](../interfaces/sdk.IWeb3Connector.md#signmessage)

#### Defined in

[sdk/src/common/web3.connector.ts:117](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L117)

---

### switchToRequiredNetwork

**switchToRequiredNetwork**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`any`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`any`\>

#### Defined in

[sdk/src/common/web3.connector.ts:146](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/web3.connector.ts#L146)

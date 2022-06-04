---
id: "sdk.IWeb3Connector"
title: "Interface: IWeb3Connector<T>"
sidebar_label: "IWeb3Connector"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).IWeb3Connector

## Type parameters

| Name |
| :--- |
| `T`  |

## Implemented by

- [`Web3Connector`](../classes/sdk.Web3Connector.md)

## Properties

### network

**network**: `string`

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:10

---

### networkId

**networkId**: `Readonly`<{ `goerli`: `number` ; `kovan`: `number` ; `mainnet`: `number` ; `rinkeby`: `number` ; `ropsten`: `number` }\>

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:11

---

### provider

`Readonly` **provider**: `T`

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:18

## Methods

### checkCurrentNetwork

**checkCurrentNetwork**(): `Observable`<{ `data`: `void` }\>

#### Returns

`Observable`<{ `data`: `void` }\>

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:25

---

### connect

**connect**(`provider`): `Promise`<`boolean`\>

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `provider` | [`EthProviders`](../enums/sdk.EthProviders.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:19

---

### disconnect

**disconnect**(): `void`

#### Returns

`void`

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:20

---

### getCurrentAddress

**getCurrentAddress**(): `Observable`<{ `data`: `string` }\>

#### Returns

`Observable`<{ `data`: `string` }\>

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:22

---

### signMessage

**signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `message` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

sdk/typings/lib/interfaces/web3.connector.d.ts:21

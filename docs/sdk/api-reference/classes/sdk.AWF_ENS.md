---
id: "sdk.AWF_ENS"
title: "Class: AWF_ENS"
sidebar_label: "AWF_ENS"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_ENS

## Implements

- [`AWF_IENS`](../interfaces/sdk.AWF_IENS.md)

## Constructors

### constructor

**new AWF_ENS**(`log`, `gql`, `auth`, `settings`, `globalChannel`, `web3`, `ipfs`)

#### Parameters

| Name            | Type                                            |
| :-------------- | :---------------------------------------------- |
| `log`           | [`Logging`](sdk.Logging.md)                     |
| `gql`           | `Gql`                                           |
| `auth`          | [`AWF_Auth`](sdk.AWF_Auth.md)                   |
| `settings`      | [`Settings`](sdk.Settings.md)                   |
| `globalChannel` | [`EventBus`](sdk.EventBus.md)                   |
| `web3`          | [`Web3Connector`](sdk.Web3Connector.md)         |
| `ipfs`          | [`AWF_IpfsConnector`](sdk.AWF_IpfsConnector.md) |

#### Defined in

[sdk/src/registry/ens.ts:56](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L56)

## Properties

### ENS_ADDRESS

`Readonly` **ENS_ADDRESS**: `"0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e"`

#### Defined in

[sdk/src/registry/ens.ts:52](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L52)

---

### REGISTRAR_ADDRESS

`Readonly` **REGISTRAR_ADDRESS**: `"0x9005a15eb865e8378e5cb9f45e8849ef1eC4F90B"`

#### Defined in

[sdk/src/registry/ens.ts:50](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L50)

---

### RESOLVER_ADDRESS

`Readonly` **RESOLVER_ADDRESS**: `"0xf6305c19e814d2a75429Fd637d01F7ee0E77d615"`

#### Defined in

[sdk/src/registry/ens.ts:51](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L51)

---

### REVERSE_STRING

`Readonly` **REVERSE_STRING**: `"0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2"`

#### Defined in

[sdk/src/registry/ens.ts:53](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L53)

## Methods

### claimName

**claimName**(`name`): `Observable`<{ `data`: `any` }\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Observable`<{ `data`: `any` }\>

#### Implementation of

[AWF_IENS](../interfaces/sdk.AWF_IENS.md).[claimName](../interfaces/sdk.AWF_IENS.md#claimname)

#### Defined in

[sdk/src/registry/ens.ts:101](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L101)

---

### getContracts

**getContracts**(): `Object`

#### Returns

`Object`

| Name                       | Type  |
| :------------------------- | :---- |
| `AkashaRegistrarInstance`  | `any` |
| `ENSinstance`              | `any` |
| `ReverseRegistrarInstance` | `any` |

#### Defined in

[sdk/src/registry/ens.ts:185](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L185)

---

### isAvailable

**isAvailable**(`name`): `Promise`<{ `data`: `any` }\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `any` }\>

#### Implementation of

[AWF_IENS](../interfaces/sdk.AWF_IENS.md).[isAvailable](../interfaces/sdk.AWF_IENS.md#isavailable)

#### Defined in

[sdk/src/registry/ens.ts:134](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L134)

---

### registerName

**registerName**(`name`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`any`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`any`\>

#### Implementation of

[AWF_IENS](../interfaces/sdk.AWF_IENS.md).[registerName](../interfaces/sdk.AWF_IENS.md#registername)

#### Defined in

[sdk/src/registry/ens.ts:74](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L74)

---

### resolveAddress

**resolveAddress**(`ethAddress`): `Promise`<{ `data`: `string` }\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `ethAddress` | `string` |

#### Returns

`Promise`<{ `data`: `string` }\>

#### Implementation of

[AWF_IENS](../interfaces/sdk.AWF_IENS.md).[resolveAddress](../interfaces/sdk.AWF_IENS.md#resolveaddress)

#### Defined in

[sdk/src/registry/ens.ts:146](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L146)

---

### resolveName

**resolveName**(`name`): `Promise`<{ `data`: `string` }\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `string` }\>

#### Implementation of

[AWF_IENS](../interfaces/sdk.AWF_IENS.md).[resolveName](../interfaces/sdk.AWF_IENS.md#resolvename)

#### Defined in

[sdk/src/registry/ens.ts:154](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L154)

---

### setupContracts

**setupContracts**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/registry/ens.ts:159](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L159)

---

### userIsOwnerOf

**userIsOwnerOf**(`name`): `Promise`<{ `data`: `boolean` }\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `boolean` }\>

#### Implementation of

[AWF_IENS](../interfaces/sdk.AWF_IENS.md).[userIsOwnerOf](../interfaces/sdk.AWF_IENS.md#userisownerof)

#### Defined in

[sdk/src/registry/ens.ts:123](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/registry/ens.ts#L123)

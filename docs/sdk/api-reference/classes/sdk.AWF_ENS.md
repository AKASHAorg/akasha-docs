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

- [`AWF_IENS`](../interfaces/typings.AWF_IENS.md)

## Constructors

### constructor

**new AWF_ENS**(`log`, `gql`, `auth`, `settings`, `globalChannel`, `web3`, `ipfs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `settings` | [`Settings`](sdk.Settings.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |
| `web3` | [`Web3Connector`](sdk.Web3Connector.md) |
| `ipfs` | [`AWF_IpfsConnector`](sdk.AWF_IpfsConnector.md) |

#### Defined in

[sdk/src/registry/ens.ts:53](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L53)

## Properties

### ENS\_ADDRESS

 `Readonly` **ENS\_ADDRESS**: ``"0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e"``

#### Defined in

[sdk/src/registry/ens.ts:49](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L49)

___

### REGISTRAR\_ADDRESS

 `Readonly` **REGISTRAR\_ADDRESS**: ``"0x9005a15eb865e8378e5cb9f45e8849ef1eC4F90B"``

#### Defined in

[sdk/src/registry/ens.ts:47](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L47)

___

### RESOLVER\_ADDRESS

 `Readonly` **RESOLVER\_ADDRESS**: ``"0xf6305c19e814d2a75429Fd637d01F7ee0E77d615"``

#### Defined in

[sdk/src/registry/ens.ts:48](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L48)

___

### REVERSE\_STRING

 `Readonly` **REVERSE\_STRING**: ``"0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2"``

#### Defined in

[sdk/src/registry/ens.ts:50](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L50)

## Methods

### claimName

**claimName**(`name`): `Observable`<{ `data`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Observable`<{ `data`: `any`  }\>

#### Implementation of

[AWF_IENS](../interfaces/typings.AWF_IENS.md).[claimName](../interfaces/typings.AWF_IENS.md#claimname)

#### Defined in

[sdk/src/registry/ens.ts:98](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L98)

___

### getContracts

**getContracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `AkashaRegistrarInstance` | `any` |
| `ENSinstance` | `any` |
| `ReverseRegistrarInstance` | `any` |

#### Defined in

[sdk/src/registry/ens.ts:182](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L182)

___

### isAvailable

**isAvailable**(`name`): `Promise`<{ `data`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `any`  }\>

#### Implementation of

[AWF_IENS](../interfaces/typings.AWF_IENS.md).[isAvailable](../interfaces/typings.AWF_IENS.md#isavailable)

#### Defined in

[sdk/src/registry/ens.ts:131](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L131)

___

### registerName

**registerName**(`name`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`any`\>

#### Implementation of

[AWF_IENS](../interfaces/typings.AWF_IENS.md).[registerName](../interfaces/typings.AWF_IENS.md#registername)

#### Defined in

[sdk/src/registry/ens.ts:71](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L71)

___

### resolveAddress

**resolveAddress**(`ethAddress`): `Promise`<{ `data`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Promise`<{ `data`: `string`  }\>

#### Implementation of

[AWF_IENS](../interfaces/typings.AWF_IENS.md).[resolveAddress](../interfaces/typings.AWF_IENS.md#resolveaddress)

#### Defined in

[sdk/src/registry/ens.ts:143](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L143)

___

### resolveName

**resolveName**(`name`): `Promise`<{ `data`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `string`  }\>

#### Implementation of

[AWF_IENS](../interfaces/typings.AWF_IENS.md).[resolveName](../interfaces/typings.AWF_IENS.md#resolvename)

#### Defined in

[sdk/src/registry/ens.ts:151](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L151)

___

### setupContracts

**setupContracts**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/registry/ens.ts:156](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L156)

___

### userIsOwnerOf

**userIsOwnerOf**(`name`): `Promise`<{ `data`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `boolean`  }\>

#### Implementation of

[AWF_IENS](../interfaces/typings.AWF_IENS.md).[userIsOwnerOf](../interfaces/typings.AWF_IENS.md#userisownerof)

#### Defined in

[sdk/src/registry/ens.ts:120](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/registry/ens.ts#L120)

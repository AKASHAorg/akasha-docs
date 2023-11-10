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

[sdk](../modules/sdk.md).AWF_ENS

## Constructors

### constructor

**new AWF_ENS**(`log`, `gql`, `auth`, `settings`, `globalChannel`, `web3`, `ipfs`, `stash`)

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
| `stash` | [`Stash`](sdk.Stash.md) |

#### Defined in

[sdk/src/registry/ens.ts:63](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L63)

## Methods

### getContracts

**getContracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ENSinstance` | `any` |
| `ReverseRegistrarInstance` | `any` |

#### Defined in

[sdk/src/registry/ens.ts:247](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L247)

___

### getTexts

**getTexts**(`name`): `Promise`<{ `txt`: `string` ; `value`: `undefined` \| `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `txt`: `string` ; `value`: `undefined` \| `string`  }[]\>

#### Defined in

[sdk/src/registry/ens.ts:211](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L211)

___

### isAvailable

**isAvailable**(`name`): `Promise`<[`IsUserNameAvailableQuery`](../modules/sdk.md#isusernameavailablequery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`IsUserNameAvailableQuery`](../modules/sdk.md#isusernameavailablequery)\>

#### Defined in

[sdk/src/registry/ens.ts:150](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L150)

___

### registerName

**registerName**(`name`): `Promise`<{ `data`: `Promise`<`never`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `Promise`<`never`\>  }\>

#### Defined in

[sdk/src/registry/ens.ts:83](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L83)

___

### resolveAddress

**resolveAddress**(`ethAddress`): `Promise`<{ `data`: `any`  }\>

Returns ENS name associated with the ethereum address

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Promise`<{ `data`: `any`  }\>

#### Defined in

[sdk/src/registry/ens.ts:174](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L174)

___

### resolveName

**resolveName**(`name`): `Promise`<{ `data`: `any`  }\>

Returns eth address associated with the ens name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `any`  }\>

#### Defined in

[sdk/src/registry/ens.ts:195](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L195)

___

### setupContracts

**setupContracts**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/registry/ens.ts:221](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L221)

___

### userIsOwnerOf

**userIsOwnerOf**(`name`): `Promise`<{ `data`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: `boolean`  }\>

#### Defined in

[sdk/src/registry/ens.ts:139](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/ens.ts#L139)

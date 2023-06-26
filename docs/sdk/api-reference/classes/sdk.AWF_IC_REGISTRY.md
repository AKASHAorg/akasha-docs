---
id: "sdk.AWF_IC_REGISTRY"
title: "Class: AWF_IC_REGISTRY"
sidebar_label: "AWF_IC_REGISTRY"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IC_REGISTRY

## Constructors

### constructor

**new AWF_IC_REGISTRY**(`log`, `gql`, `auth`, `settings`, `globalChannel`, `web3`, `ipfs`)

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

[sdk/src/registry/icRegistry.ts:44](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L44)

## Properties

### INTEGRATION\_REGISTRY\_ADDRESS

 `Readonly` **INTEGRATION\_REGISTRY\_ADDRESS**: `string`

#### Defined in

[sdk/src/registry/icRegistry.ts:41](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L41)

___

### MANIFEST\_FILE

 `Readonly` **MANIFEST\_FILE**: ``"manifest.json"``

#### Defined in

[sdk/src/registry/icRegistry.ts:42](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L42)

## Methods

### \_normalizeIDs

**_normalizeIDs**(`opt`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

`string`[]

#### Defined in

[sdk/src/registry/icRegistry.ts:189](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L189)

___

### getAllIntegrationReleaseIds

**getAllIntegrationReleaseIds**(`integrationName`, `offset?`): `Promise`<{ `data`: { `nextIndex`: `any` = data.next; `releaseIds`: `any`  }  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `integrationName` | `string` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`Promise`<{ `data`: { `nextIndex`: `any` = data.next; `releaseIds`: `any`  }  }\>

#### Defined in

[sdk/src/registry/icRegistry.ts:168](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L168)

___

### getAllIntegrationsIds

**getAllIntegrationsIds**(`offset?`): `Promise`<{ `data`: { `integrationIds`: `any` ; `nextIndex`: `any` = data.next }  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `offset` | `number` | `0` |

#### Returns

`Promise`<{ `data`: { `integrationIds`: `any` ; `nextIndex`: `any` = data.next }  }\>

#### Defined in

[sdk/src/registry/icRegistry.ts:158](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L158)

___

### getContracts

**getContracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `IntegrationRegistryInstance` | `any` |

#### Defined in

[sdk/src/registry/icRegistry.ts:208](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L208)

___

### getIntegrationId

**getIntegrationId**(`name`): `Promise`<{ `data`: { `id`: `string` = data }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: { `id`: `string` = data }  }\>

#### Defined in

[sdk/src/registry/icRegistry.ts:178](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L178)

___

### getIntegrationInfo

**getIntegrationInfo**(`integrationId`): `Promise`<[`IntegrationInfo`](../namespaces/typings.md#integrationinfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationId` | `string` |

#### Returns

`Promise`<[`IntegrationInfo`](../namespaces/typings.md#integrationinfo)\>

#### Defined in

[sdk/src/registry/icRegistry.ts:76](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L76)

___

### getIntegrationReleaseId

**getIntegrationReleaseId**(`name`, `version`): `Promise`<{ `data`: { `id`: `string` = data }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `string` |

#### Returns

`Promise`<{ `data`: { `id`: `string` = data }  }\>

#### Defined in

[sdk/src/registry/icRegistry.ts:183](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L183)

___

### getIntegrationReleaseInfo

**getIntegrationReleaseInfo**(`releaseId`, `integrationId?`): `Promise`<[`ReleaseInfo`](../namespaces/typings.md#releaseinfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `releaseId` | `string` |
| `integrationId?` | `string` |

#### Returns

`Promise`<[`ReleaseInfo`](../namespaces/typings.md#releaseinfo)\>

#### Defined in

[sdk/src/registry/icRegistry.ts:90](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L90)

___

### getIntegrationsCount

**getIntegrationsCount**(): `Promise`<{ `data`: { `totalCount`: `any` = data.totalCount }  }\>

#### Returns

`Promise`<{ `data`: { `totalCount`: `any` = data.totalCount }  }\>

#### Defined in

[sdk/src/registry/icRegistry.ts:149](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L149)

___

### getIntegrationsInfo

**getIntegrationsInfo**(`opt`): `Promise`<[`GetIntegrationInfoQuery`](../namespaces/sdk.md#getintegrationinfoquery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

`Promise`<[`GetIntegrationInfoQuery`](../namespaces/sdk.md#getintegrationinfoquery)\>

#### Defined in

[sdk/src/registry/icRegistry.ts:198](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L198)

___

### getLatestReleaseInfo

**getLatestReleaseInfo**(`opt`): `Promise`<[`GetLatestReleaseQuery`](../namespaces/sdk.md#getlatestreleasequery)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

`Promise`<[`GetLatestReleaseQuery`](../namespaces/sdk.md#getlatestreleasequery)\>

#### Defined in

[sdk/src/registry/icRegistry.ts:203](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L203)

___

### getLatestVersionInfo

**getLatestVersionInfo**(`integration`): `Promise`<[`ReleaseInfo`](../namespaces/typings.md#releaseinfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `integration` | `Object` |
| `integration.id?` | `string` |
| `integration.name?` | `string` |

#### Returns

`Promise`<[`ReleaseInfo`](../namespaces/typings.md#releaseinfo)\>

#### Defined in

[sdk/src/registry/icRegistry.ts:143](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/registry/icRegistry.ts#L143)

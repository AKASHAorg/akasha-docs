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

## Implements

- [`AWF_IIC_REGISTRY`](../interfaces/typings.AWF_IIC_REGISTRY.md)

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

[sdk/src/registry/icRegistry.ts:43](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L43)

## Properties

### INTEGRATION\_REGISTRY\_ADDRESS

 `Readonly` **INTEGRATION\_REGISTRY\_ADDRESS**: `string` = `process.env.INTEGRATION_REGISTRY_ADDRESS`

#### Defined in

[sdk/src/registry/icRegistry.ts:36](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L36)

___

### MANIFEST\_FILE

 `Readonly` **MANIFEST\_FILE**: ``"manifest.json"``

#### Defined in

[sdk/src/registry/icRegistry.ts:37](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L37)

___

### graphQLDocs

 `Readonly` **graphQLDocs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `GetIntegrationInfo` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetLatestRelease` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |

#### Defined in

[sdk/src/registry/icRegistry.ts:38](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L38)

## Methods

### getAllIntegrationReleaseIds

**getAllIntegrationReleaseIds**(`integrationName`, `offset?`): `Promise`<{ `data`: { `nextIndex`: `any` = data.next; `releaseIds`: `any`  }  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `integrationName` | `string` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`Promise`<{ `data`: { `nextIndex`: `any` = data.next; `releaseIds`: `any`  }  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getAllIntegrationReleaseIds](../interfaces/typings.AWF_IIC_REGISTRY.md#getallintegrationreleaseids)

#### Defined in

[sdk/src/registry/icRegistry.ts:155](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L155)

___

### getAllIntegrationsIds

**getAllIntegrationsIds**(`offset?`): `Promise`<{ `data`: { `integrationIds`: `any` ; `nextIndex`: `any` = data.next }  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `offset` | `number` | `0` |

#### Returns

`Promise`<{ `data`: { `integrationIds`: `any` ; `nextIndex`: `any` = data.next }  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getAllIntegrationsIds](../interfaces/typings.AWF_IIC_REGISTRY.md#getallintegrationsids)

#### Defined in

[sdk/src/registry/icRegistry.ts:146](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L146)

___

### getContracts

**getContracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `IntegrationRegistryInstance` | `any` |

#### Defined in

[sdk/src/registry/icRegistry.ts:205](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L205)

___

### getIntegrationId

**getIntegrationId**(`name`): `Promise`<{ `data`: { `id`: `string` = data }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `data`: { `id`: `string` = data }  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getIntegrationId](../interfaces/typings.AWF_IIC_REGISTRY.md#getintegrationid)

#### Defined in

[sdk/src/registry/icRegistry.ts:164](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L164)

___

### getIntegrationInfo

**getIntegrationInfo**(`integrationId`): `Promise`<{ `data`: [`IntegrationInfo`](../interfaces/typings.IntegrationInfo.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationId` | `string` |

#### Returns

`Promise`<{ `data`: [`IntegrationInfo`](../interfaces/typings.IntegrationInfo.md)  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getIntegrationInfo](../interfaces/typings.AWF_IIC_REGISTRY.md#getintegrationinfo)

#### Defined in

[sdk/src/registry/icRegistry.ts:75](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L75)

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

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getIntegrationReleaseId](../interfaces/typings.AWF_IIC_REGISTRY.md#getintegrationreleaseid)

#### Defined in

[sdk/src/registry/icRegistry.ts:169](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L169)

___

### getIntegrationReleaseInfo

**getIntegrationReleaseInfo**(`releaseId`, `integrationId?`): `Promise`<{ `data`: [`ReleaseInfo`](../interfaces/typings.ReleaseInfo.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `releaseId` | `string` |
| `integrationId?` | `string` |

#### Returns

`Promise`<{ `data`: [`ReleaseInfo`](../interfaces/typings.ReleaseInfo.md)  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getIntegrationReleaseInfo](../interfaces/typings.AWF_IIC_REGISTRY.md#getintegrationreleaseinfo)

#### Defined in

[sdk/src/registry/icRegistry.ts:89](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L89)

___

### getIntegrationsCount

**getIntegrationsCount**(): `Promise`<{ `data`: { `totalCount`: `any` = data.totalCount }  }\>

#### Returns

`Promise`<{ `data`: { `totalCount`: `any` = data.totalCount }  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getIntegrationsCount](../interfaces/typings.AWF_IIC_REGISTRY.md#getintegrationscount)

#### Defined in

[sdk/src/registry/icRegistry.ts:138](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L138)

___

### getIntegrationsInfo

**getIntegrationsInfo**(`opt`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getIntegrationInfo`: [`IntegrationInfo`](../interfaces/typings.IntegrationInfo.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getIntegrationInfo`: [`IntegrationInfo`](../interfaces/typings.IntegrationInfo.md)[]  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getIntegrationsInfo](../interfaces/typings.AWF_IIC_REGISTRY.md#getintegrationsinfo)

#### Defined in

[sdk/src/registry/icRegistry.ts:182](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L182)

___

### getLatestReleaseInfo

**getLatestReleaseInfo**(`opt`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getLatestRelease`: [`ReleaseInfo`](../interfaces/typings.ReleaseInfo.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getLatestRelease`: [`ReleaseInfo`](../interfaces/typings.ReleaseInfo.md)[]  }\>

#### Implementation of

[AWF_IIC_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md).[getLatestReleaseInfo](../interfaces/typings.AWF_IIC_REGISTRY.md#getlatestreleaseinfo)

#### Defined in

[sdk/src/registry/icRegistry.ts:193](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L193)

___

### getLatestVersionInfo

**getLatestVersionInfo**(`integration`): `Promise`<{ `data`: [`ReleaseInfo`](../interfaces/typings.ReleaseInfo.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `integration` | `Object` |
| `integration.id?` | `string` |
| `integration.name?` | `string` |

#### Returns

`Promise`<{ `data`: [`ReleaseInfo`](../interfaces/typings.ReleaseInfo.md)  }\>

#### Defined in

[sdk/src/registry/icRegistry.ts:132](https://github.com/AKASHAorg/akasha-framework/blob/c052f00c/sdk/src/registry/icRegistry.ts#L132)

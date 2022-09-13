---
id: "typings.AWF_IIC_REGISTRY"
title: "Interface: AWF_IIC_REGISTRY"
sidebar_label: "AWF_IIC_REGISTRY"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).AWF_IIC_REGISTRY

## Implemented by

- [`AWF_IC_REGISTRY`](../classes/sdk.AWF_IC_REGISTRY.md)

## Methods

### getAllIntegrationReleaseIds

**getAllIntegrationReleaseIds**(`integrationName`, `offset`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationName` | `string` |
| `offset` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:15

___

### getAllIntegrationsIds

**getAllIntegrationsIds**(`offset`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:14

___

### getIntegrationId

**getIntegrationId**(`name`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:16

___

### getIntegrationInfo

**getIntegrationInfo**(`integrationId`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:11

___

### getIntegrationReleaseId

**getIntegrationReleaseId**(`name`, `version`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:17

___

### getIntegrationReleaseInfo

**getIntegrationReleaseInfo**(`releaseId`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `releaseId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:12

___

### getIntegrationsCount

**getIntegrationsCount**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:13

___

### getIntegrationsInfo

**getIntegrationsInfo**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `unknown` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:19

___

### getLatestReleaseInfo

**getLatestReleaseInfo**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `unknown` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

typings/sdk/registry.d.ts:18

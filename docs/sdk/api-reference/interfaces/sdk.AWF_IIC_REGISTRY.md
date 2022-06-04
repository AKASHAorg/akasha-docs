---
id: "sdk.AWF_IIC_REGISTRY"
title: "Interface: AWF_IIC_REGISTRY"
sidebar_label: "AWF_IIC_REGISTRY"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IIC_REGISTRY

## Implemented by

- [`AWF_IC_REGISTRY`](../classes/sdk.AWF_IC_REGISTRY.md)

## Methods

### getAllIntegrationReleaseIds

**getAllIntegrationReleaseIds**(`integrationName`, `offset`): `Promise`<`unknown`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `integrationName` | `string` |
| `offset`          | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:15

---

### getAllIntegrationsIds

**getAllIntegrationsIds**(`offset`): `Promise`<`unknown`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `offset` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:14

---

### getIntegrationId

**getIntegrationId**(`name`): `Promise`<`unknown`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:16

---

### getIntegrationInfo

**getIntegrationInfo**(`integrationId`): `Promise`<`unknown`\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `integrationId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:11

---

### getIntegrationReleaseId

**getIntegrationReleaseId**(`name`, `version`): `Promise`<`unknown`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `name`    | `string` |
| `version` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:17

---

### getIntegrationReleaseInfo

**getIntegrationReleaseInfo**(`releaseId`): `Promise`<`unknown`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `releaseId` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:12

---

### getIntegrationsCount

**getIntegrationsCount**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:13

---

### getIntegrationsInfo

**getIntegrationsInfo**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name  | Type      |
| :---- | :-------- |
| `opt` | `unknown` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:19

---

### getLatestReleaseInfo

**getLatestReleaseInfo**(`opt`): `Observable`<`unknown`\>

#### Parameters

| Name  | Type      |
| :---- | :-------- |
| `opt` | `unknown` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:18

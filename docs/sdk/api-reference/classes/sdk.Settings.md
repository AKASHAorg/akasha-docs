---
id: "sdk.Settings"
title: "Class: Settings"
sidebar_label: "Settings"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).Settings

## Constructors

### constructor

**new Settings**(`_db`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_db` | [`DB`](sdk.DB.md) |

#### Defined in

[sdk/src/settings/index.ts:10](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/index.ts#L10)

## Methods

### get

**get**(`service`): `Promise`<{ `data`: `undefined` \| [`SettingsSchema`](../interfaces/sdk.SettingsSchema.md)  }\>

Returns the settings object for a specified service name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | `string` | The service name |

#### Returns

`Promise`<{ `data`: `undefined` \| [`SettingsSchema`](../interfaces/sdk.SettingsSchema.md)  }\>

#### Defined in

[sdk/src/settings/index.ts:17](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/index.ts#L17)

___

### remove

**remove**(`serviceName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceName` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/settings/index.ts:52](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/index.ts#L52)

___

### set

**set**(`service`, `options`): `Promise`<{ `data`: `string`[]  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | `string` | The service name |
| `options` | [[`string`, `string` \| `number` \| `boolean`]] | Array of option pairs [optionName, value] |

#### Returns

`Promise`<{ `data`: `string`[]  }\>

ServiceCallResult

#### Defined in

[sdk/src/settings/index.ts:30](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/index.ts#L30)

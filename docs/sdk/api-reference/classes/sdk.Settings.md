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

## Implements

- [`ISettingsService`](../interfaces/typings.ISettingsService.md)

## Constructors

### constructor

**new Settings**()

## Methods

### get

**get**<`T`\>(`service`): `Observable`<{ `data`: [`SettingsSchema`](../interfaces/sdk.SettingsSchema.md)<`T`\> & {} & `Instance`  }\>

Returns the settings object for a specified service name

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | `string` | The service name |

#### Returns

`Observable`<{ `data`: [`SettingsSchema`](../interfaces/sdk.SettingsSchema.md)<`T`\> & {} & `Instance`  }\>

#### Implementation of

[ISettingsService](../interfaces/typings.ISettingsService.md).[get](../interfaces/typings.ISettingsService.md#get)

#### Defined in

[sdk/src/settings/index.ts:17](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/index.ts#L17)

___

### remove

**remove**(`serviceName`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceName` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ISettingsService](../interfaces/typings.ISettingsService.md).[remove](../interfaces/typings.ISettingsService.md#remove)

#### Defined in

[sdk/src/settings/index.ts:56](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/index.ts#L56)

___

### set

**set**(`service`, `options`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | `string` | The service name |
| `options` | [[`string`, `string` \| `number` \| `boolean`]] | Array of option pairs [optionName, value] |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`[]\>

ServiceCallResult

#### Implementation of

[ISettingsService](../interfaces/typings.ISettingsService.md).[set](../interfaces/typings.ISettingsService.md#set)

#### Defined in

[sdk/src/settings/index.ts:34](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/index.ts#L34)

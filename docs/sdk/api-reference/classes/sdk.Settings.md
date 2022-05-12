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

- [`ISettingsService`](../interfaces/sdk.ISettingsService.md)

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

[ISettingsService](../interfaces/sdk.ISettingsService.md).[get](../interfaces/sdk.ISettingsService.md#get)

#### Defined in

[sdk/src/settings/index.ts:19](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/settings/index.ts#L19)

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

[ISettingsService](../interfaces/sdk.ISettingsService.md).[remove](../interfaces/sdk.ISettingsService.md#remove)

#### Defined in

[sdk/src/settings/index.ts:58](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/settings/index.ts#L58)

___

### set

**set**(`service`, `options`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | `string` | The service name |
| `options` | [[`string`, `string` \| `number` \| `boolean`]] | Array of option pairs [optionName, value] |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`[]\>

ServiceCallResult

#### Implementation of

[ISettingsService](../interfaces/sdk.ISettingsService.md).[set](../interfaces/sdk.ISettingsService.md#set)

#### Defined in

[sdk/src/settings/index.ts:36](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/settings/index.ts#L36)

---
id: "sdk.ISettingsService"
title: "Interface: ISettingsService"
sidebar_label: "ISettingsService"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).ISettingsService

## Implemented by

- [`Settings`](../classes/sdk.Settings.md)

## Methods

### get

**get**(`moduleName`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:4

___

### remove

**remove**(`moduleName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |

#### Returns

`void`

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:5

___

### set

**set**(`moduleName`, `value`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `value` | `Record`<`string`, `unknown`\> \| [[`string`, `unknown`]] |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:3

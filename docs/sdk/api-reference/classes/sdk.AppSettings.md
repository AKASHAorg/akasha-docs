---
id: "sdk.AppSettings"
title: "Class: AppSettings"
sidebar_label: "AppSettings"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AppSettings

## Implements

- [`IAppSettings`](../interfaces/typings.IAppSettings.md)

## Constructors

### constructor

**new AppSettings**(`log`, `db`, `icRegistry`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `db` | [`DB`](sdk.DB.md) |
| `icRegistry` | [`AWF_IC_REGISTRY`](sdk.AWF_IC_REGISTRY.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/settings/apps.ts:29](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L29)

## Methods

### get

**get**(`appName`): `Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance`  }\>

Returns an app configuration object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance`  }\>

#### Implementation of

[IAppSettings](../interfaces/typings.IAppSettings.md).[get](../interfaces/typings.IAppSettings.md#get)

#### Defined in

[sdk/src/settings/apps.ts:45](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L45)

___

### getAll

**getAll**(): `Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance`[]  }\>

Returns all installed apps

#### Returns

`Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance`[]  }\>

#### Implementation of

[IAppSettings](../interfaces/typings.IAppSettings.md).[getAll](../interfaces/typings.IAppSettings.md#getall)

#### Defined in

[sdk/src/settings/apps.ts:56](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L56)

___

### install

**install**(`app`, `isLocal?`): `Promise`<``false`` \| `string`[]\>

Persist installed app configuration for the current user

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `app` | `Object` | `undefined` | Object |
| `app.id?` | `string` | `undefined` | - |
| `app.name?` | `string` | `undefined` | - |
| `isLocal` | `boolean` | `false` | - |

#### Returns

`Promise`<``false`` \| `string`[]\>

#### Implementation of

[IAppSettings](../interfaces/typings.IAppSettings.md).[install](../interfaces/typings.IAppSettings.md#install)

#### Defined in

[sdk/src/settings/apps.ts:68](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L68)

___

### toggleAppStatus

**toggleAppStatus**(`appName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/src/settings/apps.ts:126](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L126)

___

### uninstall

**uninstall**(`appName`): `Promise`<`void`\>

Uninstall app by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IAppSettings](../interfaces/typings.IAppSettings.md).[uninstall](../interfaces/typings.IAppSettings.md#uninstall)

#### Defined in

[sdk/src/settings/apps.ts:112](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L112)

___

### updateConfig

**updateConfig**(`app`): `Promise`<`string` \| ``false``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`ConfigInfo`](../interfaces/sdk.ConfigInfo.md) |

#### Returns

`Promise`<`string` \| ``false``\>

#### Defined in

[sdk/src/settings/apps.ts:167](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L167)

___

### updateVersion

**updateVersion**(`app`): `Promise`<`string` \| ``false``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`VersionInfo`](../interfaces/sdk.VersionInfo.md) |

#### Returns

`Promise`<`string` \| ``false``\>

#### Defined in

[sdk/src/settings/apps.ts:143](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/settings/apps.ts#L143)

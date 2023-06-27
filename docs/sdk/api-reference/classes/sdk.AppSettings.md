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

[sdk](../modules/sdk.md).AppSettings

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

[sdk/src/settings/apps.ts:36](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L36)

## Methods

### get

**get**(`appName`): `Promise`<{ `data`: `undefined` \| [`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md)  }\>

Returns an app configuration object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<{ `data`: `undefined` \| [`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md)  }\>

#### Defined in

[sdk/src/settings/apps.ts:52](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L52)

___

### getAll

**getAll**(): `Promise`<{ `data`: `undefined` \| [`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md)[]  }\>

Returns all installed apps

#### Returns

`Promise`<{ `data`: `undefined` \| [`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md)[]  }\>

#### Defined in

[sdk/src/settings/apps.ts:62](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L62)

___

### install

**install**(`app`, `isLocal?`): `Promise`<`undefined` \| `string` \| ``false``\>

Persist installed app configuration for the current user

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `app` | `Object` | `undefined` | Object |
| `app.id?` | `string` | `undefined` | - |
| `app.name` | `string` | `undefined` | - |
| `isLocal` | `boolean` | `false` | True only for development. Default is false |

#### Returns

`Promise`<`undefined` \| `string` \| ``false``\>

#### Defined in

[sdk/src/settings/apps.ts:73](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L73)

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

[sdk/src/settings/apps.ts:137](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L137)

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

#### Defined in

[sdk/src/settings/apps.ts:125](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L125)

___

### updateConfig

**updateConfig**(`app`): `Promise`<`undefined` \| `number` \| ``false``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`ConfigInfo`](../interfaces/sdk.ConfigInfo.md) |

#### Returns

`Promise`<`undefined` \| `number` \| ``false``\>

#### Defined in

[sdk/src/settings/apps.ts:178](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L178)

___

### updateVersion

**updateVersion**(`app`): `Promise`<`undefined` \| `number` \| ``false``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`VersionInfo`](../interfaces/sdk.VersionInfo.md) |

#### Returns

`Promise`<`undefined` \| `number` \| ``false``\>

#### Defined in

[sdk/src/settings/apps.ts:153](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/settings/apps.ts#L153)

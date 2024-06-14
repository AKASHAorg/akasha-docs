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

**new AppSettings**(`log`, `db`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `db` | [`DB`](sdk.DB.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/settings/apps.ts:34](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L34)

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

[sdk/src/settings/apps.ts:48](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L48)

___

### getAll

**getAll**(): `Promise`<{ `data`: `undefined` \| [`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md)[]  }\>

Returns all installed apps

#### Returns

`Promise`<{ `data`: `undefined` \| [`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md)[]  }\>

#### Defined in

[sdk/src/settings/apps.ts:58](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L58)

___

### install

**install**(`app`, `isLocal?`): `Promise`<`never`\>

Persist installed app configuration for the current user

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `app` | `Object` | `undefined` | Object |
| `app.id?` | `string` | `undefined` | - |
| `app.name` | `string` | `undefined` | - |
| `isLocal` | `boolean` | `false` | True only for development. Default is false |

#### Returns

`Promise`<`never`\>

#### Defined in

[sdk/src/settings/apps.ts:69](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L69)

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

[sdk/src/settings/apps.ts:93](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L93)

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

[sdk/src/settings/apps.ts:81](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L81)

___

### updateConfig

**updateConfig**(`app`): `Promise`<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`ConfigInfo`](../interfaces/sdk.ConfigInfo.md) |

#### Returns

`Promise`<`never`\>

#### Defined in

[sdk/src/settings/apps.ts:113](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L113)

___

### updateVersion

**updateVersion**(`app`): `Promise`<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`VersionInfo`](../interfaces/sdk.VersionInfo.md) |

#### Returns

`Promise`<`never`\>

#### Defined in

[sdk/src/settings/apps.ts:109](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/settings/apps.ts#L109)

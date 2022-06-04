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

- [`IAppSettings`](../interfaces/sdk.IAppSettings.md)

## Constructors

### constructor

**new AppSettings**(`log`, `db`, `icRegistry`, `globalChannel`)

#### Parameters

| Name            | Type                                        |
| :-------------- | :------------------------------------------ |
| `log`           | [`Logging`](sdk.Logging.md)                 |
| `db`            | [`DB`](sdk.DB.md)                           |
| `icRegistry`    | [`AWF_IC_REGISTRY`](sdk.AWF_IC_REGISTRY.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md)               |

#### Defined in

[sdk/src/settings/apps.ts:30](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L30)

## Methods

### get

**get**(`appName`): `Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance` }\>

Returns an app configuration object

#### Parameters

| Name      | Type     | Description     |
| :-------- | :------- | :-------------- |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance` }\>

#### Implementation of

[IAppSettings](../interfaces/sdk.IAppSettings.md).[get](../interfaces/sdk.IAppSettings.md#get)

#### Defined in

[sdk/src/settings/apps.ts:46](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L46)

---

### getAll

**getAll**(): `Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance`[] }\>

Returns all installed apps

#### Returns

`Promise`<{ `data`: [`AppsSchema`](../interfaces/sdk.AppsSchema.md) & {} & `Instance`[] }\>

#### Implementation of

[IAppSettings](../interfaces/sdk.IAppSettings.md).[getAll](../interfaces/sdk.IAppSettings.md#getall)

#### Defined in

[sdk/src/settings/apps.ts:57](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L57)

---

### install

**install**(`app`): `Promise`<`false` \| `string`[]\>

Persist installed app configuration for the current user

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `app`       | `Object` | Object      |
| `app.id?`   | `string` | -           |
| `app.name?` | `string` | -           |

#### Returns

`Promise`<`false` \| `string`[]\>

#### Implementation of

[IAppSettings](../interfaces/sdk.IAppSettings.md).[install](../interfaces/sdk.IAppSettings.md#install)

#### Defined in

[sdk/src/settings/apps.ts:69](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L69)

---

### toggleAppStatus

**toggleAppStatus**(`appName`): `Promise`<`boolean`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `appName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[sdk/src/settings/apps.ts:116](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L116)

---

### uninstall

**uninstall**(`appName`): `Promise`<`void`\>

Uninstall app by name

#### Parameters

| Name      | Type     | Description     |
| :-------- | :------- | :-------------- |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IAppSettings](../interfaces/sdk.IAppSettings.md).[uninstall](../interfaces/sdk.IAppSettings.md#uninstall)

#### Defined in

[sdk/src/settings/apps.ts:102](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L102)

---

### updateConfig

**updateConfig**(`app`): `Promise`<`string` \| `false`\>

#### Parameters

| Name  | Type                                            |
| :---- | :---------------------------------------------- |
| `app` | [`ConfigInfo`](../interfaces/sdk.ConfigInfo.md) |

#### Returns

`Promise`<`string` \| `false`\>

#### Defined in

[sdk/src/settings/apps.ts:157](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L157)

---

### updateVersion

**updateVersion**(`app`): `Promise`<`string` \| `false`\>

#### Parameters

| Name  | Type                                              |
| :---- | :------------------------------------------------ |
| `app` | [`VersionInfo`](../interfaces/sdk.VersionInfo.md) |

#### Returns

`Promise`<`string` \| `false`\>

#### Defined in

[sdk/src/settings/apps.ts:133](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/settings/apps.ts#L133)

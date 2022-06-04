---
id: "sdk.IAppSettings"
title: "Interface: IAppSettings"
sidebar_label: "IAppSettings"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).IAppSettings

User Application management APIs

## Implemented by

- [`AppSettings`](../classes/sdk.AppSettings.md)

## Methods

### get

**get**(`appName`): `Promise`<`unknown`\>

Returns an app configuration object

#### Parameters

| Name      | Type     | Description     |
| :-------- | :------- | :-------------- |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:15

---

### getAll

**getAll**(): `Promise`<`unknown`\>

Returns all installed apps

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:19

---

### install

**install**(`app`): `Promise`<`boolean` \| `string`[]\>

Persist installed app configuration for the current user

#### Parameters

| Name  | Type      | Description |
| :---- | :-------- | :---------- |
| `app` | `unknown` | Object      |

#### Returns

`Promise`<`boolean` \| `string`[]\>

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:24

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

#### Defined in

sdk/typings/lib/interfaces/settings.d.ts:29

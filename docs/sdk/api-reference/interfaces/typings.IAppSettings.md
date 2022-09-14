---
id: "typings.IAppSettings"
title: "Interface: IAppSettings"
sidebar_label: "IAppSettings"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).IAppSettings

User Application management APIs

## Implemented by

- [`AppSettings`](../classes/sdk.AppSettings.md)

## Methods

### get

**get**(`appName`): `Promise`<`unknown`\>

Returns an app configuration object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | Name of the app |

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/settings.d.ts:15

___

### getAll

**getAll**(): `Promise`<`unknown`\>

Returns all installed apps

#### Returns

`Promise`<`unknown`\>

#### Defined in

typings/sdk/settings.d.ts:19

___

### install

**install**(`app`, `isLocal?`): `Promise`<`boolean` \| `string`[]\>

Persist installed app configuration for the current user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `unknown` | Object |
| `isLocal?` | `boolean` | - |

#### Returns

`Promise`<`boolean` \| `string`[]\>

#### Defined in

typings/sdk/settings.d.ts:24

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

typings/sdk/settings.d.ts:29

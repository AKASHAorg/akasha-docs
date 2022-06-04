---
id: "typings.Services"
title: "Interface: Services"
sidebar_label: "Services"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).Services

Services that are available in the SDK.

## Properties

### appSettings

**appSettings**: [`IAppSettings`](sdk.IAppSettings.md)

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:17

---

### common

**common**: `Object`

#### Type declaration

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `ipfs` | [`AWF_IIpfsConnector`](sdk.AWF_IIpfsConnector.md)     |
| `web3` | [`IWeb3Connector`](sdk.IWeb3Connector.md)<`unknown`\> |

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:19

---

### db

**db**: [`IDBService`](sdk.IDBService.md)<`unknown`, `unknown`\>

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:18

---

### gql

**gql**: [`IGqlClient`](sdk.IGqlClient.md)<`unknown`\>

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:13

---

### log

**log**: [`ILogService`](sdk.ILogService.md)

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:14

---

### settings

**settings**: [`ISettingsService`](sdk.ISettingsService.md)

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:16

---

### stash

**stash**: [`IStashService`](sdk.IStashService.md)<`unknown`\>

#### Defined in

sdk/typings/lib/service.interfaces.d.ts:15

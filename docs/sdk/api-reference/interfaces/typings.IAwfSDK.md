---
id: "typings.IAwfSDK"
title: "Interface: IAwfSDK"
sidebar_label: "IAwfSDK"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).IAwfSDK

AKASHA SDK contains two main objects:

- `api` - used to communicate with remote products and services.

- `services` - Helpers and utilities to interact with underlying packages and technologies.
    - example: web3, local database, user settings (local) etc.

## Properties

### api

 **api**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auth` | [`AWF_IAuth`](sdk.AWF_IAuth.md) |
| `comments` | [`AWF_IComments`](sdk.AWF_IComments.md) |
| `ens` | [`AWF_IENS`](sdk.AWF_IENS.md) |
| `entries` | [`AWF_IEntry`](sdk.AWF_IEntry.md) |
| `globalChannel` | `ReplaySubject`<[`GlobalEventBusData`](../namespaces/sdk.md#globaleventbusdata)\> |
| `icRegistry` | [`AWF_IIC_REGISTRY`](sdk.AWF_IIC_REGISTRY.md) |
| `profile` | [`AWF_IProfile`](sdk.AWF_IProfile.md) |
| `tags` | [`AWF_ITags`](sdk.AWF_ITags.md) |

#### Defined in

sdk/typings/lib/index.d.ts:20

___

### services

 **services**: [`Services`](typings.Services.md)

#### Defined in

sdk/typings/lib/index.d.ts:19

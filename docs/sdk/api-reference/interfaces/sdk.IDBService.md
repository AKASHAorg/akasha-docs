---
id: "sdk.IDBService"
title: "Interface: IDBService<DB, Collection>"
sidebar_label: "IDBService"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).IDBService

## Type parameters

| Name |
| :------ |
| `DB` |
| `Collection` |

## Implemented by

- [`DB`](../classes/sdk.DB.md)

## Methods

### getCollection

**getCollection**(`name`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Collection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Collection`\>

#### Defined in

sdk/typings/lib/interfaces/db.d.ts:5

___

### getDb

**getDb**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`DB`\>

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`DB`\>

#### Defined in

sdk/typings/lib/interfaces/db.d.ts:4

___

### open

**open**(`version`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`DB`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`DB`\>

#### Defined in

sdk/typings/lib/interfaces/db.d.ts:3

---
id: "typings.IDBService"
title: "Interface: IDBService<DB, Collection>"
sidebar_label: "IDBService"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).IDBService

## Type parameters

| Name |
| :------ |
| `DB` |
| `Collection` |

## Methods

### getCollection

**getCollection**(`name`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Collection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Collection`\>

#### Defined in

typings/sdk/db.d.ts:5

___

### getDb

**getDb**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`DB`\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`DB`\>

#### Defined in

typings/sdk/db.d.ts:4

___

### open

**open**(`version`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`DB`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`DB`\>

#### Defined in

typings/sdk/db.d.ts:3

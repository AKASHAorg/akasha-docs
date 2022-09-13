---
id: "sdk.DB"
title: "Class: DB"
sidebar_label: "DB"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).DB

## Implements

- [`IDBService`](../interfaces/typings.IDBService.md)<`Database`, `Collection`\>

## Constructors

### constructor

**new DB**()

## Methods

### create

**create**(`name`): `Database`

Create a new DB instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | database name |

#### Returns

`Database`

#### Defined in

[sdk/src/db/index.ts:24](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/db/index.ts#L24)

___

### getCollection

**getCollection**<`T`\>(`name`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Collection`<`T`\>\>

Get access to the db collection by name

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | string representing the collection name |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Collection`<`T`\>\>

#### Implementation of

[IDBService](../interfaces/typings.IDBService.md).[getCollection](../interfaces/typings.IDBService.md#getcollection)

#### Defined in

[sdk/src/db/index.ts:58](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/db/index.ts#L58)

___

### getDb

**getDb**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Database`\>

Get access to the local db

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Database`\>

#### Implementation of

[IDBService](../interfaces/typings.IDBService.md).[getDb](../interfaces/typings.IDBService.md#getdb)

#### Defined in

[sdk/src/db/index.ts:49](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/db/index.ts#L49)

___

### open

**open**(`version?`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Database`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `version` | `number` | `1` | number representing the db version |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`Database`\>

#### Implementation of

[IDBService](../interfaces/typings.IDBService.md).[open](../interfaces/typings.IDBService.md#open)

#### Defined in

[sdk/src/db/index.ts:34](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/db/index.ts#L34)

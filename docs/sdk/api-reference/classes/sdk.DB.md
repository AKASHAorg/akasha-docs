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

- [`IDBService`](../interfaces/sdk.IDBService.md)<`Database`, `Collection`\>

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

[sdk/src/db/index.ts:25](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/db/index.ts#L25)

___

### getCollection

**getCollection**<`T`\>(`name`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Collection`<`T`\>\>

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

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Collection`<`T`\>\>

#### Implementation of

[IDBService](../interfaces/sdk.IDBService.md).[getCollection](../interfaces/sdk.IDBService.md#getcollection)

#### Defined in

[sdk/src/db/index.ts:59](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/db/index.ts#L59)

___

### getDb

**getDb**(): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Database`\>

Get access to the local db

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Database`\>

#### Implementation of

[IDBService](../interfaces/sdk.IDBService.md).[getDb](../interfaces/sdk.IDBService.md#getdb)

#### Defined in

[sdk/src/db/index.ts:50](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/db/index.ts#L50)

___

### open

**open**(`version?`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Database`\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `version` | `number` | `1` | number representing the db version |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`Database`\>

#### Implementation of

[IDBService](../interfaces/sdk.IDBService.md).[open](../interfaces/sdk.IDBService.md#open)

#### Defined in

[sdk/src/db/index.ts:35](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/db/index.ts#L35)

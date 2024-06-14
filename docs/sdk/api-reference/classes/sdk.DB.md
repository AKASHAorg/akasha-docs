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

[sdk](../modules/sdk.md).DB

## Constructors

### constructor

**new DB**()

#### Defined in

[sdk/src/db/index.ts:19](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/db/index.ts#L19)

## Methods

### create

**create**(`name`): [`default`](sdk.default-2.md)

Create a new DB instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | database name |

#### Returns

[`default`](sdk.default-2.md)

#### Defined in

[sdk/src/db/index.ts:28](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/db/index.ts#L28)

___

### getCollections

**getCollections**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `integrations` | `undefined` \| `Table`<[`IntegrationSchema`](../interfaces/sdk.IntegrationSchema.md), `string`\> |
| `settings` | `undefined` \| `Table`<[`SettingsSchema`](../interfaces/sdk.SettingsSchema.md), `number`\> |

#### Defined in

[sdk/src/db/index.ts:46](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/db/index.ts#L46)

___

### getDb

**getDb**(): `Promise`<[`default`](sdk.default-2.md)\>

Get access to the local db

#### Returns

`Promise`<[`default`](sdk.default-2.md)\>

#### Defined in

[sdk/src/db/index.ts:38](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/db/index.ts#L38)

---
id: "sdk.Gql"
title: "Class: Gql"
sidebar_label: "Gql"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).Gql

## Implements

- [`IGqlClient`](../interfaces/sdk.IGqlClient.md)<`unknown`\>

## Constructors

### constructor

**new Gql**(`stash`)

#### Parameters

| Name    | Type                    |
| :------ | :---------------------- |
| `stash` | [`Stash`](sdk.Stash.md) |

#### Defined in

[sdk/src/gql/index.ts:26](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/gql/index.ts#L26)

## Properties

### \_link

`Readonly` **\_link**: `HttpLink`

#### Defined in

[sdk/src/gql/index.ts:22](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/gql/index.ts#L22)

## Methods

### clearCache

**clearCache**(): `void`

#### Returns

`void`

#### Defined in

[sdk/src/gql/index.ts:83](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/gql/index.ts#L83)

---

### getCache

**getCache**(): [`IQuickLRU`](../namespaces/sdk.md#iquicklru)

#### Returns

[`IQuickLRU`](../namespaces/sdk.md#iquicklru)

cache container for graphQL results

#### Defined in

[sdk/src/gql/index.ts:79](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/gql/index.ts#L79)

---

### makeOperation

**makeOperation**(`operation`): `GraphQLRequest`

#### Parameters

| Name        | Type                                                | Description            |
| :---------- | :-------------------------------------------------- | :--------------------- |
| `operation` | [`GqlOperation`](../interfaces/sdk.GqlOperation.md) | graphQL request object |

#### Returns

`GraphQLRequest`

an object with the transformed graphQL template string for query

#### Defined in

[sdk/src/gql/index.ts:66](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/gql/index.ts#L66)

---

### run

**run**<`T`\>(`operation`, `saveCache?`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type             | Default value | Description            |
| :---------- | :--------------- | :------------ | :--------------------- |
| `operation` | `GraphQLRequest` | `undefined`   | graphQL request object |
| `saveCache` | `boolean`        | `true`        | Cache the result       |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`T`\>

ServiceCallResult

#### Implementation of

[IGqlClient](../interfaces/sdk.IGqlClient.md).[run](../interfaces/sdk.IGqlClient.md#run)

#### Defined in

[sdk/src/gql/index.ts:43](https://github.com/AKASHAorg/akasha-framework/blob/5fd9b78a/sdk/src/gql/index.ts#L43)

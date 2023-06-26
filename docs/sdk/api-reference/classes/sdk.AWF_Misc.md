---
id: "sdk.AWF_Misc"
title: "Class: AWF_Misc"
sidebar_label: "AWF_Misc"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_Misc

## Constructors

### constructor

**new AWF_Misc**()

#### Defined in

[sdk/src/common/misc.ts:11](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/misc.ts#L11)

## Properties

### statsPath

 `Static` `Readonly` **statsPath**: ``"/api/service-status"``

#### Defined in

[sdk/src/common/misc.ts:9](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/misc.ts#L9)

## Methods

### getAccountInfoFromID

**getAccountInfoFromID**(`serialisedID`, `isDID?`): `AccountIdParams`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `serialisedID` | `string` | `undefined` |
| `isDID` | `boolean` | `true` |

#### Returns

`AccountIdParams`

#### Defined in

[sdk/src/common/misc.ts:23](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/misc.ts#L23)

___

### getApiStatus

**getApiStatus**(): `Promise`<{ `statusCode`: `number` = response.status; `success`: `boolean` = response.ok }\>

#### Returns

`Promise`<{ `statusCode`: `number` = response.status; `success`: `boolean` = response.ok }\>

#### Defined in

[sdk/src/common/misc.ts:16](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/misc.ts#L16)

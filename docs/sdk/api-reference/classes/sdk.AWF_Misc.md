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

[sdk/src/common/misc.ts:8](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/common/misc.ts#L8)

## Properties

### statsPath

 `Static` `Readonly` **statsPath**: ``"/api/service-status"``

#### Defined in

[sdk/src/common/misc.ts:7](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/common/misc.ts#L7)

## Methods

### getApiStatus

**getApiStatus**(): `Promise`<{ `statusCode`: `number` = response.status; `success`: `boolean` = response.ok }\>

#### Returns

`Promise`<{ `statusCode`: `number` = response.status; `success`: `boolean` = response.ok }\>

#### Defined in

[sdk/src/common/misc.ts:13](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/common/misc.ts#L13)

___

### publicKeyFromString

**publicKeyFromString**(`pubKey`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |

#### Returns

`PublicKey`

#### Defined in

[sdk/src/common/misc.ts:19](https://github.com/AKASHAorg/akasha-framework/blob/433e1162/sdk/src/common/misc.ts#L19)

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

[sdk](../modules/sdk.md).AWF_Misc

## Constructors

### constructor

**new AWF_Misc**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AWF_Config`](sdk.AWF_Config.md) |

#### Defined in

[sdk/src/common/misc.ts:18](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/misc.ts#L18)

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

[sdk/src/common/misc.ts:54](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/misc.ts#L54)

___

### getApiStatus

**getApiStatus**(): `Promise`<{ `statusCode`: `number` = 200; `success`: `boolean` = true }\>

#### Returns

`Promise`<{ `statusCode`: `number` = 200; `success`: `boolean` = true }\>

#### Defined in

[sdk/src/common/misc.ts:41](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/misc.ts#L41)

___

### resolveDID

**resolveDID**(`serialisedID`): `Promise`<`undefined` \| ``null`` \| `DIDDocument`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialisedID` | `string` |

#### Returns

`Promise`<`undefined` \| ``null`` \| `DIDDocument`\>

#### Defined in

[sdk/src/common/misc.ts:60](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/misc.ts#L60)

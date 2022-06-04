---
id: "sdk.AWF_IENS"
title: "Interface: AWF_IENS"
sidebar_label: "AWF_IENS"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IENS

## Implemented by

- [`AWF_ENS`](../classes/sdk.AWF_ENS.md)

## Methods

### claimName

**claimName**(`name`): `Observable`<`unknown`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:4

---

### isAvailable

**isAvailable**(`name`): `Promise`<`unknown`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:6

---

### registerName

**registerName**(`name`): `Observable`<`unknown`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Observable`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:3

---

### resolveAddress

**resolveAddress**(`ethAddress`): `Promise`<`unknown`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `ethAddress` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:7

---

### resolveName

**resolveName**(`name`): `Promise`<`unknown`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:8

---

### userIsOwnerOf

**userIsOwnerOf**(`name`): `Promise`<`unknown`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

sdk/typings/lib/interfaces/registry.d.ts:5

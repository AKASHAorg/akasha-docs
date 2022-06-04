---
id: "sdk.AWF_IIpfsConnector"
title: "Interface: AWF_IIpfsConnector"
sidebar_label: "AWF_IIpfsConnector"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IIpfsConnector

## Implemented by

- [`AWF_IpfsConnector`](../classes/sdk.AWF_IpfsConnector.md)

## Properties

### gateway

**gateway**: `string`

#### Defined in

sdk/typings/lib/interfaces/ipfs.connector.d.ts:5

## Methods

### catDocument

**catDocument**(`doc`): `Observable`<{ `data`: `string` }\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `doc` | `string` |

#### Returns

`Observable`<{ `data`: `string` }\>

#### Defined in

sdk/typings/lib/interfaces/ipfs.connector.d.ts:9

---

### getLegalDoc

**getLegalDoc**(`doc`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Parameters

| Name  | Type                                       |
| :---- | :----------------------------------------- |
| `doc` | [`LEGAL_DOCS`](../enums/sdk.LEGAL_DOCS.md) |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`string`\>

#### Defined in

sdk/typings/lib/interfaces/ipfs.connector.d.ts:16

---

### getSettings

**getSettings**(): `Object`

#### Returns

`Object`

| Name      | Type     |
| :-------- | :------- |
| `gateway` | `string` |

#### Defined in

sdk/typings/lib/interfaces/ipfs.connector.d.ts:6

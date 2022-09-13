---
id: "typings.AWF_IIpfsConnector"
title: "Interface: AWF_IIpfsConnector"
sidebar_label: "AWF_IIpfsConnector"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[typings](../namespaces/typings.md).AWF_IIpfsConnector

## Implemented by

- [`AWF_IpfsConnector`](../classes/sdk.AWF_IpfsConnector.md)

## Properties

### gateway

 **gateway**: `string`

#### Defined in

typings/sdk/ipfs.connector.d.ts:5

## Methods

### catDocument

**catDocument**(`doc`): `Observable`<{ `data`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `string` |

#### Returns

`Observable`<{ `data`: `string`  }\>

#### Defined in

typings/sdk/ipfs.connector.d.ts:9

___

### getLegalDoc

**getLegalDoc**(`doc`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`LEGAL_DOCS`](../enums/typings.LEGAL_DOCS.md) | legal docs |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`string`\>

#### Defined in

typings/sdk/ipfs.connector.d.ts:16

___

### getSettings

**getSettings**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gateway` | `string` |

#### Defined in

typings/sdk/ipfs.connector.d.ts:6

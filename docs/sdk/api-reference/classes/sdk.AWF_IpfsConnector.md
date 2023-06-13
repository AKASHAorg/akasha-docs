---
id: "sdk.AWF_IpfsConnector"
title: "Class: AWF_IpfsConnector"
sidebar_label: "AWF_IpfsConnector"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_IpfsConnector

## Implements

- [`AWF_IIpfsConnector`](../interfaces/typings.AWF_IIpfsConnector.md)

## Constructors

### constructor

**new AWF_IpfsConnector**(`log`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |

#### Defined in

[sdk/src/common/ipfs.connector.ts:29](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L29)

## Properties

### fallbackGateway

 `Readonly` **fallbackGateway**: ``"ipfs.nftstorage.link"``

#### Defined in

[sdk/src/common/ipfs.connector.ts:20](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L20)

___

### gateway

 `Readonly` **gateway**: ``"https://cloudflare-ipfs.com/ipfs/"``

#### Implementation of

[AWF_IIpfsConnector](../interfaces/typings.AWF_IIpfsConnector.md).[gateway](../interfaces/typings.AWF_IIpfsConnector.md#gateway)

#### Defined in

[sdk/src/common/ipfs.connector.ts:18](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L18)

___

### originGateway

 `Readonly` **originGateway**: ``"ipfs.cf-ipfs.com"``

#### Defined in

[sdk/src/common/ipfs.connector.ts:19](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L19)

## Methods

### buildFallBackLink

**buildFallBackLink**(`hash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID` |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:85](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L85)

___

### buildIpfsLinks

**buildIpfsLinks**(`hash`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fallbackLink` | `string` |
| `originLink` | `string` |
| `pathLink` | `string` |

#### Defined in

[sdk/src/common/ipfs.connector.ts:101](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L101)

___

### buildOriginLink

**buildOriginLink**(`hash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID` |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:77](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L77)

___

### buildPathLink

**buildPathLink**(`hash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID` |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:93](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L93)

___

### catDocument

**catDocument**<`T`\>(`docHash`, `jsonResponse?`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `docHash` | `string` \| `CID` | `undefined` |
| `jsonResponse` | `boolean` | `false` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`T`\>

#### Implementation of

[AWF_IIpfsConnector](../interfaces/typings.AWF_IIpfsConnector.md).[catDocument](../interfaces/typings.AWF_IIpfsConnector.md#catdocument)

#### Defined in

[sdk/src/common/ipfs.connector.ts:39](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L39)

___

### getLegalDoc

**getLegalDoc**(`doc`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`never`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`LEGAL_DOCS`](../enums/typings.LEGAL_DOCS.md) | legal docs |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<`never`\>

#### Implementation of

[AWF_IIpfsConnector](../interfaces/typings.AWF_IIpfsConnector.md).[getLegalDoc](../interfaces/typings.AWF_IIpfsConnector.md#getlegaldoc)

#### Defined in

[sdk/src/common/ipfs.connector.ts:61](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L61)

___

### getSettings

**getSettings**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gateway` | `string` |

#### Implementation of

[AWF_IIpfsConnector](../interfaces/typings.AWF_IIpfsConnector.md).[getSettings](../interfaces/typings.AWF_IIpfsConnector.md#getsettings)

#### Defined in

[sdk/src/common/ipfs.connector.ts:33](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L33)

___

### multiAddrToUri

**multiAddrToUri**(`addrList`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `addrList` | `string`[] |

#### Returns

`any`[]

#### Defined in

[sdk/src/common/ipfs.connector.ts:118](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L118)

___

### transformBase16HashToV1

**transformBase16HashToV1**(`hash`): `CID`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`CID`

#### Defined in

[sdk/src/common/ipfs.connector.ts:113](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L113)

___

### validateCid

**validateCid**(`hash`): { `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID` ; `link`: `undefined` = hash }

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID` |

#### Returns

{ `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID` ; `link`: `undefined` = hash }

#### Defined in

[sdk/src/common/ipfs.connector.ts:66](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/common/ipfs.connector.ts#L66)

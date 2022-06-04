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

- [`AWF_IIpfsConnector`](../interfaces/sdk.AWF_IIpfsConnector.md)

## Constructors

### constructor

**new AWF_IpfsConnector**(`log`)

#### Parameters

| Name  | Type                        |
| :---- | :-------------------------- |
| `log` | [`Logging`](sdk.Logging.md) |

#### Defined in

[sdk/src/common/ipfs.connector.ts:27](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L27)

## Properties

### fallbackGateway

`Readonly` **fallbackGateway**: `"ipfs.infura-ipfs.io"`

#### Defined in

[sdk/src/common/ipfs.connector.ts:18](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L18)

---

### gateway

`Readonly` **gateway**: `"https://hub.textile.io/ipfs/"`

#### Implementation of

[AWF_IIpfsConnector](../interfaces/sdk.AWF_IIpfsConnector.md).[gateway](../interfaces/sdk.AWF_IIpfsConnector.md#gateway)

#### Defined in

[sdk/src/common/ipfs.connector.ts:16](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L16)

---

### originGateway

`Readonly` **originGateway**: `"ipfs.hub.textile.io"`

#### Defined in

[sdk/src/common/ipfs.connector.ts:17](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L17)

## Methods

### buildFallBackLink

**buildFallBackLink**(`hash`): `string`

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `hash` | `string` \| `CID` |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:83](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L83)

---

### buildIpfsLinks

**buildIpfsLinks**(`hash`): `Object`

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `hash` | `string` \| `CID` |

#### Returns

`Object`

| Name           | Type     |
| :------------- | :------- |
| `fallbackLink` | `string` |
| `originLink`   | `string` |
| `pathLink`     | `string` |

#### Defined in

[sdk/src/common/ipfs.connector.ts:99](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L99)

---

### buildOriginLink

**buildOriginLink**(`hash`): `string`

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `hash` | `string` \| `CID` |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:75](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L75)

---

### buildPathLink

**buildPathLink**(`hash`): `string`

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `hash` | `string` \| `CID` |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:91](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L91)

---

### catDocument

**catDocument**<`T`\>(`docHash`, `jsonResponse?`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type              | Default value |
| :------------- | :---------------- | :------------ |
| `docHash`      | `string` \| `CID` | `undefined`   |
| `jsonResponse` | `boolean`         | `false`       |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`T`\>

#### Implementation of

[AWF_IIpfsConnector](../interfaces/sdk.AWF_IIpfsConnector.md).[catDocument](../interfaces/sdk.AWF_IIpfsConnector.md#catdocument)

#### Defined in

[sdk/src/common/ipfs.connector.ts:37](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L37)

---

### getLegalDoc

**getLegalDoc**(`doc`): [`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`never`\>

#### Parameters

| Name  | Type                                       | Description |
| :---- | :----------------------------------------- | :---------- |
| `doc` | [`LEGAL_DOCS`](../enums/sdk.LEGAL_DOCS.md) | legal docs  |

#### Returns

[`ServiceCallResult`](../namespaces/sdk.md#servicecallresult)<`never`\>

#### Implementation of

[AWF_IIpfsConnector](../interfaces/sdk.AWF_IIpfsConnector.md).[getLegalDoc](../interfaces/sdk.AWF_IIpfsConnector.md#getlegaldoc)

#### Defined in

[sdk/src/common/ipfs.connector.ts:59](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L59)

---

### getSettings

**getSettings**(): `Object`

#### Returns

`Object`

| Name      | Type     |
| :-------- | :------- |
| `gateway` | `string` |

#### Implementation of

[AWF_IIpfsConnector](../interfaces/sdk.AWF_IIpfsConnector.md).[getSettings](../interfaces/sdk.AWF_IIpfsConnector.md#getsettings)

#### Defined in

[sdk/src/common/ipfs.connector.ts:31](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L31)

---

### multiAddrToUri

**multiAddrToUri**(`addrList`): `any`[]

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `addrList` | `string`[] |

#### Returns

`any`[]

#### Defined in

[sdk/src/common/ipfs.connector.ts:116](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L116)

---

### transformBase16HashToV1

**transformBase16HashToV1**(`hash`): `CID`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `hash` | `string` |

#### Returns

`CID`

#### Defined in

[sdk/src/common/ipfs.connector.ts:111](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L111)

---

### validateCid

**validateCid**(`hash`): { `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID` ; `link`: `undefined` = hash }

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `hash` | `string` \| `CID` |

#### Returns

{ `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID` ; `link`: `undefined` = hash }

#### Defined in

[sdk/src/common/ipfs.connector.ts:64](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/common/ipfs.connector.ts#L64)

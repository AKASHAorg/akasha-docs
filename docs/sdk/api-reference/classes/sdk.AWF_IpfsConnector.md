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

## Constructors

### constructor

**new AWF_IpfsConnector**(`log`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |

#### Defined in

[sdk/src/common/ipfs.connector.ts:27](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L27)

## Properties

### fallbackGateway

 `Readonly` **fallbackGateway**: ``"ipfs.w3s.link"``

#### Defined in

[sdk/src/common/ipfs.connector.ts:17](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L17)

___

### gateway

 `Readonly` **gateway**: ``"https://cloudflare-ipfs.com/ipfs/"``

#### Defined in

[sdk/src/common/ipfs.connector.ts:15](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L15)

___

### originGateway

 `Readonly` **originGateway**: ``"ipfs.cf-ipfs.com"``

#### Defined in

[sdk/src/common/ipfs.connector.ts:16](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L16)

## Methods

### buildFallBackLink

**buildFallBackLink**(`hash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:115](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L115)

___

### buildIpfsLinks

**buildIpfsLinks**(`hash`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fallbackLink` | `string` |
| `originLink` | `string` |
| `pathLink` | `string` |

#### Defined in

[sdk/src/common/ipfs.connector.ts:133](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L133)

___

### buildOriginLink

**buildOriginLink**(`hash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:106](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L106)

___

### buildPathLink

**buildPathLink**(`hash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> |

#### Returns

`string`

#### Defined in

[sdk/src/common/ipfs.connector.ts:124](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L124)

___

### catDocument

**catDocument**<`T`\>(`docHash`, `jsonResponse?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `docHash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> | `undefined` |
| `jsonResponse` | `boolean` | `false` |

#### Returns

`Promise`<`T`\>

#### Defined in

[sdk/src/common/ipfs.connector.ts:67](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L67)

___

### getLegalDoc

**getLegalDoc**(`doc`): `Promise`<`never`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`LEGAL_DOCS`](../enums/typings.LEGAL_DOCS.md) | legal docs |

#### Returns

`Promise`<`never`\>

#### Defined in

[sdk/src/common/ipfs.connector.ts:88](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L88)

___

### getSettings

**getSettings**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gateway` | `string` |

#### Defined in

[sdk/src/common/ipfs.connector.ts:34](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L34)

___

### multiAddrToUri

**multiAddrToUri**(`addrList`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `addrList` | `string`[] |

#### Returns

`string`[]

#### Defined in

[sdk/src/common/ipfs.connector.ts:152](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L152)

___

### transformBase16HashToV1

**transformBase16HashToV1**(`hash`): `CID`<`unknown`, `number`, `number`, ``1``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`CID`<`unknown`, `number`, `number`, ``1``\>

#### Defined in

[sdk/src/common/ipfs.connector.ts:146](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L146)

___

### uploadFile

**uploadFile**(`file`, `email?`): `Promise`<`AnyLink`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Blob` |
| `email?` | \`${string}@${string}\` |

#### Returns

`Promise`<`AnyLink`\>

#### Defined in

[sdk/src/common/ipfs.connector.ts:42](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L42)

___

### validateCid

**validateCid**(`hash`): { `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID`<`unknown`, `number`, `number`, `Version`\> ; `link`: `undefined` = hash }

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> |

#### Returns

{ `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID`<`unknown`, `number`, `number`, `Version`\> ; `link`: `undefined` = hash }

#### Defined in

[sdk/src/common/ipfs.connector.ts:94](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L94)

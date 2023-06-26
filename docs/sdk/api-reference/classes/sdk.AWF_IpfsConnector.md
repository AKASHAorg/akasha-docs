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

[sdk](../modules/sdk.md).AWF_IpfsConnector

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

[sdk/src/common/ipfs.connector.ts:114](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L114)

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

[sdk/src/common/ipfs.connector.ts:132](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L132)

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

[sdk/src/common/ipfs.connector.ts:105](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L105)

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

[sdk/src/common/ipfs.connector.ts:123](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L123)

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

[sdk/src/common/ipfs.connector.ts:66](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L66)

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

[sdk/src/common/ipfs.connector.ts:87](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L87)

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

[sdk/src/common/ipfs.connector.ts:151](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L151)

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

[sdk/src/common/ipfs.connector.ts:145](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L145)

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

[sdk/src/common/ipfs.connector.ts:41](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L41)

___

### validateCid

**validateCid**(`hash`): { `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID`<`unknown`, `number`, `number`, `Version`\> ; `link?`: `undefined` = hash }

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` \| `CID`<`unknown`, `number`, `number`, `Version`\> |

#### Returns

{ `cid`: `undefined` ; `link`: `string` = hash } \| { `cid`: `CID`<`unknown`, `number`, `number`, `Version`\> ; `link?`: `undefined` = hash }

#### Defined in

[sdk/src/common/ipfs.connector.ts:93](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/common/ipfs.connector.ts#L93)

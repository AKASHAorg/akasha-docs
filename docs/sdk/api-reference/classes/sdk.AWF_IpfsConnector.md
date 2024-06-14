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

**new AWF_IpfsConnector**(`log`, `ceramic`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `ceramic` | [`default`](sdk.default.md) |
| `config` | [`AWF_Config`](sdk.AWF_Config.md) |

#### Defined in

[sdk/src/common/ipfs.connector.ts:39](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L39)

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

[sdk/src/common/ipfs.connector.ts:206](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L206)

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

[sdk/src/common/ipfs.connector.ts:224](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L224)

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

[sdk/src/common/ipfs.connector.ts:197](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L197)

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

[sdk/src/common/ipfs.connector.ts:215](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L215)

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

[sdk/src/common/ipfs.connector.ts:158](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L158)

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

[sdk/src/common/ipfs.connector.ts:179](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L179)

___

### getSettings

**getSettings**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fallbackGateway` | `string` |
| `originGateway` | `string` |
| `pathGateway` | `string` |

#### Defined in

[sdk/src/common/ipfs.connector.ts:50](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L50)

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

[sdk/src/common/ipfs.connector.ts:243](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L243)

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

[sdk/src/common/ipfs.connector.ts:237](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L237)

___

### uploadFile

**uploadFile**(`file`): `Promise`<`undefined` \| `AnyLink`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Blob` |

#### Returns

`Promise`<`undefined` \| `AnyLink`\>

#### Defined in

[sdk/src/common/ipfs.connector.ts:138](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L138)

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

[sdk/src/common/ipfs.connector.ts:185](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/common/ipfs.connector.ts#L185)

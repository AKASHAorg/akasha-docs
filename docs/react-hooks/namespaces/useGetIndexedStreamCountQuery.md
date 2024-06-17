---
id: "useGetIndexedStreamCountQuery"
title: "Namespace: useGetIndexedStreamCountQuery"
sidebar_label: "useGetIndexedStreamCountQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:762](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L762)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetIndexedStreamCountQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `filters?`: `AkashaIndexedStreamFiltersInput` ; `indexer`: `string`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetIndexedStreamCountQuery`\>

##### Returns

`Promise`<`GetIndexedStreamCountQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:787](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L787)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `filters?`: `AkashaIndexedStreamFiltersInput` ; `indexer`: `string`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `filters?`: `AkashaIndexedStreamFiltersInput` ; `indexer`: `string`  }\> |

#### Returns

(`string` \| `Exact`<{ `filters?`: `AkashaIndexedStreamFiltersInput` ; `indexer`: `string`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:765](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L765)

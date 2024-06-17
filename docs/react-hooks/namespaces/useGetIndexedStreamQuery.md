---
id: "useGetIndexedStreamQuery"
title: "Namespace: useGetIndexedStreamQuery"
sidebar_label: "useGetIndexedStreamQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:714](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L714)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetIndexedStreamQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaIndexedStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaIndexedStreamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetIndexedStreamQuery`\>

##### Returns

`Promise`<`GetIndexedStreamQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:739](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L739)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaIndexedStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaIndexedStreamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaIndexedStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaIndexedStreamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaIndexedStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaIndexedStreamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:717](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L717)

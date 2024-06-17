---
id: "useGetInterestsStreamQuery"
title: "Namespace: useGetInterestsStreamQuery"
sidebar_label: "useGetInterestsStreamQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1453](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1453)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetInterestsStreamQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaInterestsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaInterestsStreamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetInterestsStreamQuery`\>

##### Returns

`Promise`<`GetInterestsStreamQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1478](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1478)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaInterestsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaInterestsStreamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaInterestsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaInterestsStreamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaInterestsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaInterestsStreamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1456](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1456)

---
id: "useGetReflectionStreamQuery"
title: "Namespace: useGetReflectionStreamQuery"
sidebar_label: "useGetReflectionStreamQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:973](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L973)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetReflectionStreamQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectStreamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetReflectionStreamQuery`\>

##### Returns

`Promise`<`GetReflectionStreamQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:998](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L998)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectStreamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectStreamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectStreamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:976](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L976)

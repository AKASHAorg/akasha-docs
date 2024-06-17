---
id: "useGetBeamStreamQuery"
title: "Namespace: useGetBeamStreamQuery"
sidebar_label: "useGetBeamStreamQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:292](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L292)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetBeamStreamQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamStreamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetBeamStreamQuery`\>

##### Returns

`Promise`<`GetBeamStreamQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:317](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L317)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamStreamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamStreamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamStreamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:295](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L295)

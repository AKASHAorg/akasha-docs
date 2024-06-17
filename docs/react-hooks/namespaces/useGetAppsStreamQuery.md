---
id: "useGetAppsStreamQuery"
title: "Namespace: useGetAppsStreamQuery"
sidebar_label: "useGetAppsStreamQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1909](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1909)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetAppsStreamQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppsStreamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetAppsStreamQuery`\>

##### Returns

`Promise`<`GetAppsStreamQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1934](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1934)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppsStreamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppsStreamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppsStreamFiltersInput` ; `first?`: `number` ; `indexer`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppsStreamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1912](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1912)

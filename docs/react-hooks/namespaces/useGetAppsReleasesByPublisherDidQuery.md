---
id: "useGetAppsReleasesByPublisherDidQuery"
title: "Namespace: useGetAppsReleasesByPublisherDidQuery"
sidebar_label: "useGetAppsReleasesByPublisherDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:2080](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2080)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetAppsReleasesByPublisherDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetAppsReleasesByPublisherDidQuery`\>

##### Returns

`Promise`<`GetAppsReleasesByPublisherDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:2105](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2105)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:2083](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2083)

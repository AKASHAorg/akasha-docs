---
id: "useGetAppsReleasesQuery"
title: "Namespace: useGetAppsReleasesQuery"
sidebar_label: "useGetAppsReleasesQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:2145](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2145)

## Functions

### fetcher

▸ **fetcher**(`variables?`, `options?`): () => `Promise`<`GetAppsReleasesQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetAppsReleasesQuery`\>

##### Returns

`Promise`<`GetAppsReleasesQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:2170](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2170)

___

### getKey

▸ **getKey**(`variables?`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppReleaseFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppReleaseSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:2148](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2148)

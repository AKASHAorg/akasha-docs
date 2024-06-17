---
id: "useGetAppsQuery"
title: "Namespace: useGetAppsQuery"
sidebar_label: "useGetAppsQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1838](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1838)

## Functions

### fetcher

▸ **fetcher**(`variables?`, `options?`): () => `Promise`<`GetAppsQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetAppsQuery`\>

##### Returns

`Promise`<`GetAppsQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1863](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1863)

___

### getKey

▸ **getKey**(`variables?`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1841](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1841)

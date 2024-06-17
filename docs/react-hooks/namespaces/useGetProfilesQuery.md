---
id: "useGetProfilesQuery"
title: "Namespace: useGetProfilesQuery"
sidebar_label: "useGetProfilesQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1243](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1243)

## Functions

### fetcher

▸ **fetcher**(`variables?`, `options?`): () => `Promise`<`GetProfilesQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaProfileFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaProfileSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetProfilesQuery`\>

##### Returns

`Promise`<`GetProfilesQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1268](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1268)

___

### getKey

▸ **getKey**(`variables?`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaProfileFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaProfileSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaProfileFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaProfileSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaProfileFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaProfileSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1246](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1246)

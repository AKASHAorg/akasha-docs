---
id: "useGetReflectionsByAuthorDidQuery"
title: "Namespace: useGetReflectionsByAuthorDidQuery"
sidebar_label: "useGetReflectionsByAuthorDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:898](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L898)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetReflectionsByAuthorDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetReflectionsByAuthorDidQuery`\>

##### Returns

`Promise`<`GetReflectionsByAuthorDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:923](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L923)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:901](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L901)

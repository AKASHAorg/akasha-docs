---
id: "useGetReflectReflectionsQuery"
title: "Namespace: useGetReflectReflectionsQuery"
sidebar_label: "useGetReflectReflectionsQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1083](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1083)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetReflectReflectionsQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetReflectReflectionsQuery`\>

##### Returns

`Promise`<`GetReflectReflectionsQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1108](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1108)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1086](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1086)

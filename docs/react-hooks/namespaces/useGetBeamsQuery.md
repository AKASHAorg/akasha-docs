---
id: "useGetBeamsQuery"
title: "Namespace: useGetBeamsQuery"
sidebar_label: "useGetBeamsQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:355](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L355)

## Functions

### fetcher

▸ **fetcher**(`variables?`, `options?`): () => `Promise`<`GetBeamsQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetBeamsQuery`\>

##### Returns

`Promise`<`GetBeamsQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:380](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L380)

___

### getKey

▸ **getKey**(`variables?`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:358](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L358)

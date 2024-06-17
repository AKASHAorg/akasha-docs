---
id: "useGetBeamsByAuthorDidQuery"
title: "Namespace: useGetBeamsByAuthorDidQuery"
sidebar_label: "useGetBeamsByAuthorDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:424](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L424)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetBeamsByAuthorDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetBeamsByAuthorDidQuery`\>

##### Returns

`Promise`<`GetBeamsByAuthorDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:449](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L449)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaBeamFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaBeamSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:427](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L427)

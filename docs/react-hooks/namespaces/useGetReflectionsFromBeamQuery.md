---
id: "useGetReflectionsFromBeamQuery"
title: "Namespace: useGetReflectionsFromBeamQuery"
sidebar_label: "useGetReflectionsFromBeamQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:830](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L830)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetReflectionsFromBeamQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectInterfaceFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectInterfaceSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetReflectionsFromBeamQuery`\>

##### Returns

`Promise`<`GetReflectionsFromBeamQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:855](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L855)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectInterfaceFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectInterfaceSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectInterfaceFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectInterfaceSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaReflectInterfaceFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaReflectInterfaceSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:833](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L833)

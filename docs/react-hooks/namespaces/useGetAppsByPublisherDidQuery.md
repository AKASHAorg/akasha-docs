---
id: "useGetAppsByPublisherDidQuery"
title: "Namespace: useGetAppsByPublisherDidQuery"
sidebar_label: "useGetAppsByPublisherDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:2018](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2018)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetAppsByPublisherDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetAppsByPublisherDidQuery`\>

##### Returns

`Promise`<`GetAppsByPublisherDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:2043](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2043)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `filters?`: `AkashaAppFiltersInput` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaAppSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:2021](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L2021)

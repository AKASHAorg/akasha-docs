---
id: "useGetFollowingListByDidQuery"
title: "Namespace: useGetFollowingListByDidQuery"
sidebar_label: "useGetFollowingListByDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1640](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1640)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetFollowingListByDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetFollowingListByDidQuery`\>

##### Returns

`Promise`<`GetFollowingListByDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1665](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1665)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1643](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1643)

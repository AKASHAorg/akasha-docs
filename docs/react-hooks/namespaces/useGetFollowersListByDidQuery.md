---
id: "useGetFollowersListByDidQuery"
title: "Namespace: useGetFollowersListByDidQuery"
sidebar_label: "useGetFollowersListByDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1720](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1720)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetFollowersListByDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowInterfaceSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetFollowersListByDidQuery`\>

##### Returns

`Promise`<`GetFollowersListByDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1745](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1745)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowInterfaceSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowInterfaceSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowInterfaceSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1723](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1723)

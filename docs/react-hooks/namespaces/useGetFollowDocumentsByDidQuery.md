---
id: "useGetFollowDocumentsByDidQuery"
title: "Namespace: useGetFollowDocumentsByDidQuery"
sidebar_label: "useGetFollowDocumentsByDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/composedb.ts:591](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/composedb.ts#L591)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetFollowDocumentsByDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `following?`: `string` \| `string`[] ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetFollowDocumentsByDidQuery`\>

##### Returns

`Promise`<`GetFollowDocumentsByDidQuery`\>

#### Defined in

[hooks/src/generated/composedb.ts:616](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/composedb.ts#L616)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `following?`: `string` \| `string`[] ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `following?`: `string` \| `string`[] ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `following?`: `string` \| `string`[] ; `id`: `string` ; `last?`: `number` ; `sorting?`: `AkashaFollowSortingInput`  }\>)[]

#### Defined in

[hooks/src/generated/composedb.ts:594](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/composedb.ts#L594)

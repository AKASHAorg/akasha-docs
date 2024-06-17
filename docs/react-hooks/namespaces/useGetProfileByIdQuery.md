---
id: "useGetProfileByIdQuery"
title: "Namespace: useGetProfileByIdQuery"
sidebar_label: "useGetProfileByIdQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1130](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1130)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetProfileByIdQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetProfileByIdQuery`\>

##### Returns

`Promise`<`GetProfileByIdQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1155](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1155)

___

### getKey

▸ **getKey**(`variables`): (`string` \| `Exact`<{ `id`: `string`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |

#### Returns

(`string` \| `Exact`<{ `id`: `string`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1133](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1133)

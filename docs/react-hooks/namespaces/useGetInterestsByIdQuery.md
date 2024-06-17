---
id: "useGetInterestsByIdQuery"
title: "Namespace: useGetInterestsByIdQuery"
sidebar_label: "useGetInterestsByIdQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1564](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1564)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetInterestsByIdQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetInterestsByIdQuery`\>

##### Returns

`Promise`<`GetInterestsByIdQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1589](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1589)

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

[hooks/src/generated/queries.ts:1567](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1567)

---
id: "useGetProfileByDidQuery"
title: "Namespace: useGetProfileByDidQuery"
sidebar_label: "useGetProfileByDidQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1180](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1180)

## Functions

### fetcher

▸ **fetcher**(`variables`, `options?`): () => `Promise`<`GetProfileByDidQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetProfileByDidQuery`\>

##### Returns

`Promise`<`GetProfileByDidQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1205](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1205)

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

[hooks/src/generated/queries.ts:1183](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1183)

---
id: "useGetInterestsQuery"
title: "Namespace: useGetInterestsQuery"
sidebar_label: "useGetInterestsQuery"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### document

• **document**: `string`

#### Defined in

[hooks/src/generated/queries.ts:1382](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1382)

## Functions

### fetcher

▸ **fetcher**(`variables?`, `options?`): () => `Promise`<`GetInterestsQuery`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `HeadersInit` |

#### Returns

`fn`

▸ (): `Promise`<`GetInterestsQuery`\>

##### Returns

`Promise`<`GetInterestsQuery`\>

#### Defined in

[hooks/src/generated/queries.ts:1407](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1407)

___

### getKey

▸ **getKey**(`variables?`): (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |

#### Returns

(`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[]

#### Defined in

[hooks/src/generated/queries.ts:1385](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/hooks/src/generated/queries.ts#L1385)

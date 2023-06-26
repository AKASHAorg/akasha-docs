---
id: "modules"
title: "React hooks"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [useCreateBeamMutation](namespaces/useCreateBeamMutation.md)
- [useCreateBeamProfileMentionMutation](namespaces/useCreateBeamProfileMentionMutation.md)
- [useCreateFollowMutation](namespaces/useCreateFollowMutation.md)
- [useCreateInterestsMutation](namespaces/useCreateInterestsMutation.md)
- [useCreateProfileMutation](namespaces/useCreateProfileMutation.md)
- [useCreateRebeamMutation](namespaces/useCreateRebeamMutation.md)
- [useCreateReflectMutation](namespaces/useCreateReflectMutation.md)
- [useCreateReflectReflectionMutation](namespaces/useCreateReflectReflectionMutation.md)
- [useGetBeamByIdQuery](namespaces/useGetBeamByIdQuery.md)
- [useGetBeamsByAuthorDidQuery](namespaces/useGetBeamsByAuthorDidQuery.md)
- [useGetBeamsQuery](namespaces/useGetBeamsQuery.md)
- [useGetFollowersListByDidQuery](namespaces/useGetFollowersListByDidQuery.md)
- [useGetFollowingListByDidQuery](namespaces/useGetFollowingListByDidQuery.md)
- [useGetInterestsByDidQuery](namespaces/useGetInterestsByDidQuery.md)
- [useGetInterestsByIdQuery](namespaces/useGetInterestsByIdQuery.md)
- [useGetInterestsQuery](namespaces/useGetInterestsQuery.md)
- [useGetMentionsFromBeamQuery](namespaces/useGetMentionsFromBeamQuery.md)
- [useGetMyProfileQuery](namespaces/useGetMyProfileQuery.md)
- [useGetProfileByDidQuery](namespaces/useGetProfileByDidQuery.md)
- [useGetProfileByIdQuery](namespaces/useGetProfileByIdQuery.md)
- [useGetProfilesQuery](namespaces/useGetProfilesQuery.md)
- [useGetRebeamsFromBeamQuery](namespaces/useGetRebeamsFromBeamQuery.md)
- [useGetReflectReflectionsQuery](namespaces/useGetReflectReflectionsQuery.md)
- [useGetReflectionsByAuthorDidQuery](namespaces/useGetReflectionsByAuthorDidQuery.md)
- [useGetReflectionsFromBeamQuery](namespaces/useGetReflectionsFromBeamQuery.md)
- [useInfiniteGetBeamByIdQuery](namespaces/useInfiniteGetBeamByIdQuery.md)
- [useInfiniteGetBeamsByAuthorDidQuery](namespaces/useInfiniteGetBeamsByAuthorDidQuery.md)
- [useInfiniteGetBeamsQuery](namespaces/useInfiniteGetBeamsQuery.md)
- [useInfiniteGetFollowersListByDidQuery](namespaces/useInfiniteGetFollowersListByDidQuery.md)
- [useInfiniteGetFollowingListByDidQuery](namespaces/useInfiniteGetFollowingListByDidQuery.md)
- [useInfiniteGetInterestsByDidQuery](namespaces/useInfiniteGetInterestsByDidQuery.md)
- [useInfiniteGetInterestsByIdQuery](namespaces/useInfiniteGetInterestsByIdQuery.md)
- [useInfiniteGetInterestsQuery](namespaces/useInfiniteGetInterestsQuery.md)
- [useInfiniteGetMentionsFromBeamQuery](namespaces/useInfiniteGetMentionsFromBeamQuery.md)
- [useInfiniteGetMyProfileQuery](namespaces/useInfiniteGetMyProfileQuery.md)
- [useInfiniteGetProfileByDidQuery](namespaces/useInfiniteGetProfileByDidQuery.md)
- [useInfiniteGetProfileByIdQuery](namespaces/useInfiniteGetProfileByIdQuery.md)
- [useInfiniteGetProfilesQuery](namespaces/useInfiniteGetProfilesQuery.md)
- [useInfiniteGetRebeamsFromBeamQuery](namespaces/useInfiniteGetRebeamsFromBeamQuery.md)
- [useInfiniteGetReflectReflectionsQuery](namespaces/useInfiniteGetReflectReflectionsQuery.md)
- [useInfiniteGetReflectionsByAuthorDidQuery](namespaces/useInfiniteGetReflectionsByAuthorDidQuery.md)
- [useInfiniteGetReflectionsFromBeamQuery](namespaces/useInfiniteGetReflectionsFromBeamQuery.md)
- [useUpdateBeamMutation](namespaces/useUpdateBeamMutation.md)
- [useUpdateFollowMutation](namespaces/useUpdateFollowMutation.md)
- [useUpdateInterestsMutation](namespaces/useUpdateInterestsMutation.md)
- [useUpdateProfileMutation](namespaces/useUpdateProfileMutation.md)
- [useUpdateReflectMutation](namespaces/useUpdateReflectMutation.md)
- [useUpdateReflectReflectionMutation](namespaces/useUpdateReflectReflectionMutation.md)

## Variables

### BeamFragmentDoc

• `Const` **BeamFragmentDoc**: ``"\n    fragment BeamFragment on Beam {\n  id\n  reflectionsCount\n  rebeamsCount\n  active\n  author {\n    id\n  }\n  content {\n    property\n    provider\n    value\n  }\n  tags\n  version\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:18](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L18)

___

### CreateBeamDocument

• `Const` **CreateBeamDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:384](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L384)

___

### CreateBeamProfileMentionDocument

• `Const` **CreateBeamProfileMentionDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:455](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L455)

___

### CreateFollowDocument

• `Const` **CreateFollowDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1362](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1362)

___

### CreateInterestsDocument

• `Const` **CreateInterestsDocument**: ``"\n    mutation CreateInterests($i: CreateInterestsInput!) {\n  createInterests(input: $i) {\n    document {\n      topics {\n        value\n        labelType\n      }\n      did {\n        id\n      }\n      id\n    }\n    clientMutationId\n  }\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1304](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1304)

___

### CreateProfileDocument

• `Const` **CreateProfileDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1260](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1260)

___

### CreateRebeamDocument

• `Const` **CreateRebeamDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:427](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L427)

___

### CreateReflectDocument

• `Const` **CreateReflectDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:662](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L662)

___

### CreateReflectReflectionDocument

• `Const` **CreateReflectReflectionDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:706](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L706)

___

### GetBeamByIdDocument

• `Const` **GetBeamByIdDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:220](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L220)

___

### GetBeamsByAuthorDidDocument

• `Const` **GetBeamsByAuthorDidDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:160](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L160)

___

### GetBeamsDocument

• `Const` **GetBeamsDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:105](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L105)

___

### GetFollowersListByDidDocument

• `Const` **GetFollowersListByDidDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1148](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1148)

___

### GetFollowingListByDidDocument

• `Const` **GetFollowingListByDidDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1085](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1085)

___

### GetInterestsByDidDocument

• `Const` **GetInterestsByDidDocument**: ``"\n    query GetInterestsByDid($id: ID!) {\n  node(id: $id) {\n    ... on CeramicAccount {\n      interests {\n        topics {\n          value\n          labelType\n        }\n        did {\n          id\n        }\n        id\n      }\n      isViewer\n    }\n  }\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:974](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L974)

___

### GetInterestsByIdDocument

• `Const` **GetInterestsByIdDocument**: ``"\n    query GetInterestsById($id: ID!) {\n  node(id: $id) {\n    ... on Interests {\n      topics {\n        value\n        labelType\n      }\n      did {\n        id\n      }\n      id\n    }\n  }\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1031](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1031)

___

### GetInterestsDocument

• `Const` **GetInterestsDocument**: ``"\n    query GetInterests($after: String, $before: String, $first: Int, $last: Int) {\n  interestsIndex(after: $after, before: $before, first: $first, last: $last) {\n    edges {\n      node {\n        topics {\n          value\n          labelType\n        }\n        did {\n          id\n        }\n        id\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:912](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L912)

___

### GetMentionsFromBeamDocument

• `Const` **GetMentionsFromBeamDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:325](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L325)

___

### GetMyProfileDocument

• `Const` **GetMyProfileDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1213](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1213)

___

### GetProfileByDidDocument

• `Const` **GetProfileByDidDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:807](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L807)

___

### GetProfileByIdDocument

• `Const` **GetProfileByIdDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:760](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L760)

___

### GetProfilesDocument

• `Const` **GetProfilesDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:857](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L857)

___

### GetRebeamsFromBeamDocument

• `Const` **GetRebeamsFromBeamDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:267](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L267)

___

### GetReflectReflectionsDocument

• `Const` **GetReflectReflectionsDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:601](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L601)

___

### GetReflectionsByAuthorDidDocument

• `Const` **GetReflectionsByAuthorDidDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:541](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L541)

___

### GetReflectionsFromBeamDocument

• `Const` **GetReflectionsFromBeamDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:482](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L482)

___

### ReflectFragmentDoc

• `Const` **ReflectFragmentDoc**: ``"\n    fragment ReflectFragment on Reflect {\n  author {\n    id\n  }\n  version\n  active\n  content {\n    provider\n    property\n    value\n  }\n  isReply\n  reflectionsCount\n  beam {\n    id\n    author {\n      id\n    }\n  }\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:36](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L36)

___

### UpdateBeamDocument

• `Const` **UpdateBeamDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:405](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L405)

___

### UpdateFollowDocument

• `Const` **UpdateFollowDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1390](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1390)

___

### UpdateInterestsDocument

• `Const` **UpdateInterestsDocument**: ``"\n    mutation UpdateInterests($i: UpdateInterestsInput!) {\n  updateInterests(input: $i) {\n    document {\n      topics {\n        value\n        labelType\n      }\n      did {\n        id\n      }\n      id\n    }\n    clientMutationId\n  }\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1333](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1333)

___

### UpdateProfileDocument

• `Const` **UpdateProfileDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1282](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1282)

___

### UpdateReflectDocument

• `Const` **UpdateReflectDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:684](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L684)

___

### UpdateReflectReflectionDocument

• `Const` **UpdateReflectReflectionDocument**: `string`

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:733](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L733)

___

### UserProfileFragmentDoc

• `Const` **UserProfileFragmentDoc**: ``"\n    fragment UserProfileFragment on Profile {\n  id\n  did {\n    id\n  }\n  name\n  links {\n    href\n    label\n  }\n  background {\n    alternatives {\n      src\n      width\n      height\n    }\n    default {\n      src\n      width\n      height\n    }\n  }\n  description\n  avatar {\n    default {\n      src\n      width\n      height\n    }\n    alternatives {\n      src\n      width\n      height\n    }\n  }\n  followers(last: 5) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n  }\n  createdAt\n}\n    "``

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:58](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L58)

___

### useCreateBeamMutation

• `Const` **useCreateBeamMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateBeamMutation`, `TError`, `Exact`<{ `i`: `CreateBeamInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateBeamMutation`, `TError`, `Exact`<{ `i`: `CreateBeamInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateBeamMutation`, `TError`, `Exact`<{ `i`: `CreateBeamInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateBeamInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateBeamMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:393](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L393)

___

### useCreateBeamProfileMentionMutation

• `Const` **useCreateBeamProfileMentionMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateBeamProfileMentionMutation`, `TError`, `Exact`<{ `i`: `CreateProfileMentionInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateBeamProfileMentionMutation`, `TError`, `Exact`<{ `i`: `CreateProfileMentionInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateBeamProfileMentionMutation`, `TError`, `Exact`<{ `i`: `CreateProfileMentionInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateProfileMentionInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateBeamProfileMentionMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:470](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L470)

___

### useCreateFollowMutation

• `Const` **useCreateFollowMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateFollowMutation`, `TError`, `Exact`<{ `i`: `CreateFollowInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateFollowMutation`, `TError`, `Exact`<{ `i`: `CreateFollowInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateFollowMutation`, `TError`, `Exact`<{ `i`: `CreateFollowInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateFollowInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateFollowMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1378](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1378)

___

### useCreateInterestsMutation

• `Const` **useCreateInterestsMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateInterestsMutation`, `TError`, `Exact`<{ `i`: `CreateInterestsInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateInterestsMutation`, `TError`, `Exact`<{ `i`: `CreateInterestsInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateInterestsMutation`, `TError`, `Exact`<{ `i`: `CreateInterestsInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateInterestsInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateInterestsMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1321](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1321)

___

### useCreateProfileMutation

• `Const` **useCreateProfileMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateProfileMutation`, `TError`, `Exact`<{ `i`: `CreateProfileInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateProfileMutation`, `TError`, `Exact`<{ `i`: `CreateProfileInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateProfileMutation`, `TError`, `Exact`<{ `i`: `CreateProfileInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateProfileInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateProfileMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1270](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1270)

___

### useCreateRebeamMutation

• `Const` **useCreateRebeamMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateRebeamMutation`, `TError`, `Exact`<{ `i`: `CreateRebeamInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateRebeamMutation`, `TError`, `Exact`<{ `i`: `CreateRebeamInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateRebeamMutation`, `TError`, `Exact`<{ `i`: `CreateRebeamInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateRebeamInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateRebeamMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:443](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L443)

___

### useCreateReflectMutation

• `Const` **useCreateReflectMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateReflectMutation`, `TError`, `Exact`<{ `i`: `CreateReflectInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateReflectMutation`, `TError`, `Exact`<{ `i`: `CreateReflectInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateReflectMutation`, `TError`, `Exact`<{ `i`: `CreateReflectInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateReflectInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateReflectMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:672](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L672)

___

### useCreateReflectReflectionMutation

• `Const` **useCreateReflectReflectionMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`CreateReflectReflectionMutation`, `TError`, `Exact`<{ `i`: `CreateReflectionInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`CreateReflectReflectionMutation`, `TError`, `Exact`<{ `i`: `CreateReflectionInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`CreateReflectReflectionMutation`, `TError`, `Exact`<{ `i`: `CreateReflectionInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `CreateReflectionInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`CreateReflectReflectionMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:721](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L721)

___

### useGetBeamByIdQuery

• `Const` **useGetBeamByIdQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetBeamByIdQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetBeamByIdQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetBeamByIdQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:229](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L229)

___

### useGetBeamsByAuthorDidQuery

• `Const` **useGetBeamsByAuthorDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetBeamsByAuthorDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetBeamsByAuthorDidQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetBeamsByAuthorDidQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:182](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L182)

___

### useGetBeamsQuery

• `Const` **useGetBeamsQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables?`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetBeamsQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetBeamsQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetBeamsQuery`\> |
| `getKey` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:122](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L122)

___

### useGetFollowersListByDidQuery

• `Const` **useGetFollowersListByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetFollowersListByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetFollowersListByDidQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetFollowersListByDidQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1175](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1175)

___

### useGetFollowingListByDidQuery

• `Const` **useGetFollowingListByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetFollowingListByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetFollowingListByDidQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetFollowingListByDidQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1110](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1110)

___

### useGetInterestsByDidQuery

• `Const` **useGetInterestsByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetInterestsByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetInterestsByDidQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetInterestsByDidQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:993](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L993)

___

### useGetInterestsByIdQuery

• `Const` **useGetInterestsByIdQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetInterestsByIdQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetInterestsByIdQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetInterestsByIdQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1047](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1047)

___

### useGetInterestsQuery

• `Const` **useGetInterestsQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables?`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetInterestsQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetInterestsQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetInterestsQuery`\> |
| `getKey` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:936](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L936)

___

### useGetMentionsFromBeamQuery

• `Const` **useGetMentionsFromBeamQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetMentionsFromBeamQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetMentionsFromBeamQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetMentionsFromBeamQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:346](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L346)

___

### useGetMyProfileQuery

• `Const` **useGetMyProfileQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables?`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetMyProfileQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `[key: string]`: `never`;  }\> |
| `options?` | `UseQueryOptions`<`GetMyProfileQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables?`: `Exact`<{ `[key: string]`: `never`;  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetMyProfileQuery`\> |
| `getKey` | (`variables?`: `Exact`<{ `[key: string]`: `never`;  }\>) => (`string` \| `Exact`<{ `[key: string]`: `never`;  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1222](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1222)

___

### useGetProfileByDidQuery

• `Const` **useGetProfileByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetProfileByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetProfileByDidQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetProfileByDidQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:819](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L819)

___

### useGetProfileByIdQuery

• `Const` **useGetProfileByIdQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetProfileByIdQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetProfileByIdQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetProfileByIdQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:769](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L769)

___

### useGetProfilesQuery

• `Const` **useGetProfilesQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables?`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetProfilesQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetProfilesQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetProfilesQuery`\> |
| `getKey` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:874](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L874)

___

### useGetRebeamsFromBeamQuery

• `Const` **useGetRebeamsFromBeamQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetRebeamsFromBeamQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseQueryOptions`<`GetRebeamsFromBeamQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `id`: `string`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetRebeamsFromBeamQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:287](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L287)

___

### useGetReflectReflectionsQuery

• `Const` **useGetReflectReflectionsQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetReflectReflectionsQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetReflectReflectionsQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetReflectReflectionsQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:624](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L624)

___

### useGetReflectionsByAuthorDidQuery

• `Const` **useGetReflectionsByAuthorDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetReflectionsByAuthorDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetReflectionsByAuthorDidQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetReflectionsByAuthorDidQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:563](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L563)

___

### useGetReflectionsFromBeamQuery

• `Const` **useGetReflectionsFromBeamQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`variables`, `options?`): `UseQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetReflectionsFromBeamQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseQueryOptions`<`GetReflectionsFromBeamQuery`, `TError`, `TData`, `QueryKey`\> |

##### Returns

`UseQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `fetcher` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`GetReflectionsFromBeamQuery`\> |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:503](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L503)

___

### useInfiniteGetBeamByIdQuery

• `Const` **useInfiniteGetBeamByIdQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetBeamByIdQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetBeamByIdQuery`, `TError`, `TData`, `GetBeamByIdQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:247](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L247)

___

### useInfiniteGetBeamsByAuthorDidQuery

• `Const` **useInfiniteGetBeamsByAuthorDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetBeamsByAuthorDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` \| ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetBeamsByAuthorDidQuery`, `TError`, `TData`, `GetBeamsByAuthorDidQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:200](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L200)

___

### useInfiniteGetBeamsQuery

• `Const` **useInfiniteGetBeamsQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables?`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetBeamsQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetBeamsQuery`, `TError`, `TData`, `GetBeamsQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:140](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L140)

___

### useInfiniteGetFollowersListByDidQuery

• `Const` **useInfiniteGetFollowersListByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetFollowersListByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` \| ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetFollowersListByDidQuery`, `TError`, `TData`, `GetFollowersListByDidQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1193](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1193)

___

### useInfiniteGetFollowingListByDidQuery

• `Const` **useInfiniteGetFollowingListByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetFollowingListByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` \| ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetFollowingListByDidQuery`, `TError`, `TData`, `GetFollowingListByDidQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1128](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1128)

___

### useInfiniteGetInterestsByDidQuery

• `Const` **useInfiniteGetInterestsByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetInterestsByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetInterestsByDidQuery`, `TError`, `TData`, `GetInterestsByDidQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1011](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1011)

___

### useInfiniteGetInterestsByIdQuery

• `Const` **useInfiniteGetInterestsByIdQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetInterestsByIdQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetInterestsByIdQuery`, `TError`, `TData`, `GetInterestsByIdQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1065](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1065)

___

### useInfiniteGetInterestsQuery

• `Const` **useInfiniteGetInterestsQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables?`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetInterestsQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetInterestsQuery`, `TError`, `TData`, `GetInterestsQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:954](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L954)

___

### useInfiniteGetMentionsFromBeamQuery

• `Const` **useInfiniteGetMentionsFromBeamQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetMentionsFromBeamQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetMentionsFromBeamQuery`, `TError`, `TData`, `GetMentionsFromBeamQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:364](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L364)

___

### useInfiniteGetMyProfileQuery

• `Const` **useInfiniteGetMyProfileQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables?`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetMyProfileQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | `string` \| `number` |
| `variables?` | `Exact`<{ `[key: string]`: `never`;  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetMyProfileQuery`, `TError`, `TData`, `GetMyProfileQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables?`: `Exact`<{ `[key: string]`: `never`;  }\>) => (`string` \| `Exact`<{ `[key: string]`: `never`;  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1240](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1240)

___

### useInfiniteGetProfileByDidQuery

• `Const` **useInfiniteGetProfileByDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetProfileByDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetProfileByDidQuery`, `TError`, `TData`, `GetProfileByDidQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:837](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L837)

___

### useInfiniteGetProfileByIdQuery

• `Const` **useInfiniteGetProfileByIdQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetProfileByIdQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetProfileByIdQuery`, `TError`, `TData`, `GetProfileByIdQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:787](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L787)

___

### useInfiniteGetProfilesQuery

• `Const` **useInfiniteGetProfilesQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables?`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetProfilesQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables?` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetProfilesQuery`, `TError`, `TData`, `GetProfilesQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables?`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:892](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L892)

___

### useInfiniteGetRebeamsFromBeamQuery

• `Const` **useInfiniteGetRebeamsFromBeamQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetRebeamsFromBeamQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` |
| `variables` | `Exact`<{ `id`: `string`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetRebeamsFromBeamQuery`, `TError`, `TData`, `GetRebeamsFromBeamQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `id`: `string`  }\>) => (`string` \| `Exact`<{ `id`: `string`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:305](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L305)

___

### useInfiniteGetReflectReflectionsQuery

• `Const` **useInfiniteGetReflectReflectionsQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetReflectReflectionsQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` \| ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetReflectReflectionsQuery`, `TError`, `TData`, `GetReflectReflectionsQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:642](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L642)

___

### useInfiniteGetReflectionsByAuthorDidQuery

• `Const` **useInfiniteGetReflectionsByAuthorDidQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetReflectionsByAuthorDidQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` \| ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetReflectionsByAuthorDidQuery`, `TError`, `TData`, `GetReflectionsByAuthorDidQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:581](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L581)

___

### useInfiniteGetReflectionsFromBeamQuery

• `Const` **useInfiniteGetReflectionsFromBeamQuery**: `Object`

#### Call signature

▸ <`TData`, `TError`\>(`pageParamKey`, `variables`, `options?`): `UseInfiniteQueryResult`<`TData`, `TError`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `GetReflectionsFromBeamQuery` |
| `TError` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `pageParamKey` | ``"id"`` \| ``"after"`` \| ``"before"`` \| ``"first"`` \| ``"last"`` |
| `variables` | `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\> |
| `options?` | `UseInfiniteQueryOptions`<`GetReflectionsFromBeamQuery`, `TError`, `TData`, `GetReflectionsFromBeamQuery`, `QueryKey`\> |

##### Returns

`UseInfiniteQueryResult`<`TData`, `TError`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getKey` | (`variables`: `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>) => (`string` \| `Exact`<{ `after?`: `string` ; `before?`: `string` ; `first?`: `number` ; `id`: `string` ; `last?`: `number`  }\>)[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:521](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L521)

___

### useUpdateBeamMutation

• `Const` **useUpdateBeamMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`UpdateBeamMutation`, `TError`, `Exact`<{ `i`: `UpdateBeamInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`UpdateBeamMutation`, `TError`, `Exact`<{ `i`: `UpdateBeamInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`UpdateBeamMutation`, `TError`, `Exact`<{ `i`: `UpdateBeamInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `UpdateBeamInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`UpdateBeamMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:415](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L415)

___

### useUpdateFollowMutation

• `Const` **useUpdateFollowMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`UpdateFollowMutation`, `TError`, `Exact`<{ `i`: `UpdateFollowInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`UpdateFollowMutation`, `TError`, `Exact`<{ `i`: `UpdateFollowInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`UpdateFollowMutation`, `TError`, `Exact`<{ `i`: `UpdateFollowInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `UpdateFollowInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`UpdateFollowMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1406](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1406)

___

### useUpdateInterestsMutation

• `Const` **useUpdateInterestsMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`UpdateInterestsMutation`, `TError`, `Exact`<{ `i`: `UpdateInterestsInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`UpdateInterestsMutation`, `TError`, `Exact`<{ `i`: `UpdateInterestsInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`UpdateInterestsMutation`, `TError`, `Exact`<{ `i`: `UpdateInterestsInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `UpdateInterestsInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`UpdateInterestsMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1350](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1350)

___

### useUpdateProfileMutation

• `Const` **useUpdateProfileMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`UpdateProfileMutation`, `TError`, `Exact`<{ `i`: `UpdateProfileInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`UpdateProfileMutation`, `TError`, `Exact`<{ `i`: `UpdateProfileInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`UpdateProfileMutation`, `TError`, `Exact`<{ `i`: `UpdateProfileInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `UpdateProfileInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`UpdateProfileMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1292](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L1292)

___

### useUpdateReflectMutation

• `Const` **useUpdateReflectMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`UpdateReflectMutation`, `TError`, `Exact`<{ `i`: `UpdateReflectInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`UpdateReflectMutation`, `TError`, `Exact`<{ `i`: `UpdateReflectInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`UpdateReflectMutation`, `TError`, `Exact`<{ `i`: `UpdateReflectInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `UpdateReflectInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`UpdateReflectMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:694](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L694)

___

### useUpdateReflectReflectionMutation

• `Const` **useUpdateReflectReflectionMutation**: `Object`

#### Call signature

▸ <`TError`, `TContext`\>(`options?`): `UseMutationResult`<`UpdateReflectReflectionMutation`, `TError`, `Exact`<{ `i`: `UpdateReflectionInput`  }\>, `TContext`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |
| `TContext` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `UseMutationOptions`<`UpdateReflectReflectionMutation`, `TError`, `Exact`<{ `i`: `UpdateReflectionInput`  }\>, `TContext`\> |

##### Returns

`UseMutationResult`<`UpdateReflectReflectionMutation`, `TError`, `Exact`<{ `i`: `UpdateReflectionInput`  }\>, `TContext`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetcher` | (`variables`: `Exact`<{ `i`: `UpdateReflectionInput`  }\>, `options?`: `HeadersInit`) => () => `Promise`<`UpdateReflectReflectionMutation`\> |
| `getKey` | () => `string`[] |

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:748](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L748)

## Functions

### fetcher

▸ **fetcher**<`TData`, `TVariables`\>(`query`, `variables?`, `options?`): () => `Promise`<`TData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `TData` |
| `TVariables` | extends `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `variables?` | `TVariables` |
| `options?` | `unknown` |

#### Returns

`fn`

▸ (): `Promise`<`TData`\>

##### Returns

`Promise`<`TData`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:7](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/ui/hooks/src/generated/hooks-new.ts#L7)

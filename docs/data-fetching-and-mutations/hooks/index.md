---
sidebar_position: 42
sidebar_label: Hooks
---

# Hooks

## Hooks

### AnalyticsProvider()

> **AnalyticsProvider**(`__namedParameters`): `Element`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.children`? | `ReactNode` |
| `__namedParameters.uiEvents` | `Subject`\<`UIEventData`\> |

#### Returns

`Element`

#### Source

[libs/hooks/src/use-analytics.tsx:24](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L24)

***

### RootComponentPropsProvider()

> **RootComponentPropsProvider**(`__namedParameters`): `Element`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `IRootComponentProps` \| `IRootExtensionProps`\<`Record`\<`string`, `unknown`\>\> |

#### Returns

`Element`

#### Source

[libs/hooks/src/use-root-props.tsx:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-root-props.tsx#L10)

***

### createReactiveVar()

> **createReactiveVar**\<`T`\>(`initialState`): `ReactiveVar`\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `initialState` | `T` |

#### Returns

`ReactiveVar`\<`T`\>

#### Source

[libs/hooks/src/utils/create-reactive-var.ts:3](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/create-reactive-var.ts#L3)

***

### decodeb64SlateContent()

> **decodeb64SlateContent**(`base64Content`, `logger`?): `any`

Utility to decode base64 slate content

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `base64Content` | `string` |
| `logger`? | `Logger` |

#### Returns

`any`

#### Source

[libs/hooks/src/utils/entry-utils.ts:14](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L14)

***

### encodeSlateToBase64()

> **encodeSlateToBase64**(`slateContent`): `string`

Utility to encode slate content to base64

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `slateContent` | `Descendant`[] |

#### Returns

`string`

#### Source

[libs/hooks/src/utils/entry-utils.ts:30](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L30)

***

### filterEvent()

> **filterEvent**(`eventType`): `MonoTypeOperatorFunction`\<`Extract`\<`UIEventData`, `object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventType` | `AnalyticsEventTypes` \| `EventTypes` \| `RegisterContentBlock` \| `RegisterExtension` \| `RegisterWidget` \| `RegisterApplication` \| `RegisterRoutes` \| `ThemeChange` \| `NotificationEvents` |

#### Returns

`MonoTypeOperatorFunction`\<`Extract`\<`UIEventData`, `object`\>\>

#### Source

[libs/hooks/src/utils/event-utils.ts:5](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/event-utils.ts#L5)

***

### filterEvents()

> **filterEvents**(`eventTypes`): `MonoTypeOperatorFunction`\<`UIEventData`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventTypes` | (`AnalyticsEventTypes` \| `EventTypes` \| `RegisterContentBlock` \| `RegisterExtension` \| `RegisterWidget` \| `RegisterApplication` \| `RegisterRoutes` \| `ThemeChange` \| `NotificationEvents`)[] |

#### Returns

`MonoTypeOperatorFunction`\<`UIEventData`\>

#### Source

[libs/hooks/src/utils/event-utils.ts:18](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/event-utils.ts#L18)

***

### getFollowList()

> **getFollowList**(`followDocuments`): `FollowList`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `followDocuments` | `AkashaFollowDocument`[] |

#### Returns

`FollowList`

#### Source

[libs/hooks/src/utils/getFollowList.ts:3](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/getFollowList.ts#L3)

***

### getLinkPreview()

> **getLinkPreview**(): `Promise`\<`any`\>

Utility to get preview of a specified url

#### Returns

`Promise`\<`any`\>

#### Source

[libs/hooks/src/utils/media-utils.ts:49](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L49)

***

### getMediaUrl()

> **getMediaUrl**(`hash`?): `object`

Utility to build gateway links to ipfs content

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hash`? | `string` |

#### Returns

`object`

| Member | Type |
| :------ | :------ |
| `fallbackLink` | `string` |
| `originLink` | `string` |
| `pathLink` | `string` |

#### Source

[libs/hooks/src/utils/media-utils.ts:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L19)

***

### hasOwn()

> **hasOwn**\<`T`, `K`\>(`o`, `v`): o is K extends KeyofUnion\<T\> ? ExtractByKey\<T, K\<K\>\> : T & \{ \[P in string \| number \| symbol\]: unknown \}

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `Record`\<`string` \| `number` \| `symbol`, `any`\> |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `o` | `T` |
| `v` | `K` |

#### Returns

o is K extends KeyofUnion\<T\> ? ExtractByKey\<T, K\<K\>\> : T & \{ \[P in string \| number \| symbol\]: unknown \}

#### Source

[libs/hooks/src/utils/has-own.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/has-own.ts#L10)

***

### mapBeamEntryData()

> **mapBeamEntryData**(`beam`?): `BeamData`

Utility to map beam entry data

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `beam`? | `RawBeamData` |

#### Returns

`BeamData`

#### Source

[libs/hooks/src/utils/entry-utils.ts:77](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L77)

***

### mapReflectEntryData()

> **mapReflectEntryData**(`reflection`?): `ReflectionData`

Utility to map reflect entry data

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection`? | `RawReflectionData` |

#### Returns

`ReflectionData`

#### Source

[libs/hooks/src/utils/entry-utils.ts:60](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L60)

***

### saveMediaFile()

> **saveMediaFile**(`__namedParameters`): `Promise`\<`object`\>

Utility to save media file

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `ISaveMediaFile` |

#### Returns

`Promise`\<`object`\>

| Member | Type | Value |
| :------ | :------ | :------ |
| `CID` | `string` | cid |
| `blob` | `Blob` | resized.image |
| `size` | `object` | resized.size |
| `size.height` | `number` | - |
| `size.naturalHeight` | `number` | - |
| `size.naturalWidth` | `number` | - |
| `size.width` | `number` | - |

#### Source

[libs/hooks/src/utils/media-utils.ts:82](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L82)

***

### sortByKey()

> **sortByKey**\<`T`\>(`array`, `key`): `T`[]

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `array` | `T`[] |
| `key` | `string` |

#### Returns

`T`[]

#### Source

[libs/hooks/src/utils/sort-by-key.ts:1](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/sort-by-key.ts#L1)

***

### switchToRequiredNetwork()

> **switchToRequiredNetwork**(): `Promise`\<`void`\>

A utility function to switch to required network for supported wallets

#### Returns

`Promise`\<`void`\>

#### Source

[libs/hooks/src/use-network-state.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L10)

***

### transformSource()

> **transformSource**(`image`?): `Image`

Utility to transform source

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `image`? | `Image` |

#### Returns

`Image`

#### Source

[libs/hooks/src/utils/media-utils.ts:99](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L99)

***

### useAccordion()

> **useAccordion**(): `object`

Hook to manipulate the state of the Accordion component.

#### Returns

`object`

- Object containing the active accordion ID, and
methods for handling click events and setting an active ID.

| Member | Type |
| :------ | :------ |
| `activeAccordionId` | `string` |
| `handleAccordionClick` | (`accordionId`) => `void` |
| `setActiveAccordionId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |

#### Example

```typescript
 const { activeAccordionId, setActiveAccordionId, handleAccordionClick } = useAccordion();
```

#### Source

[libs/hooks/src/use-accordion.ts:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-accordion.ts#L12)

***

### useAkashaStore()

> **useAkashaStore**(): `object`

#### Returns

`object`

| Member | Type |
| :------ | :------ |
| `data` | `IUserState`\<`AkashaProfile`\> |
| `userStore` | `IUserStore`\<`AkashaProfile`\> |

#### Source

[libs/hooks/src/store/use-akasha-store.ts:5](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/use-akasha-store.ts#L5)

***

### useAnalytics()

> **useAnalytics**(): [[`UseAnalyticsActions`](readme.md#useanalyticsactions)]

Hook to handle analytics

#### Returns

[[`UseAnalyticsActions`](readme.md#useanalyticsactions)]

#### Example

```typescript
const [analyticsActions] = useAnalytics();

analyticsActions.trackEvent({
category: 'some-category',
action: 'some-action',
});
```

#### Source

[libs/hooks/src/use-analytics.tsx:54](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L54)

***

### useConnectWallet()

> **useConnectWallet**(): `object`

Hook for connecting to a user's wallet (through Metamask or any other compatible applications)

#### Returns

`object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `connect` | () => `void` | - |
| `data` | `string` | - |
| `error` | `Error` | - |
| `isError` | `boolean` | !!error |
| `isLoading` | `boolean` | - |
| `isSuccess` | `boolean` | !!data |

#### Example

```typescript
const connectWalletCall = useConnectWallet();
 // make the call to the connect function when appropriate:
connectWalletCall.connect();
```

#### Source

[libs/hooks/src/use-connect-wallet.ts:15](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L15)

***

### useCreateAppMutation()

> **useCreateAppMutation**(`baseOptions`?): `MutationTuple`\<`CreateAppMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateAppMutation__

To run a mutation, you first call `useCreateAppMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateAppMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateAppMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateAppMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createAppMutation, { data, loading, error }] = useCreateAppMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2801](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2801)

***

### useCreateBeamMutation()

> **useCreateBeamMutation**(`baseOptions`?): `MutationTuple`\<`CreateBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateBeamMutation__

To run a mutation, you first call `useCreateBeamMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateBeamMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createBeamMutation, { data, loading, error }] = useCreateBeamMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:567](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L567)

***

### useCreateContentBlockMutation()

> **useCreateContentBlockMutation**(`baseOptions`?): `MutationTuple`\<`CreateContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateContentBlockMutation__

To run a mutation, you first call `useCreateContentBlockMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateContentBlockMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createContentBlockMutation, { data, loading, error }] = useCreateContentBlockMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:639](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L639)

***

### useCreateFollowMutation()

> **useCreateFollowMutation**(`baseOptions`?): `MutationTuple`\<`CreateFollowMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateFollowMutation__

To run a mutation, you first call `useCreateFollowMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateFollowMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateFollowMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateFollowMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createFollowMutation, { data, loading, error }] = useCreateFollowMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1865](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1865)

***

### useCreateInterestsMutation()

> **useCreateInterestsMutation**(`baseOptions`?): `MutationTuple`\<`CreateInterestsMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateInterestsMutation__

To run a mutation, you first call `useCreateInterestsMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateInterestsMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateInterestsMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateInterestsMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createInterestsMutation, { data, loading, error }] = useCreateInterestsMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1780](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1780)

***

### useCreateProfileMutation()

> **useCreateProfileMutation**(`baseOptions`?): `MutationTuple`\<`CreateProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateProfileMutation__

To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateProfileMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1701](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1701)

***

### useCreateReflectMutation()

> **useCreateReflectMutation**(`baseOptions`?): `MutationTuple`\<`CreateReflectMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useCreateReflectMutation__

To run a mutation, you first call `useCreateReflectMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateReflectMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateReflectMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateReflectMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createReflectMutation, { data, loading, error }] = useCreateReflectMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1274](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1274)

***

### useCurrentNetwork()

> **useCurrentNetwork**(`enabler`?): `object`

Hook to check the user's current web3 network

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `enabler`? | `boolean` |

#### Returns

`object`

network name

| Member | Type |
| :------ | :------ |
| `data` | `string` |
| `error` | `Error` |
| `isLoading` | `boolean` |

#### Example

```typescript
const currentNetworkQuery = useCurrentNetwork(true);

const network = currentNetworkQuery.data;
```

#### Source

[libs/hooks/src/use-network-state.ts:86](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L86)

***

### useDismissedCard()

> **useDismissedCard**(`id`, `statusStorage`?): [`boolean`, () => `void`]

Hook to manage the information cards displayed in the sidebar or inside
the apps which users can dismiss by clicking the close button.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | string |
| `statusStorage`? | `IStorage` | IStorage (optional) to specify from which storage to retrieve the saved dismissed card IDs. |

#### Returns

[`boolean`, () => `void`]

#### Example

```typescript
const [dismissed, dismissCard] = useDismissedCard('@akashaorg/ui-widget-sidebar_cta-card');
```

#### Source

[libs/hooks/src/use-dismissed-card.ts:25](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-dismissed-card.ts#L25)

***

### useEntryNavigation()

> **useEntryNavigation**(`navigateFn`?, `currentBeamId`?): (`navigationDetails`, `itemType`) => `void`

Hook to navigation to entry's page

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `navigateFn`? | (`args`) => `void` | function (optional) that can control the actual navigation. |
| `currentBeamId`? | `string` | string (optional) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `navigationDetails` | `IContentClickDetails` |
| `itemType` | `EntityTypes` |

##### Returns

`void`

#### Example

```typescript
// navigateTo is a function extracted from the `useRootComponentProps` hook.
const handleEntryNavigate = useEntryNavigation(navigateTo, 'current-beam-id');
```

#### Source

[libs/hooks/src/use-navigation.ts:14](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-navigation.ts#L14)

***

### useGetAppReleaseByIdLazyQuery()

> **useGetAppReleaseByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3260](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3260)

***

### useGetAppReleaseByIdQuery()

> **useGetAppReleaseByIdQuery**(`baseOptions`): `QueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\>

__useGetAppReleaseByIdQuery__

To run a query within a React component, call `useGetAppReleaseByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppReleaseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppReleaseByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:3256](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3256)

***

### useGetAppReleaseByIdSuspenseQuery()

> **useGetAppReleaseByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3264](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3264)

***

### useGetAppsByIdLazyQuery()

> **useGetAppsByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3012](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3012)

***

### useGetAppsByIdQuery()

> **useGetAppsByIdQuery**(`baseOptions`): `QueryResult`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\>

__useGetAppsByIdQuery__

To run a query within a React component, call `useGetAppsByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:3008](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3008)

***

### useGetAppsByIdSuspenseQuery()

> **useGetAppsByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3016](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3016)

***

### useGetAppsByPublisherDidLazyQuery()

> **useGetAppsByPublisherDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3081](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3081)

***

### useGetAppsByPublisherDidQuery()

> **useGetAppsByPublisherDidQuery**(`baseOptions`): `QueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\>

__useGetAppsByPublisherDidQuery__

To run a query within a React component, call `useGetAppsByPublisherDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsByPublisherDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsByPublisherDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:3077](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3077)

***

### useGetAppsByPublisherDidSuspenseQuery()

> **useGetAppsByPublisherDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3085](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3085)

***

### useGetAppsLazyQuery()

> **useGetAppsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2897](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2897)

***

### useGetAppsQuery()

> **useGetAppsQuery**(`baseOptions`?): `QueryResult`\<`GetAppsQuery`, `Exact`\<`object`\>\>

__useGetAppsQuery__

To run a query within a React component, call `useGetAppsQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `QueryHookOptions`\<`GetAppsQuery`, `Exact`\<`object`\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsQuery({
  variables: {
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2893](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2893)

***

### useGetAppsReleasesByPublisherDidLazyQuery()

> **useGetAppsReleasesByPublisherDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3151](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3151)

***

### useGetAppsReleasesByPublisherDidQuery()

> **useGetAppsReleasesByPublisherDidQuery**(`baseOptions`): `QueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\>

__useGetAppsReleasesByPublisherDidQuery__

To run a query within a React component, call `useGetAppsReleasesByPublisherDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsReleasesByPublisherDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsReleasesByPublisherDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:3147](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3147)

***

### useGetAppsReleasesByPublisherDidSuspenseQuery()

> **useGetAppsReleasesByPublisherDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3155](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3155)

***

### useGetAppsReleasesLazyQuery()

> **useGetAppsReleasesLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3216](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3216)

***

### useGetAppsReleasesQuery()

> **useGetAppsReleasesQuery**(`baseOptions`?): `QueryResult`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\>

__useGetAppsReleasesQuery__

To run a query within a React component, call `useGetAppsReleasesQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsReleasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `QueryHookOptions`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsReleasesQuery({
  variables: {
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:3212](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3212)

***

### useGetAppsReleasesSuspenseQuery()

> **useGetAppsReleasesSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsReleasesQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:3220](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3220)

***

### useGetAppsStreamLazyQuery()

> **useGetAppsStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2969](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2969)

***

### useGetAppsStreamQuery()

> **useGetAppsStreamQuery**(`baseOptions`): `QueryResult`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\>

__useGetAppsStreamQuery__

To run a query within a React component, call `useGetAppsStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2965](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2965)

***

### useGetAppsStreamSuspenseQuery()

> **useGetAppsStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2973](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2973)

***

### useGetAppsSuspenseQuery()

> **useGetAppsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2901](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2901)

***

### useGetBeamByIdLazyQuery()

> **useGetBeamByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:918](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L918)

***

### useGetBeamByIdQuery()

> **useGetBeamByIdQuery**(`baseOptions`): `QueryResult`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\>

__useGetBeamByIdQuery__

To run a query within a React component, call `useGetBeamByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetBeamByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:914](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L914)

***

### useGetBeamByIdSuspenseQuery()

> **useGetBeamByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:922](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L922)

***

### useGetBeamStreamLazyQuery()

> **useGetBeamStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:743](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L743)

***

### useGetBeamStreamQuery()

> **useGetBeamStreamQuery**(`baseOptions`): `QueryResult`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\>

__useGetBeamStreamQuery__

To run a query within a React component, call `useGetBeamStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetBeamStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:739](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L739)

***

### useGetBeamStreamSuspenseQuery()

> **useGetBeamStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:747](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L747)

***

### useGetBeamsByAuthorDidLazyQuery()

> **useGetBeamsByAuthorDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:876](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L876)

***

### useGetBeamsByAuthorDidQuery()

> **useGetBeamsByAuthorDidQuery**(`baseOptions`): `QueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\>

__useGetBeamsByAuthorDidQuery__

To run a query within a React component, call `useGetBeamsByAuthorDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamsByAuthorDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetBeamsByAuthorDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:872](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L872)

***

### useGetBeamsByAuthorDidSuspenseQuery()

> **useGetBeamsByAuthorDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:880](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L880)

***

### useGetBeamsLazyQuery()

> **useGetBeamsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamsQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:806](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L806)

***

### useGetBeamsQuery()

> **useGetBeamsQuery**(`baseOptions`?): `QueryResult`\<`GetBeamsQuery`, `Exact`\<`object`\>\>

__useGetBeamsQuery__

To run a query within a React component, call `useGetBeamsQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `QueryHookOptions`\<`GetBeamsQuery`, `Exact`\<`object`\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamsQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetBeamsQuery({
  variables: {
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:802](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L802)

***

### useGetBeamsSuspenseQuery()

> **useGetBeamsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamsQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:810](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L810)

***

### useGetBlockStorageByIdLazyQuery()

> **useGetBlockStorageByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1076](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1076)

***

### useGetBlockStorageByIdQuery()

> **useGetBlockStorageByIdQuery**(`baseOptions`): `QueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\>

__useGetBlockStorageByIdQuery__

To run a query within a React component, call `useGetBlockStorageByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetBlockStorageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetBlockStorageByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1072](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1072)

***

### useGetBlockStorageByIdSuspenseQuery()

> **useGetBlockStorageByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1080](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1080)

***

### useGetContentBlockByIdLazyQuery()

> **useGetContentBlockByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1034](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1034)

***

### useGetContentBlockByIdQuery()

> **useGetContentBlockByIdQuery**(`baseOptions`): `QueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\>

__useGetContentBlockByIdQuery__

To run a query within a React component, call `useGetContentBlockByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetContentBlockByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetContentBlockByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1030](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1030)

***

### useGetContentBlockByIdSuspenseQuery()

> **useGetContentBlockByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1038](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1038)

***

### useGetContentBlockStreamLazyQuery()

> **useGetContentBlockStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:992](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L992)

***

### useGetContentBlockStreamQuery()

> **useGetContentBlockStreamQuery**(`baseOptions`): `QueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\>

__useGetContentBlockStreamQuery__

To run a query within a React component, call `useGetContentBlockStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetContentBlockStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetContentBlockStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:988](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L988)

***

### useGetContentBlockStreamSuspenseQuery()

> **useGetContentBlockStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:996](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L996)

***

### useGetFollowDocumentsByDidLazyQuery()

> **useGetFollowDocumentsByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2017](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2017)

***

### useGetFollowDocumentsByDidQuery()

> **useGetFollowDocumentsByDidQuery**(`baseOptions`): `QueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\>

__useGetFollowDocumentsByDidQuery__

To run a query within a React component, call `useGetFollowDocumentsByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetFollowDocumentsByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetFollowDocumentsByDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     sorting: // value for 'sorting'
     following: // value for 'following'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2013](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2013)

***

### useGetFollowDocumentsByDidSuspenseQuery()

> **useGetFollowDocumentsByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2021](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2021)

***

### useGetFollowersListByDidLazyQuery()

> **useGetFollowersListByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2634](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2634)

***

### useGetFollowersListByDidQuery()

> **useGetFollowersListByDidQuery**(`baseOptions`): `QueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\>

__useGetFollowersListByDidQuery__

To run a query within a React component, call `useGetFollowersListByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetFollowersListByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetFollowersListByDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2630](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2630)

***

### useGetFollowersListByDidSuspenseQuery()

> **useGetFollowersListByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2638](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2638)

***

### useGetFollowingListByDidLazyQuery()

> **useGetFollowingListByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2554](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2554)

***

### useGetFollowingListByDidQuery()

> **useGetFollowingListByDidQuery**(`baseOptions`): `QueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\>

__useGetFollowingListByDidQuery__

To run a query within a React component, call `useGetFollowingListByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetFollowingListByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetFollowingListByDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2550](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2550)

***

### useGetFollowingListByDidSuspenseQuery()

> **useGetFollowingListByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2558](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2558)

***

### useGetIndexedStreamCountLazyQuery()

> **useGetIndexedStreamCountLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1197](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1197)

***

### useGetIndexedStreamCountQuery()

> **useGetIndexedStreamCountQuery**(`baseOptions`): `QueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\>

__useGetIndexedStreamCountQuery__

To run a query within a React component, call `useGetIndexedStreamCountQuery` and pass it any options that fit your needs.
When your component renders, `useGetIndexedStreamCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetIndexedStreamCountQuery({
  variables: {
     indexer: // value for 'indexer'
     filters: // value for 'filters'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1193](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1193)

***

### useGetIndexedStreamCountSuspenseQuery()

> **useGetIndexedStreamCountSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1201](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1201)

***

### useGetIndexedStreamLazyQuery()

> **useGetIndexedStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1153](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1153)

***

### useGetIndexedStreamQuery()

> **useGetIndexedStreamQuery**(`baseOptions`): `QueryResult`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\>

__useGetIndexedStreamQuery__

To run a query within a React component, call `useGetIndexedStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetIndexedStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetIndexedStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1149](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1149)

***

### useGetIndexedStreamSuspenseQuery()

> **useGetIndexedStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetIndexedStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1157](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1157)

***

### useGetInterestsByDidLazyQuery()

> **useGetInterestsByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2429](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2429)

***

### useGetInterestsByDidQuery()

> **useGetInterestsByDidQuery**(`baseOptions`): `QueryResult`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\>

__useGetInterestsByDidQuery__

To run a query within a React component, call `useGetInterestsByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetInterestsByDidQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2425](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2425)

***

### useGetInterestsByDidSuspenseQuery()

> **useGetInterestsByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2433](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2433)

***

### useGetInterestsByIdLazyQuery()

> **useGetInterestsByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2478](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2478)

***

### useGetInterestsByIdQuery()

> **useGetInterestsByIdQuery**(`baseOptions`): `QueryResult`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\>

__useGetInterestsByIdQuery__

To run a query within a React component, call `useGetInterestsByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetInterestsByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2474](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2474)

***

### useGetInterestsByIdSuspenseQuery()

> **useGetInterestsByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2482](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2482)

***

### useGetInterestsLazyQuery()

> **useGetInterestsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2305](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2305)

***

### useGetInterestsQuery()

> **useGetInterestsQuery**(`baseOptions`?): `QueryResult`\<`GetInterestsQuery`, `Exact`\<`object`\>\>

__useGetInterestsQuery__

To run a query within a React component, call `useGetInterestsQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `QueryHookOptions`\<`GetInterestsQuery`, `Exact`\<`object`\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetInterestsQuery({
  variables: {
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2301](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2301)

***

### useGetInterestsStreamLazyQuery()

> **useGetInterestsStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2377](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2377)

***

### useGetInterestsStreamQuery()

> **useGetInterestsStreamQuery**(`baseOptions`): `QueryResult`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\>

__useGetInterestsStreamQuery__

To run a query within a React component, call `useGetInterestsStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetInterestsStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     sorting: // value for 'sorting'
     filters: // value for 'filters'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2373](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2373)

***

### useGetInterestsStreamSuspenseQuery()

> **useGetInterestsStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2381](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2381)

***

### useGetInterestsSuspenseQuery()

> **useGetInterestsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2309](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2309)

***

### useGetMyProfileLazyQuery()

> **useGetMyProfileLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetMyProfileQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetMyProfileQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetMyProfileQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1943](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1943)

***

### useGetMyProfileQuery()

> **useGetMyProfileQuery**(`baseOptions`?): `QueryResult`\<`GetMyProfileQuery`, `Exact`\<`object`\>\>

__useGetMyProfileQuery__

To run a query within a React component, call `useGetMyProfileQuery` and pass it any options that fit your needs.
When your component renders, `useGetMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `QueryHookOptions`\<`GetMyProfileQuery`, `Exact`\<`object`\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetMyProfileQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetMyProfileQuery({
  variables: {
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1939](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1939)

***

### useGetMyProfileSuspenseQuery()

> **useGetMyProfileSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetMyProfileQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetMyProfileQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetMyProfileQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1947](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1947)

***

### useGetProfileByDidLazyQuery()

> **useGetProfileByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2104](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2104)

***

### useGetProfileByDidQuery()

> **useGetProfileByDidQuery**(`baseOptions`): `QueryResult`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\>

__useGetProfileByDidQuery__

To run a query within a React component, call `useGetProfileByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileByDidQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2100](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2100)

***

### useGetProfileByDidSuspenseQuery()

> **useGetProfileByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2108](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2108)

***

### useGetProfileByIdLazyQuery()

> **useGetProfileByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2059](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2059)

***

### useGetProfileByIdQuery()

> **useGetProfileByIdQuery**(`baseOptions`): `QueryResult`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\>

__useGetProfileByIdQuery__

To run a query within a React component, call `useGetProfileByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2055](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2055)

***

### useGetProfileByIdSuspenseQuery()

> **useGetProfileByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2063](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2063)

***

### useGetProfileStatsByDidLazyQuery()

> **useGetProfileStatsByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2683](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2683)

***

### useGetProfileStatsByDidQuery()

> **useGetProfileStatsByDidQuery**(`baseOptions`): `QueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\>

__useGetProfileStatsByDidQuery__

To run a query within a React component, call `useGetProfileStatsByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileStatsByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileStatsByDidQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2679](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2679)

***

### useGetProfileStatsByDidSuspenseQuery()

> **useGetProfileStatsByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2687](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2687)

***

### useGetProfileStreamLazyQuery()

> **useGetProfileStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2239](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2239)

***

### useGetProfileStreamQuery()

> **useGetProfileStreamQuery**(`baseOptions`): `QueryResult`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\>

__useGetProfileStreamQuery__

To run a query within a React component, call `useGetProfileStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2235](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2235)

***

### useGetProfileStreamSuspenseQuery()

> **useGetProfileStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2243](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2243)

***

### useGetProfilesLazyQuery()

> **useGetProfilesLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfilesQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfilesQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfilesQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2167](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2167)

***

### useGetProfilesQuery()

> **useGetProfilesQuery**(`baseOptions`?): `QueryResult`\<`GetProfilesQuery`, `Exact`\<`object`\>\>

__useGetProfilesQuery__

To run a query within a React component, call `useGetProfilesQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `QueryHookOptions`\<`GetProfilesQuery`, `Exact`\<`object`\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfilesQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetProfilesQuery({
  variables: {
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2163](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2163)

***

### useGetProfilesSuspenseQuery()

> **useGetProfilesSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfilesQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfilesQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfilesQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:2171](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2171)

***

### useGetReflectReflectionsLazyQuery()

> **useGetReflectReflectionsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1624](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1624)

***

### useGetReflectReflectionsQuery()

> **useGetReflectReflectionsQuery**(`baseOptions`): `QueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\>

__useGetReflectReflectionsQuery__

To run a query within a React component, call `useGetReflectReflectionsQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectReflectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetReflectReflectionsQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1620](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1620)

***

### useGetReflectReflectionsSuspenseQuery()

> **useGetReflectReflectionsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1628](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1628)

***

### useGetReflectionByIdLazyQuery()

> **useGetReflectionByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1561](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1561)

***

### useGetReflectionByIdQuery()

> **useGetReflectionByIdQuery**(`baseOptions`): `QueryResult`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\>

__useGetReflectionByIdQuery__

To run a query within a React component, call `useGetReflectionByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetReflectionByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1557](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1557)

***

### useGetReflectionByIdSuspenseQuery()

> **useGetReflectionByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionByIdQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1565](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1565)

***

### useGetReflectionStreamLazyQuery()

> **useGetReflectionStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1519](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1519)

***

### useGetReflectionStreamQuery()

> **useGetReflectionStreamQuery**(`baseOptions`): `QueryResult`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\>

__useGetReflectionStreamQuery__

To run a query within a React component, call `useGetReflectionStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetReflectionStreamQuery({
  variables: {
     indexer: // value for 'indexer'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1515](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1515)

***

### useGetReflectionStreamSuspenseQuery()

> **useGetReflectionStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionStreamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1523](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1523)

***

### useGetReflectionsByAuthorDidLazyQuery()

> **useGetReflectionsByAuthorDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1443](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1443)

***

### useGetReflectionsByAuthorDidQuery()

> **useGetReflectionsByAuthorDidQuery**(`baseOptions`): `QueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\>

__useGetReflectionsByAuthorDidQuery__

To run a query within a React component, call `useGetReflectionsByAuthorDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionsByAuthorDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetReflectionsByAuthorDidQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     filters: // value for 'filters'
     sorting: // value for 'sorting'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1439](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1439)

***

### useGetReflectionsByAuthorDidSuspenseQuery()

> **useGetReflectionsByAuthorDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1447](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1447)

***

### useGetReflectionsFromBeamLazyQuery()

> **useGetReflectionsFromBeamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1374](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1374)

***

### useGetReflectionsFromBeamQuery()

> **useGetReflectionsFromBeamQuery**(`baseOptions`): `QueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\>

__useGetReflectionsFromBeamQuery__

To run a query within a React component, call `useGetReflectionsFromBeamQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionsFromBeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\> & `object` \| `object` | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\>

#### Example

```ts
const { data, loading, error } = useGetReflectionsFromBeamQuery({
  variables: {
     id: // value for 'id'
     after: // value for 'after'
     before: // value for 'before'
     first: // value for 'first'
     last: // value for 'last'
     sorting: // value for 'sorting'
     filters: // value for 'filters'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1370](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1370)

***

### useGetReflectionsFromBeamSuspenseQuery()

> **useGetReflectionsFromBeamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<`object`\>\>

#### Source

[libs/hooks/src/generated/apollo.ts:1378](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1378)

***

### useGetSettings()

> **useGetSettings**(`app`): `object`

Hook to get saved settings for an app

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `app` | `string` | string: The app's name for example @akashaorg/app-extensions |

#### Returns

`object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `data` | `any` | settings |
| `error` | `object` | - |
| `error.message` | `string` | - |
| `isLoading` | `boolean` | - |

#### Example

```typescript
const savedSettingsQuery = useGetSettings('@akashaorg/app-akasha-verse');
const savedSettings = savedSettingsQuery.data;
```

#### Source

[libs/hooks/src/use-settings.ts:88](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L88)

***

### useIndexBeamMutation()

> **useIndexBeamMutation**(`baseOptions`?): `MutationTuple`\<`IndexBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useIndexBeamMutation__

To run a mutation, you first call `useIndexBeamMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexBeamMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexBeamMutation, { data, loading, error }] = useIndexBeamMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:495](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L495)

***

### useIndexContentBlockMutation()

> **useIndexContentBlockMutation**(`baseOptions`?): `MutationTuple`\<`IndexContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useIndexContentBlockMutation__

To run a mutation, you first call `useIndexContentBlockMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexContentBlockMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexContentBlockMutation, { data, loading, error }] = useIndexContentBlockMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:531](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L531)

***

### useIndexProfileMutation()

> **useIndexProfileMutation**(`baseOptions`?): `MutationTuple`\<`IndexProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useIndexProfileMutation__

To run a mutation, you first call `useIndexProfileMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexProfileMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexProfileMutation, { data, loading, error }] = useIndexProfileMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1665](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1665)

***

### useIndexReflectionMutation()

> **useIndexReflectionMutation**(`baseOptions`?): `MutationTuple`\<`IndexReflectionMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useIndexReflectionMutation__

To run a mutation, you first call `useIndexReflectionMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexReflectionMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexReflectionMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexReflectionMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexReflectionMutation, { data, loading, error }] = useIndexReflectionMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1238](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1238)

***

### useLegalDoc()

> **useLegalDoc**(`docName`): `object`

Hook to get legal docs stored on ipfs

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `docName` | `LEGAL_DOCS` | LEGAL_DOCS the type of the legal doc being retrieved |

#### Returns

`object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `data` | `string` | - |
| `error` | `Error` | - |
| `isFetched` | `boolean` | ... |
| `isLoading` | `boolean` | - |

#### Example

```typescript
const termsOfUseDocQuery = useLegalDoc('TermsOfUse');

const termsOfUseDoc = termsOfUseDocQuery.data;
```

#### Source

[libs/hooks/src/use-legal.ts:21](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-legal.ts#L21)

***

### useListenForMutationEvents()

> **useListenForMutationEvents**(): `any`

Hook to listen for mutation events emitted from the SDK's globalChannel.

#### Returns

`any`

#### Example

```typescript
const { messageObj, appid, success, pending } = useListenForMutationEvents();

```

#### Source

[libs/hooks/src/use-notifications.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-notifications.ts#L13)

***

### useMentions()

> **useMentions**(`authenticatedDID`): `object`

Hook to retrieve and set the mentions associated with a profile.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `authenticatedDID` | `string` | string |

#### Returns

`object`

- Object containing the mentions associated
with the authenticatedDID and a setMentionQuery method to control the querying
of mention data.

| Member | Type |
| :------ | :------ |
| `mentions` | `object`[] |
| `setMentionQuery` | `Dispatch`\<`SetStateAction`\<`string`\>\> |

#### Example

```typescript
const { setMentionQuery, mentions } = useMentions('an authenticated DID');
```

#### Source

[libs/hooks/src/use-mentions.ts:16](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-mentions.ts#L16)

***

### useModalData()

> **useModalData**(): `object`

Hook to handle the data supplied to the `LoginModal` extension.

#### Returns

`object`

- Object containing the params passed in the url

| Member | Type |
| :------ | :------ |
| `modalData` | `object` |
| `modalData.message` | `string` |
| `modalData.name` | `string` |
| `modalData.title` | `string` |

#### Example

```typescript
const { modalData } = useModalData();
```

#### Source

[libs/hooks/src/use-modal-data.ts:14](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-modal-data.ts#L14)

***

### useModerationCategory()

> **useModerationCategory**(`props`): `useModerationCategoryReturnType`

Hook to handle moderation/report categories

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `props` | `useModerationCategoryProps` | useModerationCategoryProps |

#### Returns

`useModerationCategoryReturnType`

useModerationCategoryReturnType

#### Source

[libs/hooks/src/use-moderation-categories.ts:20](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-moderation-categories.ts#L20)

***

### useNetworkChangeListener()

> **useNetworkChangeListener**(): `any`[]

#### Returns

`any`[]

#### Source

[libs/hooks/src/use-network-state.ts:160](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L160)

***

### useNetworkState()

> **useNetworkState**(`enabler`?): `object`

Hook to check if the web3 provider is set to function on the Rinkeby test network

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enabler`? | `boolean` | boolean (optional) that can control when to start verifying network state |

#### Returns

`object`

networkNotSupported: true if web3 provider is not on the specified network

| Member | Type |
| :------ | :------ |
| `data` | `object` |
| `data.networkNotSupported` | `boolean` |
| `error` | `Error` |
| `isFetched` | `boolean` |
| `isLoading` | `boolean` |

#### Example

```typescript
const networkStateQuery = useNetworkState(true);

const networkNotSupported = networkStateQuery.data.networkNotSupported;
```

#### Source

[libs/hooks/src/use-network-state.ts:37](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L37)

***

### useNsfwToggling()

> **useNsfwToggling**(): `object`

Hook to get and set user's choice for showing/hiding nsfw content

#### Returns

`object`

| Member | Type |
| :------ | :------ |
| `showNsfw` | `boolean` |
| `toggleShowNsfw` | (`showNsfw`) => `void` |

#### Example

```typescript
const {showNsfw, toggleShowNsfw} = useNsfwToggling();
```
To toggle the nsfw state, pass a boolean value to the toggleShowNsfw function,
 e.g. `toggleShowNsfw(true)`

#### Source

[libs/hooks/src/use-nsfw.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-nsfw.ts#L13)

***

### usePlaformHealthCheck()

> **usePlaformHealthCheck**(): `object`

Hook to check the overall status of the platform.

#### Returns

`object`

- Object containing the data and query status

| Member | Type |
| :------ | :------ |
| `data` | `object` |
| `data.statusCode` | `number` |
| `data.success` | `boolean` |
| `isLoading` | `boolean` |

#### Example

```typescript
const { data, isLoading } = usePlaformHealthCheck();
```

#### Source

[libs/hooks/src/use-health-check.ts:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-health-check.ts#L19)

***

### useProfileStats()

> **useProfileStats**(`profileId`, `readCache`?): `object`

Hook to get a profile's stats (number of beams, followers, following, etc. )

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `profileId` | `string` | string |
| `readCache`? | `boolean` | boolean (optional) to indicate whether to read from the cache |

#### Returns

`object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `data` | `object` | stat.data |
| `data.totalBeams` | `number` | 0 |
| `data.totalFollowers` | `number` | 0 |
| `data.totalFollowing` | `number` | 0 |
| `data.totalReflections` | `number` | 0 |
| `data.totalTopics` | `number` | 0 |
| `error` | `any` | - |
| `loading` | `boolean` | - |

#### Example

```typescript
const profileStatsQuery = useProfileStats('did:pkh:eip155:5:0xadc81c169...');

console.log(profileStatsQuery.data)
```

#### Source

[libs/hooks/src/use-profile-stats.ts:27](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-profile-stats.ts#L27)

***

### useRequiredNetwork()

> **useRequiredNetwork**(): `object`

A hook to get required network name from the SDK

#### Returns

`object`

| Member | Type |
| :------ | :------ |
| `data` | `object` |
| `data.chainId` | `11155111` |
| `data.name` | `string` |
| `error` | `Error` |
| `isLoading` | `boolean` |
| `isSuccess` | `boolean` |

#### Example

```typescript
const requiredNetworkQuery = useRequiredNetworkName();

const requiredNetworkName = requiredNetworkQuery.data;
```

#### Source

[libs/hooks/src/use-network-state.ts:129](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L129)

***

### useRootComponentProps()

> **useRootComponentProps**\<`T`\>(): `object` & `T`

Hook to manage and access the context of the plugins for routing, translation, and extensions.
For example, through this hook, the `getRoutingPlugin`method can be used to
navigate between apps, or the `worldConfig` object can be used for accessing
the config info related to the World the whole application belongs to.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `IRootComponentProps` |

#### Returns

`object` & `T`

#### Example

```typescript
  const { getTranslationPlugin, baseRouteName,getRoutingPlugin, navigateToModal, worldConfig } = useRootComponentProps();
```

#### Source

[libs/hooks/src/use-root-props.tsx:31](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-root-props.tsx#L31)

***

### useSaveSettings()

> **useSaveSettings**(): `object`

Hook to save app's settings using sdk settings service

#### Returns

`object`

| Member | Type |
| :------ | :------ |
| `data` | `unknown` |
| `error` | `object` |
| `error.message` | `string` |
| `isLoading` | `boolean` |
| `saveNotificationSettings` | (`params`, `callback`?) => `void` |

#### Example

```typescript
const { saveNotificationSettings } = useSaveSettings();
saveNotificationSettings(
 { app: '@akashaorg/app-extensions', options: NotificationsOptions },
 callback: {onComplete: () => void}
 )
```

#### Source

[libs/hooks/src/use-settings.ts:38](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L38)

***

### useSetAppReleaseMutation()

> **useSetAppReleaseMutation**(`baseOptions`?): `MutationTuple`\<`SetAppReleaseMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useSetAppReleaseMutation__

To run a mutation, you first call `useSetAppReleaseMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useSetAppReleaseMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`SetAppReleaseMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`SetAppReleaseMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [setAppReleaseMutation, { data, loading, error }] = useSetAppReleaseMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2726](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2726)

***

### useShowFeedback()

> **useShowFeedback**(`initialShowValue`?): [`boolean`, `Dispatch`\<`SetStateAction`\<`boolean`\>\>]

Hook to manage the state of the feedback shown in the snackbar.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `initialShowValue`? | `boolean` | boolean (optional) |

#### Returns

[`boolean`, `Dispatch`\<`SetStateAction`\<`boolean`\>\>]

The state of whether to
show the feedback message and a function to set that state.

#### Example

```typescript
  const [showFeedback, setShowFeedback] = useShowFeedback();
```

#### Source

[libs/hooks/src/use-show-feedback.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-show-feedback.ts#L13)

***

### useTheme()

> **useTheme**(): `TUseThemeReturn`

Hook to check the current theme or set one

#### Returns

`TUseThemeReturn`

`{ theme, propagateTheme }` The current theme and a function to set the theme.
The `propagateTheme` function takes two parameters:
the first one is the theme to be set, and
a second (optional) one is a boolean to indicate whether you want to save the theme to local storage as well.

#### Example

```typescript
const { theme, propagateTheme } = useTheme();
```

#### Source

[libs/hooks/src/use-theme.ts:23](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-theme.ts#L23)

***

### useUpdateAkashaReflectMutation()

> **useUpdateAkashaReflectMutation**(`baseOptions`?): `MutationTuple`\<`UpdateAkashaReflectMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateAkashaReflectMutation__

To run a mutation, you first call `useUpdateAkashaReflectMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateAkashaReflectMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateAkashaReflectMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateAkashaReflectMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateAkashaReflectMutation, { data, loading, error }] = useUpdateAkashaReflectMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1310](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1310)

***

### useUpdateAppMutation()

> **useUpdateAppMutation**(`baseOptions`?): `MutationTuple`\<`UpdateAppMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateAppMutation__

To run a mutation, you first call `useUpdateAppMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateAppMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateAppMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateAppMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateAppMutation, { data, loading, error }] = useUpdateAppMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2838](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2838)

***

### useUpdateAppReleaseMutation()

> **useUpdateAppReleaseMutation**(`baseOptions`?): `MutationTuple`\<`UpdateAppReleaseMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateAppReleaseMutation__

To run a mutation, you first call `useUpdateAppReleaseMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateAppReleaseMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateAppReleaseMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateAppReleaseMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateAppReleaseMutation, { data, loading, error }] = useUpdateAppReleaseMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:2764](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2764)

***

### useUpdateBeamMutation()

> **useUpdateBeamMutation**(`baseOptions`?): `MutationTuple`\<`UpdateBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateBeamMutation__

To run a mutation, you first call `useUpdateBeamMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateBeamMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateBeamMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateBeamMutation, { data, loading, error }] = useUpdateBeamMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:603](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L603)

***

### useUpdateContentBlockMutation()

> **useUpdateContentBlockMutation**(`baseOptions`?): `MutationTuple`\<`UpdateContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateContentBlockMutation__

To run a mutation, you first call `useUpdateContentBlockMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateContentBlockMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateContentBlockMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateContentBlockMutation, { data, loading, error }] = useUpdateContentBlockMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:675](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L675)

***

### useUpdateFollowMutation()

> **useUpdateFollowMutation**(`baseOptions`?): `MutationTuple`\<`UpdateFollowMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateFollowMutation__

To run a mutation, you first call `useUpdateFollowMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateFollowMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateFollowMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateFollowMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateFollowMutation, { data, loading, error }] = useUpdateFollowMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1907](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1907)

***

### useUpdateInterestsMutation()

> **useUpdateInterestsMutation**(`baseOptions`?): `MutationTuple`\<`UpdateInterestsMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateInterestsMutation__

To run a mutation, you first call `useUpdateInterestsMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateInterestsMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateInterestsMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateInterestsMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateInterestsMutation, { data, loading, error }] = useUpdateInterestsMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1823](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1823)

***

### useUpdateProfileMutation()

> **useUpdateProfileMutation**(`baseOptions`?): `MutationTuple`\<`UpdateProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

__useUpdateProfileMutation__

To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateProfileMutation`, `Exact`\<`object`\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
  variables: {
     i: // value for 'i'
  },
});
```

#### Source

[libs/hooks/src/generated/apollo.ts:1737](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1737)

***

### useValidDid()

> **useValidDid**(`profileId`, `enabled`?): `object`

Hook to check the validity of an address

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `profileId` | `string` |
| `enabled`? | `boolean` |

#### Returns

`object`

| Member | Type |
| :------ | :------ |
| `isEthAddress` | `boolean` |
| `isLoading` | `boolean` |
| `validDid` | `boolean` |

#### Example

```typescript
const { validDid, isEthAddress } = useValidDid(profileDID, !!profileDID)

```
If you want to conditionally eable or disable address check from the hook,
 include the `enabled`param, which is `!!profileDID` in the example above.

#### Source

[libs/hooks/src/use-valid-did.ts:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-valid-did.ts#L19)

***

### validateType()

> **validateType**\<`T`\>(`arg1`, `type`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `arg1` | `T` |
| `type` | `string` |

#### Returns

`boolean`

#### Source

[libs/hooks/src/utils/generic-utils.ts:1](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/generic-utils.ts#L1)

***

### withProviders()

> **withProviders**\<`T`\>(`WrappedComponent`): (`props`) => `Element`

Higher order component that wraps a component with all necessary providers

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `IRootComponentProps` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `WrappedComponent` | `ComponentType`\<`T`\> |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | `T` |

##### Returns

`Element`

| Member | Type |
| :------ | :------ |
| `displayName` | `string` |

#### Source

[libs/hooks/src/utils/provider-hoc.tsx:11](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/provider-hoc.tsx#L11)

## Classes

### UserStore\<T\>

Singleton store for managing login, logout, session restoration and fetching profile.
It uses jotai to manage the store

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Implements

- `IUserStore`\<`T`\>

#### Methods

##### getSnapshot()

> **getSnapshot**(): `IUserState`\<`T`\>

Get a snapshot of store data

###### Returns

`IUserState`\<`T`\>

###### Implementation of

`IUserStore.getSnapshot`

###### Source

[libs/hooks/src/store/user-store.ts:143](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L143)

***

##### login()

> **login**(`__namedParameters`): `Promise`\<`void`\>

Handles login

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.checkRegistered` | `boolean` |
| `__namedParameters.provider` | `any` |

###### Returns

`Promise`\<`void`\>

###### Implementation of

`IUserStore.login`

###### Source

[libs/hooks/src/store/user-store.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L46)

***

##### logout()

> **logout**(): `void`

Handles logout
Reset the store to the initial state

###### Returns

`void`

###### Implementation of

`IUserStore.logout`

###### Source

[libs/hooks/src/store/user-store.ts:77](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L77)

***

##### restoreSession()

> **restoreSession**(): `Promise`\<`void`\>

Initiates session restore for current authenticated user

###### Returns

`Promise`\<`void`\>

###### Implementation of

`IUserStore.restoreSession`

###### Source

[libs/hooks/src/store/user-store.ts:105](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L105)

***

##### subscribe()

> **subscribe**(`listener`): () => `void`

Takes a callback function and subscribes it to the store, when the store changes the callback is invoked.
This in turns causes a component to re-render

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `listener` | () => `void` | callback listener which subscribes to the store |

###### Returns

`Function`

function that cleans up the subscription

###### Returns

`void`

###### Implementation of

`IUserStore.subscribe`

###### Source

[libs/hooks/src/store/user-store.ts:135](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L135)

***

##### getInstance()

> `static` **getInstance**\<`T`\>(`getProfileInfo`): [`UserStore`](readme.md#userstoret)\<`T`\>

Get the singleton instance of the user store

###### Type parameters

| Type parameter |
| :------ |
| `T` |

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `getProfileInfo` | (`params`) => `Promise`\<`object`\> |

###### Returns

[`UserStore`](readme.md#userstoret)\<`T`\>

###### Source

[libs/hooks/src/store/user-store.ts:36](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L36)

## Enumerations

### CookieConsentTypes

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `ALL` | `"ALL"` |
| `ESSENTIAL` | `"ESSENTIAL"` |

## Interfaces

### IConfig

#### Properties

| Property | Type |
| :------ | :------ |
| `autoRotate?` | `boolean` |
| `maxHeight` | `number` |
| `maxWidth` | `number` |
| `mimeType?` | `string` |
| `quality?` | `number` |

***

### UseAnalyticsActions

#### Properties

| Property | Type |
| :------ | :------ |
| `trackEvent` | (`eventData`: `object`) => `void` |

## Type Aliases

### CreateAppMutationFn

> **CreateAppMutationFn**: `Apollo.MutationFunction`\<`Types.CreateAppMutation`, `Types.CreateAppMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2782](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2782)

***

### CreateAppMutationHookResult

> **CreateAppMutationHookResult**: `ReturnType`\<*typeof* [`useCreateAppMutation`](readme.md#usecreateappmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2805](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2805)

***

### CreateAppMutationOptions

> **CreateAppMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateAppMutation`, `Types.CreateAppMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2807](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2807)

***

### CreateAppMutationResult

> **CreateAppMutationResult**: `Apollo.MutationResult`\<`Types.CreateAppMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2806](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2806)

***

### CreateBeamMutationFn

> **CreateBeamMutationFn**: `Apollo.MutationFunction`\<`Types.CreateBeamMutation`, `Types.CreateBeamMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:548](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L548)

***

### CreateBeamMutationHookResult

> **CreateBeamMutationHookResult**: `ReturnType`\<*typeof* [`useCreateBeamMutation`](readme.md#usecreatebeammutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:571](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L571)

***

### CreateBeamMutationOptions

> **CreateBeamMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateBeamMutation`, `Types.CreateBeamMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:573](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L573)

***

### CreateBeamMutationResult

> **CreateBeamMutationResult**: `Apollo.MutationResult`\<`Types.CreateBeamMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:572](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L572)

***

### CreateContentBlockMutationFn

> **CreateContentBlockMutationFn**: `Apollo.MutationFunction`\<`Types.CreateContentBlockMutation`, `Types.CreateContentBlockMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:620](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L620)

***

### CreateContentBlockMutationHookResult

> **CreateContentBlockMutationHookResult**: `ReturnType`\<*typeof* [`useCreateContentBlockMutation`](readme.md#usecreatecontentblockmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:643](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L643)

***

### CreateContentBlockMutationOptions

> **CreateContentBlockMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateContentBlockMutation`, `Types.CreateContentBlockMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:645](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L645)

***

### CreateContentBlockMutationResult

> **CreateContentBlockMutationResult**: `Apollo.MutationResult`\<`Types.CreateContentBlockMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:644](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L644)

***

### CreateFollowMutationFn

> **CreateFollowMutationFn**: `Apollo.MutationFunction`\<`Types.CreateFollowMutation`, `Types.CreateFollowMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1846](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1846)

***

### CreateFollowMutationHookResult

> **CreateFollowMutationHookResult**: `ReturnType`\<*typeof* [`useCreateFollowMutation`](readme.md#usecreatefollowmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1869](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1869)

***

### CreateFollowMutationOptions

> **CreateFollowMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateFollowMutation`, `Types.CreateFollowMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1871](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1871)

***

### CreateFollowMutationResult

> **CreateFollowMutationResult**: `Apollo.MutationResult`\<`Types.CreateFollowMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1870](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1870)

***

### CreateInterestsMutationFn

> **CreateInterestsMutationFn**: `Apollo.MutationFunction`\<`Types.CreateInterestsMutation`, `Types.CreateInterestsMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1761](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1761)

***

### CreateInterestsMutationHookResult

> **CreateInterestsMutationHookResult**: `ReturnType`\<*typeof* [`useCreateInterestsMutation`](readme.md#usecreateinterestsmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1784](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1784)

***

### CreateInterestsMutationOptions

> **CreateInterestsMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateInterestsMutation`, `Types.CreateInterestsMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1786](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1786)

***

### CreateInterestsMutationResult

> **CreateInterestsMutationResult**: `Apollo.MutationResult`\<`Types.CreateInterestsMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1785](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1785)

***

### CreateProfileMutationFn

> **CreateProfileMutationFn**: `Apollo.MutationFunction`\<`Types.CreateProfileMutation`, `Types.CreateProfileMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1682](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1682)

***

### CreateProfileMutationHookResult

> **CreateProfileMutationHookResult**: `ReturnType`\<*typeof* [`useCreateProfileMutation`](readme.md#usecreateprofilemutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1705](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1705)

***

### CreateProfileMutationOptions

> **CreateProfileMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateProfileMutation`, `Types.CreateProfileMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1707](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1707)

***

### CreateProfileMutationResult

> **CreateProfileMutationResult**: `Apollo.MutationResult`\<`Types.CreateProfileMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1706](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1706)

***

### CreateReflectMutationFn

> **CreateReflectMutationFn**: `Apollo.MutationFunction`\<`Types.CreateReflectMutation`, `Types.CreateReflectMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1255](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1255)

***

### CreateReflectMutationHookResult

> **CreateReflectMutationHookResult**: `ReturnType`\<*typeof* [`useCreateReflectMutation`](readme.md#usecreatereflectmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1278](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1278)

***

### CreateReflectMutationOptions

> **CreateReflectMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateReflectMutation`, `Types.CreateReflectMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1280](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1280)

***

### CreateReflectMutationResult

> **CreateReflectMutationResult**: `Apollo.MutationResult`\<`Types.CreateReflectMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1279](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1279)

***

### GetAppReleaseByIdLazyQueryHookResult

> **GetAppReleaseByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppReleaseByIdLazyQuery`](readme.md#usegetappreleasebyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3269](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3269)

***

### GetAppReleaseByIdQueryHookResult

> **GetAppReleaseByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppReleaseByIdQuery`](readme.md#usegetappreleasebyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3268](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3268)

***

### GetAppReleaseByIdQueryResult

> **GetAppReleaseByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetAppReleaseByIdQuery`, `Types.GetAppReleaseByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:3271](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3271)

***

### GetAppReleaseByIdSuspenseQueryHookResult

> **GetAppReleaseByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppReleaseByIdSuspenseQuery`](readme.md#usegetappreleasebyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3270](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3270)

***

### GetAppsByIdLazyQueryHookResult

> **GetAppsByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByIdLazyQuery`](readme.md#usegetappsbyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3021](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3021)

***

### GetAppsByIdQueryHookResult

> **GetAppsByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByIdQuery`](readme.md#usegetappsbyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3020](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3020)

***

### GetAppsByIdQueryResult

> **GetAppsByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsByIdQuery`, `Types.GetAppsByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:3023](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3023)

***

### GetAppsByIdSuspenseQueryHookResult

> **GetAppsByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByIdSuspenseQuery`](readme.md#usegetappsbyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3022](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3022)

***

### GetAppsByPublisherDidLazyQueryHookResult

> **GetAppsByPublisherDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByPublisherDidLazyQuery`](readme.md#usegetappsbypublisherdidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3090](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3090)

***

### GetAppsByPublisherDidQueryHookResult

> **GetAppsByPublisherDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByPublisherDidQuery`](readme.md#usegetappsbypublisherdidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3089](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3089)

***

### GetAppsByPublisherDidQueryResult

> **GetAppsByPublisherDidQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsByPublisherDidQuery`, `Types.GetAppsByPublisherDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:3092](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3092)

***

### GetAppsByPublisherDidSuspenseQueryHookResult

> **GetAppsByPublisherDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByPublisherDidSuspenseQuery`](readme.md#usegetappsbypublisherdidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3091](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3091)

***

### GetAppsLazyQueryHookResult

> **GetAppsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsLazyQuery`](readme.md#usegetappslazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2906](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2906)

***

### GetAppsQueryHookResult

> **GetAppsQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsQuery`](readme.md#usegetappsquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2905](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2905)

***

### GetAppsQueryResult

> **GetAppsQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsQuery`, `Types.GetAppsQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2908](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2908)

***

### GetAppsReleasesByPublisherDidLazyQueryHookResult

> **GetAppsReleasesByPublisherDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesByPublisherDidLazyQuery`](readme.md#usegetappsreleasesbypublisherdidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3160](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3160)

***

### GetAppsReleasesByPublisherDidQueryHookResult

> **GetAppsReleasesByPublisherDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesByPublisherDidQuery`](readme.md#usegetappsreleasesbypublisherdidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3159](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3159)

***

### GetAppsReleasesByPublisherDidQueryResult

> **GetAppsReleasesByPublisherDidQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsReleasesByPublisherDidQuery`, `Types.GetAppsReleasesByPublisherDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:3162](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3162)

***

### GetAppsReleasesByPublisherDidSuspenseQueryHookResult

> **GetAppsReleasesByPublisherDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesByPublisherDidSuspenseQuery`](readme.md#usegetappsreleasesbypublisherdidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3161](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3161)

***

### GetAppsReleasesLazyQueryHookResult

> **GetAppsReleasesLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesLazyQuery`](readme.md#usegetappsreleaseslazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3225](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3225)

***

### GetAppsReleasesQueryHookResult

> **GetAppsReleasesQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesQuery`](readme.md#usegetappsreleasesquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3224](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3224)

***

### GetAppsReleasesQueryResult

> **GetAppsReleasesQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsReleasesQuery`, `Types.GetAppsReleasesQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:3227](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3227)

***

### GetAppsReleasesSuspenseQueryHookResult

> **GetAppsReleasesSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesSuspenseQuery`](readme.md#usegetappsreleasessuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:3226](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3226)

***

### GetAppsStreamLazyQueryHookResult

> **GetAppsStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsStreamLazyQuery`](readme.md#usegetappsstreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2978](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2978)

***

### GetAppsStreamQueryHookResult

> **GetAppsStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsStreamQuery`](readme.md#usegetappsstreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2977](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2977)

***

### GetAppsStreamQueryResult

> **GetAppsStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsStreamQuery`, `Types.GetAppsStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2980](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2980)

***

### GetAppsStreamSuspenseQueryHookResult

> **GetAppsStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsStreamSuspenseQuery`](readme.md#usegetappsstreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2979](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2979)

***

### GetAppsSuspenseQueryHookResult

> **GetAppsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsSuspenseQuery`](readme.md#usegetappssuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2907](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2907)

***

### GetBeamByIdLazyQueryHookResult

> **GetBeamByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamByIdLazyQuery`](readme.md#usegetbeambyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:927](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L927)

***

### GetBeamByIdQueryHookResult

> **GetBeamByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamByIdQuery`](readme.md#usegetbeambyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:926](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L926)

***

### GetBeamByIdQueryResult

> **GetBeamByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamByIdQuery`, `Types.GetBeamByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:929](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L929)

***

### GetBeamByIdSuspenseQueryHookResult

> **GetBeamByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamByIdSuspenseQuery`](readme.md#usegetbeambyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:928](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L928)

***

### GetBeamStreamLazyQueryHookResult

> **GetBeamStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamStreamLazyQuery`](readme.md#usegetbeamstreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:752](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L752)

***

### GetBeamStreamQueryHookResult

> **GetBeamStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamStreamQuery`](readme.md#usegetbeamstreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:751](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L751)

***

### GetBeamStreamQueryResult

> **GetBeamStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamStreamQuery`, `Types.GetBeamStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:754](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L754)

***

### GetBeamStreamSuspenseQueryHookResult

> **GetBeamStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamStreamSuspenseQuery`](readme.md#usegetbeamstreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:753](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L753)

***

### GetBeamsByAuthorDidLazyQueryHookResult

> **GetBeamsByAuthorDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsByAuthorDidLazyQuery`](readme.md#usegetbeamsbyauthordidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:885](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L885)

***

### GetBeamsByAuthorDidQueryHookResult

> **GetBeamsByAuthorDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsByAuthorDidQuery`](readme.md#usegetbeamsbyauthordidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:884](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L884)

***

### GetBeamsByAuthorDidQueryResult

> **GetBeamsByAuthorDidQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamsByAuthorDidQuery`, `Types.GetBeamsByAuthorDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:887](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L887)

***

### GetBeamsByAuthorDidSuspenseQueryHookResult

> **GetBeamsByAuthorDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsByAuthorDidSuspenseQuery`](readme.md#usegetbeamsbyauthordidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:886](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L886)

***

### GetBeamsLazyQueryHookResult

> **GetBeamsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsLazyQuery`](readme.md#usegetbeamslazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:815](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L815)

***

### GetBeamsQueryHookResult

> **GetBeamsQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsQuery`](readme.md#usegetbeamsquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:814](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L814)

***

### GetBeamsQueryResult

> **GetBeamsQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamsQuery`, `Types.GetBeamsQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:817](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L817)

***

### GetBeamsSuspenseQueryHookResult

> **GetBeamsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsSuspenseQuery`](readme.md#usegetbeamssuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:816](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L816)

***

### GetBlockStorageByIdLazyQueryHookResult

> **GetBlockStorageByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBlockStorageByIdLazyQuery`](readme.md#usegetblockstoragebyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1085](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1085)

***

### GetBlockStorageByIdQueryHookResult

> **GetBlockStorageByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetBlockStorageByIdQuery`](readme.md#usegetblockstoragebyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1084](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1084)

***

### GetBlockStorageByIdQueryResult

> **GetBlockStorageByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetBlockStorageByIdQuery`, `Types.GetBlockStorageByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1087](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1087)

***

### GetBlockStorageByIdSuspenseQueryHookResult

> **GetBlockStorageByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBlockStorageByIdSuspenseQuery`](readme.md#usegetblockstoragebyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1086](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1086)

***

### GetContentBlockByIdLazyQueryHookResult

> **GetContentBlockByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockByIdLazyQuery`](readme.md#usegetcontentblockbyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1043](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1043)

***

### GetContentBlockByIdQueryHookResult

> **GetContentBlockByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockByIdQuery`](readme.md#usegetcontentblockbyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1042](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1042)

***

### GetContentBlockByIdQueryResult

> **GetContentBlockByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetContentBlockByIdQuery`, `Types.GetContentBlockByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1045](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1045)

***

### GetContentBlockByIdSuspenseQueryHookResult

> **GetContentBlockByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockByIdSuspenseQuery`](readme.md#usegetcontentblockbyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1044](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1044)

***

### GetContentBlockStreamLazyQueryHookResult

> **GetContentBlockStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockStreamLazyQuery`](readme.md#usegetcontentblockstreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1001](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1001)

***

### GetContentBlockStreamQueryHookResult

> **GetContentBlockStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockStreamQuery`](readme.md#usegetcontentblockstreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1000](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1000)

***

### GetContentBlockStreamQueryResult

> **GetContentBlockStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetContentBlockStreamQuery`, `Types.GetContentBlockStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1003](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1003)

***

### GetContentBlockStreamSuspenseQueryHookResult

> **GetContentBlockStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockStreamSuspenseQuery`](readme.md#usegetcontentblockstreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1002](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1002)

***

### GetFollowDocumentsByDidLazyQueryHookResult

> **GetFollowDocumentsByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowDocumentsByDidLazyQuery`](readme.md#usegetfollowdocumentsbydidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2026](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2026)

***

### GetFollowDocumentsByDidQueryHookResult

> **GetFollowDocumentsByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowDocumentsByDidQuery`](readme.md#usegetfollowdocumentsbydidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2025](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2025)

***

### GetFollowDocumentsByDidQueryResult

> **GetFollowDocumentsByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetFollowDocumentsByDidQuery`, `Types.GetFollowDocumentsByDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2028](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2028)

***

### GetFollowDocumentsByDidSuspenseQueryHookResult

> **GetFollowDocumentsByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowDocumentsByDidSuspenseQuery`](readme.md#usegetfollowdocumentsbydidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2027](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2027)

***

### GetFollowersListByDidLazyQueryHookResult

> **GetFollowersListByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowersListByDidLazyQuery`](readme.md#usegetfollowerslistbydidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2643](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2643)

***

### GetFollowersListByDidQueryHookResult

> **GetFollowersListByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowersListByDidQuery`](readme.md#usegetfollowerslistbydidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2642](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2642)

***

### GetFollowersListByDidQueryResult

> **GetFollowersListByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetFollowersListByDidQuery`, `Types.GetFollowersListByDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2645](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2645)

***

### GetFollowersListByDidSuspenseQueryHookResult

> **GetFollowersListByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowersListByDidSuspenseQuery`](readme.md#usegetfollowerslistbydidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2644](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2644)

***

### GetFollowingListByDidLazyQueryHookResult

> **GetFollowingListByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowingListByDidLazyQuery`](readme.md#usegetfollowinglistbydidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2563](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2563)

***

### GetFollowingListByDidQueryHookResult

> **GetFollowingListByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowingListByDidQuery`](readme.md#usegetfollowinglistbydidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2562](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2562)

***

### GetFollowingListByDidQueryResult

> **GetFollowingListByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetFollowingListByDidQuery`, `Types.GetFollowingListByDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2565](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2565)

***

### GetFollowingListByDidSuspenseQueryHookResult

> **GetFollowingListByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowingListByDidSuspenseQuery`](readme.md#usegetfollowinglistbydidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2564](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2564)

***

### GetIndexedStreamCountLazyQueryHookResult

> **GetIndexedStreamCountLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamCountLazyQuery`](readme.md#usegetindexedstreamcountlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1206](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1206)

***

### GetIndexedStreamCountQueryHookResult

> **GetIndexedStreamCountQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamCountQuery`](readme.md#usegetindexedstreamcountquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1205](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1205)

***

### GetIndexedStreamCountQueryResult

> **GetIndexedStreamCountQueryResult**: `Apollo.QueryResult`\<`Types.GetIndexedStreamCountQuery`, `Types.GetIndexedStreamCountQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1208](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1208)

***

### GetIndexedStreamCountSuspenseQueryHookResult

> **GetIndexedStreamCountSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamCountSuspenseQuery`](readme.md#usegetindexedstreamcountsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1207](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1207)

***

### GetIndexedStreamLazyQueryHookResult

> **GetIndexedStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamLazyQuery`](readme.md#usegetindexedstreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1162](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1162)

***

### GetIndexedStreamQueryHookResult

> **GetIndexedStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamQuery`](readme.md#usegetindexedstreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1161](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1161)

***

### GetIndexedStreamQueryResult

> **GetIndexedStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetIndexedStreamQuery`, `Types.GetIndexedStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1164](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1164)

***

### GetIndexedStreamSuspenseQueryHookResult

> **GetIndexedStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamSuspenseQuery`](readme.md#usegetindexedstreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1163](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1163)

***

### GetInterestsByDidLazyQueryHookResult

> **GetInterestsByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByDidLazyQuery`](readme.md#usegetinterestsbydidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2438](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2438)

***

### GetInterestsByDidQueryHookResult

> **GetInterestsByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByDidQuery`](readme.md#usegetinterestsbydidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2437](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2437)

***

### GetInterestsByDidQueryResult

> **GetInterestsByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsByDidQuery`, `Types.GetInterestsByDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2440](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2440)

***

### GetInterestsByDidSuspenseQueryHookResult

> **GetInterestsByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByDidSuspenseQuery`](readme.md#usegetinterestsbydidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2439](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2439)

***

### GetInterestsByIdLazyQueryHookResult

> **GetInterestsByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByIdLazyQuery`](readme.md#usegetinterestsbyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2487](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2487)

***

### GetInterestsByIdQueryHookResult

> **GetInterestsByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByIdQuery`](readme.md#usegetinterestsbyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2486](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2486)

***

### GetInterestsByIdQueryResult

> **GetInterestsByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsByIdQuery`, `Types.GetInterestsByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2489](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2489)

***

### GetInterestsByIdSuspenseQueryHookResult

> **GetInterestsByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByIdSuspenseQuery`](readme.md#usegetinterestsbyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2488](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2488)

***

### GetInterestsLazyQueryHookResult

> **GetInterestsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsLazyQuery`](readme.md#usegetinterestslazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2314](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2314)

***

### GetInterestsQueryHookResult

> **GetInterestsQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsQuery`](readme.md#usegetinterestsquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2313](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2313)

***

### GetInterestsQueryResult

> **GetInterestsQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsQuery`, `Types.GetInterestsQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2316](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2316)

***

### GetInterestsStreamLazyQueryHookResult

> **GetInterestsStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsStreamLazyQuery`](readme.md#usegetinterestsstreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2386](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2386)

***

### GetInterestsStreamQueryHookResult

> **GetInterestsStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsStreamQuery`](readme.md#usegetinterestsstreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2385](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2385)

***

### GetInterestsStreamQueryResult

> **GetInterestsStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsStreamQuery`, `Types.GetInterestsStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2388](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2388)

***

### GetInterestsStreamSuspenseQueryHookResult

> **GetInterestsStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsStreamSuspenseQuery`](readme.md#usegetinterestsstreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2387](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2387)

***

### GetInterestsSuspenseQueryHookResult

> **GetInterestsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsSuspenseQuery`](readme.md#usegetinterestssuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2315](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2315)

***

### GetMyProfileLazyQueryHookResult

> **GetMyProfileLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetMyProfileLazyQuery`](readme.md#usegetmyprofilelazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1952](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1952)

***

### GetMyProfileQueryHookResult

> **GetMyProfileQueryHookResult**: `ReturnType`\<*typeof* [`useGetMyProfileQuery`](readme.md#usegetmyprofilequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1951](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1951)

***

### GetMyProfileQueryResult

> **GetMyProfileQueryResult**: `Apollo.QueryResult`\<`Types.GetMyProfileQuery`, `Types.GetMyProfileQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1954](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1954)

***

### GetMyProfileSuspenseQueryHookResult

> **GetMyProfileSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetMyProfileSuspenseQuery`](readme.md#usegetmyprofilesuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1953](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1953)

***

### GetProfileByDidLazyQueryHookResult

> **GetProfileByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByDidLazyQuery`](readme.md#usegetprofilebydidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2113](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2113)

***

### GetProfileByDidQueryHookResult

> **GetProfileByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByDidQuery`](readme.md#usegetprofilebydidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2112](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2112)

***

### GetProfileByDidQueryResult

> **GetProfileByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileByDidQuery`, `Types.GetProfileByDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2115](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2115)

***

### GetProfileByDidSuspenseQueryHookResult

> **GetProfileByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByDidSuspenseQuery`](readme.md#usegetprofilebydidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2114](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2114)

***

### GetProfileByIdLazyQueryHookResult

> **GetProfileByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByIdLazyQuery`](readme.md#usegetprofilebyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2068](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2068)

***

### GetProfileByIdQueryHookResult

> **GetProfileByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByIdQuery`](readme.md#usegetprofilebyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2067](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2067)

***

### GetProfileByIdQueryResult

> **GetProfileByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileByIdQuery`, `Types.GetProfileByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2070](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2070)

***

### GetProfileByIdSuspenseQueryHookResult

> **GetProfileByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByIdSuspenseQuery`](readme.md#usegetprofilebyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2069](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2069)

***

### GetProfileStatsByDidLazyQueryHookResult

> **GetProfileStatsByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStatsByDidLazyQuery`](readme.md#usegetprofilestatsbydidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2692](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2692)

***

### GetProfileStatsByDidQueryHookResult

> **GetProfileStatsByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStatsByDidQuery`](readme.md#usegetprofilestatsbydidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2691](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2691)

***

### GetProfileStatsByDidQueryResult

> **GetProfileStatsByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileStatsByDidQuery`, `Types.GetProfileStatsByDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2694](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2694)

***

### GetProfileStatsByDidSuspenseQueryHookResult

> **GetProfileStatsByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStatsByDidSuspenseQuery`](readme.md#usegetprofilestatsbydidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2693](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2693)

***

### GetProfileStreamLazyQueryHookResult

> **GetProfileStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStreamLazyQuery`](readme.md#usegetprofilestreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2248](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2248)

***

### GetProfileStreamQueryHookResult

> **GetProfileStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStreamQuery`](readme.md#usegetprofilestreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2247](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2247)

***

### GetProfileStreamQueryResult

> **GetProfileStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileStreamQuery`, `Types.GetProfileStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2250](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2250)

***

### GetProfileStreamSuspenseQueryHookResult

> **GetProfileStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStreamSuspenseQuery`](readme.md#usegetprofilestreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2249](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2249)

***

### GetProfilesLazyQueryHookResult

> **GetProfilesLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfilesLazyQuery`](readme.md#usegetprofileslazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2176](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2176)

***

### GetProfilesQueryHookResult

> **GetProfilesQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfilesQuery`](readme.md#usegetprofilesquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2175](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2175)

***

### GetProfilesQueryResult

> **GetProfilesQueryResult**: `Apollo.QueryResult`\<`Types.GetProfilesQuery`, `Types.GetProfilesQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2178](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2178)

***

### GetProfilesSuspenseQueryHookResult

> **GetProfilesSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfilesSuspenseQuery`](readme.md#usegetprofilessuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2177](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2177)

***

### GetReflectReflectionsLazyQueryHookResult

> **GetReflectReflectionsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectReflectionsLazyQuery`](readme.md#usegetreflectreflectionslazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1633](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1633)

***

### GetReflectReflectionsQueryHookResult

> **GetReflectReflectionsQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectReflectionsQuery`](readme.md#usegetreflectreflectionsquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1632](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1632)

***

### GetReflectReflectionsQueryResult

> **GetReflectReflectionsQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectReflectionsQuery`, `Types.GetReflectReflectionsQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1635](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1635)

***

### GetReflectReflectionsSuspenseQueryHookResult

> **GetReflectReflectionsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectReflectionsSuspenseQuery`](readme.md#usegetreflectreflectionssuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1634](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1634)

***

### GetReflectionByIdLazyQueryHookResult

> **GetReflectionByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionByIdLazyQuery`](readme.md#usegetreflectionbyidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1570](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1570)

***

### GetReflectionByIdQueryHookResult

> **GetReflectionByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionByIdQuery`](readme.md#usegetreflectionbyidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1569](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1569)

***

### GetReflectionByIdQueryResult

> **GetReflectionByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionByIdQuery`, `Types.GetReflectionByIdQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1572](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1572)

***

### GetReflectionByIdSuspenseQueryHookResult

> **GetReflectionByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionByIdSuspenseQuery`](readme.md#usegetreflectionbyidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1571](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1571)

***

### GetReflectionStreamLazyQueryHookResult

> **GetReflectionStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionStreamLazyQuery`](readme.md#usegetreflectionstreamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1528](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1528)

***

### GetReflectionStreamQueryHookResult

> **GetReflectionStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionStreamQuery`](readme.md#usegetreflectionstreamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1527](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1527)

***

### GetReflectionStreamQueryResult

> **GetReflectionStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionStreamQuery`, `Types.GetReflectionStreamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1530](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1530)

***

### GetReflectionStreamSuspenseQueryHookResult

> **GetReflectionStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionStreamSuspenseQuery`](readme.md#usegetreflectionstreamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1529](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1529)

***

### GetReflectionsByAuthorDidLazyQueryHookResult

> **GetReflectionsByAuthorDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsByAuthorDidLazyQuery`](readme.md#usegetreflectionsbyauthordidlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1452](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1452)

***

### GetReflectionsByAuthorDidQueryHookResult

> **GetReflectionsByAuthorDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsByAuthorDidQuery`](readme.md#usegetreflectionsbyauthordidquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1451](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1451)

***

### GetReflectionsByAuthorDidQueryResult

> **GetReflectionsByAuthorDidQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionsByAuthorDidQuery`, `Types.GetReflectionsByAuthorDidQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1454](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1454)

***

### GetReflectionsByAuthorDidSuspenseQueryHookResult

> **GetReflectionsByAuthorDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsByAuthorDidSuspenseQuery`](readme.md#usegetreflectionsbyauthordidsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1453](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1453)

***

### GetReflectionsFromBeamLazyQueryHookResult

> **GetReflectionsFromBeamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsFromBeamLazyQuery`](readme.md#usegetreflectionsfrombeamlazyquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1383](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1383)

***

### GetReflectionsFromBeamQueryHookResult

> **GetReflectionsFromBeamQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsFromBeamQuery`](readme.md#usegetreflectionsfrombeamquery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1382](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1382)

***

### GetReflectionsFromBeamQueryResult

> **GetReflectionsFromBeamQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionsFromBeamQuery`, `Types.GetReflectionsFromBeamQueryVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1385](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1385)

***

### GetReflectionsFromBeamSuspenseQueryHookResult

> **GetReflectionsFromBeamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsFromBeamSuspenseQuery`](readme.md#usegetreflectionsfrombeamsuspensequery)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1384](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1384)

***

### IndexBeamMutationFn

> **IndexBeamMutationFn**: `Apollo.MutationFunction`\<`Types.IndexBeamMutation`, `Types.IndexBeamMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:475](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L475)

***

### IndexBeamMutationHookResult

> **IndexBeamMutationHookResult**: `ReturnType`\<*typeof* [`useIndexBeamMutation`](readme.md#useindexbeammutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:499](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L499)

***

### IndexBeamMutationOptions

> **IndexBeamMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexBeamMutation`, `Types.IndexBeamMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:501](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L501)

***

### IndexBeamMutationResult

> **IndexBeamMutationResult**: `Apollo.MutationResult`\<`Types.IndexBeamMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:500](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L500)

***

### IndexContentBlockMutationFn

> **IndexContentBlockMutationFn**: `Apollo.MutationFunction`\<`Types.IndexContentBlockMutation`, `Types.IndexContentBlockMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:511](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L511)

***

### IndexContentBlockMutationHookResult

> **IndexContentBlockMutationHookResult**: `ReturnType`\<*typeof* [`useIndexContentBlockMutation`](readme.md#useindexcontentblockmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:535](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L535)

***

### IndexContentBlockMutationOptions

> **IndexContentBlockMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexContentBlockMutation`, `Types.IndexContentBlockMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:537](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L537)

***

### IndexContentBlockMutationResult

> **IndexContentBlockMutationResult**: `Apollo.MutationResult`\<`Types.IndexContentBlockMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:536](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L536)

***

### IndexProfileMutationFn

> **IndexProfileMutationFn**: `Apollo.MutationFunction`\<`Types.IndexProfileMutation`, `Types.IndexProfileMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1645](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1645)

***

### IndexProfileMutationHookResult

> **IndexProfileMutationHookResult**: `ReturnType`\<*typeof* [`useIndexProfileMutation`](readme.md#useindexprofilemutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1669](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1669)

***

### IndexProfileMutationOptions

> **IndexProfileMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexProfileMutation`, `Types.IndexProfileMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1671](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1671)

***

### IndexProfileMutationResult

> **IndexProfileMutationResult**: `Apollo.MutationResult`\<`Types.IndexProfileMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1670](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1670)

***

### IndexReflectionMutationFn

> **IndexReflectionMutationFn**: `Apollo.MutationFunction`\<`Types.IndexReflectionMutation`, `Types.IndexReflectionMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1218](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1218)

***

### IndexReflectionMutationHookResult

> **IndexReflectionMutationHookResult**: `ReturnType`\<*typeof* [`useIndexReflectionMutation`](readme.md#useindexreflectionmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1242](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1242)

***

### IndexReflectionMutationOptions

> **IndexReflectionMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexReflectionMutation`, `Types.IndexReflectionMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1244](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1244)

***

### IndexReflectionMutationResult

> **IndexReflectionMutationResult**: `Apollo.MutationResult`\<`Types.IndexReflectionMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1243](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1243)

***

### SetAppReleaseMutationFn

> **SetAppReleaseMutationFn**: `Apollo.MutationFunction`\<`Types.SetAppReleaseMutation`, `Types.SetAppReleaseMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2707](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2707)

***

### SetAppReleaseMutationHookResult

> **SetAppReleaseMutationHookResult**: `ReturnType`\<*typeof* [`useSetAppReleaseMutation`](readme.md#usesetappreleasemutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2730](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2730)

***

### SetAppReleaseMutationOptions

> **SetAppReleaseMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.SetAppReleaseMutation`, `Types.SetAppReleaseMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2732](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2732)

***

### SetAppReleaseMutationResult

> **SetAppReleaseMutationResult**: `Apollo.MutationResult`\<`Types.SetAppReleaseMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2731](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2731)

***

### UpdateAkashaReflectMutationFn

> **UpdateAkashaReflectMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateAkashaReflectMutation`, `Types.UpdateAkashaReflectMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1291](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1291)

***

### UpdateAkashaReflectMutationHookResult

> **UpdateAkashaReflectMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateAkashaReflectMutation`](readme.md#useupdateakashareflectmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1314](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1314)

***

### UpdateAkashaReflectMutationOptions

> **UpdateAkashaReflectMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateAkashaReflectMutation`, `Types.UpdateAkashaReflectMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1316](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1316)

***

### UpdateAkashaReflectMutationResult

> **UpdateAkashaReflectMutationResult**: `Apollo.MutationResult`\<`Types.UpdateAkashaReflectMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1315](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1315)

***

### UpdateAppMutationFn

> **UpdateAppMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateAppMutation`, `Types.UpdateAppMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2819](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2819)

***

### UpdateAppMutationHookResult

> **UpdateAppMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateAppMutation`](readme.md#useupdateappmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2842](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2842)

***

### UpdateAppMutationOptions

> **UpdateAppMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateAppMutation`, `Types.UpdateAppMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2844](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2844)

***

### UpdateAppMutationResult

> **UpdateAppMutationResult**: `Apollo.MutationResult`\<`Types.UpdateAppMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2843](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2843)

***

### UpdateAppReleaseMutationFn

> **UpdateAppReleaseMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateAppReleaseMutation`, `Types.UpdateAppReleaseMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2745](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2745)

***

### UpdateAppReleaseMutationHookResult

> **UpdateAppReleaseMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateAppReleaseMutation`](readme.md#useupdateappreleasemutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:2768](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2768)

***

### UpdateAppReleaseMutationOptions

> **UpdateAppReleaseMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateAppReleaseMutation`, `Types.UpdateAppReleaseMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2770](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2770)

***

### UpdateAppReleaseMutationResult

> **UpdateAppReleaseMutationResult**: `Apollo.MutationResult`\<`Types.UpdateAppReleaseMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:2769](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2769)

***

### UpdateBeamMutationFn

> **UpdateBeamMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateBeamMutation`, `Types.UpdateBeamMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:584](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L584)

***

### UpdateBeamMutationHookResult

> **UpdateBeamMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateBeamMutation`](readme.md#useupdatebeammutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:607](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L607)

***

### UpdateBeamMutationOptions

> **UpdateBeamMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateBeamMutation`, `Types.UpdateBeamMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:609](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L609)

***

### UpdateBeamMutationResult

> **UpdateBeamMutationResult**: `Apollo.MutationResult`\<`Types.UpdateBeamMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:608](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L608)

***

### UpdateContentBlockMutationFn

> **UpdateContentBlockMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateContentBlockMutation`, `Types.UpdateContentBlockMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:656](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L656)

***

### UpdateContentBlockMutationHookResult

> **UpdateContentBlockMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateContentBlockMutation`](readme.md#useupdatecontentblockmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:679](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L679)

***

### UpdateContentBlockMutationOptions

> **UpdateContentBlockMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateContentBlockMutation`, `Types.UpdateContentBlockMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:681](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L681)

***

### UpdateContentBlockMutationResult

> **UpdateContentBlockMutationResult**: `Apollo.MutationResult`\<`Types.UpdateContentBlockMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:680](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L680)

***

### UpdateFollowMutationFn

> **UpdateFollowMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateFollowMutation`, `Types.UpdateFollowMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1888](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1888)

***

### UpdateFollowMutationHookResult

> **UpdateFollowMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateFollowMutation`](readme.md#useupdatefollowmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1911](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1911)

***

### UpdateFollowMutationOptions

> **UpdateFollowMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateFollowMutation`, `Types.UpdateFollowMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1913](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1913)

***

### UpdateFollowMutationResult

> **UpdateFollowMutationResult**: `Apollo.MutationResult`\<`Types.UpdateFollowMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1912](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1912)

***

### UpdateInterestsMutationFn

> **UpdateInterestsMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateInterestsMutation`, `Types.UpdateInterestsMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1804](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1804)

***

### UpdateInterestsMutationHookResult

> **UpdateInterestsMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateInterestsMutation`](readme.md#useupdateinterestsmutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1827](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1827)

***

### UpdateInterestsMutationOptions

> **UpdateInterestsMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateInterestsMutation`, `Types.UpdateInterestsMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1829](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1829)

***

### UpdateInterestsMutationResult

> **UpdateInterestsMutationResult**: `Apollo.MutationResult`\<`Types.UpdateInterestsMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1828](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1828)

***

### UpdateProfileMutationFn

> **UpdateProfileMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateProfileMutation`, `Types.UpdateProfileMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1718](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1718)

***

### UpdateProfileMutationHookResult

> **UpdateProfileMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateProfileMutation`](readme.md#useupdateprofilemutation)\>

#### Source

[libs/hooks/src/generated/apollo.ts:1741](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1741)

***

### UpdateProfileMutationOptions

> **UpdateProfileMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateProfileMutation`, `Types.UpdateProfileMutationVariables`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1743](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1743)

***

### UpdateProfileMutationResult

> **UpdateProfileMutationResult**: `Apollo.MutationResult`\<`Types.UpdateProfileMutation`\>

#### Source

[libs/hooks/src/generated/apollo.ts:1742](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1742)

## Variables

### AkashaAppFragmentDoc

> `const` **AkashaAppFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:401](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L401)

***

### AkashaAppFragmentMFragmentDoc

> `const` **AkashaAppFragmentMFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:303](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L303)

***

### AppReleaseFragmentDoc

> `const` **AppReleaseFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:454](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L454)

***

### AppReleaseFragmentMFragmentDoc

> `const` **AppReleaseFragmentMFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:340](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L340)

***

### BeamFragmentDoc

> `const` **BeamFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:83](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L83)

***

### BeamFragmentMFragmentDoc

> `const` **BeamFragmentMFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:16](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L16)

***

### BlockStorageFragmentDoc

> `const` **BlockStorageFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:153](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L153)

***

### COOKIE\_CONSENT\_NAME

`Internal`

> `const` **COOKIE\_CONSENT\_NAME**: `"ewa-cookie-consent"` = `'ewa-cookie-consent'`

#### Source

[libs/hooks/src/use-analytics.tsx:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L12)

***

### ContentBlockFragmentDoc

> `const` **ContentBlockFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:123](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L123)

***

### ContentBlockFragmentMFragmentDoc

> `const` **ContentBlockFragmentMFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:53](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L53)

***

### CreateAppDocument

> `const` **CreateAppDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2771](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2771)

***

### CreateBeamDocument

> `const` **CreateBeamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:538](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L538)

***

### CreateContentBlockDocument

> `const` **CreateContentBlockDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:610](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L610)

***

### CreateFollowDocument

> `const` **CreateFollowDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1830](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1830)

***

### CreateInterestsDocument

> `const` **CreateInterestsDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1744](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1744)

***

### CreateProfileDocument

> `const` **CreateProfileDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1672](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1672)

***

### CreateReflectDocument

> `const` **CreateReflectDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1245](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1245)

***

### GetAppReleaseByIdDocument

> `const` **GetAppReleaseByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:3228](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3228)

***

### GetAppsByIdDocument

> `const` **GetAppsByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2981](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2981)

***

### GetAppsByPublisherDidDocument

> `const` **GetAppsByPublisherDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:3024](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3024)

***

### GetAppsDocument

> `const` **GetAppsDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2845](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2845)

***

### GetAppsReleasesByPublisherDidDocument

> `const` **GetAppsReleasesByPublisherDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:3093](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3093)

***

### GetAppsReleasesDocument

> `const` **GetAppsReleasesDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:3163](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3163)

***

### GetAppsStreamDocument

> `const` **GetAppsStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2909](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2909)

***

### GetBeamByIdDocument

> `const` **GetBeamByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:888](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L888)

***

### GetBeamStreamDocument

> `const` **GetBeamStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:682](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L682)

***

### GetBeamsByAuthorDidDocument

> `const` **GetBeamsByAuthorDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:818](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L818)

***

### GetBeamsDocument

> `const` **GetBeamsDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:755](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L755)

***

### GetBlockStorageByIdDocument

> `const` **GetBlockStorageByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1046](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1046)

***

### GetContentBlockByIdDocument

> `const` **GetContentBlockByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1004](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1004)

***

### GetContentBlockStreamDocument

> `const` **GetContentBlockStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:930](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L930)

***

### GetFollowDocumentsByDidDocument

> `const` **GetFollowDocumentsByDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1955](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1955)

***

### GetFollowersListByDidDocument

> `const` **GetFollowersListByDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2566](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2566)

***

### GetFollowingListByDidDocument

> `const` **GetFollowingListByDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2490](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2490)

***

### GetIndexedStreamCountDocument

> `const` **GetIndexedStreamCountDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1165](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1165)

***

### GetIndexedStreamDocument

> `const` **GetIndexedStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1088](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1088)

***

### GetInterestsByDidDocument

> `const` **GetInterestsByDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2389](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2389)

***

### GetInterestsByIdDocument

> `const` **GetInterestsByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2441](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2441)

***

### GetInterestsDocument

> `const` **GetInterestsDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2251](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2251)

***

### GetInterestsStreamDocument

> `const` **GetInterestsStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2317](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2317)

***

### GetMyProfileDocument

> `const` **GetMyProfileDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1914](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1914)

***

### GetProfileByDidDocument

> `const` **GetProfileByDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2071](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2071)

***

### GetProfileByIdDocument

> `const` **GetProfileByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2029](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2029)

***

### GetProfileStatsByDidDocument

> `const` **GetProfileStatsByDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2646](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2646)

***

### GetProfileStreamDocument

> `const` **GetProfileStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2179](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2179)

***

### GetProfilesDocument

> `const` **GetProfilesDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2116](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2116)

***

### GetReflectReflectionsDocument

> `const` **GetReflectReflectionsDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1573](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1573)

***

### GetReflectionByIdDocument

> `const` **GetReflectionByIdDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1531](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1531)

***

### GetReflectionStreamDocument

> `const` **GetReflectionStreamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1455](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1455)

***

### GetReflectionsByAuthorDidDocument

> `const` **GetReflectionsByAuthorDidDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1386](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1386)

***

### GetReflectionsFromBeamDocument

> `const` **GetReflectionsFromBeamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1317](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1317)

***

### IndexBeamDocument

> `const` **IndexBeamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:466](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L466)

***

### IndexContentBlockDocument

> `const` **IndexContentBlockDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:502](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L502)

***

### IndexProfileDocument

> `const` **IndexProfileDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1636](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1636)

***

### IndexReflectionDocument

> `const` **IndexReflectionDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1209](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1209)

***

### IndexedBeamFragmentDoc

> `const` **IndexedBeamFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:6](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L6)

***

### IndexedContentBlockFragmentDoc

> `const` **IndexedContentBlockFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:11](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L11)

***

### IndexedProfileFragmentDoc

> `const` **IndexedProfileFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:249](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L249)

***

### IndexedReflectFragmentDoc

> `const` **IndexedReflectFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:190](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L190)

***

### ReflectFragmentDoc

> `const` **ReflectFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:222](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L222)

***

### ReflectFragmentMFragmentDoc

> `const` **ReflectFragmentMFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:195](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L195)

***

### SetAppReleaseDocument

> `const` **SetAppReleaseDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2695](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2695)

***

### UpdateAkashaReflectDocument

> `const` **UpdateAkashaReflectDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1281](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1281)

***

### UpdateAppDocument

> `const` **UpdateAppDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2808](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2808)

***

### UpdateAppReleaseDocument

> `const` **UpdateAppReleaseDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:2733](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2733)

***

### UpdateBeamDocument

> `const` **UpdateBeamDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:574](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L574)

***

### UpdateContentBlockDocument

> `const` **UpdateContentBlockDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:646](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L646)

***

### UpdateFollowDocument

> `const` **UpdateFollowDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1872](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1872)

***

### UpdateInterestsDocument

> `const` **UpdateInterestsDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1787](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1787)

***

### UpdateProfileDocument

> `const` **UpdateProfileDocument**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:1708](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1708)

***

### UserProfileFragmentDoc

> `const` **UserProfileFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:352](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L352)

***

### UserProfileFragmentMFragmentDoc

> `const` **UserProfileFragmentMFragmentDoc**: `DocumentNode`

#### Source

[libs/hooks/src/generated/apollo.ts:254](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L254)

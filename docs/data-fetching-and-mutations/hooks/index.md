# Hooks

## Functions

### AnalyticsProvider()

> **AnalyticsProvider**(`__namedParameters`): `Element`

Defined in: [libs/hooks/src/use-analytics.tsx:24](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `children`: `ReactNode`; `uiEvents`: `Subject`\<`UIEventData`\>; \} |
| `__namedParameters.children`? | `ReactNode` |
| `__namedParameters.uiEvents` | `Subject`\<`UIEventData`\> |

#### Returns

`Element`

***

### createReactiveVar()

> **createReactiveVar**\<`T`\>(`initialState`): `ReactiveVar`\<`T`\>

Defined in: [libs/hooks/src/utils/create-reactive-var.ts:3](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/create-reactive-var.ts#L3)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initialState` | `T` |

#### Returns

`ReactiveVar`\<`T`\>

***

### decodeb64SlateContent()

> **decodeb64SlateContent**(`base64Content`, `logger`?): `any`

Defined in: [libs/hooks/src/utils/entry-utils.ts:14](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L14)

Utility to decode base64 slate content

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `base64Content` | `string` |
| `logger`? | `Logger` |

#### Returns

`any`

***

### encodeSlateToBase64()

> **encodeSlateToBase64**(`slateContent`): `string`

Defined in: [libs/hooks/src/utils/entry-utils.ts:30](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L30)

Utility to encode slate content to base64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `slateContent` | `Descendant`[] |

#### Returns

`string`

***

### filterEvent()

> **filterEvent**(`eventType`): `MonoTypeOperatorFunction`\<`Extract`\<`UIEventData`, \{ `event`: *typeof* [`eventType`](index.md#eventtype); \}\>\>

Defined in: [libs/hooks/src/utils/event-utils.ts:5](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/event-utils.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventType` | `AnalyticsEventTypes` \| `EventTypes` \| `ContentBlockEvents` \| `ExtensionEvents` \| `WidgetEvents` \| `AppEvents` \| `RouteRegistrationEvents` \| `ThemingEvents` \| `NotificationEvents` |

#### Returns

`MonoTypeOperatorFunction`\<`Extract`\<`UIEventData`, \{ `event`: *typeof* [`eventType`](index.md#eventtype); \}\>\>

***

### filterEvents()

> **filterEvents**(`eventTypes`): `MonoTypeOperatorFunction`\<`UIEventData`\>

Defined in: [libs/hooks/src/utils/event-utils.ts:18](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/event-utils.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventTypes` | (`AnalyticsEventTypes` \| `EventTypes` \| `ContentBlockEvents` \| `ExtensionEvents` \| `WidgetEvents` \| `AppEvents` \| `RouteRegistrationEvents` \| `ThemingEvents` \| `NotificationEvents`)[] |

#### Returns

`MonoTypeOperatorFunction`\<`UIEventData`\>

***

### getFollowList()

> **getFollowList**(`followDocuments`): `FollowList`

Defined in: [libs/hooks/src/utils/getFollowList.ts:3](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/getFollowList.ts#L3)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `followDocuments` | `AkashaFollowDocument`[] |

#### Returns

`FollowList`

***

### getLinkPreview()

> **getLinkPreview**(): `Promise`\<`any`\>

Defined in: [libs/hooks/src/utils/media-utils.ts:49](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L49)

Utility to get preview of a specified url

#### Returns

`Promise`\<`any`\>

***

### getMediaUrl()

> **getMediaUrl**(`hash`?): `object`

Defined in: [libs/hooks/src/utils/media-utils.ts:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L19)

Utility to build gateway links to ipfs content

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash`? | `string` |

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fallbacklink"></a> `fallbackLink` | `string` | [libs/hooks/src/utils/media-utils.ts:24](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L24) |
| <a id="originlink"></a> `originLink` | `string` | [libs/hooks/src/utils/media-utils.ts:23](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L23) |
| <a id="pathlink"></a> `pathLink` | `string` | [libs/hooks/src/utils/media-utils.ts:25](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L25) |

***

### hasOwn()

> **hasOwn**\<`T`, `K`\>(`o`, `v`): o is K extends KeyofUnion\<T\> ? ExtractByKey\<T, K\<K\>\> : T & \{ \[P in string \| number \| symbol\]: unknown \}

Defined in: [libs/hooks/src/utils/has-own.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/has-own.ts#L10)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`\<`string` \| `number` \| `symbol`, `any`\> |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | `T` |
| `v` | `K` |

#### Returns

o is K extends KeyofUnion\<T\> ? ExtractByKey\<T, K\<K\>\> : T & \{ \[P in string \| number \| symbol\]: unknown \}

***

### mapBeamEntryData()

> **mapBeamEntryData**(`beam`?): `BeamData`

Defined in: [libs/hooks/src/utils/entry-utils.ts:77](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L77)

Utility to map beam entry data

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `beam`? | `RawBeamData` |

#### Returns

`BeamData`

***

### mapReflectEntryData()

> **mapReflectEntryData**(`reflection`?): `ReflectionData`

Defined in: [libs/hooks/src/utils/entry-utils.ts:60](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/entry-utils.ts#L60)

Utility to map reflect entry data

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reflection`? | `RawReflectionData` |

#### Returns

`ReflectionData`

***

### RootComponentPropsProvider()

> **RootComponentPropsProvider**(`__namedParameters`): `Element`

Defined in: [libs/hooks/src/use-root-props.tsx:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-root-props.tsx#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `IRootComponentProps` \| `IRootExtensionProps` |

#### Returns

`Element`

***

### saveMediaFile()

> **saveMediaFile**(`__namedParameters`): `Promise`\<\{ `blob`: `Blob`; `CID`: `string`; `size`: \{ `height`: `number`; `naturalHeight`: `number`; `naturalWidth`: `number`; `width`: `number`; \}; \}\>

Defined in: [libs/hooks/src/utils/media-utils.ts:82](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L82)

Utility to save media file

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `ISaveMediaFile` |

#### Returns

`Promise`\<\{ `blob`: `Blob`; `CID`: `string`; `size`: \{ `height`: `number`; `naturalHeight`: `number`; `naturalWidth`: `number`; `width`: `number`; \}; \}\>

***

### sortByKey()

> **sortByKey**\<`T`\>(`array`, `key`): `T`[]

Defined in: [libs/hooks/src/utils/sort-by-key.ts:1](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/sort-by-key.ts#L1)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | `T`[] |
| `key` | `string` |

#### Returns

`T`[]

***

### switchToRequiredNetwork()

> **switchToRequiredNetwork**(): `Promise`\<`void`\>

Defined in: [libs/hooks/src/use-network-state.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L10)

A utility function to switch to required network for supported wallets

#### Returns

`Promise`\<`void`\>

***

### transformSource()

> **transformSource**(`image`?): `Image`

Defined in: [libs/hooks/src/utils/media-utils.ts:99](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L99)

Utility to transform source

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `image`? | `Image` |

#### Returns

`Image`

***

### useAccordion()

> **useAccordion**(): `object`

Defined in: [libs/hooks/src/use-accordion.ts:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-accordion.ts#L12)

Hook to manipulate the state of the Accordion component.

#### Returns

`object`

- Object containing the active accordion ID, and
methods for handling click events and setting an active ID.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="activeaccordionid"></a> `activeAccordionId` | `string` | [libs/hooks/src/use-accordion.ts:26](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-accordion.ts#L26) |
| <a id="handleaccordionclick"></a> `handleAccordionClick` | (`accordionId`) => `void` | [libs/hooks/src/use-accordion.ts:26](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-accordion.ts#L26) |
| <a id="setactiveaccordionid"></a> `setActiveAccordionId` | `Dispatch`\<`SetStateAction`\<`string`\>\> | [libs/hooks/src/use-accordion.ts:26](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-accordion.ts#L26) |

#### Example

```typescript
 const { activeAccordionId, setActiveAccordionId, handleAccordionClick } = useAccordion();
```

***

### useAkashaStore()

> **useAkashaStore**(): `object`

Defined in: [libs/hooks/src/store/use-akasha-store.ts:5](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/use-akasha-store.ts#L5)

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `IUserState`\<`AkashaProfile`\> | [libs/hooks/src/store/use-akasha-store.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/use-akasha-store.ts#L10) |
| <a id="userstore"></a> `userStore` | `IUserStore`\<`AkashaProfile`\> | [libs/hooks/src/store/use-akasha-store.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/use-akasha-store.ts#L10) |

***

### useAnalytics()

> **useAnalytics**(): \[[`UseAnalyticsActions`](index.md#useanalyticsactions)\]

Defined in: [libs/hooks/src/use-analytics.tsx:54](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L54)

Hook to handle analytics

#### Returns

\[[`UseAnalyticsActions`](index.md#useanalyticsactions)\]

#### Example

```typescript
const [analyticsActions] = useAnalytics();

analyticsActions.trackEvent({
category: 'some-category',
action: 'some-action',
});
```

***

### useConnectWallet()

> **useConnectWallet**(): `object`

Defined in: [libs/hooks/src/use-connect-wallet.ts:15](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L15)

Hook for connecting to a user's wallet (through Metamask or any other compatible applications)

#### Returns

`object`

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="connect"></a> `connect` | () => `void` | - | [libs/hooks/src/use-connect-wallet.ts:52](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L52) |
| <a id="data-1"></a> `data` | `string` | - | [libs/hooks/src/use-connect-wallet.ts:52](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L52) |
| <a id="error"></a> `error` | `Error` | - | [libs/hooks/src/use-connect-wallet.ts:52](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L52) |
| <a id="iserror"></a> `isError` | `boolean` | !!error | [libs/hooks/src/use-connect-wallet.ts:52](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L52) |
| <a id="isloading"></a> `isLoading` | `boolean` | - | [libs/hooks/src/use-connect-wallet.ts:52](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L52) |
| <a id="issuccess"></a> `isSuccess` | `boolean` | !!data | [libs/hooks/src/use-connect-wallet.ts:52](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-connect-wallet.ts#L52) |

#### Example

```typescript
const connectWalletCall = useConnectWallet();
 // make the call to the connect function when appropriate:
connectWalletCall.connect();
```

***

### useCreateAppMutation()

> **useCreateAppMutation**(`baseOptions`?): `MutationTuple`\<`CreateAppMutation`, `Exact`\<\{ `i`: `SetAkashaAppInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2801](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2801)

__useCreateAppMutation__

To run a mutation, you first call `useCreateAppMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateAppMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateAppMutation`, `Exact`\<\{ `i`: `SetAkashaAppInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateAppMutation`, `Exact`\<\{ `i`: `SetAkashaAppInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createAppMutation, { data, loading, error }] = useCreateAppMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCreateBeamMutation()

> **useCreateBeamMutation**(`baseOptions`?): `MutationTuple`\<`CreateBeamMutation`, `Exact`\<\{ `i`: `CreateAkashaBeamInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:567](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L567)

__useCreateBeamMutation__

To run a mutation, you first call `useCreateBeamMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateBeamMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateBeamMutation`, `Exact`\<\{ `i`: `CreateAkashaBeamInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateBeamMutation`, `Exact`\<\{ `i`: `CreateAkashaBeamInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createBeamMutation, { data, loading, error }] = useCreateBeamMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCreateContentBlockMutation()

> **useCreateContentBlockMutation**(`baseOptions`?): `MutationTuple`\<`CreateContentBlockMutation`, `Exact`\<\{ `i`: `CreateAkashaContentBlockInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:639](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L639)

__useCreateContentBlockMutation__

To run a mutation, you first call `useCreateContentBlockMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateContentBlockMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateContentBlockMutation`, `Exact`\<\{ `i`: `CreateAkashaContentBlockInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateContentBlockMutation`, `Exact`\<\{ `i`: `CreateAkashaContentBlockInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createContentBlockMutation, { data, loading, error }] = useCreateContentBlockMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCreateFollowMutation()

> **useCreateFollowMutation**(`baseOptions`?): `MutationTuple`\<`CreateFollowMutation`, `Exact`\<\{ `i`: `SetAkashaFollowInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1865](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1865)

__useCreateFollowMutation__

To run a mutation, you first call `useCreateFollowMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateFollowMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateFollowMutation`, `Exact`\<\{ `i`: `SetAkashaFollowInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateFollowMutation`, `Exact`\<\{ `i`: `SetAkashaFollowInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createFollowMutation, { data, loading, error }] = useCreateFollowMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCreateInterestsMutation()

> **useCreateInterestsMutation**(`baseOptions`?): `MutationTuple`\<`CreateInterestsMutation`, `Exact`\<\{ `i`: `CreateAkashaProfileInterestsInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1780](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1780)

__useCreateInterestsMutation__

To run a mutation, you first call `useCreateInterestsMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateInterestsMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateInterestsMutation`, `Exact`\<\{ `i`: `CreateAkashaProfileInterestsInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateInterestsMutation`, `Exact`\<\{ `i`: `CreateAkashaProfileInterestsInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createInterestsMutation, { data, loading, error }] = useCreateInterestsMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCreateProfileMutation()

> **useCreateProfileMutation**(`baseOptions`?): `MutationTuple`\<`CreateProfileMutation`, `Exact`\<\{ `i`: `CreateAkashaProfileInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1701](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1701)

__useCreateProfileMutation__

To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateProfileMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateProfileMutation`, `Exact`\<\{ `i`: `CreateAkashaProfileInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateProfileMutation`, `Exact`\<\{ `i`: `CreateAkashaProfileInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCreateReflectMutation()

> **useCreateReflectMutation**(`baseOptions`?): `MutationTuple`\<`CreateReflectMutation`, `Exact`\<\{ `i`: `CreateAkashaReflectInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1274](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1274)

__useCreateReflectMutation__

To run a mutation, you first call `useCreateReflectMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useCreateReflectMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`CreateReflectMutation`, `Exact`\<\{ `i`: `CreateAkashaReflectInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`CreateReflectMutation`, `Exact`\<\{ `i`: `CreateAkashaReflectInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [createReflectMutation, { data, loading, error }] = useCreateReflectMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useCurrentNetwork()

> **useCurrentNetwork**(`enabler`?): `object`

Defined in: [libs/hooks/src/use-network-state.ts:86](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L86)

Hook to check the user's current web3 network

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `enabler`? | `boolean` |

#### Returns

`object`

network name

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data-2"></a> `data` | `string` | [libs/hooks/src/use-network-state.ts:111](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L111) |
| <a id="error-1"></a> `error` | `Error` | [libs/hooks/src/use-network-state.ts:111](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L111) |
| <a id="isloading-1"></a> `isLoading` | `boolean` | [libs/hooks/src/use-network-state.ts:111](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L111) |

#### Example

```typescript
const currentNetworkQuery = useCurrentNetwork(true);

const network = currentNetworkQuery.data;
```

***

### useDismissedCard()

> **useDismissedCard**(`id`, `statusStorage`?): \[`boolean`, () => `void`\]

Defined in: [libs/hooks/src/use-dismissed-card.ts:25](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-dismissed-card.ts#L25)

Hook to manage the information cards displayed in the sidebar or inside
the apps which users can dismiss by clicking the close button.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | string |
| `statusStorage`? | `IStorage` | IStorage (optional) to specify from which storage to retrieve the saved dismissed card IDs. |

#### Returns

\[`boolean`, () => `void`\]

#### Example

```typescript
const [dismissed, dismissCard] = useDismissedCard('@akashaorg/ui-widget-sidebar_cta-card');
```

***

### useEntryNavigation()

> **useEntryNavigation**(`navigateFn`?, `currentBeamId`?): (`navigationDetails`, `itemType`) => `void`

Defined in: [libs/hooks/src/use-navigation.ts:14](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-navigation.ts#L14)

Hook to navigation to entry's page

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `navigateFn`? | (`args`) => `void` | function (optional) that can control the actual navigation. |
| `currentBeamId`? | `string` | string (optional) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `navigationDetails` | `IContentClickDetails` |
| `itemType` | `EntityTypes` |

##### Returns

`void`

#### Example

```typescript
// navigateTo is a function extracted from the `useRootComponentProps` hook.
const handleEntryNavigate = useEntryNavigation(navigateTo, 'current-beam-id');
```

***

### useGetAppReleaseByIdLazyQuery()

> **useGetAppReleaseByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3260](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3260)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetAppReleaseByIdQuery()

> **useGetAppReleaseByIdQuery**(`baseOptions`): `QueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3256](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3256)

__useGetAppReleaseByIdQuery__

To run a query within a React component, call `useGetAppReleaseByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppReleaseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetAppReleaseByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetAppReleaseByIdSuspenseQuery()

> **useGetAppReleaseByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3264](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3264)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppReleaseByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetAppsByIdLazyQuery()

> **useGetAppsByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3012](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3012)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetAppsByIdQuery()

> **useGetAppsByIdQuery**(`baseOptions`): `QueryResult`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3008](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3008)

__useGetAppsByIdQuery__

To run a query within a React component, call `useGetAppsByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetAppsByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetAppsByIdSuspenseQuery()

> **useGetAppsByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3016](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3016)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetAppsByPublisherDidLazyQuery()

> **useGetAppsByPublisherDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3081](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3081)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

***

### useGetAppsByPublisherDidQuery()

> **useGetAppsByPublisherDidQuery**(`baseOptions`): `QueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3077](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3077)

__useGetAppsByPublisherDidQuery__

To run a query within a React component, call `useGetAppsByPublisherDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsByPublisherDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

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

***

### useGetAppsByPublisherDidSuspenseQuery()

> **useGetAppsByPublisherDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3085](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3085)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

***

### useGetAppsLazyQuery()

> **useGetAppsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2897](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2897)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

***

### useGetAppsQuery()

> **useGetAppsQuery**(`baseOptions`?): `QueryResult`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2893](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2893)

__useGetAppsQuery__

To run a query within a React component, call `useGetAppsQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `QueryHookOptions`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

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

***

### useGetAppsReleasesByPublisherDidLazyQuery()

> **useGetAppsReleasesByPublisherDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3151](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3151)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

***

### useGetAppsReleasesByPublisherDidQuery()

> **useGetAppsReleasesByPublisherDidQuery**(`baseOptions`): `QueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3147](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3147)

__useGetAppsReleasesByPublisherDidQuery__

To run a query within a React component, call `useGetAppsReleasesByPublisherDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsReleasesByPublisherDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

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

***

### useGetAppsReleasesByPublisherDidSuspenseQuery()

> **useGetAppsReleasesByPublisherDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3155](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3155)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsReleasesByPublisherDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

***

### useGetAppsReleasesLazyQuery()

> **useGetAppsReleasesLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3216](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3216)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

***

### useGetAppsReleasesQuery()

> **useGetAppsReleasesQuery**(`baseOptions`?): `QueryResult`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3212](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3212)

__useGetAppsReleasesQuery__

To run a query within a React component, call `useGetAppsReleasesQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsReleasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `QueryHookOptions`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

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

***

### useGetAppsReleasesSuspenseQuery()

> **useGetAppsReleasesSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:3220](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3220)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsReleasesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppReleaseFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppReleaseSortingInput`; \}\>\>

***

### useGetAppsStreamLazyQuery()

> **useGetAppsStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2969](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2969)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\>

***

### useGetAppsStreamQuery()

> **useGetAppsStreamQuery**(`baseOptions`): `QueryResult`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2965](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2965)

__useGetAppsStreamQuery__

To run a query within a React component, call `useGetAppsStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetAppsStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\>

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

***

### useGetAppsStreamSuspenseQuery()

> **useGetAppsStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2973](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2973)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaAppsStreamSortingInput`; \}\>\>

***

### useGetAppsSuspenseQuery()

> **useGetAppsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2901](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2901)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetAppsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaAppFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaAppSortingInput`; \}\>\>

***

### useGetBeamByIdLazyQuery()

> **useGetBeamByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:918](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L918)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetBeamByIdQuery()

> **useGetBeamByIdQuery**(`baseOptions`): `QueryResult`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:914](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L914)

__useGetBeamByIdQuery__

To run a query within a React component, call `useGetBeamByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetBeamByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetBeamByIdSuspenseQuery()

> **useGetBeamByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:922](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L922)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetBeamsByAuthorDidLazyQuery()

> **useGetBeamsByAuthorDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:876](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L876)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

***

### useGetBeamsByAuthorDidQuery()

> **useGetBeamsByAuthorDidQuery**(`baseOptions`): `QueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:872](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L872)

__useGetBeamsByAuthorDidQuery__

To run a query within a React component, call `useGetBeamsByAuthorDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamsByAuthorDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

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

***

### useGetBeamsByAuthorDidSuspenseQuery()

> **useGetBeamsByAuthorDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:880](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L880)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

***

### useGetBeamsLazyQuery()

> **useGetBeamsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:806](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L806)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

***

### useGetBeamsQuery()

> **useGetBeamsQuery**(`baseOptions`?): `QueryResult`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:802](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L802)

__useGetBeamsQuery__

To run a query within a React component, call `useGetBeamsQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `QueryHookOptions`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

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

***

### useGetBeamsSuspenseQuery()

> **useGetBeamsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:810](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L810)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaBeamSortingInput`; \}\>\>

***

### useGetBeamStreamLazyQuery()

> **useGetBeamStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:743](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L743)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\>

***

### useGetBeamStreamQuery()

> **useGetBeamStreamQuery**(`baseOptions`): `QueryResult`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:739](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L739)

__useGetBeamStreamQuery__

To run a query within a React component, call `useGetBeamStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetBeamStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\>

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

***

### useGetBeamStreamSuspenseQuery()

> **useGetBeamStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:747](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L747)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBeamStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaBeamStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaBeamStreamSortingInput`; \}\>\>

***

### useGetBlockStorageByIdLazyQuery()

> **useGetBlockStorageByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1076](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1076)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetBlockStorageByIdQuery()

> **useGetBlockStorageByIdQuery**(`baseOptions`): `QueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1072](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1072)

__useGetBlockStorageByIdQuery__

To run a query within a React component, call `useGetBlockStorageByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetBlockStorageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetBlockStorageByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetBlockStorageByIdSuspenseQuery()

> **useGetBlockStorageByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1080](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1080)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetBlockStorageByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetContentBlockByIdLazyQuery()

> **useGetContentBlockByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1034](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1034)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetContentBlockByIdQuery()

> **useGetContentBlockByIdQuery**(`baseOptions`): `QueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1030](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1030)

__useGetContentBlockByIdQuery__

To run a query within a React component, call `useGetContentBlockByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetContentBlockByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetContentBlockByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetContentBlockByIdSuspenseQuery()

> **useGetContentBlockByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1038](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1038)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetContentBlockByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetContentBlockStreamLazyQuery()

> **useGetContentBlockStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:992](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L992)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\>

***

### useGetContentBlockStreamQuery()

> **useGetContentBlockStreamQuery**(`baseOptions`): `QueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:988](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L988)

__useGetContentBlockStreamQuery__

To run a query within a React component, call `useGetContentBlockStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetContentBlockStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\>

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

***

### useGetContentBlockStreamSuspenseQuery()

> **useGetContentBlockStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:996](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L996)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetContentBlockStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaContentBlockStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaContentBlockStreamSortingInput`; \}\>\>

***

### useGetFollowDocumentsByDidLazyQuery()

> **useGetFollowDocumentsByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2017](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2017)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

***

### useGetFollowDocumentsByDidQuery()

> **useGetFollowDocumentsByDidQuery**(`baseOptions`): `QueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2013](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2013)

__useGetFollowDocumentsByDidQuery__

To run a query within a React component, call `useGetFollowDocumentsByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetFollowDocumentsByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

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

***

### useGetFollowDocumentsByDidSuspenseQuery()

> **useGetFollowDocumentsByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2021](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2021)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetFollowDocumentsByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `following`: `string` \| `string`[]; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

***

### useGetFollowersListByDidLazyQuery()

> **useGetFollowersListByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2634](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2634)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\>

***

### useGetFollowersListByDidQuery()

> **useGetFollowersListByDidQuery**(`baseOptions`): `QueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2630](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2630)

__useGetFollowersListByDidQuery__

To run a query within a React component, call `useGetFollowersListByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetFollowersListByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\>

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

***

### useGetFollowersListByDidSuspenseQuery()

> **useGetFollowersListByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2638](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2638)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetFollowersListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowInterfaceSortingInput`; \}\>\>

***

### useGetFollowingListByDidLazyQuery()

> **useGetFollowingListByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2554](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2554)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

***

### useGetFollowingListByDidQuery()

> **useGetFollowingListByDidQuery**(`baseOptions`): `QueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2550](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2550)

__useGetFollowingListByDidQuery__

To run a query within a React component, call `useGetFollowingListByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetFollowingListByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

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

***

### useGetFollowingListByDidSuspenseQuery()

> **useGetFollowingListByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2558](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2558)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetFollowingListByDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaFollowSortingInput`; \}\>\>

***

### useGetIndexedStreamCountLazyQuery()

> **useGetIndexedStreamCountLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1197](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1197)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\>

***

### useGetIndexedStreamCountQuery()

> **useGetIndexedStreamCountQuery**(`baseOptions`): `QueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1193](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1193)

__useGetIndexedStreamCountQuery__

To run a query within a React component, call `useGetIndexedStreamCountQuery` and pass it any options that fit your needs.
When your component renders, `useGetIndexedStreamCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetIndexedStreamCountQuery({
  variables: {
     indexer: // value for 'indexer'
     filters: // value for 'filters'
  },
});
```

***

### useGetIndexedStreamCountSuspenseQuery()

> **useGetIndexedStreamCountSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1201](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1201)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetIndexedStreamCountQuery`, `Exact`\<\{ `filters`: `AkashaIndexedStreamFiltersInput`; `indexer`: `string`; \}\>\>

***

### useGetIndexedStreamLazyQuery()

> **useGetIndexedStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1153](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1153)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\>

***

### useGetIndexedStreamQuery()

> **useGetIndexedStreamQuery**(`baseOptions`): `QueryResult`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1149](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1149)

__useGetIndexedStreamQuery__

To run a query within a React component, call `useGetIndexedStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetIndexedStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\>

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

***

### useGetIndexedStreamSuspenseQuery()

> **useGetIndexedStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1157](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1157)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetIndexedStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaIndexedStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaIndexedStreamSortingInput`; \}\>\>

***

### useGetInterestsByDidLazyQuery()

> **useGetInterestsByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2429](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2429)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetInterestsByDidQuery()

> **useGetInterestsByDidQuery**(`baseOptions`): `QueryResult`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2425](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2425)

__useGetInterestsByDidQuery__

To run a query within a React component, call `useGetInterestsByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetInterestsByDidQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetInterestsByDidSuspenseQuery()

> **useGetInterestsByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2433](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2433)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetInterestsByIdLazyQuery()

> **useGetInterestsByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2478](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2478)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetInterestsByIdQuery()

> **useGetInterestsByIdQuery**(`baseOptions`): `QueryResult`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2474](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2474)

__useGetInterestsByIdQuery__

To run a query within a React component, call `useGetInterestsByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetInterestsByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetInterestsByIdSuspenseQuery()

> **useGetInterestsByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2482](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2482)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetInterestsLazyQuery()

> **useGetInterestsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2305](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2305)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\>

***

### useGetInterestsQuery()

> **useGetInterestsQuery**(`baseOptions`?): `QueryResult`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2301](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2301)

__useGetInterestsQuery__

To run a query within a React component, call `useGetInterestsQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `QueryHookOptions`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\>

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

***

### useGetInterestsStreamLazyQuery()

> **useGetInterestsStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2377](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2377)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\>

***

### useGetInterestsStreamQuery()

> **useGetInterestsStreamQuery**(`baseOptions`): `QueryResult`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2373](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2373)

__useGetInterestsStreamQuery__

To run a query within a React component, call `useGetInterestsStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetInterestsStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\>

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

***

### useGetInterestsStreamSuspenseQuery()

> **useGetInterestsStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2381](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2381)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaInterestsStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaInterestsStreamSortingInput`; \}\>\>

***

### useGetInterestsSuspenseQuery()

> **useGetInterestsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2309](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2309)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetInterestsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `last`: `number`; \}\>\>

***

### useGetMyProfileLazyQuery()

> **useGetMyProfileLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1943](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1943)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\>

***

### useGetMyProfileQuery()

> **useGetMyProfileQuery**(`baseOptions`?): `QueryResult`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1939](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1939)

__useGetMyProfileQuery__

To run a query within a React component, call `useGetMyProfileQuery` and pass it any options that fit your needs.
When your component renders, `useGetMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `QueryHookOptions`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\>

#### Example

```ts
const { data, loading, error } = useGetMyProfileQuery({
  variables: {
  },
});
```

***

### useGetMyProfileSuspenseQuery()

> **useGetMyProfileSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1947](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1947)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetMyProfileQuery`, `Exact`\<\{\}\>\>

***

### useGetProfileByDidLazyQuery()

> **useGetProfileByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2104](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2104)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetProfileByDidQuery()

> **useGetProfileByDidQuery**(`baseOptions`): `QueryResult`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2100](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2100)

__useGetProfileByDidQuery__

To run a query within a React component, call `useGetProfileByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileByDidQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetProfileByDidSuspenseQuery()

> **useGetProfileByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2108](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetProfileByIdLazyQuery()

> **useGetProfileByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2059](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2059)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetProfileByIdQuery()

> **useGetProfileByIdQuery**(`baseOptions`): `QueryResult`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2055](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2055)

__useGetProfileByIdQuery__

To run a query within a React component, call `useGetProfileByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetProfileByIdSuspenseQuery()

> **useGetProfileByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2063](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2063)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetProfilesLazyQuery()

> **useGetProfilesLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2167](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2167)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\>

***

### useGetProfilesQuery()

> **useGetProfilesQuery**(`baseOptions`?): `QueryResult`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2163](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2163)

__useGetProfilesQuery__

To run a query within a React component, call `useGetProfilesQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `QueryHookOptions`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\> | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\>

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

***

### useGetProfilesSuspenseQuery()

> **useGetProfilesSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2171](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2171)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfilesQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileFiltersInput`; `first`: `number`; `last`: `number`; `sorting`: `AkashaProfileSortingInput`; \}\>\>

***

### useGetProfileStatsByDidLazyQuery()

> **useGetProfileStatsByDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2683](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2683)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetProfileStatsByDidQuery()

> **useGetProfileStatsByDidQuery**(`baseOptions`): `QueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2679](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2679)

__useGetProfileStatsByDidQuery__

To run a query within a React component, call `useGetProfileStatsByDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileStatsByDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetProfileStatsByDidQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetProfileStatsByDidSuspenseQuery()

> **useGetProfileStatsByDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2687](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2687)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileStatsByDidQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetProfileStreamLazyQuery()

> **useGetProfileStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2239](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2239)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\>

***

### useGetProfileStreamQuery()

> **useGetProfileStreamQuery**(`baseOptions`): `QueryResult`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2235](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2235)

__useGetProfileStreamQuery__

To run a query within a React component, call `useGetProfileStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetProfileStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\>

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

***

### useGetProfileStreamSuspenseQuery()

> **useGetProfileStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2243](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2243)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetProfileStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaProfileStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaProfileStreamSortingInput`; \}\>\>

***

### useGetReflectionByIdLazyQuery()

> **useGetReflectionByIdLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1561](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1561)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetReflectionByIdQuery()

> **useGetReflectionByIdQuery**(`baseOptions`): `QueryResult`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1557](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1557)

__useGetReflectionByIdQuery__

To run a query within a React component, call `useGetReflectionByIdQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `id`: `string`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

#### Example

```ts
const { data, loading, error } = useGetReflectionByIdQuery({
  variables: {
     id: // value for 'id'
  },
});
```

***

### useGetReflectionByIdSuspenseQuery()

> **useGetReflectionByIdSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1565](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1565)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionByIdQuery`, `Exact`\<\{ `id`: `string`; \}\>\>

***

### useGetReflectionsByAuthorDidLazyQuery()

> **useGetReflectionsByAuthorDidLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1443](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1443)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

***

### useGetReflectionsByAuthorDidQuery()

> **useGetReflectionsByAuthorDidQuery**(`baseOptions`): `QueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1439](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1439)

__useGetReflectionsByAuthorDidQuery__

To run a query within a React component, call `useGetReflectionsByAuthorDidQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionsByAuthorDidQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

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

***

### useGetReflectionsByAuthorDidSuspenseQuery()

> **useGetReflectionsByAuthorDidSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1447](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1447)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionsByAuthorDidQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

***

### useGetReflectionsFromBeamLazyQuery()

> **useGetReflectionsFromBeamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1374](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1374)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\>

***

### useGetReflectionsFromBeamQuery()

> **useGetReflectionsFromBeamQuery**(`baseOptions`): `QueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1370](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1370)

__useGetReflectionsFromBeamQuery__

To run a query within a React component, call `useGetReflectionsFromBeamQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionsFromBeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\>

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

***

### useGetReflectionsFromBeamSuspenseQuery()

> **useGetReflectionsFromBeamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1378](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1378)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionsFromBeamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectInterfaceFiltersInput`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectInterfaceSortingInput`; \}\>\>

***

### useGetReflectionStreamLazyQuery()

> **useGetReflectionStreamLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1519](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1519)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\>

***

### useGetReflectionStreamQuery()

> **useGetReflectionStreamQuery**(`baseOptions`): `QueryResult`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1515](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1515)

__useGetReflectionStreamQuery__

To run a query within a React component, call `useGetReflectionStreamQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectionStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\>

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

***

### useGetReflectionStreamSuspenseQuery()

> **useGetReflectionStreamSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1523](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1523)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectionStreamQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `filters`: `AkashaReflectStreamFiltersInput`; `first`: `number`; `indexer`: `string`; `last`: `number`; `sorting`: `AkashaReflectStreamSortingInput`; \}\>\>

***

### useGetReflectReflectionsLazyQuery()

> **useGetReflectReflectionsLazyQuery**(`baseOptions`?): `LazyQueryResultTuple`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1624](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1624)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `LazyQueryHookOptions`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\> |

#### Returns

`LazyQueryResultTuple`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

***

### useGetReflectReflectionsQuery()

> **useGetReflectReflectionsQuery**(`baseOptions`): `QueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1620](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1620)

__useGetReflectReflectionsQuery__

To run a query within a React component, call `useGetReflectReflectionsQuery` and pass it any options that fit your needs.
When your component renders, `useGetReflectReflectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
you can use to render your UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions` | `QueryHookOptions`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\> & \{ `skip`: `boolean`; `variables`: `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>; \} \| \{ `skip`: `boolean`; \} | options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options; |

#### Returns

`QueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

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

***

### useGetReflectReflectionsSuspenseQuery()

> **useGetReflectReflectionsSuspenseQuery**(`baseOptions`?): `UseSuspenseQueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1628](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1628)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `baseOptions`? | `SuspenseQueryHookOptions`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\> |

#### Returns

`UseSuspenseQueryResult`\<`GetReflectReflectionsQuery`, `Exact`\<\{ `after`: `string`; `before`: `string`; `first`: `number`; `id`: `string`; `last`: `number`; `sorting`: `AkashaReflectSortingInput`; \}\>\>

***

### useGetSettings()

> **useGetSettings**(`app`): `object`

Defined in: [libs/hooks/src/use-settings.ts:88](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L88)

Hook to get saved settings for an app

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `string` | string: The app's name for example @akashaorg/app-extensions |

#### Returns

`object`

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data-3"></a> `data` | `any` | settings | [libs/hooks/src/use-settings.ts:124](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L124) |
| <a id="error-2"></a> `error` | `object` | - | [libs/hooks/src/use-settings.ts:124](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L124) |
| `error.message` | `string` | - | [libs/hooks/src/use-settings.ts:95](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L95) |
| <a id="isloading-2"></a> `isLoading` | `boolean` | - | [libs/hooks/src/use-settings.ts:124](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L124) |

#### Example

```typescript
const savedSettingsQuery = useGetSettings('@akashaorg/app-akasha-verse');
const savedSettings = savedSettingsQuery.data;
```

***

### useIndexBeamMutation()

> **useIndexBeamMutation**(`baseOptions`?): `MutationTuple`\<`IndexBeamMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:495](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L495)

__useIndexBeamMutation__

To run a mutation, you first call `useIndexBeamMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexBeamMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexBeamMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexBeamMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexBeamMutation, { data, loading, error }] = useIndexBeamMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

***

### useIndexContentBlockMutation()

> **useIndexContentBlockMutation**(`baseOptions`?): `MutationTuple`\<`IndexContentBlockMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:531](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L531)

__useIndexContentBlockMutation__

To run a mutation, you first call `useIndexContentBlockMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexContentBlockMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexContentBlockMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexContentBlockMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexContentBlockMutation, { data, loading, error }] = useIndexContentBlockMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

***

### useIndexProfileMutation()

> **useIndexProfileMutation**(`baseOptions`?): `MutationTuple`\<`IndexProfileMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1665](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1665)

__useIndexProfileMutation__

To run a mutation, you first call `useIndexProfileMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexProfileMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexProfileMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexProfileMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexProfileMutation, { data, loading, error }] = useIndexProfileMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

***

### useIndexReflectionMutation()

> **useIndexReflectionMutation**(`baseOptions`?): `MutationTuple`\<`IndexReflectionMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1238](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1238)

__useIndexReflectionMutation__

To run a mutation, you first call `useIndexReflectionMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useIndexReflectionMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`IndexReflectionMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`IndexReflectionMutation`, `Exact`\<\{ `capability`: `Cacao_Capability`; `jws`: `Did_Jws`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [indexReflectionMutation, { data, loading, error }] = useIndexReflectionMutation({
  variables: {
     jws: // value for 'jws'
     capability: // value for 'capability'
  },
});
```

***

### useLegalDoc()

> **useLegalDoc**(`docName`): `object`

Defined in: [libs/hooks/src/use-legal.ts:21](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-legal.ts#L21)

Hook to get legal docs stored on ipfs

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docName` | `LEGAL_DOCS` | LEGAL_DOCS the type of the legal doc being retrieved |

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data-4"></a> `data` | `string` | [libs/hooks/src/use-legal.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-legal.ts#L46) |
| <a id="error-3"></a> `error` | `Error` | [libs/hooks/src/use-legal.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-legal.ts#L46) |
| <a id="isfetched"></a> `isFetched` | `boolean` | [libs/hooks/src/use-legal.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-legal.ts#L46) |
| <a id="isloading-3"></a> `isLoading` | `boolean` | [libs/hooks/src/use-legal.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-legal.ts#L46) |

#### Example

```typescript
const termsOfUseDocQuery = useLegalDoc('TermsOfUse');

const termsOfUseDoc = termsOfUseDocQuery.data;
```

***

### useListenForMutationEvents()

> **useListenForMutationEvents**(): `any`

Defined in: [libs/hooks/src/use-notifications.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-notifications.ts#L13)

Hook to listen for mutation events emitted from the SDK's globalChannel.

#### Returns

`any`

#### Example

```typescript
const { messageObj, appid, success, pending } = useListenForMutationEvents();

```

***

### useMentions()

> **useMentions**(`authenticatedDID`): `object`

Defined in: [libs/hooks/src/use-mentions.ts:16](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-mentions.ts#L16)

Hook to retrieve and set the mentions associated with a profile.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `authenticatedDID` | `string` | string |

#### Returns

`object`

- Object containing the mentions associated
with the authenticatedDID and a setMentionQuery method to control the querying
of mention data.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="mentions"></a> `mentions` | `object`[] | [libs/hooks/src/use-mentions.ts:41](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-mentions.ts#L41) |
| <a id="setmentionquery"></a> `setMentionQuery` | `Dispatch`\<`SetStateAction`\<`string`\>\> | [libs/hooks/src/use-mentions.ts:41](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-mentions.ts#L41) |

#### Example

```typescript
const { setMentionQuery, mentions } = useMentions('an authenticated DID');
```

***

### useModalData()

> **useModalData**(): `object`

Defined in: [libs/hooks/src/use-modal-data.ts:14](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-modal-data.ts#L14)

Hook to handle the data supplied to the `LoginModal` extension.

#### Returns

`object`

- Object containing the params passed in the url

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="modaldata"></a> `modalData` | `object` | [libs/hooks/src/use-modal-data.ts:27](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-modal-data.ts#L27) |
| `modalData.message`? | `string` | libs/typings/lib/ui/root-component.d.ts:32 |
| `modalData.name` | `string` | libs/typings/lib/ui/root-component.d.ts:31 |
| `modalData.title`? | `string` | libs/typings/lib/ui/root-component.d.ts:33 |

#### Example

```typescript
const { modalData } = useModalData();
```

***

### useModerationCategory()

> **useModerationCategory**(`props`): `useModerationCategoryReturnType`

Defined in: [libs/hooks/src/use-moderation-categories.ts:20](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-moderation-categories.ts#L20)

Hook to handle moderation/report categories

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `useModerationCategoryProps` | useModerationCategoryProps |

#### Returns

`useModerationCategoryReturnType`

useModerationCategoryReturnType

***

### useNetworkChangeListener()

> **useNetworkChangeListener**(): `any`[]

Defined in: [libs/hooks/src/use-network-state.ts:160](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L160)

#### Returns

`any`[]

***

### useNetworkState()

> **useNetworkState**(`enabler`?): `object`

Defined in: [libs/hooks/src/use-network-state.ts:37](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L37)

Hook to check if the web3 provider is set to function on the Rinkeby test network

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabler`? | `boolean` | boolean (optional) that can control when to start verifying network state |

#### Returns

`object`

networkNotSupported: true if web3 provider is not on the specified network

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data-5"></a> `data` | `object` | [libs/hooks/src/use-network-state.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L67) |
| `data.networkNotSupported` | `boolean` | [libs/hooks/src/use-network-state.ts:39](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L39) |
| <a id="error-4"></a> `error` | `Error` | [libs/hooks/src/use-network-state.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L67) |
| <a id="isfetched-1"></a> `isFetched` | `boolean` | [libs/hooks/src/use-network-state.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L67) |
| <a id="isloading-4"></a> `isLoading` | `boolean` | [libs/hooks/src/use-network-state.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L67) |

#### Example

```typescript
const networkStateQuery = useNetworkState(true);

const networkNotSupported = networkStateQuery.data.networkNotSupported;
```

***

### useNsfwToggling()

> **useNsfwToggling**(): `object`

Defined in: [libs/hooks/src/use-nsfw.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-nsfw.ts#L13)

Hook to get and set user's choice for showing/hiding nsfw content

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="shownsfw"></a> `showNsfw` | `boolean` | [libs/hooks/src/use-nsfw.ts:31](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-nsfw.ts#L31) |
| <a id="toggleshownsfw"></a> `toggleShowNsfw` | (`showNsfw`) => `void` | [libs/hooks/src/use-nsfw.ts:31](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-nsfw.ts#L31) |

#### Example

```typescript
const {showNsfw, toggleShowNsfw} = useNsfwToggling();
```
To toggle the nsfw state, pass a boolean value to the toggleShowNsfw function,
 e.g. `toggleShowNsfw(true)`

***

### usePlaformHealthCheck()

> **usePlaformHealthCheck**(): `object`

Defined in: [libs/hooks/src/use-health-check.ts:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-health-check.ts#L19)

Hook to check the overall status of the platform.

#### Returns

`object`

- Object containing the data and query status

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data-6"></a> `data` | `object` | [libs/hooks/src/use-health-check.ts:44](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-health-check.ts#L44) |
| `data.statusCode` | `number` | [libs/hooks/src/use-health-check.ts:21](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-health-check.ts#L21) |
| `data.success` | `boolean` | [libs/hooks/src/use-health-check.ts:22](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-health-check.ts#L22) |
| <a id="isloading-5"></a> `isLoading` | `boolean` | [libs/hooks/src/use-health-check.ts:44](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-health-check.ts#L44) |

#### Example

```typescript
const { data, isLoading } = usePlaformHealthCheck();
```

***

### useProfileStats()

> **useProfileStats**(`profileId`, `readCache`?): `object`

Defined in: [libs/hooks/src/use-profile-stats.ts:27](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-profile-stats.ts#L27)

Hook to get a profile's stats (number of beams, followers, following, etc. )

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `profileId` | `string` | string |
| `readCache`? | `boolean` | boolean (optional) to indicate whether to read from the cache |

#### Returns

`object`

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="data-7"></a> `data` | `object` | stat.data | [libs/hooks/src/use-profile-stats.ts:61](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-profile-stats.ts#L61) |
| `data.totalBeams` | `number` | 0 | [libs/sdk/src/profiles/index.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/sdk/src/profiles/index.ts#L46) |
| `data.totalFollowers` | `number` | 0 | [libs/sdk/src/profiles/index.ts:45](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/sdk/src/profiles/index.ts#L45) |
| `data.totalFollowing` | `number` | 0 | [libs/sdk/src/profiles/index.ts:44](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/sdk/src/profiles/index.ts#L44) |
| `data.totalReflections` | `number` | 0 | [libs/sdk/src/profiles/index.ts:48](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/sdk/src/profiles/index.ts#L48) |
| `data.totalTopics` | `number` | 0 | [libs/sdk/src/profiles/index.ts:47](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/sdk/src/profiles/index.ts#L47) |
| <a id="error-5"></a> `error` | `any` | - | [libs/hooks/src/use-profile-stats.ts:63](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-profile-stats.ts#L63) |
| <a id="loading"></a> `loading` | `boolean` | - | [libs/hooks/src/use-profile-stats.ts:62](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-profile-stats.ts#L62) |

#### Example

```typescript
const profileStatsQuery = useProfileStats('did:pkh:eip155:5:0xadc81c169...');

console.log(profileStatsQuery.data)
```

***

### useRequiredNetwork()

> **useRequiredNetwork**(): `object`

Defined in: [libs/hooks/src/use-network-state.ts:129](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L129)

A hook to get required network name from the SDK

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data-8"></a> `data` | `object` | [libs/hooks/src/use-network-state.ts:157](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L157) |
| `data.chainId` | `11155111` | [libs/hooks/src/use-network-state.ts:132](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L132) |
| `data.name` | `string` | [libs/hooks/src/use-network-state.ts:131](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L131) |
| <a id="error-6"></a> `error` | `Error` | [libs/hooks/src/use-network-state.ts:157](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L157) |
| <a id="isloading-6"></a> `isLoading` | `boolean` | [libs/hooks/src/use-network-state.ts:157](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L157) |
| <a id="issuccess-1"></a> `isSuccess` | `boolean` | [libs/hooks/src/use-network-state.ts:157](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-network-state.ts#L157) |

#### Example

```typescript
const requiredNetworkQuery = useRequiredNetworkName();

const requiredNetworkName = requiredNetworkQuery.data;
```

***

### useRootComponentProps()

> **useRootComponentProps**\<`T`\>(): `object` & `T`

Defined in: [libs/hooks/src/use-root-props.tsx:31](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-root-props.tsx#L31)

Hook to manage and access the context of the plugins for routing, translation, and extensions.
For example, through this hook, the `getRoutingPlugin`method can be used to
navigate between apps, or the `worldConfig` object can be used for accessing
the config info related to the World the whole application belongs to.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `IRootComponentProps` |

#### Returns

`object` & `T`

#### Example

```typescript
  const { getTranslationPlugin, baseRouteName,getRoutingPlugin, navigateToModal, worldConfig } = useRootComponentProps();
```

***

### useSaveSettings()

> **useSaveSettings**(): `object`

Defined in: [libs/hooks/src/use-settings.ts:38](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L38)

Hook to save app's settings using sdk settings service

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data-9"></a> `data` | `unknown` | [libs/hooks/src/use-settings.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L67) |
| <a id="error-7"></a> `error` | `object` | [libs/hooks/src/use-settings.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L67) |
| `error.message` | `string` | [libs/hooks/src/use-settings.ts:41](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L41) |
| <a id="isloading-7"></a> `isLoading` | `boolean` | [libs/hooks/src/use-settings.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L67) |
| <a id="savenotificationsettings"></a> `saveNotificationSettings` | (`params`, `callback`?) => `void` | [libs/hooks/src/use-settings.ts:67](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-settings.ts#L67) |

#### Example

```typescript
const { saveNotificationSettings } = useSaveSettings();
saveNotificationSettings(
 { app: '@akashaorg/app-extensions', options: NotificationsOptions },
 callback: {onComplete: () => void}
 )
```

***

### useSetAppReleaseMutation()

> **useSetAppReleaseMutation**(`baseOptions`?): `MutationTuple`\<`SetAppReleaseMutation`, `Exact`\<\{ `i`: `SetAkashaAppReleaseInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2726](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2726)

__useSetAppReleaseMutation__

To run a mutation, you first call `useSetAppReleaseMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useSetAppReleaseMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`SetAppReleaseMutation`, `Exact`\<\{ `i`: `SetAkashaAppReleaseInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`SetAppReleaseMutation`, `Exact`\<\{ `i`: `SetAkashaAppReleaseInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [setAppReleaseMutation, { data, loading, error }] = useSetAppReleaseMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useShowFeedback()

> **useShowFeedback**(`initialShowValue`?): \[`boolean`, `Dispatch`\<`SetStateAction`\<`boolean`\>\>\]

Defined in: [libs/hooks/src/use-show-feedback.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-show-feedback.ts#L13)

Hook to manage the state of the feedback shown in the snackbar.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initialShowValue`? | `boolean` | boolean (optional) |

#### Returns

\[`boolean`, `Dispatch`\<`SetStateAction`\<`boolean`\>\>\]

The state of whether to
show the feedback message and a function to set that state.

#### Example

```typescript
  const [showFeedback, setShowFeedback] = useShowFeedback();
```

***

### useTheme()

> **useTheme**(): `TUseThemeReturn`

Defined in: [libs/hooks/src/use-theme.ts:23](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-theme.ts#L23)

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

***

### useUpdateAkashaReflectMutation()

> **useUpdateAkashaReflectMutation**(`baseOptions`?): `MutationTuple`\<`UpdateAkashaReflectMutation`, `Exact`\<\{ `i`: `UpdateAkashaReflectInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1310](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1310)

__useUpdateAkashaReflectMutation__

To run a mutation, you first call `useUpdateAkashaReflectMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateAkashaReflectMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateAkashaReflectMutation`, `Exact`\<\{ `i`: `UpdateAkashaReflectInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateAkashaReflectMutation`, `Exact`\<\{ `i`: `UpdateAkashaReflectInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateAkashaReflectMutation, { data, loading, error }] = useUpdateAkashaReflectMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateAppMutation()

> **useUpdateAppMutation**(`baseOptions`?): `MutationTuple`\<`UpdateAppMutation`, `Exact`\<\{ `i`: `UpdateAkashaAppInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2838](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2838)

__useUpdateAppMutation__

To run a mutation, you first call `useUpdateAppMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateAppMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateAppMutation`, `Exact`\<\{ `i`: `UpdateAkashaAppInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateAppMutation`, `Exact`\<\{ `i`: `UpdateAkashaAppInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateAppMutation, { data, loading, error }] = useUpdateAppMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateAppReleaseMutation()

> **useUpdateAppReleaseMutation**(`baseOptions`?): `MutationTuple`\<`UpdateAppReleaseMutation`, `Exact`\<\{ `i`: `UpdateAkashaAppReleaseInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:2764](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2764)

__useUpdateAppReleaseMutation__

To run a mutation, you first call `useUpdateAppReleaseMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateAppReleaseMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateAppReleaseMutation`, `Exact`\<\{ `i`: `UpdateAkashaAppReleaseInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateAppReleaseMutation`, `Exact`\<\{ `i`: `UpdateAkashaAppReleaseInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateAppReleaseMutation, { data, loading, error }] = useUpdateAppReleaseMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateBeamMutation()

> **useUpdateBeamMutation**(`baseOptions`?): `MutationTuple`\<`UpdateBeamMutation`, `Exact`\<\{ `i`: `UpdateAkashaBeamInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:603](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L603)

__useUpdateBeamMutation__

To run a mutation, you first call `useUpdateBeamMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateBeamMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateBeamMutation`, `Exact`\<\{ `i`: `UpdateAkashaBeamInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateBeamMutation`, `Exact`\<\{ `i`: `UpdateAkashaBeamInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateBeamMutation, { data, loading, error }] = useUpdateBeamMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateContentBlockMutation()

> **useUpdateContentBlockMutation**(`baseOptions`?): `MutationTuple`\<`UpdateContentBlockMutation`, `Exact`\<\{ `i`: `UpdateAkashaContentBlockInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:675](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L675)

__useUpdateContentBlockMutation__

To run a mutation, you first call `useUpdateContentBlockMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateContentBlockMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateContentBlockMutation`, `Exact`\<\{ `i`: `UpdateAkashaContentBlockInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateContentBlockMutation`, `Exact`\<\{ `i`: `UpdateAkashaContentBlockInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateContentBlockMutation, { data, loading, error }] = useUpdateContentBlockMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateFollowMutation()

> **useUpdateFollowMutation**(`baseOptions`?): `MutationTuple`\<`UpdateFollowMutation`, `Exact`\<\{ `i`: `UpdateAkashaFollowInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1907](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1907)

__useUpdateFollowMutation__

To run a mutation, you first call `useUpdateFollowMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateFollowMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateFollowMutation`, `Exact`\<\{ `i`: `UpdateAkashaFollowInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateFollowMutation`, `Exact`\<\{ `i`: `UpdateAkashaFollowInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateFollowMutation, { data, loading, error }] = useUpdateFollowMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateInterestsMutation()

> **useUpdateInterestsMutation**(`baseOptions`?): `MutationTuple`\<`UpdateInterestsMutation`, `Exact`\<\{ `i`: `UpdateAkashaProfileInterestsInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1823](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1823)

__useUpdateInterestsMutation__

To run a mutation, you first call `useUpdateInterestsMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateInterestsMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateInterestsMutation`, `Exact`\<\{ `i`: `UpdateAkashaProfileInterestsInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateInterestsMutation`, `Exact`\<\{ `i`: `UpdateAkashaProfileInterestsInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateInterestsMutation, { data, loading, error }] = useUpdateInterestsMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useUpdateProfileMutation()

> **useUpdateProfileMutation**(`baseOptions`?): `MutationTuple`\<`UpdateProfileMutation`, `Exact`\<\{ `i`: `UpdateAkashaProfileInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

Defined in: [libs/hooks/src/generated/apollo.ts:1737](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1737)

__useUpdateProfileMutation__

To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `baseOptions`? | `MutationHookOptions`\<`UpdateProfileMutation`, `Exact`\<\{ `i`: `UpdateAkashaProfileInput`; \}\>\> | options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2; |

#### Returns

`MutationTuple`\<`UpdateProfileMutation`, `Exact`\<\{ `i`: `UpdateAkashaProfileInput`; \}\>, `DefaultContext`, `ApolloCache`\<`any`\>\>

#### Example

```ts
const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
  variables: {
     i: // value for 'i'
  },
});
```

***

### useValidDid()

> **useValidDid**(`profileId`, `enabled`?): `object`

Defined in: [libs/hooks/src/use-valid-did.ts:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-valid-did.ts#L19)

Hook to check the validity of an address

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `profileId` | `string` |
| `enabled`? | `boolean` |

#### Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="isethaddress"></a> `isEthAddress` | `boolean` | [libs/hooks/src/use-valid-did.ts:38](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-valid-did.ts#L38) |
| <a id="isloading-8"></a> `isLoading` | `boolean` | [libs/hooks/src/use-valid-did.ts:38](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-valid-did.ts#L38) |
| <a id="validdid"></a> `validDid` | `boolean` | [libs/hooks/src/use-valid-did.ts:38](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-valid-did.ts#L38) |

#### Example

```typescript
const { validDid, isEthAddress } = useValidDid(profileDID, !!profileDID)

```
If you want to conditionally eable or disable address check from the hook,
 include the `enabled`param, which is `!!profileDID` in the example above.

***

### validateType()

> **validateType**\<`T`\>(`arg1`, `type`): `boolean`

Defined in: [libs/hooks/src/utils/generic-utils.ts:1](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/generic-utils.ts#L1)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arg1` | `T` |
| `type` | `string` |

#### Returns

`boolean`

***

### withProviders()

> **withProviders**\<`T`\>(`WrappedComponent`): (`props`) => `Element`

Defined in: [libs/hooks/src/utils/provider-hoc.tsx:11](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/provider-hoc.tsx#L11)

Higher order component that wraps a component with all necessary providers

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `IRootComponentProps` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `WrappedComponent` | `ComponentType`\<`T`\> |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `T` |

##### Returns

`Element`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="displayname"></a> `displayName` | `string` | [libs/hooks/src/utils/provider-hoc.tsx:28](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/provider-hoc.tsx#L28) |

## Classes

### UserStore\<T\>

Defined in: [libs/hooks/src/store/user-store.ts:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L12)

Singleton store for managing login, logout, session restoration and fetching profile.
It uses jotai to manage the store

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Implements

- `IUserStore`\<`T`\>

#### Methods

##### getSnapshot()

> **getSnapshot**(): `IUserState`\<`T`\>

Defined in: [libs/hooks/src/store/user-store.ts:143](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L143)

Get a snapshot of store data

###### Returns

`IUserState`\<`T`\>

###### Implementation of

`IUserStore.getSnapshot`

***

##### login()

> **login**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [libs/hooks/src/store/user-store.ts:46](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L46)

Handles login

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `checkRegistered`: `boolean`; `provider`: `any`; \} |
| `__namedParameters.checkRegistered`? | `boolean` |
| `__namedParameters.provider` | `any` |

###### Returns

`Promise`\<`void`\>

###### Implementation of

`IUserStore.login`

***

##### logout()

> **logout**(): `void`

Defined in: [libs/hooks/src/store/user-store.ts:77](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L77)

Handles logout
Reset the store to the initial state

###### Returns

`void`

###### Implementation of

`IUserStore.logout`

***

##### restoreSession()

> **restoreSession**(): `Promise`\<`void`\>

Defined in: [libs/hooks/src/store/user-store.ts:105](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L105)

Initiates session restore for current authenticated user

###### Returns

`Promise`\<`void`\>

###### Implementation of

`IUserStore.restoreSession`

***

##### subscribe()

> **subscribe**(`listener`): () => `void`

Defined in: [libs/hooks/src/store/user-store.ts:135](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L135)

Takes a callback function and subscribes it to the store, when the store changes the callback is invoked.
This in turns causes a component to re-render

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `listener` | () => `void` | callback listener which subscribes to the store |

###### Returns

`Function`

function that cleans up the subscription

###### Returns

`void`

###### Implementation of

`IUserStore.subscribe`

***

##### getInstance()

> `static` **getInstance**\<`T`\>(`getProfileInfo`): [`UserStore`](index.md#userstoret)\<`T`\>

Defined in: [libs/hooks/src/store/user-store.ts:36](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/store/user-store.ts#L36)

Get the singleton instance of the user store

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `getProfileInfo` | (`params`) => `Promise`\<\{ `data`: `T`; `error`: `string`; \}\> |

###### Returns

[`UserStore`](index.md#userstoret)\<`T`\>

## Enumerations

### CookieConsentTypes

Defined in: [libs/hooks/src/use-analytics.tsx:17](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L17)

**`Internal`**

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="all-1"></a> `ALL` | `"ALL"` | [libs/hooks/src/use-analytics.tsx:19](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L19) |
| <a id="essential-1"></a> `ESSENTIAL` | `"ESSENTIAL"` | [libs/hooks/src/use-analytics.tsx:18](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L18) |

## Interfaces

### IConfig

Defined in: [libs/hooks/src/utils/media-utils.ts:8](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L8)

**`Internal`**

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="autorotate-1"></a> `autoRotate?` | `boolean` | [libs/hooks/src/utils/media-utils.ts:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L12) |
| <a id="maxheight-1"></a> `maxHeight` | `number` | [libs/hooks/src/utils/media-utils.ts:11](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L11) |
| <a id="maxwidth-1"></a> `maxWidth` | `number` | [libs/hooks/src/utils/media-utils.ts:10](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L10) |
| <a id="mimetype-1"></a> `mimeType?` | `string` | [libs/hooks/src/utils/media-utils.ts:13](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L13) |
| <a id="quality-1"></a> `quality?` | `number` | [libs/hooks/src/utils/media-utils.ts:9](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/utils/media-utils.ts#L9) |

***

### UseAnalyticsActions

Defined in: [libs/hooks/src/use-analytics.tsx:37](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L37)

**`Internal`**

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="trackevent-1"></a> `trackEvent` | (`eventData`: `object`) => `void` | [libs/hooks/src/use-analytics.tsx:39](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L39) |

## Type Aliases

### CreateAppMutationFn

> **CreateAppMutationFn**: `Apollo.MutationFunction`\<`Types.CreateAppMutation`, `Types.CreateAppMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2782](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2782)

***

### CreateAppMutationHookResult

> **CreateAppMutationHookResult**: `ReturnType`\<*typeof* [`useCreateAppMutation`](index.md#usecreateappmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2805](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2805)

***

### CreateAppMutationOptions

> **CreateAppMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateAppMutation`, `Types.CreateAppMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2807](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2807)

***

### CreateAppMutationResult

> **CreateAppMutationResult**: `Apollo.MutationResult`\<`Types.CreateAppMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2806](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2806)

***

### CreateBeamMutationFn

> **CreateBeamMutationFn**: `Apollo.MutationFunction`\<`Types.CreateBeamMutation`, `Types.CreateBeamMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:548](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L548)

***

### CreateBeamMutationHookResult

> **CreateBeamMutationHookResult**: `ReturnType`\<*typeof* [`useCreateBeamMutation`](index.md#usecreatebeammutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:571](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L571)

***

### CreateBeamMutationOptions

> **CreateBeamMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateBeamMutation`, `Types.CreateBeamMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:573](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L573)

***

### CreateBeamMutationResult

> **CreateBeamMutationResult**: `Apollo.MutationResult`\<`Types.CreateBeamMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:572](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L572)

***

### CreateContentBlockMutationFn

> **CreateContentBlockMutationFn**: `Apollo.MutationFunction`\<`Types.CreateContentBlockMutation`, `Types.CreateContentBlockMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:620](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L620)

***

### CreateContentBlockMutationHookResult

> **CreateContentBlockMutationHookResult**: `ReturnType`\<*typeof* [`useCreateContentBlockMutation`](index.md#usecreatecontentblockmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:643](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L643)

***

### CreateContentBlockMutationOptions

> **CreateContentBlockMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateContentBlockMutation`, `Types.CreateContentBlockMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:645](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L645)

***

### CreateContentBlockMutationResult

> **CreateContentBlockMutationResult**: `Apollo.MutationResult`\<`Types.CreateContentBlockMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:644](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L644)

***

### CreateFollowMutationFn

> **CreateFollowMutationFn**: `Apollo.MutationFunction`\<`Types.CreateFollowMutation`, `Types.CreateFollowMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1846](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1846)

***

### CreateFollowMutationHookResult

> **CreateFollowMutationHookResult**: `ReturnType`\<*typeof* [`useCreateFollowMutation`](index.md#usecreatefollowmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1869](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1869)

***

### CreateFollowMutationOptions

> **CreateFollowMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateFollowMutation`, `Types.CreateFollowMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1871](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1871)

***

### CreateFollowMutationResult

> **CreateFollowMutationResult**: `Apollo.MutationResult`\<`Types.CreateFollowMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1870](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1870)

***

### CreateInterestsMutationFn

> **CreateInterestsMutationFn**: `Apollo.MutationFunction`\<`Types.CreateInterestsMutation`, `Types.CreateInterestsMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1761](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1761)

***

### CreateInterestsMutationHookResult

> **CreateInterestsMutationHookResult**: `ReturnType`\<*typeof* [`useCreateInterestsMutation`](index.md#usecreateinterestsmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1784](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1784)

***

### CreateInterestsMutationOptions

> **CreateInterestsMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateInterestsMutation`, `Types.CreateInterestsMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1786](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1786)

***

### CreateInterestsMutationResult

> **CreateInterestsMutationResult**: `Apollo.MutationResult`\<`Types.CreateInterestsMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1785](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1785)

***

### CreateProfileMutationFn

> **CreateProfileMutationFn**: `Apollo.MutationFunction`\<`Types.CreateProfileMutation`, `Types.CreateProfileMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1682](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1682)

***

### CreateProfileMutationHookResult

> **CreateProfileMutationHookResult**: `ReturnType`\<*typeof* [`useCreateProfileMutation`](index.md#usecreateprofilemutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1705](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1705)

***

### CreateProfileMutationOptions

> **CreateProfileMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateProfileMutation`, `Types.CreateProfileMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1707](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1707)

***

### CreateProfileMutationResult

> **CreateProfileMutationResult**: `Apollo.MutationResult`\<`Types.CreateProfileMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1706](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1706)

***

### CreateReflectMutationFn

> **CreateReflectMutationFn**: `Apollo.MutationFunction`\<`Types.CreateReflectMutation`, `Types.CreateReflectMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1255](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1255)

***

### CreateReflectMutationHookResult

> **CreateReflectMutationHookResult**: `ReturnType`\<*typeof* [`useCreateReflectMutation`](index.md#usecreatereflectmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1278](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1278)

***

### CreateReflectMutationOptions

> **CreateReflectMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.CreateReflectMutation`, `Types.CreateReflectMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1280](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1280)

***

### CreateReflectMutationResult

> **CreateReflectMutationResult**: `Apollo.MutationResult`\<`Types.CreateReflectMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1279](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1279)

***

### GetAppReleaseByIdLazyQueryHookResult

> **GetAppReleaseByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppReleaseByIdLazyQuery`](index.md#usegetappreleasebyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3269](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3269)

***

### GetAppReleaseByIdQueryHookResult

> **GetAppReleaseByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppReleaseByIdQuery`](index.md#usegetappreleasebyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3268](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3268)

***

### GetAppReleaseByIdQueryResult

> **GetAppReleaseByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetAppReleaseByIdQuery`, `Types.GetAppReleaseByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:3271](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3271)

***

### GetAppReleaseByIdSuspenseQueryHookResult

> **GetAppReleaseByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppReleaseByIdSuspenseQuery`](index.md#usegetappreleasebyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3270](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3270)

***

### GetAppsByIdLazyQueryHookResult

> **GetAppsByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByIdLazyQuery`](index.md#usegetappsbyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3021](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3021)

***

### GetAppsByIdQueryHookResult

> **GetAppsByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByIdQuery`](index.md#usegetappsbyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3020](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3020)

***

### GetAppsByIdQueryResult

> **GetAppsByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsByIdQuery`, `Types.GetAppsByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:3023](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3023)

***

### GetAppsByIdSuspenseQueryHookResult

> **GetAppsByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByIdSuspenseQuery`](index.md#usegetappsbyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3022](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3022)

***

### GetAppsByPublisherDidLazyQueryHookResult

> **GetAppsByPublisherDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByPublisherDidLazyQuery`](index.md#usegetappsbypublisherdidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3090](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3090)

***

### GetAppsByPublisherDidQueryHookResult

> **GetAppsByPublisherDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByPublisherDidQuery`](index.md#usegetappsbypublisherdidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3089](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3089)

***

### GetAppsByPublisherDidQueryResult

> **GetAppsByPublisherDidQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsByPublisherDidQuery`, `Types.GetAppsByPublisherDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:3092](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3092)

***

### GetAppsByPublisherDidSuspenseQueryHookResult

> **GetAppsByPublisherDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsByPublisherDidSuspenseQuery`](index.md#usegetappsbypublisherdidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3091](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3091)

***

### GetAppsLazyQueryHookResult

> **GetAppsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsLazyQuery`](index.md#usegetappslazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2906](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2906)

***

### GetAppsQueryHookResult

> **GetAppsQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsQuery`](index.md#usegetappsquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2905](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2905)

***

### GetAppsQueryResult

> **GetAppsQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsQuery`, `Types.GetAppsQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2908](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2908)

***

### GetAppsReleasesByPublisherDidLazyQueryHookResult

> **GetAppsReleasesByPublisherDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesByPublisherDidLazyQuery`](index.md#usegetappsreleasesbypublisherdidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3160](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3160)

***

### GetAppsReleasesByPublisherDidQueryHookResult

> **GetAppsReleasesByPublisherDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesByPublisherDidQuery`](index.md#usegetappsreleasesbypublisherdidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3159](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3159)

***

### GetAppsReleasesByPublisherDidQueryResult

> **GetAppsReleasesByPublisherDidQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsReleasesByPublisherDidQuery`, `Types.GetAppsReleasesByPublisherDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:3162](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3162)

***

### GetAppsReleasesByPublisherDidSuspenseQueryHookResult

> **GetAppsReleasesByPublisherDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesByPublisherDidSuspenseQuery`](index.md#usegetappsreleasesbypublisherdidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3161](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3161)

***

### GetAppsReleasesLazyQueryHookResult

> **GetAppsReleasesLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesLazyQuery`](index.md#usegetappsreleaseslazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3225](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3225)

***

### GetAppsReleasesQueryHookResult

> **GetAppsReleasesQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesQuery`](index.md#usegetappsreleasesquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3224](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3224)

***

### GetAppsReleasesQueryResult

> **GetAppsReleasesQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsReleasesQuery`, `Types.GetAppsReleasesQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:3227](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3227)

***

### GetAppsReleasesSuspenseQueryHookResult

> **GetAppsReleasesSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsReleasesSuspenseQuery`](index.md#usegetappsreleasessuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:3226](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3226)

***

### GetAppsStreamLazyQueryHookResult

> **GetAppsStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsStreamLazyQuery`](index.md#usegetappsstreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2978](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2978)

***

### GetAppsStreamQueryHookResult

> **GetAppsStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsStreamQuery`](index.md#usegetappsstreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2977](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2977)

***

### GetAppsStreamQueryResult

> **GetAppsStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetAppsStreamQuery`, `Types.GetAppsStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2980](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2980)

***

### GetAppsStreamSuspenseQueryHookResult

> **GetAppsStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsStreamSuspenseQuery`](index.md#usegetappsstreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2979](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2979)

***

### GetAppsSuspenseQueryHookResult

> **GetAppsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetAppsSuspenseQuery`](index.md#usegetappssuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2907](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2907)

***

### GetBeamByIdLazyQueryHookResult

> **GetBeamByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamByIdLazyQuery`](index.md#usegetbeambyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:927](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L927)

***

### GetBeamByIdQueryHookResult

> **GetBeamByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamByIdQuery`](index.md#usegetbeambyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:926](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L926)

***

### GetBeamByIdQueryResult

> **GetBeamByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamByIdQuery`, `Types.GetBeamByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:929](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L929)

***

### GetBeamByIdSuspenseQueryHookResult

> **GetBeamByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamByIdSuspenseQuery`](index.md#usegetbeambyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:928](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L928)

***

### GetBeamsByAuthorDidLazyQueryHookResult

> **GetBeamsByAuthorDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsByAuthorDidLazyQuery`](index.md#usegetbeamsbyauthordidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:885](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L885)

***

### GetBeamsByAuthorDidQueryHookResult

> **GetBeamsByAuthorDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsByAuthorDidQuery`](index.md#usegetbeamsbyauthordidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:884](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L884)

***

### GetBeamsByAuthorDidQueryResult

> **GetBeamsByAuthorDidQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamsByAuthorDidQuery`, `Types.GetBeamsByAuthorDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:887](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L887)

***

### GetBeamsByAuthorDidSuspenseQueryHookResult

> **GetBeamsByAuthorDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsByAuthorDidSuspenseQuery`](index.md#usegetbeamsbyauthordidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:886](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L886)

***

### GetBeamsLazyQueryHookResult

> **GetBeamsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsLazyQuery`](index.md#usegetbeamslazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:815](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L815)

***

### GetBeamsQueryHookResult

> **GetBeamsQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsQuery`](index.md#usegetbeamsquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:814](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L814)

***

### GetBeamsQueryResult

> **GetBeamsQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamsQuery`, `Types.GetBeamsQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:817](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L817)

***

### GetBeamsSuspenseQueryHookResult

> **GetBeamsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamsSuspenseQuery`](index.md#usegetbeamssuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:816](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L816)

***

### GetBeamStreamLazyQueryHookResult

> **GetBeamStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamStreamLazyQuery`](index.md#usegetbeamstreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:752](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L752)

***

### GetBeamStreamQueryHookResult

> **GetBeamStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamStreamQuery`](index.md#usegetbeamstreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:751](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L751)

***

### GetBeamStreamQueryResult

> **GetBeamStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetBeamStreamQuery`, `Types.GetBeamStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:754](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L754)

***

### GetBeamStreamSuspenseQueryHookResult

> **GetBeamStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBeamStreamSuspenseQuery`](index.md#usegetbeamstreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:753](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L753)

***

### GetBlockStorageByIdLazyQueryHookResult

> **GetBlockStorageByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetBlockStorageByIdLazyQuery`](index.md#usegetblockstoragebyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1085](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1085)

***

### GetBlockStorageByIdQueryHookResult

> **GetBlockStorageByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetBlockStorageByIdQuery`](index.md#usegetblockstoragebyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1084](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1084)

***

### GetBlockStorageByIdQueryResult

> **GetBlockStorageByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetBlockStorageByIdQuery`, `Types.GetBlockStorageByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1087](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1087)

***

### GetBlockStorageByIdSuspenseQueryHookResult

> **GetBlockStorageByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetBlockStorageByIdSuspenseQuery`](index.md#usegetblockstoragebyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1086](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1086)

***

### GetContentBlockByIdLazyQueryHookResult

> **GetContentBlockByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockByIdLazyQuery`](index.md#usegetcontentblockbyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1043](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1043)

***

### GetContentBlockByIdQueryHookResult

> **GetContentBlockByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockByIdQuery`](index.md#usegetcontentblockbyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1042](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1042)

***

### GetContentBlockByIdQueryResult

> **GetContentBlockByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetContentBlockByIdQuery`, `Types.GetContentBlockByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1045](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1045)

***

### GetContentBlockByIdSuspenseQueryHookResult

> **GetContentBlockByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockByIdSuspenseQuery`](index.md#usegetcontentblockbyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1044](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1044)

***

### GetContentBlockStreamLazyQueryHookResult

> **GetContentBlockStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockStreamLazyQuery`](index.md#usegetcontentblockstreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1001](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1001)

***

### GetContentBlockStreamQueryHookResult

> **GetContentBlockStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockStreamQuery`](index.md#usegetcontentblockstreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1000](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1000)

***

### GetContentBlockStreamQueryResult

> **GetContentBlockStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetContentBlockStreamQuery`, `Types.GetContentBlockStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1003](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1003)

***

### GetContentBlockStreamSuspenseQueryHookResult

> **GetContentBlockStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetContentBlockStreamSuspenseQuery`](index.md#usegetcontentblockstreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1002](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1002)

***

### GetFollowDocumentsByDidLazyQueryHookResult

> **GetFollowDocumentsByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowDocumentsByDidLazyQuery`](index.md#usegetfollowdocumentsbydidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2026](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2026)

***

### GetFollowDocumentsByDidQueryHookResult

> **GetFollowDocumentsByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowDocumentsByDidQuery`](index.md#usegetfollowdocumentsbydidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2025](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2025)

***

### GetFollowDocumentsByDidQueryResult

> **GetFollowDocumentsByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetFollowDocumentsByDidQuery`, `Types.GetFollowDocumentsByDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2028](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2028)

***

### GetFollowDocumentsByDidSuspenseQueryHookResult

> **GetFollowDocumentsByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowDocumentsByDidSuspenseQuery`](index.md#usegetfollowdocumentsbydidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2027](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2027)

***

### GetFollowersListByDidLazyQueryHookResult

> **GetFollowersListByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowersListByDidLazyQuery`](index.md#usegetfollowerslistbydidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2643](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2643)

***

### GetFollowersListByDidQueryHookResult

> **GetFollowersListByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowersListByDidQuery`](index.md#usegetfollowerslistbydidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2642](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2642)

***

### GetFollowersListByDidQueryResult

> **GetFollowersListByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetFollowersListByDidQuery`, `Types.GetFollowersListByDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2645](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2645)

***

### GetFollowersListByDidSuspenseQueryHookResult

> **GetFollowersListByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowersListByDidSuspenseQuery`](index.md#usegetfollowerslistbydidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2644](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2644)

***

### GetFollowingListByDidLazyQueryHookResult

> **GetFollowingListByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowingListByDidLazyQuery`](index.md#usegetfollowinglistbydidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2563](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2563)

***

### GetFollowingListByDidQueryHookResult

> **GetFollowingListByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowingListByDidQuery`](index.md#usegetfollowinglistbydidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2562](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2562)

***

### GetFollowingListByDidQueryResult

> **GetFollowingListByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetFollowingListByDidQuery`, `Types.GetFollowingListByDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2565](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2565)

***

### GetFollowingListByDidSuspenseQueryHookResult

> **GetFollowingListByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetFollowingListByDidSuspenseQuery`](index.md#usegetfollowinglistbydidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2564](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2564)

***

### GetIndexedStreamCountLazyQueryHookResult

> **GetIndexedStreamCountLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamCountLazyQuery`](index.md#usegetindexedstreamcountlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1206](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1206)

***

### GetIndexedStreamCountQueryHookResult

> **GetIndexedStreamCountQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamCountQuery`](index.md#usegetindexedstreamcountquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1205](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1205)

***

### GetIndexedStreamCountQueryResult

> **GetIndexedStreamCountQueryResult**: `Apollo.QueryResult`\<`Types.GetIndexedStreamCountQuery`, `Types.GetIndexedStreamCountQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1208](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1208)

***

### GetIndexedStreamCountSuspenseQueryHookResult

> **GetIndexedStreamCountSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamCountSuspenseQuery`](index.md#usegetindexedstreamcountsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1207](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1207)

***

### GetIndexedStreamLazyQueryHookResult

> **GetIndexedStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamLazyQuery`](index.md#usegetindexedstreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1162](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1162)

***

### GetIndexedStreamQueryHookResult

> **GetIndexedStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamQuery`](index.md#usegetindexedstreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1161](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1161)

***

### GetIndexedStreamQueryResult

> **GetIndexedStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetIndexedStreamQuery`, `Types.GetIndexedStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1164](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1164)

***

### GetIndexedStreamSuspenseQueryHookResult

> **GetIndexedStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetIndexedStreamSuspenseQuery`](index.md#usegetindexedstreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1163](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1163)

***

### GetInterestsByDidLazyQueryHookResult

> **GetInterestsByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByDidLazyQuery`](index.md#usegetinterestsbydidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2438](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2438)

***

### GetInterestsByDidQueryHookResult

> **GetInterestsByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByDidQuery`](index.md#usegetinterestsbydidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2437](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2437)

***

### GetInterestsByDidQueryResult

> **GetInterestsByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsByDidQuery`, `Types.GetInterestsByDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2440](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2440)

***

### GetInterestsByDidSuspenseQueryHookResult

> **GetInterestsByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByDidSuspenseQuery`](index.md#usegetinterestsbydidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2439](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2439)

***

### GetInterestsByIdLazyQueryHookResult

> **GetInterestsByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByIdLazyQuery`](index.md#usegetinterestsbyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2487](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2487)

***

### GetInterestsByIdQueryHookResult

> **GetInterestsByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByIdQuery`](index.md#usegetinterestsbyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2486](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2486)

***

### GetInterestsByIdQueryResult

> **GetInterestsByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsByIdQuery`, `Types.GetInterestsByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2489](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2489)

***

### GetInterestsByIdSuspenseQueryHookResult

> **GetInterestsByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsByIdSuspenseQuery`](index.md#usegetinterestsbyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2488](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2488)

***

### GetInterestsLazyQueryHookResult

> **GetInterestsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsLazyQuery`](index.md#usegetinterestslazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2314](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2314)

***

### GetInterestsQueryHookResult

> **GetInterestsQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsQuery`](index.md#usegetinterestsquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2313](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2313)

***

### GetInterestsQueryResult

> **GetInterestsQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsQuery`, `Types.GetInterestsQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2316](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2316)

***

### GetInterestsStreamLazyQueryHookResult

> **GetInterestsStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsStreamLazyQuery`](index.md#usegetinterestsstreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2386](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2386)

***

### GetInterestsStreamQueryHookResult

> **GetInterestsStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsStreamQuery`](index.md#usegetinterestsstreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2385](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2385)

***

### GetInterestsStreamQueryResult

> **GetInterestsStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetInterestsStreamQuery`, `Types.GetInterestsStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2388](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2388)

***

### GetInterestsStreamSuspenseQueryHookResult

> **GetInterestsStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsStreamSuspenseQuery`](index.md#usegetinterestsstreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2387](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2387)

***

### GetInterestsSuspenseQueryHookResult

> **GetInterestsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetInterestsSuspenseQuery`](index.md#usegetinterestssuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2315](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2315)

***

### GetMyProfileLazyQueryHookResult

> **GetMyProfileLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetMyProfileLazyQuery`](index.md#usegetmyprofilelazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1952](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1952)

***

### GetMyProfileQueryHookResult

> **GetMyProfileQueryHookResult**: `ReturnType`\<*typeof* [`useGetMyProfileQuery`](index.md#usegetmyprofilequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1951](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1951)

***

### GetMyProfileQueryResult

> **GetMyProfileQueryResult**: `Apollo.QueryResult`\<`Types.GetMyProfileQuery`, `Types.GetMyProfileQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1954](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1954)

***

### GetMyProfileSuspenseQueryHookResult

> **GetMyProfileSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetMyProfileSuspenseQuery`](index.md#usegetmyprofilesuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1953](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1953)

***

### GetProfileByDidLazyQueryHookResult

> **GetProfileByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByDidLazyQuery`](index.md#usegetprofilebydidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2113](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2113)

***

### GetProfileByDidQueryHookResult

> **GetProfileByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByDidQuery`](index.md#usegetprofilebydidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2112](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2112)

***

### GetProfileByDidQueryResult

> **GetProfileByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileByDidQuery`, `Types.GetProfileByDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2115](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2115)

***

### GetProfileByDidSuspenseQueryHookResult

> **GetProfileByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByDidSuspenseQuery`](index.md#usegetprofilebydidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2114](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2114)

***

### GetProfileByIdLazyQueryHookResult

> **GetProfileByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByIdLazyQuery`](index.md#usegetprofilebyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2068](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2068)

***

### GetProfileByIdQueryHookResult

> **GetProfileByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByIdQuery`](index.md#usegetprofilebyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2067](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2067)

***

### GetProfileByIdQueryResult

> **GetProfileByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileByIdQuery`, `Types.GetProfileByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2070](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2070)

***

### GetProfileByIdSuspenseQueryHookResult

> **GetProfileByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileByIdSuspenseQuery`](index.md#usegetprofilebyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2069](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2069)

***

### GetProfilesLazyQueryHookResult

> **GetProfilesLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfilesLazyQuery`](index.md#usegetprofileslazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2176](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2176)

***

### GetProfilesQueryHookResult

> **GetProfilesQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfilesQuery`](index.md#usegetprofilesquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2175](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2175)

***

### GetProfilesQueryResult

> **GetProfilesQueryResult**: `Apollo.QueryResult`\<`Types.GetProfilesQuery`, `Types.GetProfilesQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2178](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2178)

***

### GetProfilesSuspenseQueryHookResult

> **GetProfilesSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfilesSuspenseQuery`](index.md#usegetprofilessuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2177](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2177)

***

### GetProfileStatsByDidLazyQueryHookResult

> **GetProfileStatsByDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStatsByDidLazyQuery`](index.md#usegetprofilestatsbydidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2692](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2692)

***

### GetProfileStatsByDidQueryHookResult

> **GetProfileStatsByDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStatsByDidQuery`](index.md#usegetprofilestatsbydidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2691](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2691)

***

### GetProfileStatsByDidQueryResult

> **GetProfileStatsByDidQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileStatsByDidQuery`, `Types.GetProfileStatsByDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2694](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2694)

***

### GetProfileStatsByDidSuspenseQueryHookResult

> **GetProfileStatsByDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStatsByDidSuspenseQuery`](index.md#usegetprofilestatsbydidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2693](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2693)

***

### GetProfileStreamLazyQueryHookResult

> **GetProfileStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStreamLazyQuery`](index.md#usegetprofilestreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2248](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2248)

***

### GetProfileStreamQueryHookResult

> **GetProfileStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStreamQuery`](index.md#usegetprofilestreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2247](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2247)

***

### GetProfileStreamQueryResult

> **GetProfileStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetProfileStreamQuery`, `Types.GetProfileStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2250](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2250)

***

### GetProfileStreamSuspenseQueryHookResult

> **GetProfileStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetProfileStreamSuspenseQuery`](index.md#usegetprofilestreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2249](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2249)

***

### GetReflectionByIdLazyQueryHookResult

> **GetReflectionByIdLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionByIdLazyQuery`](index.md#usegetreflectionbyidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1570](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1570)

***

### GetReflectionByIdQueryHookResult

> **GetReflectionByIdQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionByIdQuery`](index.md#usegetreflectionbyidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1569](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1569)

***

### GetReflectionByIdQueryResult

> **GetReflectionByIdQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionByIdQuery`, `Types.GetReflectionByIdQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1572](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1572)

***

### GetReflectionByIdSuspenseQueryHookResult

> **GetReflectionByIdSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionByIdSuspenseQuery`](index.md#usegetreflectionbyidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1571](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1571)

***

### GetReflectionsByAuthorDidLazyQueryHookResult

> **GetReflectionsByAuthorDidLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsByAuthorDidLazyQuery`](index.md#usegetreflectionsbyauthordidlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1452](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1452)

***

### GetReflectionsByAuthorDidQueryHookResult

> **GetReflectionsByAuthorDidQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsByAuthorDidQuery`](index.md#usegetreflectionsbyauthordidquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1451](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1451)

***

### GetReflectionsByAuthorDidQueryResult

> **GetReflectionsByAuthorDidQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionsByAuthorDidQuery`, `Types.GetReflectionsByAuthorDidQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1454](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1454)

***

### GetReflectionsByAuthorDidSuspenseQueryHookResult

> **GetReflectionsByAuthorDidSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsByAuthorDidSuspenseQuery`](index.md#usegetreflectionsbyauthordidsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1453](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1453)

***

### GetReflectionsFromBeamLazyQueryHookResult

> **GetReflectionsFromBeamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsFromBeamLazyQuery`](index.md#usegetreflectionsfrombeamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1383](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1383)

***

### GetReflectionsFromBeamQueryHookResult

> **GetReflectionsFromBeamQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsFromBeamQuery`](index.md#usegetreflectionsfrombeamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1382](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1382)

***

### GetReflectionsFromBeamQueryResult

> **GetReflectionsFromBeamQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionsFromBeamQuery`, `Types.GetReflectionsFromBeamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1385](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1385)

***

### GetReflectionsFromBeamSuspenseQueryHookResult

> **GetReflectionsFromBeamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionsFromBeamSuspenseQuery`](index.md#usegetreflectionsfrombeamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1384](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1384)

***

### GetReflectionStreamLazyQueryHookResult

> **GetReflectionStreamLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionStreamLazyQuery`](index.md#usegetreflectionstreamlazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1528](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1528)

***

### GetReflectionStreamQueryHookResult

> **GetReflectionStreamQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionStreamQuery`](index.md#usegetreflectionstreamquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1527](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1527)

***

### GetReflectionStreamQueryResult

> **GetReflectionStreamQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectionStreamQuery`, `Types.GetReflectionStreamQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1530](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1530)

***

### GetReflectionStreamSuspenseQueryHookResult

> **GetReflectionStreamSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectionStreamSuspenseQuery`](index.md#usegetreflectionstreamsuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1529](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1529)

***

### GetReflectReflectionsLazyQueryHookResult

> **GetReflectReflectionsLazyQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectReflectionsLazyQuery`](index.md#usegetreflectreflectionslazyquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1633](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1633)

***

### GetReflectReflectionsQueryHookResult

> **GetReflectReflectionsQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectReflectionsQuery`](index.md#usegetreflectreflectionsquery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1632](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1632)

***

### GetReflectReflectionsQueryResult

> **GetReflectReflectionsQueryResult**: `Apollo.QueryResult`\<`Types.GetReflectReflectionsQuery`, `Types.GetReflectReflectionsQueryVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1635](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1635)

***

### GetReflectReflectionsSuspenseQueryHookResult

> **GetReflectReflectionsSuspenseQueryHookResult**: `ReturnType`\<*typeof* [`useGetReflectReflectionsSuspenseQuery`](index.md#usegetreflectreflectionssuspensequery)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1634](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1634)

***

### IndexBeamMutationFn

> **IndexBeamMutationFn**: `Apollo.MutationFunction`\<`Types.IndexBeamMutation`, `Types.IndexBeamMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:475](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L475)

***

### IndexBeamMutationHookResult

> **IndexBeamMutationHookResult**: `ReturnType`\<*typeof* [`useIndexBeamMutation`](index.md#useindexbeammutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:499](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L499)

***

### IndexBeamMutationOptions

> **IndexBeamMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexBeamMutation`, `Types.IndexBeamMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:501](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L501)

***

### IndexBeamMutationResult

> **IndexBeamMutationResult**: `Apollo.MutationResult`\<`Types.IndexBeamMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:500](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L500)

***

### IndexContentBlockMutationFn

> **IndexContentBlockMutationFn**: `Apollo.MutationFunction`\<`Types.IndexContentBlockMutation`, `Types.IndexContentBlockMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:511](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L511)

***

### IndexContentBlockMutationHookResult

> **IndexContentBlockMutationHookResult**: `ReturnType`\<*typeof* [`useIndexContentBlockMutation`](index.md#useindexcontentblockmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:535](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L535)

***

### IndexContentBlockMutationOptions

> **IndexContentBlockMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexContentBlockMutation`, `Types.IndexContentBlockMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:537](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L537)

***

### IndexContentBlockMutationResult

> **IndexContentBlockMutationResult**: `Apollo.MutationResult`\<`Types.IndexContentBlockMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:536](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L536)

***

### IndexProfileMutationFn

> **IndexProfileMutationFn**: `Apollo.MutationFunction`\<`Types.IndexProfileMutation`, `Types.IndexProfileMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1645](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1645)

***

### IndexProfileMutationHookResult

> **IndexProfileMutationHookResult**: `ReturnType`\<*typeof* [`useIndexProfileMutation`](index.md#useindexprofilemutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1669](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1669)

***

### IndexProfileMutationOptions

> **IndexProfileMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexProfileMutation`, `Types.IndexProfileMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1671](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1671)

***

### IndexProfileMutationResult

> **IndexProfileMutationResult**: `Apollo.MutationResult`\<`Types.IndexProfileMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1670](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1670)

***

### IndexReflectionMutationFn

> **IndexReflectionMutationFn**: `Apollo.MutationFunction`\<`Types.IndexReflectionMutation`, `Types.IndexReflectionMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1218](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1218)

***

### IndexReflectionMutationHookResult

> **IndexReflectionMutationHookResult**: `ReturnType`\<*typeof* [`useIndexReflectionMutation`](index.md#useindexreflectionmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1242](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1242)

***

### IndexReflectionMutationOptions

> **IndexReflectionMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.IndexReflectionMutation`, `Types.IndexReflectionMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1244](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1244)

***

### IndexReflectionMutationResult

> **IndexReflectionMutationResult**: `Apollo.MutationResult`\<`Types.IndexReflectionMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1243](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1243)

***

### SetAppReleaseMutationFn

> **SetAppReleaseMutationFn**: `Apollo.MutationFunction`\<`Types.SetAppReleaseMutation`, `Types.SetAppReleaseMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2707](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2707)

***

### SetAppReleaseMutationHookResult

> **SetAppReleaseMutationHookResult**: `ReturnType`\<*typeof* [`useSetAppReleaseMutation`](index.md#usesetappreleasemutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2730](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2730)

***

### SetAppReleaseMutationOptions

> **SetAppReleaseMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.SetAppReleaseMutation`, `Types.SetAppReleaseMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2732](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2732)

***

### SetAppReleaseMutationResult

> **SetAppReleaseMutationResult**: `Apollo.MutationResult`\<`Types.SetAppReleaseMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2731](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2731)

***

### UpdateAkashaReflectMutationFn

> **UpdateAkashaReflectMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateAkashaReflectMutation`, `Types.UpdateAkashaReflectMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1291](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1291)

***

### UpdateAkashaReflectMutationHookResult

> **UpdateAkashaReflectMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateAkashaReflectMutation`](index.md#useupdateakashareflectmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1314](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1314)

***

### UpdateAkashaReflectMutationOptions

> **UpdateAkashaReflectMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateAkashaReflectMutation`, `Types.UpdateAkashaReflectMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1316](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1316)

***

### UpdateAkashaReflectMutationResult

> **UpdateAkashaReflectMutationResult**: `Apollo.MutationResult`\<`Types.UpdateAkashaReflectMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1315](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1315)

***

### UpdateAppMutationFn

> **UpdateAppMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateAppMutation`, `Types.UpdateAppMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2819](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2819)

***

### UpdateAppMutationHookResult

> **UpdateAppMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateAppMutation`](index.md#useupdateappmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2842](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2842)

***

### UpdateAppMutationOptions

> **UpdateAppMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateAppMutation`, `Types.UpdateAppMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2844](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2844)

***

### UpdateAppMutationResult

> **UpdateAppMutationResult**: `Apollo.MutationResult`\<`Types.UpdateAppMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2843](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2843)

***

### UpdateAppReleaseMutationFn

> **UpdateAppReleaseMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateAppReleaseMutation`, `Types.UpdateAppReleaseMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2745](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2745)

***

### UpdateAppReleaseMutationHookResult

> **UpdateAppReleaseMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateAppReleaseMutation`](index.md#useupdateappreleasemutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:2768](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2768)

***

### UpdateAppReleaseMutationOptions

> **UpdateAppReleaseMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateAppReleaseMutation`, `Types.UpdateAppReleaseMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2770](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2770)

***

### UpdateAppReleaseMutationResult

> **UpdateAppReleaseMutationResult**: `Apollo.MutationResult`\<`Types.UpdateAppReleaseMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:2769](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2769)

***

### UpdateBeamMutationFn

> **UpdateBeamMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateBeamMutation`, `Types.UpdateBeamMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:584](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L584)

***

### UpdateBeamMutationHookResult

> **UpdateBeamMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateBeamMutation`](index.md#useupdatebeammutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:607](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L607)

***

### UpdateBeamMutationOptions

> **UpdateBeamMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateBeamMutation`, `Types.UpdateBeamMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:609](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L609)

***

### UpdateBeamMutationResult

> **UpdateBeamMutationResult**: `Apollo.MutationResult`\<`Types.UpdateBeamMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:608](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L608)

***

### UpdateContentBlockMutationFn

> **UpdateContentBlockMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateContentBlockMutation`, `Types.UpdateContentBlockMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:656](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L656)

***

### UpdateContentBlockMutationHookResult

> **UpdateContentBlockMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateContentBlockMutation`](index.md#useupdatecontentblockmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:679](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L679)

***

### UpdateContentBlockMutationOptions

> **UpdateContentBlockMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateContentBlockMutation`, `Types.UpdateContentBlockMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:681](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L681)

***

### UpdateContentBlockMutationResult

> **UpdateContentBlockMutationResult**: `Apollo.MutationResult`\<`Types.UpdateContentBlockMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:680](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L680)

***

### UpdateFollowMutationFn

> **UpdateFollowMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateFollowMutation`, `Types.UpdateFollowMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1888](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1888)

***

### UpdateFollowMutationHookResult

> **UpdateFollowMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateFollowMutation`](index.md#useupdatefollowmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1911](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1911)

***

### UpdateFollowMutationOptions

> **UpdateFollowMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateFollowMutation`, `Types.UpdateFollowMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1913](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1913)

***

### UpdateFollowMutationResult

> **UpdateFollowMutationResult**: `Apollo.MutationResult`\<`Types.UpdateFollowMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1912](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1912)

***

### UpdateInterestsMutationFn

> **UpdateInterestsMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateInterestsMutation`, `Types.UpdateInterestsMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1804](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1804)

***

### UpdateInterestsMutationHookResult

> **UpdateInterestsMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateInterestsMutation`](index.md#useupdateinterestsmutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1827](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1827)

***

### UpdateInterestsMutationOptions

> **UpdateInterestsMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateInterestsMutation`, `Types.UpdateInterestsMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1829](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1829)

***

### UpdateInterestsMutationResult

> **UpdateInterestsMutationResult**: `Apollo.MutationResult`\<`Types.UpdateInterestsMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1828](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1828)

***

### UpdateProfileMutationFn

> **UpdateProfileMutationFn**: `Apollo.MutationFunction`\<`Types.UpdateProfileMutation`, `Types.UpdateProfileMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1718](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1718)

***

### UpdateProfileMutationHookResult

> **UpdateProfileMutationHookResult**: `ReturnType`\<*typeof* [`useUpdateProfileMutation`](index.md#useupdateprofilemutation)\>

Defined in: [libs/hooks/src/generated/apollo.ts:1741](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1741)

***

### UpdateProfileMutationOptions

> **UpdateProfileMutationOptions**: `Apollo.BaseMutationOptions`\<`Types.UpdateProfileMutation`, `Types.UpdateProfileMutationVariables`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1743](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1743)

***

### UpdateProfileMutationResult

> **UpdateProfileMutationResult**: `Apollo.MutationResult`\<`Types.UpdateProfileMutation`\>

Defined in: [libs/hooks/src/generated/apollo.ts:1742](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1742)

## Variables

### AkashaAppFragmentDoc

> `const` **AkashaAppFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:401](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L401)

***

### AkashaAppFragmentMFragmentDoc

> `const` **AkashaAppFragmentMFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:303](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L303)

***

### AppReleaseFragmentDoc

> `const` **AppReleaseFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:454](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L454)

***

### AppReleaseFragmentMFragmentDoc

> `const` **AppReleaseFragmentMFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:340](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L340)

***

### BeamFragmentDoc

> `const` **BeamFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:83](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L83)

***

### BeamFragmentMFragmentDoc

> `const` **BeamFragmentMFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:16](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L16)

***

### BlockStorageFragmentDoc

> `const` **BlockStorageFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:153](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L153)

***

### ContentBlockFragmentDoc

> `const` **ContentBlockFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:123](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L123)

***

### ContentBlockFragmentMFragmentDoc

> `const` **ContentBlockFragmentMFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:53](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L53)

***

### COOKIE\_CONSENT\_NAME

> `const` **COOKIE\_CONSENT\_NAME**: `"ewa-cookie-consent"` = `'ewa-cookie-consent'`

Defined in: [libs/hooks/src/use-analytics.tsx:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L12)

**`Internal`**

***

### CreateAppDocument

> `const` **CreateAppDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2771](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2771)

***

### CreateBeamDocument

> `const` **CreateBeamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:538](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L538)

***

### CreateContentBlockDocument

> `const` **CreateContentBlockDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:610](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L610)

***

### CreateFollowDocument

> `const` **CreateFollowDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1830](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1830)

***

### CreateInterestsDocument

> `const` **CreateInterestsDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1744](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1744)

***

### CreateProfileDocument

> `const` **CreateProfileDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1672](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1672)

***

### CreateReflectDocument

> `const` **CreateReflectDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1245](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1245)

***

### GetAppReleaseByIdDocument

> `const` **GetAppReleaseByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:3228](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3228)

***

### GetAppsByIdDocument

> `const` **GetAppsByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2981](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2981)

***

### GetAppsByPublisherDidDocument

> `const` **GetAppsByPublisherDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:3024](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3024)

***

### GetAppsDocument

> `const` **GetAppsDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2845](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2845)

***

### GetAppsReleasesByPublisherDidDocument

> `const` **GetAppsReleasesByPublisherDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:3093](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3093)

***

### GetAppsReleasesDocument

> `const` **GetAppsReleasesDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:3163](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L3163)

***

### GetAppsStreamDocument

> `const` **GetAppsStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2909](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2909)

***

### GetBeamByIdDocument

> `const` **GetBeamByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:888](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L888)

***

### GetBeamsByAuthorDidDocument

> `const` **GetBeamsByAuthorDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:818](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L818)

***

### GetBeamsDocument

> `const` **GetBeamsDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:755](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L755)

***

### GetBeamStreamDocument

> `const` **GetBeamStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:682](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L682)

***

### GetBlockStorageByIdDocument

> `const` **GetBlockStorageByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1046](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1046)

***

### GetContentBlockByIdDocument

> `const` **GetContentBlockByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1004](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1004)

***

### GetContentBlockStreamDocument

> `const` **GetContentBlockStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:930](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L930)

***

### GetFollowDocumentsByDidDocument

> `const` **GetFollowDocumentsByDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1955](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1955)

***

### GetFollowersListByDidDocument

> `const` **GetFollowersListByDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2566](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2566)

***

### GetFollowingListByDidDocument

> `const` **GetFollowingListByDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2490](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2490)

***

### GetIndexedStreamCountDocument

> `const` **GetIndexedStreamCountDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1165](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1165)

***

### GetIndexedStreamDocument

> `const` **GetIndexedStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1088](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1088)

***

### GetInterestsByDidDocument

> `const` **GetInterestsByDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2389](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2389)

***

### GetInterestsByIdDocument

> `const` **GetInterestsByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2441](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2441)

***

### GetInterestsDocument

> `const` **GetInterestsDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2251](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2251)

***

### GetInterestsStreamDocument

> `const` **GetInterestsStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2317](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2317)

***

### GetMyProfileDocument

> `const` **GetMyProfileDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1914](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1914)

***

### GetProfileByDidDocument

> `const` **GetProfileByDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2071](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2071)

***

### GetProfileByIdDocument

> `const` **GetProfileByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2029](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2029)

***

### GetProfilesDocument

> `const` **GetProfilesDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2116](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2116)

***

### GetProfileStatsByDidDocument

> `const` **GetProfileStatsByDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2646](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2646)

***

### GetProfileStreamDocument

> `const` **GetProfileStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2179](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2179)

***

### GetReflectionByIdDocument

> `const` **GetReflectionByIdDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1531](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1531)

***

### GetReflectionsByAuthorDidDocument

> `const` **GetReflectionsByAuthorDidDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1386](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1386)

***

### GetReflectionsFromBeamDocument

> `const` **GetReflectionsFromBeamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1317](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1317)

***

### GetReflectionStreamDocument

> `const` **GetReflectionStreamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1455](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1455)

***

### GetReflectReflectionsDocument

> `const` **GetReflectReflectionsDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1573](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1573)

***

### IndexBeamDocument

> `const` **IndexBeamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:466](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L466)

***

### IndexContentBlockDocument

> `const` **IndexContentBlockDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:502](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L502)

***

### IndexedBeamFragmentDoc

> `const` **IndexedBeamFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:6](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L6)

***

### IndexedContentBlockFragmentDoc

> `const` **IndexedContentBlockFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:11](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L11)

***

### IndexedProfileFragmentDoc

> `const` **IndexedProfileFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:249](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L249)

***

### IndexedReflectFragmentDoc

> `const` **IndexedReflectFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:190](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L190)

***

### IndexProfileDocument

> `const` **IndexProfileDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1636](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1636)

***

### IndexReflectionDocument

> `const` **IndexReflectionDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1209](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1209)

***

### ReflectFragmentDoc

> `const` **ReflectFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:222](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L222)

***

### ReflectFragmentMFragmentDoc

> `const` **ReflectFragmentMFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:195](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L195)

***

### SetAppReleaseDocument

> `const` **SetAppReleaseDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2695](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2695)

***

### UpdateAkashaReflectDocument

> `const` **UpdateAkashaReflectDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1281](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1281)

***

### UpdateAppDocument

> `const` **UpdateAppDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2808](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2808)

***

### UpdateAppReleaseDocument

> `const` **UpdateAppReleaseDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:2733](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L2733)

***

### UpdateBeamDocument

> `const` **UpdateBeamDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:574](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L574)

***

### UpdateContentBlockDocument

> `const` **UpdateContentBlockDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:646](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L646)

***

### UpdateFollowDocument

> `const` **UpdateFollowDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1872](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1872)

***

### UpdateInterestsDocument

> `const` **UpdateInterestsDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1787](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1787)

***

### UpdateProfileDocument

> `const` **UpdateProfileDocument**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:1708](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L1708)

***

### UserProfileFragmentDoc

> `const` **UserProfileFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:352](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L352)

***

### UserProfileFragmentMFragmentDoc

> `const` **UserProfileFragmentMFragmentDoc**: `DocumentNode`

Defined in: [libs/hooks/src/generated/apollo.ts:254](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/generated/apollo.ts#L254)

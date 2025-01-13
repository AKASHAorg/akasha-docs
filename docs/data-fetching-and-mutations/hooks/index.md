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

## Variables

### COOKIE\_CONSENT\_NAME

> `const` **COOKIE\_CONSENT\_NAME**: `"ewa-cookie-consent"` = `'ewa-cookie-consent'`

Defined in: [libs/hooks/src/use-analytics.tsx:12](https://github.com/AKASHAorg/akasha-core/blob/accdc017e1e65c245b76ccd71c1f84921b51b3d5/libs/hooks/src/use-analytics.tsx#L12)

**`Internal`**

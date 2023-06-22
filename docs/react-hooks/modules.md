---
id: "modules"
title: "React hooks"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [CookieConsentTypes](enums/CookieConsentTypes.md)

## Interfaces

- [EntryReport](interfaces/EntryReport.md)
- [FormProfileData](interfaces/FormProfileData.md)
- [ICount](interfaces/ICount.md)
- [ILogItem](interfaces/ILogItem.md)
- [IModeratedItem](interfaces/IModeratedItem.md)
- [IPendingItem](interfaces/IPendingItem.md)
- [LoginState](interfaces/LoginState.md)

## Variables

### ThemeWrapper

• `Const` **ThemeWrapper**: `React.FC`<`RootComponentProps`\>

React component that fetches the user-selected theme name from localStorage
and passes it to the ThemeSelector component along with all available themes.

#### Defined in

[ui/hooks/src/utils/theme-wrapper.tsx:10](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/theme-wrapper.tsx#L10)

___

### constants

• **constants**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BASE_DECISION_URL` | `string` |
| `BASE_MODERATOR_URL` | `string` |
| `BASE_REASONS_URL` | `string` |
| `BASE_REPORT_URL` | `string` |
| `BASE_STATUS_URL` | `string` |
| `CHECK_MODERATOR_KEY` | `string` |
| `CONNECT_PROVIDER_KEY` | `string` |
| `DEFAULT_FETCH_TIMEOUT` | `number` |
| `DELISTED_ITEMS_KEY` | `string` |
| `INJECTED_PROVIDER_KEY` | `string` |
| `KEPT_ITEMS_KEY` | `string` |
| `LOG_ITEMS_KEY` | `string` |
| `MODERATED_CACHE_KEY_PREFIX` | `string` |
| `MODERATION_COUNT_CACHE_KEY_PREFIX` | `string` |
| `MODERATION_ITEMS_COUNT_KEY` | `string` |
| `MODERATION_ITEM_FLAGS_KEY` | `string` |
| `MODERATION_STATUS_KEY` | `string` |
| `PENDING_CACHE_KEY_PREFIX` | `string` |
| `PENDING_ITEMS_KEY` | `string` |
| `REQUIRED_NETWORK_KEY` | `string` |
| `TOKEN_VALIDATION_KEY` | `string` |

#### Defined in

[ui/hooks/src/constants.ts:29](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/constants.ts#L29)

## Functions

### checkPostActive

▸ **checkPostActive**(`entry`): `boolean`

Utility to check whether a post is active or not

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `Pick`<`PostResponse`, ``"content"`` \| ``"delisted"``\> |

#### Returns

`boolean`

#### Defined in

[ui/hooks/src/utils/checkPostActive.ts:6](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/checkPostActive.ts#L6)

___

### createPendingEntry

▸ **createPendingEntry**(`author`, `entryPublishData`): `PendingEntry`

Utility to create an entry yet to be published

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `IProfileData` |
| `entryPublishData` | `IPublishData` & { `entryId?`: `string`  } |

#### Returns

`PendingEntry`

#### Defined in

[ui/hooks/src/utils/entry-utils.ts:268](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/entry-utils.ts#L268)

___

### getLinkPreview

▸ **getLinkPreview**(`url`): `Promise`<`LinkPreview`\>

Utility to get preview of a specified url

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`LinkPreview`\>

#### Defined in

[ui/hooks/src/utils/media-utils.ts:108](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/media-utils.ts#L108)

___

### getMediaUrl

▸ **getMediaUrl**(`hash?`): `Object`

 Utility to build gateway links to ipfs content

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fallbackLink` | `string` |
| `originLink` | `string` |
| `pathLink` | `string` |

#### Defined in

[ui/hooks/src/utils/media-utils.ts:17](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/media-utils.ts#L17)

___

### logError

▸ **logError**(`name`, `errorInfo`): `void`

Utility to log error to a specified logger

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `errorInfo` | `Error` |

#### Returns

`void`

#### Defined in

[ui/hooks/src/utils/error-handler.ts:21](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/error-handler.ts#L21)

___

### mapEntry

▸ **mapEntry**(`entry`, `logger?`): `IEntryData`

Remap entry data coming from a response to the format expected by EntryCard
content - from b64 to slate format
profile images - append ipfs gateway
entry images - append ipfs gateway

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `PostResponse` \| `CommentResponse` |
| `logger?` | `ILogger` |

#### Returns

`IEntryData`

#### Defined in

[ui/hooks/src/utils/entry-utils.ts:99](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/entry-utils.ts#L99)

___

### switchToRequiredNetwork

▸ **switchToRequiredNetwork**(): `Promise`<`void`\>

An utility function to switch to required network - Metamask

#### Returns

`Promise`<`void`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:37](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-injected-provider.ts#L37)

___

### uploadMediaToTextile

▸ **uploadMediaToTextile**(`data`, `isUrl?`): `Promise`<{ `data`: { `originalSrc`: `string` ; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = res.size; `src`: { `fallbackUrl`: `string` = ipfsLinks.fallbackLink; `url`: `string` = ipfsLinks.originLink }  } ; `error`: `undefined` = error } \| { `data`: `undefined` ; `error`: `any` = error }\>

Utility to upload media to textile bucket

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `File` | `undefined` |
| `isUrl` | `boolean` | `false` |

#### Returns

`Promise`<{ `data`: { `originalSrc`: `string` ; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = res.size; `src`: { `fallbackUrl`: `string` = ipfsLinks.fallbackLink; `url`: `string` = ipfsLinks.originLink }  } ; `error`: `undefined` = error } \| { `data`: `undefined` ; `error`: `any` = error }\>

#### Defined in

[ui/hooks/src/utils/media-utils.ts:62](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/media-utils.ts#L62)

___

### useAnalytics

▸ **useAnalytics**(): [`UseAnalyticsActions`]

Hook to handle analytics

**`example`** useAnalytics hook
```typescript
const [analyticsActions] = useAnalytics();

analyticsActions.trackEvent({
category: 'some-category',
action: 'some-action',
});
```

#### Returns

[`UseAnalyticsActions`]

#### Defined in

[ui/hooks/src/use-analytics.tsx:44](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-analytics.tsx#L44)

___

### useAppDescription

▸ **useAppDescription**(`ipfsLink`): `UseQueryResult`<`string`, `Error`\>

Hook to get detailed description for app

**`example`** useAppDescription hook
```typescript
const detailedDescriptionQuery = useAppDescription('ipfslinktodescription');

const description = detailedDescriptionQuery.data
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipfsLink` | `string` |

#### Returns

`UseQueryResult`<`string`, `Error`\>

#### Defined in

[ui/hooks/src/use-app-description.ts:23](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-app-description.ts#L23)

___

### useCheckModerator

▸ **useCheckModerator**(`loggedUser`): `UseQueryResult`<`number`, `Error`\>

Hook to check if a user is a moderator

**`example`** useCheckModerator hook
```typescript
const checkModeratorQuery = useCheckModerator('logged-in-user-eth-address');

const isModerator = checkModeratorQuery.data === 200;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loggedUser` | `string` |

#### Returns

`UseQueryResult`<`number`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:207](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L207)

___

### useCheckNewNotifications

▸ **useCheckNewNotifications**(`loggedEthAddress`): `UseQueryResult`<`boolean`, `Error`\>

Hook to check for new notifications

**`example`** useCheckNewNotifications hook
```typescript
const checkNewNotificationsQuery = useCheckNewNotifications('logged-in-user-eth-address');

const hasNewNotifications = checkNewNotificationsQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loggedEthAddress` | `string` |

#### Returns

`UseQueryResult`<`boolean`, `Error`\>

#### Defined in

[ui/hooks/src/use-notifications.ts:127](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-notifications.ts#L127)

___

### useCheckSignup

▸ **useCheckSignup**(`ethAddress`): `UseQueryResult`<`boolean`, `Error`\>

Hook to check if a user is already registered

**`example`** useCheckSignup hook
```typescript
const checkSignupQuery = useCheckSignup('0x42b35jk53ifq');
// checkSignupQuery.data returns a boolean value which determines if one should proceed with signup process or not
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`UseQueryResult`<`boolean`, `Error`\>

#### Defined in

[ui/hooks/src/use-login.ts:379](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-login.ts#L379)

___

### useComment

▸ **useComment**(`commentID`, `enabler?`): `UseQueryResult`<`CommentResponse`, `Error`\>

Hook for fetching data for a specific comment

**`example`** useComment hook
```typescript
const itemType = 'COMMENT';
const commentQuery = useComment('some-comment-id', true);

const itemData = React.useMemo(() => {
if (itemType === 'COMMENT' && commentQuery.isSuccess) {
// mapEntry is a utility function that transforms the comment/post data into required format.
return mapEntry(commentQuery.data);
}
}, [itemType, commentQuery.data, commentQuery.isSuccess]);
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commentID` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |

#### Returns

`UseQueryResult`<`CommentResponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-comments.ts:116](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-comments.ts#L116)

___

### useConnectProvider

▸ **useConnectProvider**(`provider`): `UseQueryResult`<`boolean`, `unknown`\>

Hook to connect with one of the supported providers

**`example`** useConnectProvider hook
```typescript
const connectProviderQuery = useConnectProvider('selectedProvider');

// can be used as enabler for useNetworkState hook; so this check works only if provider has been connected.
const networkStateQuery = useNetworkState(connectProviderQuery.data);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `EthProviders` |

#### Returns

`UseQueryResult`<`boolean`, `unknown`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:78](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-injected-provider.ts#L78)

___

### useCreateComment

▸ **useCreateComment**(): `UseMutationResult`<`string`, `unknown`, `IPublishData` & { `postID`: `string`  }, { `entryId`: `string` = pendingID; `optimisticComment`: `IPublishData` & { `postID`: `string`  }  }\>

Hook for creating a new comment

**`example`** useCreateComment hook
```typescript
const createCommentQuery = useCreateComment('some-comment-id');
const newCommentData = { textContent: 'some text content', author: 'comment author', pubKey: 'comment-author-pubkey' }

createCommentQuery.mutate({ ...newCommentData , postID: 'some-post-id' });
```

#### Returns

`UseMutationResult`<`string`, `unknown`, `IPublishData` & { `postID`: `string`  }, { `entryId`: `string` = pendingID; `optimisticComment`: `IPublishData` & { `postID`: `string`  }  }\>

#### Defined in

[ui/hooks/src/use-comments.ts:207](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-comments.ts#L207)

___

### useCreatePost

▸ **useCreatePost**(): `UseMutationResult`<`string`, `unknown`, `IPublishData`, { `entryId`: `string` = pendingID; `optimisticEntry`: `IPublishData` & { `isPublishing`: `boolean` = true }  }\>

Hook to create a new post
pass the publish data from the editor to the mutate function

**`example`** useCreatePost hook
```typescript
const publishPostQuery = useCreatePost();

publishPostQuery.mutate({ pubKey: 'author-public-key', ...});
```

#### Returns

`UseMutationResult`<`string`, `unknown`, `IPublishData`, { `entryId`: `string` = pendingID; `optimisticEntry`: `IPublishData` & { `isPublishing`: `boolean` = true }  }\>

#### Defined in

[ui/hooks/src/use-posts.ts:416](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L416)

___

### useCurrentNetwork

▸ **useCurrentNetwork**(`enabler?`): `UseQueryResult`<`string`, `unknown`\>

Hook to check the user's current web3 network

**`example`** useCurrentNetwork hook
```typescript
const currentNetworkQuery = useCurrentNetwork(true);

const network = currentNetworkQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<`string`, `unknown`\>

network name

#### Defined in

[ui/hooks/src/use-network-state.ts:53](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-network-state.ts#L53)

___

### useDeleteBookmark

▸ **useDeleteBookmark**(): `UseMutationResult`<{ `data`: `string`[]  }, `unknown`, `string`, { `prevBmks`: { `entryId`: `string` ; `type`: `EntityTypes`  }[]  }\>

Hook used to delete a bookmark

**`example`** useDeleteBookmark hook
```typescript
const deleteBookmarkQuery = useDeleteBookmark();

deleteBookmarkQuery.mutate('dbkjjouyahljfe');
```

#### Returns

`UseMutationResult`<{ `data`: `string`[]  }, `unknown`, `string`, { `prevBmks`: { `entryId`: `string` ; `type`: `EntityTypes`  }[]  }\>

#### Defined in

[ui/hooks/src/use-bookmarks.ts:111](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-bookmarks.ts#L111)

___

### useDeleteComment

▸ **useDeleteComment**(`commentID`): `UseMutationResult`<``true``, `unknown`, `string`, { `previousComment`: `CommentResponse`  }\>

Hook for deleting a specific comment

**`example`** useDeleteComment hook
```typescript
const deleteCommentQuery = useDeleteComment('some-comment-id');

deleteCommentQuery.mutate('some-comment-id');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |

#### Returns

`UseMutationResult`<``true``, `unknown`, `string`, { `previousComment`: `CommentResponse`  }\>

#### Defined in

[ui/hooks/src/use-comments.ts:147](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-comments.ts#L147)

___

### useDeletePost

▸ **useDeletePost**(`postID`): `UseMutationResult`<{ `data`: { `removePost`: `boolean`  }  }, `unknown`, `string`, { `previousPost`: `Post_Response`  }\>

Hook to delete a post

**`example`** useDeletePost hook
```typescript
const deletePostQuery = useDeletePost('some-post-id');

deletePostQuery.mutate('some-post-id');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `postID` | `string` |

#### Returns

`UseMutationResult`<{ `data`: { `removePost`: `boolean`  }  }, `unknown`, `string`, { `previousPost`: `Post_Response`  }\>

#### Defined in

[ui/hooks/src/use-posts.ts:350](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L350)

___

### useEditComment

▸ **useEditComment**(`commentID`, `hasCommentData`): `UseMutationResult`<`void` \| { `data`: { `editComment`: `boolean`  }  }, `unknown`, `IPublishData` & { `postID`: `string`  }, { `comment`: `IPublishData` & { `postID`: `string`  }  }\>

Hook for editing a comment

**`example`** useEditComment hook
```typescript
const editCommentQuery = useEditComment('some-comment-id', true);
const editedCommentData = { textContent: 'some text content', author: 'comment author', pubKey: 'comment-author-pubkey' }

editCommentQuery.mutate({ ...editedCommentData, postID: 'some-post-id' });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |
| `hasCommentData` | `boolean` |

#### Returns

`UseMutationResult`<`void` \| { `data`: { `editComment`: `boolean`  }  }, `unknown`, `IPublishData` & { `postID`: `string`  }, { `comment`: `IPublishData` & { `postID`: `string`  }  }\>

#### Defined in

[ui/hooks/src/use-comments.ts:259](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-comments.ts#L259)

___

### useEditPost

▸ **useEditPost**(): `UseMutationResult`<`boolean`, `Error`, `IPublishData` & { `entryID`: `string`  }, { `editedPost`: `IPublishData` & { `entryID`: `string`  }  }\>

Hook to edit a post
pass the edited post data to the mutate function

**`example`** useEditPost hook
```typescript
const editPostQuery = useEditPost();

editPostQuery.mutate({ entryID: 'some-entry-id', ...});
```

#### Returns

`UseMutationResult`<`boolean`, `Error`, `IPublishData` & { `entryID`: `string`  }, { `editedPost`: `IPublishData` & { `entryID`: `string`  }  }\>

#### Defined in

[ui/hooks/src/use-posts.ts:470](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L470)

___

### useEnsByAddress

▸ **useEnsByAddress**(`ethAddress`): `UseQueryResult`<`string`, `Error`\>

Hook to resolve an ethereum address to an ENS name

**`example`** useEnsByAddress hook
```typescript
const ensByAddressQuery = useEnsByAddress('logged-in-user-eth-address');

// do something with the returned status of the query
const querySuccess =  ensByAddressQuery.isSuccess
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`UseQueryResult`<`string`, `Error`\>

#### Defined in

[ui/hooks/src/use-username.ts:241](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-username.ts#L241)

___

### useEnsRegistration

▸ **useEnsRegistration**(`pubKey?`): `UseMutationResult`<{ `makeDefaultProvider`: `string`  }, `Error`, { `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

Hook to register a new ENS name.
Pass as payload, the username to the mutate function

**`example`** useEnsRegistration hook
```typescript
const registerEnsQuery = useEnsRegistration('logged-in-user-pubkey');

// do something with the returned status of the query
React.useEffect(()=> {
if (registerEnsQuery.status === 'success') {
// perform an action
}
}, [registerEnsQuery])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey?` | `string` |

#### Returns

`UseMutationResult`<{ `makeDefaultProvider`: `string`  }, `Error`, { `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

#### Defined in

[ui/hooks/src/use-username.ts:162](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-username.ts#L162)

___

### useEntryNavigation

▸ **useEntryNavigation**(`navigateFn?`, `currentPostId?`): (`navigationDetails`: `IContentClickDetails`, `itemType`: `EntityTypes`) => `void`

Hook to navigation to entry's page

**`example`** useEntryNavigation hook
```typescript
// navigateFn handles the actual navigation
const handleEntryNavigate = useEntryNavigation(navigateTo, 'current-post-id');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `navigateFn?` | (`args`: `NavigateToParams`) => `void` |
| `currentPostId?` | `string` |

#### Returns

`fn`

▸ (`navigationDetails`, `itemType`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `navigationDetails` | `IContentClickDetails` |
| `itemType` | `EntityTypes` |

##### Returns

`void`

#### Defined in

[ui/hooks/src/use-navigation.ts:17](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-navigation.ts#L17)

___

### useFetchNotifications

▸ **useFetchNotifications**(`loggedEthAddress`): `UseQueryResult`<`any`[], `Error`\>

Hook to get a user's notifications

**`example`** useFetchNotifications hook
```typescript
const fetchNotificationsQuery = useFetchNotifications('logged-in-user-eth-address');

const notifications = fetchNotificationsQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loggedEthAddress` | `string` |

#### Returns

`UseQueryResult`<`any`[], `Error`\>

#### Defined in

[ui/hooks/src/use-notifications.ts:57](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-notifications.ts#L57)

___

### useGetAllInstalledApps

▸ **useGetAllInstalledApps**(`enabler?`): `UseQueryResult`<`any`, `Error`\>

Hook to get all the user's installed apps

**`example`** useGetAllInstalledApps hook
```typescript
const installedAppsQuery = useGetAllInstalledApps(true);

const installedApps = installedAppsQuery.data
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<`any`, `Error`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:47](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-app-settings.ts#L47)

___

### useGetAllIntegrationReleaseIds

▸ **useGetAllIntegrationReleaseIds**(`integrationName`, `offset?`): `UseQueryResult`<{ `nextIndex`: `any` = data.next; `releaseIds`: `any`  }, `Error`\>

Hook to get all the release ids for an integration

**`example`** useGetAllIntegrationReleaseIds hook
```typescript
const releaseIdsQuery = useGetAllIntegrationReleaseIds('awesome integration');

const releaseIds = releaseIdsQuery.data?.releaseIds
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationName` | `string` |
| `offset?` | `number` |

#### Returns

`UseQueryResult`<{ `nextIndex`: `any` = data.next; `releaseIds`: `any`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:178](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L178)

___

### useGetAllIntegrationsIds

▸ **useGetAllIntegrationsIds**(`enabler?`, `offset?`): `UseQueryResult`<`any`, `Error`\>

Hook to get all the published integrations ids

**`example`** useGetAllIntegrationsIds hook
```typescript
const availableIntegrationsQuery = useGetAllIntegrationsIds(true);

const availableIntegrations = availableIntegrationsQuery.data
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enabler` | `boolean` | `true` |
| `offset?` | `number` | `undefined` |

#### Returns

`UseQueryResult`<`any`, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:152](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L152)

___

### useGetAppConfig

▸ **useGetAppConfig**(`appName`, `enabler?`): `UseQueryResult`<`any`, `Error`\>

Hook to get configuration object for an installed app

**`example`** useGetAppConfig hook
```typescript
const appConfigQuery = useGetAppConfig('app name', true);

const appConfig = appConfigQuery.data
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<`any`, `Error`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:24](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-app-settings.ts#L24)

___

### useGetBookmarks

▸ **useGetBookmarks**(`loggedEthAddress`, `enabler?`): `UseQueryResult`<`Record`<`string`, `unknown`\>[], `unknown`\>

Hook for gettting a user's saved posts and comments

**`example`** useGetBookmarks hook
```typescript
const getBookmarksQuery = useGetBookmarks('0x243kb4bret');

const bookmarks = getBookmarksQuery.data;
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `loggedEthAddress` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |

#### Returns

`UseQueryResult`<`Record`<`string`, `unknown`\>[], `unknown`\>

#### Defined in

[ui/hooks/src/use-bookmarks.ts:20](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-bookmarks.ts#L20)

___

### useGetCount

▸ **useGetCount**(): `UseQueryResult`<{ `delisted`: `number` = 0; `kept`: `number` = 0; `pending`: `number` = 0 }, `Error`\>

Hook to get moderation counters

**`example`** useGetCount hook
```typescript
const getCountQuery = useGetCount();

const count = getCountQuery.data || { delisted: 0, kept: 0, pending: 0 };
```

#### Returns

`UseQueryResult`<{ `delisted`: `number` = 0; `kept`: `number` = 0; `pending`: `number` = 0 }, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:224](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L224)

___

### useGetEntryAuthor

▸ **useGetEntryAuthor**(`entryId`): `UseQueryResult`<`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  }, `Error`\>

Hook to get an entry author's profile data

**`example`** useGetEntryAuthor hook
```typescript
const getEntryAuthorQuery = useGetEntryAuthor( 'some-entry-id');

const profile = getEntryAuthorQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryId` | `string` |

#### Returns

`UseQueryResult`<`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:167](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-profile.ts#L167)

___

### useGetFlags

▸ **useGetFlags**(`entryId`): `UseQueryResult`<[`EntryReport`](interfaces/EntryReport.md)[], `Error`\>

Hook to get report flags for a specific entry

**`example`** useGetFlags hook
```typescript
const getFlagsQuery = useGetFlags('some-entry-id');

const flagEntries = getFlagsQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `entryId` | `string` |

#### Returns

`UseQueryResult`<[`EntryReport`](interfaces/EntryReport.md)[], `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:240](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L240)

___

### useGetIntegrationId

▸ **useGetIntegrationId**(`integrationName`): `UseQueryResult`<{ `id`: `string` = data }, `Error`\>

Hook to get integration id by its name

**`example`** useGetIntegrationId hook
```typescript
const integrationIdQuery = useGetIntegrationId('awesome integration');

const integrationId = integrationIdQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationName` | `string` |

#### Returns

`UseQueryResult`<{ `id`: `string` = data }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:92](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L92)

___

### useGetIntegrationInfo

▸ **useGetIntegrationInfo**(`integrationId`): `UseQueryResult`<`IntegrationInfo`, `Error`\>

Hook to get integration package info

**`example`** useGetIntegrationInfo hook
```typescript
const integrationInfoQuery = useGetIntegrationInfo('some-integration-id');

const integrationInfo = integrationInfoQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationId` | `string` |

#### Returns

`UseQueryResult`<`IntegrationInfo`, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:24](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L24)

___

### useGetIntegrationReleaseId

▸ **useGetIntegrationReleaseId**(`integrationName`, `version`, `enabler?`): `UseQueryResult`<{ `id`: `string` = data }, `Error`\>

Hook to get integration release id by its name and version

**`example`** useGetIntegrationReleaseId hook
```typescript
const integrationReleaseIdQuery = useGetIntegrationReleaseId('awesome integration', '0.1.1', true);

const integrationReleaseId = integrationReleaseIdQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `integrationName` | `string` |
| `version` | `string` |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<{ `id`: `string` = data }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:114](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L114)

___

### useGetIntegrationReleaseInfo

▸ **useGetIntegrationReleaseInfo**(`releaseId`): `UseQueryResult`<`ReleaseInfo`, `Error`\>

Hook to get integration release info

**`example`** useGetIntegrationReleaseInfo hook
```typescript
const latestReleaseInfoQuery = useGetIntegrationReleaseInfo('some-release-id');

const latestReleaseInfo = latestReleaseInfoQuery.data
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `releaseId` | `string` |

#### Returns

`UseQueryResult`<`ReleaseInfo`, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:205](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L205)

___

### useGetIntegrationsCount

▸ **useGetIntegrationsCount**(): `UseQueryResult`<{ `totalCount`: `any` = data.totalCount }, `Error`\>

Hook to get the number of published integrations

**`example`** useGetIntegrationsCount hook
```typescript
const integrationsCountQuery = useGetIntegrationsCount();

const integrationCount = integrationsCountQuery.data;
```

#### Returns

`UseQueryResult`<{ `totalCount`: `any` = data.totalCount }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:70](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L70)

___

### useGetIntegrationsInfo

▸ **useGetIntegrationsInfo**(`opt`): `UseQueryResult`<{ `getIntegrationInfo`: `IntegrationInfo`[]  }, `Error`\>

Hook to get package info for multiple integrations by name or id

**`example`** useGetIntegrationsInfo hook
```typescript
const integrationsInfoQuery = useGetIntegrationsInfo([{ name: 'some-integration-name-1' }, { name: 'some-integration-name-2' }]);

const integrationsInfo = integrationsInfoQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

`UseQueryResult`<{ `getIntegrationInfo`: `IntegrationInfo`[]  }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:47](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L47)

___

### useGetIntegrationsReleaseInfo

▸ **useGetIntegrationsReleaseInfo**(`releaseIds`): `UseQueryResult`<`any`[], `Error`\>

Hook to get multiple integrations release info

**`example`** useGetIntegrationsReleaseInfo hook
```typescript
const releaseInfoQuery = useGetIntegrationsReleaseInfo(['some-release-id-1', 'some-release-id-2', 'some-release-id-3']);

const releasesInfo = releaseInfoQuery.data
```
example mock data for an integration to test locally
```typescript
if (!res.data.getLatestRelease.some(rel => rel.name === '@akashaorg/app-messaging')) {
 res.data.getLatestRelease.push({
    id: '0x82d31f280645cb2f74a47115a36f1e1b4370eda1812cf4d38d9107996bb60560',
    name: '@akashaorg/app-messaging',
    version: 'v0.1.0',
    integrationType: 0,
    sources: [],
    integrationID: '0x0f7b806cb610e298f4108f77c5454edafdd48a213ac6df2466816442b2814061',
    author: '0xADE0510E72f60789DD17aAFc28629Ee4D9C0Ba72',
   enabled: true,
    links: {
      publicRepository: 'https://github.com/AKASHAorg/akasha-core#readme',
      documentation: '',
      detailedDescription: '',
    },
    manifestData: {
      mainFile: 'index.js',
      license: 'AGPL-3.0',
      keywords: [],
      description:
        'The AKASHA team builds this application so you can privately message friends.',
      displayName: 'Messages',
    },
    createdAt: null,
  });
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `releaseIds` | `string`[] |

#### Returns

`UseQueryResult`<`any`[], `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:262](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L262)

___

### useGetLatestReleaseInfo

▸ **useGetLatestReleaseInfo**(`opt`): `UseQueryResult`<{ `getLatestRelease`: `ReleaseInfo`[]  }, `Error`\>

Hook to get latest release info for integrations

**`example`** useGetLatestReleaseInfo hook
```typescript
const latestReleaseInfoQuery = useGetLatestReleaseInfo([{ id: 'some-release-id-1' }, { id: 'some-release-id-2' }, { id: 'some-release-id-3' }]);

const latestReleasesInfo = React.useMemo(() => {
return latestReleaseInfoQuery.data?.getLatestRelease;
}, [latestReleaseInfoQuery.data?.getLatestRelease]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

`UseQueryResult`<{ `getLatestRelease`: `ReleaseInfo`[]  }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:288](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-integration-registry.ts#L288)

___

### useGetLogin

▸ **useGetLogin**(`onError?`): `UseQueryResult`<[`LoginState`](interfaces/LoginState.md), `unknown`\>

Hook for retrieving the current authentication state of the user

**`example`** useGetLogin hook
```typescript
const loginQuery = useGetLogin();
// can be used with useGetProfile hook to get the logged profile data
const profileDataQuery = useGetProfile(loginQuery.data?.pubKey);

const loggedProfileData = profileDataQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError?` | (`error`: `Error`) => `void` |

#### Returns

`UseQueryResult`<[`LoginState`](interfaces/LoginState.md), `unknown`\>

#### Defined in

[ui/hooks/src/use-login.ts:76](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-login.ts#L76)

___

### useGetProfileByIdQuery

▸ **useGetProfileByIdQuery**(`id`): `UseQueryResult`<[`Types.GetProfileByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L145), `Error`\>

Hook to get a user's profile data by his/her ID.

**`example`** useGetProfileByIdQuery hook
```typescript
  const getProfileQuery = useGetProfileByIdQuery( { id: 'some-ID' },
    {
      select: data => {
        if (data.node && 'profile' in data.node) {
          return data.node;
        }
        return null;
      },
    },
  );
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |

#### Returns

`UseQueryResult`<[`Types.GetProfileByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L145), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:769](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L769)

___

### useInfiniteGetProfileByIdQuery

▸ **useInfiniteGetProfileByIdQuery**(`id`): `UseInfiniteQueryResult`<[`Types.GetProfileByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L145), `Error`\>

Hook to get a user's profile data by his/her ID (supports infinite scrolling).

**`example`** useInfiniteGetProfileByIdQuery hook
```typescript
  const getProfileQuery = useInfiniteGetProfileByIdQuery('id', { id: 'some-ID' },);

  const profileData = React.useMemo(() => {
  if (getProfileQuery.data) {
  return getProfileQuery.data.pages;
  }
  return [];
  }, [getProfileQuery.data]);
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetProfileByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L145), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:779](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L779)

___

### useGetProfileByDidQuery

▸ **useGetProfileByDidQuery**(`id`): `UseQueryResult`<[`Types.GetProfileByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L152), `Error`\>

Hook to get a user's profile data by his/her DID.

**`example`** useGetProfileByDidQuery hook
```typescript
  const getProfileQuery = useGetProfileByDidQuery(
    { id: 'did:key:some-ID-sequence' },
    {
      select: data => {
        if (data.node && 'profile' in data.node) {
          return data.node;
        }
        return null;
      },
    },
  );
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |

#### Returns

`UseQueryResult`<[`Types.GetProfileByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L152), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:811](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L811)

___

### useInfiniteGetProfileByDidQuery

▸ **useInfiniteGetProfileByDidQuery**(`id`): `UseInfiniteQueryResult`<[`Types.GetProfileByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L152), `Error`\>

Hook to get a user's profile data by his/her DID (supports infinite scrolling).

**`example`** useInfiniteGetProfileByDidQuery hook
```typescript
  const getProfileQuery = useInfiniteGetProfileByDidQuery('id', { id: 'some-ID' },);

  const profileData = React.useMemo(() => {
  if (getProfileQuery.data) {
  return getProfileQuery.data.pages;
  }
  return [];
  }, [getProfileQuery.data]);
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetProfileByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L152), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:829](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L829)

___

### useGetProfilesQuery

▸ **useGetProfilesQuery**(`before?`, `after?`, `first?`, `last?): `UseQueryResult`<[`Types.GetProfilesQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L162), `Error`\>

Hook to get multiple users' profile data.

**`example`** useGetProfilesQuery hook
```typescript
  const getProfilesQuery = useGetProfilesQuery(
    { first: 50 },
    {
      select: data => data.profileIndex?.edges,
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseQueryResult`<[`Types.GetProfilesQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L162), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:866](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L866)

___

### useInfiniteGetProfilesQuery

▸ **useInfiniteGetProfilesQuery**(`before?`, `after?`, `first?`, `last?`): `UseInfiniteQueryResult`<[`Types.GetProfilesQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L162), `Error`\>

Hook to get multiple users' profile data (supports infinite scrolling).

**`example`** useInfiniteGetProfilesQuery hook
```typescript
  // get the last 50 users' profile data
  const getProfilesQuery = useInfiniteGetProfilesQuery('last', { last: 50 });

  const profilesData = React.useMemo(() => {
    if (getProfilesQuery.data) {
      return getProfilesQuery.data.pages;
    }
    return [];
  }, [getProfilesQuery.data]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetProfilesQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L162), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:884](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L884)

___

### useGetInterestsQuery

▸ **useGetInterestsQuery**(`id`): `UseQueryResult`<[`Types.GetInterestsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L172), `Error`\>

Hook to get interest data.

**`example`** useGetInterestsQuery hook
```typescript
  const getInterestsQuery = useGetInterestsQuery(
    { first: 10 },
    {
      select: data => data.interestsIndex?.edges,
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseQueryResult`<[`Types.GetInterestsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L172), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:928](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L928)

___

### useInfiniteGetInterestsQuery

▸ **useInfiniteGetInterestsQuery**(`before?`, `after?`,`first?`, `last?`): `UseInfiniteQueryResult`<[`Types.GetInterestsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L162), `Error`\>

Hook to get interest data (supports infinite scrolling).

**`example`** useInfiniteGetInterestsQuery hook
```typescript
  // get the last 50 interests
  const getInterestsQuery = useInfiniteGetInterestsQuery('last', { last: 50 });

  const interestsData = React.useMemo(() => {
    if (getInterestsQuery.data) {
      return getProfilesQuery.data.pages;
    }
    return [];
  }, [getInterestsQuery.data]);

  // load more items
  const handleLoadMore = React.useCallback(() => {
    if (!getInterestsQuery.isLoading && getInterestsQuery.hasNextPage) {
    getInterestsQuery.fetchNextPage();
    }
  }, [getInterestsQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetInterestsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L162), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:946](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L946)

___

### useGetInterestsByDidQuery

▸ **useGetInterestsByDidQuery**(`id`): `UseQueryResult`<[`Types.GetInterestsByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L179), `Error`\>

Hook to get interest data by profile's DID.

**`example`** useGetInterestsByDidQuery hook
```typescript
  const getInterestsQuery = useGetInterestsByDidQuery(
    { id: 'did:key:some-key' },
    {
      select: data => {
        if (data.node && 'interests' in data.node) {
          return data.node.interests;
        }
        return null;
      },
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseQueryResult`<[`Types.GetInterestsByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L179), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:985](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L985)

___

### useInfiniteGetInterestsByDidQuery

▸ **useInfiniteGetInterestsByDidQuery**(`id`): `UseInfiniteQueryResult`<[`Types.GetInterestsByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L179), `Error`\>

Hook to get interest data by profile's DID (supports infinite scrolling).

**`example`** useInfiniteGetInterestsByDidQuery hook
```typescript
  const getInterestsByDidQuery = useInfiniteGetInterestsByDidQuery('id', {
    id: 'did:key:some-key',
  });

  const interestData = React.useMemo(() => {
    if (getInterestsByDidQuery.data) {
      return getInterestsByDidQuery.data.pages;
    }
    return [];
  }, [getInterestsByDidQuery.data]);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetInterestsByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L179), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1003](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1003)

___

### useGetInterestsByIdQuery

▸ **useGetInterestsByIdQuery**(`id`): `UseQueryResult`<[`Types.GetInterestsByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

Hook to get interest data by profile's ID.

**`example`** useGetInterestsByIdQuery hook
```typescript
  const getInterestsByIdQuery = useGetInterestsByIdQuery(
    { id: 'some-key' },
    {
      select: data => {
        if (data.node && 'interests' in data.node) {
          return data.node.interests;
        }
        return null;
      },
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseQueryResult`<[`Types.GetInterestsByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1039](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1039)

___

### useInfiniteGetInterestsByIdQuery

▸ **useInfiniteGetInterestsByIdQuery**(`id`): `UseInfiniteQueryResult`<[`Types.GetInterestsByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

Hook to get interest data by profile's ID (supports infinite scrolling).

**`example`** useInfiniteGetInterestsByIdQuery hook
```typescript
  const getInterestsByIdQuery = useInfiniteGetInterestsByIdQuery(
    'id',
    { id: 'some-key' },
  )

  const InterestsByIdData  = React.useMemo(() => {
  if (getInterestsByIdQuery.data) {
  return getInterestsByIdQuery.data.pages;
  }
  return [];
  }, [getInterestsByIdQuery.data]);

  // load more
  const handleLoadMore = React.useCallback(() => {
  if (!getInterestsByIdQuery.isLoading && getInterestsByIdQuery.hasNextPage) {
  getInterestsByIdQuery.fetchNextPage();
  }
  }, [getInterestsByIdQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetInterestsByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1065](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1065)

___

### useGetFollowingListByDidQuery

▸ **useGetFollowingListByDidQuery**(`id`, `before?`, `after?`, `first?`, `last?`): `UseQueryResult`<[`Types.GetFollowingListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L197), `Error`\>

Hook to get a list of people a profile (identified by its ID) is following.

**`example`** useGetFollowingListByDidQuery hook
```typescript
   const getFollowingListBydQuery = useGetFollowingListByDidQuery(
    { id: 'did:key:some-key' },
    {
      select: data => {
        if (data.node && 'followList' in data.node) {
          return data.node.followList.edges;
        }
        return null;
      },
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseQueryResult`<[`Types.GetFollowingListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L197), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1110](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1110)

___

### useInfiniteGetFollowingListByDidQuery

▸ **useInfiniteGetFollowingListByDidQuery**(`id`, `before?`, `after?`, `first?`, `last?`): `UseInfiniteQueryResult`<[`Types.GetFollowingListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

Hook to get interest data by profile's ID (supports infinite scrolling).

**`example`** useInfiniteGetFollowingListByDidQuery hook
```typescript
  const getFollowingListByDidQuery = useInfiniteGetFollowingListByDidQuery(
    'id',
    { id: 'did:key:some-did-key' },
  )

  const followingListData  = React.useMemo(() => {
  if (getFollowingListByDidQuery.data) {
  return getFollowingListByDidQuery.data.pages;
  }
  return [];
  }, [getFollowingListByDidQuery.data]);

  // load more
  const handleLoadMore = React.useCallback(() => {
  if (!getFollowingListByDidQuery.isLoading && getFollowingListByDidQuery.hasNextPage) {
  getFollowingListByDidQuery.fetchNextPage();
  }
  }, [getFollowingListByDidQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetInterestsByIdQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1128](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1128)

___

### useGetFollowersListByDidQuery

▸ **useGetFollowersListByDidQuery**(`id`, `before?`, `after?`, `first?`, `last?`): `UseQueryResult`<[`Types.GetFollowersListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L208), `Error`\>

Hook to get a list of followers for a profile (identified by its DID).

**`example`** useGetFollowersListByDidQuery hook
```typescript
   const getFollowerListBydQuery = useGetFollowersListByDidQuery(
    { id: 'did:key:some-key' },
    {
      select: data => {
        if (data.node && 'profile' in data.node) {
          return data.node.profile.followers.edges;
        }
        return null;
      },
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseQueryResult`<[`Types.GetFollowersListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L208), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1175](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1175)

___

### useInfiniteGetFollowersListByDidQuery

▸ **useInfiniteGetFollowersListByDidQuery**(`id`, `before?`, `after?`, `first?`, `last?`): `UseInfiniteQueryResult`<[`Types.GetFollowersListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

Hook to get interest data by profile's ID (supports infinite scrolling).

**`example`** useInfiniteGetFollowersListByDidQuery hook
```typescript
  const getFollowerListByDidQuery = useInfiniteGetFollowersListByDidQuery(
    'id',
    { id: 'did:key:some-did-key' },
  )

  const followerListData  = React.useMemo(() => {
  if (getFollowerListByDidQuery.data) {
  return getFollowerListByDidQuery.data.pages;
  }
  return [];
  }, [getFollowerListByDidQuery.data]);

  // load more
  const handleLoadMore = React.useCallback(() => {
  if (!getFollowerListByDidQuery.isLoading && getFollowerListByDidQuery.hasNextPage) {
  getFollowerListByDidQuery.fetchNextPage();
  }
  }, [getFollowerListByDidQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetFollowersListByDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L186), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1193](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1193)

___

### useGetMyProfileQuery

▸ **useGetMyProfileQuery**(): `UseQueryResult`<[`Types.GetMyProfileQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L213), `Error`\>

Hook to get the currently logged-in profile.

**`example`** useGetMyProfileQuery hook
```typescript
   const profileDataReq = useGetMyProfileQuery(null, {
    select: resp => {
      return resp.viewer?.profile;
    },
  });

```

#### Parameters

| Name | Type |
| :------ | :------ |

#### Returns

`UseQueryResult`<[`Types.GetMyProfileQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L213), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1222](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1222)

___

### useInfiniteGetMyProfileQuery

▸ **useInfiniteGetMyProfileQuery**(): `UseInfiniteQueryResult`<[`Types.GetMyProfileQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L213), `Error`\>

Hook to get the currently logged-in profile (supports infinite scrolling).

**`example`** useInfiniteGetMyProfileQuery hook
```typescript
  const profileDataReq = useInfiniteGetMyProfileQuery(0);

  const profileData  = React.useMemo(() => {
  if (profileDataReq.data) {
  return profileDataReq.data.pages;
  }
  return [];
  }, [profileDataReq.data]);
```

#### Parameters

| Name | Type |
| :------ | :------ |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetMyProfileQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L213), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1240](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1240)

___

### useCreateProfileMutation

▸ **useCreateProfileMutation**(`i`): `UseMutationResult`<[`Types.CreateProfileMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L220), `unknown`\>

Hook to create a new profile.

**`example`** useCreateProfileMutation hook
```typescript
   const createProfile = useCreateProfileMutation();

    const profileData = {
    content: {
      avatar: {
        default: {
          height: 210,
          src: 'http://some-url.com',
          width: 210,
        },
      },
      background: {
        default: {
          height: 210,
          src: 'http://some-url.com',
          width: 210,
        }
      },
      createdAt: Date.now(),
      description: 'A simple description/bio',
      links: [
        {
          href: 'http://some-url.com',
          label: 'Ethereum',
        }
      ],
      name: 'Mr.Cat',
    },
  };

    createProfile.mutate({
      i: profileData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateProfileInput` |

#### Returns

`UseMutationResult`<[`Types.CreateProfileMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L220), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1270](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1270)

___

### useUpdateProfileMutation

▸ **useUpdateProfileMutation**(`i`): `UseMutationResult`<[`Types.UpdateProfileMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L227), `unknown`\>

Hook to update data for a profile.

**`example`** useUpdateProfileMutation hook
```typescript
   const updateProfile = useUpdateProfileMutation();

    const profileData = {
      id: 'profile-id',
      content: {
        avatar: {
          default: {
            height: 210,
            src: 'http://some-url.com',
            width: 210,
          },
        },
        background: {
          default: {
            height: 210,
            src: 'http://some-url.com',
            width: 210,
          }
        },
        createdAt: Date.now(),
        description: 'A simple description/bio',
        links: [
          {
            href: 'http://some-url.com',
            label: 'Ethereum',
          }
        ],
        name: 'Mr.Cat',
      },
    };

    updateProfile.mutate({
      i: profileData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UpdateProfileInput` |

#### Returns

`UseMutationResult`<[`Types.UpdateProfileMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L227), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1292](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1292)

___

### useCreateInterestsMutation

▸ **useCreateInterestsMutation**(`i`): `UseMutationResult`<[`Types.CreateInterestsMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L234), `unknown`\>

Hook to create interest data for a profile.

**`example`** useCreateInterestsMutation hook
```typescript
   const createInterests = useCreateInterestsMutation();

    const interestsData = {
      content: {
        topics: [
          {
            labelType: 'example-label-type',
            value: 'example label value',
          }
        ]
      },
    };

    createInterests.mutate({
      i: interestsData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateInterestsInput` |

#### Returns

`UseMutationResult`<[`Types.CreateInterestsMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L234), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1321](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1321)

___

### useUpdateInterestsMutation

▸ **useUpdateInterestsMutation**(`i`): `UseMutationResult`<[`Types.UpdateInterestsMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L241), `unknown`\>

Hook to update interest data for a profile.

**`example`** useUpdateInterestsMutation hook
```typescript
   const updateInterests = useUpdateInterestsMutation();

    const interestsData = {
      id: 'some-id',
      content: {
        topics: [
          {
            labelType: 'example-label-type',
            value: 'example label value',
          }
        ]
      },
    };

    updateInterests.mutate({
      i: interestsData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UpdateInterestsInput` |

#### Returns

`UseMutationResult`<[`Types.UpdateInterestsMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L241), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1350](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1350)

___

### useCreateFollowMutation

▸ **useCreateFollowMutation**(`i`): `UseMutationResult`<[`Types.CreateFollowMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L248), `unknown`\>

Hook to create follow data for a profile.

**`example`** useCreateFollowMutation hook
```typescript
  const createFollow = useCreateFollowMutation();

  const followData = {
    content: {
      isFollowing: true,
      profileID: 'CeramicStreamID',
    },
  };

  createFollow.mutate({
    i: followData,
  });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateFollowInput` |

#### Returns

`UseMutationResult`<[`Types.CreateFollowMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L248), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1378](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1378)

___
### useUpdateFollowMutation

▸ **useUpdateFollowMutation**(`i`): `UseMutationResult`<[`Types.UpdateFollowMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L255), `unknown`\>

Hook to update follow data for a profile.

**`example`** useCreateFollowMutation hook
```typescript
  const updateFollow = useUpdateFollowMutation();

  const followData = {
    id: 'some-id',
    content: {
      isFollowing: true,
      profileID: 'CeramicStreamID',
    },
  };

  updateFollow.mutate({
    i: followData,
  });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UpdateFollowInput` |

#### Returns

`UseMutationResult`<[`Types.UpdateFollowMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L255), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:1406](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L1406)

___

### useGetTag

▸ **useGetTag**(`tagName`, `enabler?`): `UseQueryResult`<`Tag_Response`, `Error`\>

Hook to get a specific tag by name

**`example`** useGetTag hook
```typescript
const getTagQuery = useGetTag('awesometag', true);

const tag =  getTagQuery.data
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagName` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |

#### Returns

`UseQueryResult`<`Tag_Response`, `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:139](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-tag.ts#L139)

___

### useGlobalLogin

▸ **useGlobalLogin**(`props`): `void`

Hook that will fire an action when the sign in is called

**`example`** useGlobalLogin hook
```typescript
useGlobalLogin({
onLogin: payload => {},
onLogout: () => {},
waitForAuth: payload => {}.
onReady: payload => {},
onLoadFromCache: payload => {},
onError: payload => {},
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `UseGlobalLoginProps` |

#### Returns

`void`

#### Defined in

[ui/hooks/src/use-global-login.ts:34](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-global-login.ts#L34)

___

### useInfiniteDelisted

▸ **useInfiniteDelisted**(`limit`, `offset?`): `UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

Hook to get delisted moderated items

**`example`** useInfiniteDelisted hook
```typescript
const infiniteDelistedQuery = useInfiniteDelisted(10);

const delistedItemPages = React.useMemo(() => {
if (infiniteDelistedQuery.data) {
return infiniteDelistedQuery.data.pages;
}
return [];
}, [infiniteDelistedQuery.data]);

// load more items
const handleLoadMore = React.useCallback(() => {
if (!infiniteDelistedQuery.isLoading && infiniteDelistedQuery.hasNextPage) {
infiniteDelistedQuery.fetchNextPage();
}
}, [infiniteDelistedQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:383](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L383)

___

### useInfiniteKept

▸ **useInfiniteKept**(`limit`, `offset?`): `UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

Hook to get kept moderated items

**`example`** useInfiniteKept hook
```typescript
const infiniteKeptQuery = useInfiniteKept(10);

const keptItemPages = React.useMemo(() => {
if (infiniteKeptQuery.data) {
return infiniteKeptQuery.data.pages;
}
return [];
}, [infiniteKeptQuery.data]);

// load more items
const handleLoadMore = React.useCallback(() => {
if (!infiniteKeptQuery.isLoading && infiniteKeptQuery.hasNextPage) {
infiniteKeptQuery.fetchNextPage();
}
}, [infiniteKeptQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:343](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L343)

___

### useInfiniteLog

▸ **useInfiniteLog**(`limit`, `offset?`): `UseInfiniteQueryResult`<`LogItemsReponse`, `Error`\>

Hook to get log of moderated items

**`example`** useInfiniteLog hook
```typescript
const infiniteLogQuery = useInfiniteLog(10);

const logItemPages = React.useMemo(() => {
if (infiniteLogQuery.data) {
return infiniteLogQuery.data.pages;
}
return [];
}, [infiniteLogQuery.data]);

// load more items
const handleLoadMore = React.useCallback(() => {
if (!infiniteLogQuery.isLoading && infiniteLogQuery.hasNextPage) {
infiniteLogQuery.fetchNextPage();
}
}, [infiniteLogQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<`LogItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:269](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L269)

___

### useInfinitePending

▸ **useInfinitePending**(`limit`, `offset?`): `UseInfiniteQueryResult`<`PendingItemsReponse`, `Error`\>

Hook to get pending moderation items

**`example`** useInfinitePending hook
```typescript
const infinitePendingQuery = useInfinitePending(10);

const pendingItemPages = React.useMemo(() => {
if (infinitePendingQuery.data) {
return infinitePendingQuery.data.pages;
}
return [];
}, [infinitePendingQuery.data]);

// load more items
const handleLoadMore = React.useCallback(() => {
if (!infinitePendingQuery.isLoading && infinitePendingQuery.hasNextPage) {
infinitePendingQuery.fetchNextPage();
}
}, [infinitePendingQuery]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<`PendingItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:308](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L308)

___

### useGetBeamsQuery

▸ **useGetBeamsQuery**(`after?`, `before?`, `first?`, `last?`): `UseQueryResult`<[`Types.GetBeamsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L13), `Error`\>

Hook to get available beams.

**`example`** useGetBeamsQuery hook
```typescript
// get the first 10 beams
const beamsQuery = useGetBeamsQuery( { first: 10 }, { select: response => response.beamIndex });

// get the last 10 beams
const beamsQuery = useGetBeamsQuery( { last: 10 }, { select: response => response.beamIndex });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `after?` | `string` |
| `before?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

 `UseQueryResult`<[`Types.GetBeamsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L13), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:122](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L122)

___

### useInfiniteGetBeamsQuery

▸ **useInfiniteGetBeamsQuery**(`after?`, `before?`, `first?`, `last?`): `UseInfiniteQueryResult`<[`Types.GetBeamsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L13), `Error`\>

Hook to get available beams (supports infinite scrolling).

**`example`** useInfiniteGetBeamsQuery hook
```typescript
// get the first 50 beams
const beamsQuery = useInfiniteGetBeamsQuery('first', { first: 50 })

 const beams = React.useMemo(() => {
    if (beamsQuery.data) {
      return beamsQuery.data.pages;
    }
    return [];
  }, [beamsQuery.data]);

// load more if there's a next page
 const handleLoadMore = React.useCallback(() => {
    if (!beamsQuery.isLoading && beamsQuery.hasNextPage) {
      beamsQuery.fetchNextPage();
    }
  }, [beamsQuery]);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `after?` | `string` |
| `before?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseInfiniteQueryResult`<[`Types.GetBeamsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L13), `Error`\>



#### Defined in

[ui/hooks/src/generated/hooks-new.ts:140](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L140)

___

### useGetBeamsByAuthorDidQuery

▸ **useGetBeamsByAuthorDidQuery**(`id`, `after?`, `before?`, `first?`, `last?`): `UseQueryResult`<{} | {`isViewer`: `boolean`; `beamList?`: { `edges?`: { `node?`:  { `id`: `string` ; `reflectionsCount`: `number` ; `active`: `boolean`; `tags?`: `<string | null> | null`[]; `version`: `any`; `author`: {`id`: `string`}; `content`: {`property`: `string`; `provider`: `string`; `value`: `string`}[]; } []; `pageInfo`: {...};}}}, `Error`\>

Hook to get beams by DID.

**`example`** useGetBeamsByAuthorDidQuery hook
```typescript
  const beams = useGetBeamsByAuthorDidQuery(
    { id: 'did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK' },
    { select: response => response.node },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `after?` | `string` |
| `before?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseQueryResult`<{} | {`isViewer`: `boolean`; `beamList?`: { `edges?`: { `node?`:  { `id`: `string` ; `reflectionsCount`: `number` ; `active`: `boolean`; `tags?`: `<string | null> | null`[]; `version`: `any`; `author`: {`id`: `string`}; `content`: {`property`: `string`; `provider`: `string`; `value`: `string`}[]; } []; `pageInfo`: {...};}}}, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:182](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L182)

___

### useInfiniteGetBeamsByAuthorDidQuery

▸ **useInfiniteGetBeamsByAuthorDidQuery**(`id`, `after?`, `before?`, `first?`, `last?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get beams from an author identified by DID (supports infinite scrolling).

**`example`** useInfiniteGetBeamsByAuthorDidQuery hook
```typescript
 // get the last 30 beams by account with DID z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK
  const beamsReq = useInfiniteGetBeamsByAuthorDidQuery('last', { last: 30, id: 'z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK' });

  const fetchedBeams = React.useMemo(() => {
    if (beamsReq.data) {
      return beamsReq.data.pages;
    }
    return [];
  }, [beamsReq.data]);

  // load more if there's a next page
 const handleLoadMore = React.useCallback(() => {
    if (!beamsReq.isLoading && beamsReq.hasNextPage) {
      beamsReq.fetchNextPage();
    }
  }, [beamsReq]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `after?` | `string` |
| `before?` | `string` |
| `first?` | `number` |
| `last?` | `number` |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:200](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L200)

___

### useGetBeamByIdQuery

▸ **useGetBeamByIdQuery**(`id`): `UseQueryResult`<{ `node?`: {} | { `id`: `string` ; `reflectionsCount`: `number` ; `active`: `boolean`; `tags?`: `<string | null> | null`[]; `version`: `any`; `author`: {`id`: `string`}; `content`: {`property`: `string`; `provider`: `string`; `value`: `string`}[]; } []}, `Error`\>

Hook to get a single beam by its ID.

**`example`** useGetBeamByIdQuery hook
```typescript
    // get beam by ID 123456789
    const beam = useGetBeamByIdQuery(
    { id: '123456789' },
    {
      select: data => data.node,
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseQueryResult`<{ `node?`: {} | { `id`: `string` ; `reflectionsCount`: `number` ; `active`: `boolean`; `tags?`: `<string | null> | null`[]; `version`: `any`; `author`: {`id`: `string`}; `content`: {`property`: `string`; `provider`: `string`; `value`: `string`}[]; } []}, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:229](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L229)

___

### useInfiniteGetBeamByIdQuery

▸ **useInfiniteGetBeamByIdQuery**(`id`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get a beam by its ID (supports infinite scrolling).

**`example`** useInfiniteGetBeamByIdQuery hook
```typescript
    // get beam by ID 123456789
   const beamReq = useInfiniteGetBeamByIdQuery(
    'id',
    { id: '123456789' },
  );

  const beam = React.useMemo(() => {
    if (beamReq.data) {
      return beamReq.data.pages;
    }
    return [];
  }, [beamReq.data]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:247](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L247)

___

### useGetRebeamsFromBeamQuery

▸ **useGetRebeamsFromBeamQuery**(`id`): `UseQueryResult`<{ `node?`: {} | {`rebeams`: {`edges?`: {`node?`: {`quotedBeam?`: {`id`: `string`; `reflectionsCount`: `number` ; `rebeamsCount`: `number` ;  `active`: `boolean`; `tags?`: `string`[]; `version`: `any`; `author`: {`id`: `string`}; `content`: {`property`: `string`; `provider`: `string`; `value`: `string`}[];}; `beam?`: { ...; };};}[];};}; }, `Error`\>

Hook to get rebeams for a beam identified by its ID.

**`example`** useGetRebeamsFromBeamQuery hook
```typescript
    // get rebeams for beam with ID 123456789
    const rebeamReq = useGetRebeamsFromBeamQuery({ id: '123456789' }, { select: data => data.node });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseQueryResult`<{ `node?`: {} | {`rebeams`: {`edges?`: {`node?`: {`quotedBeam?`: {`id`: `string`; `reflectionsCount`: `number` ; `rebeamsCount`: `number` ;  `active`: `boolean`; `tags?`: `string`[]; `version`: `any`; `author`: {`id`: `string`}; `content`: {`property`: `string`; `provider`: `string`; `value`: `string`}[];}; `beam?`: { ...; };};}[];};}; }, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:287](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L287)

___

### useInfiniteGetRebeamsFromBeamQuery

▸ **useInfiniteGetRebeamsFromBeamQuery**(`id`): `UseInfiniteQueryResult`< `Types.GetRebeamsFromBeamQuery`, `Error`\>

Hook to get rebeams for a beam identified by its ID (support infinite scrolling).

**`example`** useInfiniteGetRebeamsFromBeamQuery hook
```typescript
    // get rebeams for beam with ID 123456789
    const rebeamsReq = useInfiniteGetRebeamsFromBeamQuery(
    'id',
    { id: '123456789' },
  );

  const rebeams = React.useMemo(() => {
    if (rebeamReq.data) {
      return rebeamReq.data.pages;
    }
    return [];
  }, [rebeamReq.data]);

  // load more
  const handleLoadMore = React.useCallback(() => {
    if (!rebeamReq.isLoading && rebeamReq.hasNextPage) {
      rebeamReq.fetchNextPage();
    }
  }, [rebeamReq]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseInfiniteQueryResult`< `Types.GetRebeamsFromBeamQuery`, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:305](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L305)

___

### useGetMentionsFromBeamQuery

▸ **useGetMentionsFromBeamQuery**(`id`): `UseQueryResult`<`Types.GetMentionsFromBeamQuer`, `Error`\>

Hook to get mentions for a beam identified by its ID.

**`example`** useGetMentionsFromBeamQuery hook
```typescript
    // get mentions for beam with ID 123456789
    const mentions = useGetMentionsFromBeamQuery(
    { id: '123456789' },
    { select: data => data.node }
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseQueryResult`< `Types.GetMentionsFromBeamQuery`, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:346](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L346)

___

### useInfiniteGetMentionsFromBeamQuery

▸ **useInfiniteGetMentionsFromBeamQuery**(`id`): `UseInfiniteQueryResult`<`Types.GetMentionsFromBeamQuery`, `Error`\>

Hook to get mentions for a beam identified by its ID (supports infinite scrolling).

**`example`** useInfiniteGetMentionsFromBeamQuery hook
```typescript
    // get mentions for beam with ID 123456789
    const mentionsReq = useGetMentionsFromBeamQuery(
      'id',
    { id: '123456789' },
  );

   const mentions = React.useMemo(() => {
    if (mentionsReq.data) {
      return mentionsReq.data.pages;
    }
    return [];
  }, [mentionsReq.data]);

  // load more
  const handleLoadMore = React.useCallback(() => {
    if (!mentionsReq.isLoading && mentionsReq.hasNextPage) {
      mentionsReq.fetchNextPage();
    }
  }, [mentionsReq]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`UseInfiniteQueryResult`< `Types.GetMentionsFromBeamQuery`, `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:364](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L364)

___

### useCreateBeamMutation

▸ **useCreateBeamMutation**(`i`): `UseMutationResult`<`Types.CreateBeamMutation`, `unknown`\>

Hook to create a new beam.

**`example`** useCreateBeamMutation hook
```typescript
    const createBeam = useCreateBeamMutation();

    const beamData = {
    content: {
      active: true,
      content: [
        {
          property: 'test',
          provider: 'test',
          value: 'test',
        },
      ],
      createdAt: Date.now(),
    },
  };

    createBeam.mutate({
      i: beamData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateBeamInput` |

#### Returns

`UseMutationResult`<`Types.CreateBeamMutation`, `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:393](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L393)

___
### useUpdateBeamMutation

▸ **useUpdateBeamMutation**(`i`): `UseMutationResult`<`Types.UpdateBeamMutation`, `unknown`\>

Hook to update an existing beam.

**`example`** useUpdateBeamMutation hook
```typescript
    const updateBeamMutation = useUpdateBeamMutation();

    // updated data for beam ID 1234
    const beamData = {
    id: '1234',
    content: {
      active: true,
      content: [
        {
          property: 'test',
          provider: 'test',
          value: 'test',
        },
      ],
      createdAt: Date.now(),
    },
  };

    // call the mutate function to update
    updateBeamMutation.mutate({
      i: beamData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UpdateBeamInput` |

#### Returns

`UseMutationResult`<`Types.UpdateBeamMutation`, `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:415](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L415)

___

### useCreateRebeamMutation

▸ **useCreateRebeamMutation**(`i`): `UseMutationResult`<[`Types.CreateRebeamMutation`] (https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L66), `unknown`\>

Hook to create a rebeam for a beam.

**`example`** useCreateRebeamMutation hook
```typescript
    const createRebeamMutation = useCreateRebeamMutation();

    const beamData = {
    content: {
      active: true,
      beamID: 'CeramicStreamID',
      quotedBeamID: 'CeramicStreamID',
    },
  };

    createRebeamMutation.mutate({
      i: beamData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateRebeamInput` |

#### Returns

`UseMutationResult`<[`Types.CreateRebeamMutation`] (https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L66), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:443](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L443)

___

### useCreateBeamProfileMentionMutation

▸ **useCreateBeamProfileMentionMutation**(`i`): `UseMutationResult`<[`Types.CreateBeamProfileMentionMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L73), `unknown`\>

Hook to create a mention for a profile from a beam.

**`example`** useCreateBeamProfileMentionMutation hook
```typescript
    const createBeamProfileMention = useCreateBeamProfileMentionMutation();

    const mentionData = {
      content: {
        beamID: 'CeramicStreamID',
        profileID: 'CeramicStreamID',
      },
    };

    createBeamProfileMention.mutate({
      i: mentionData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateProfileMentionInput` |

#### Returns

`UseMutationResult`<[`Types.CreateBeamProfileMentionMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L73), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:470](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L470)

___

### useGetReflectionsFromBeamQuery

▸ **useGetReflectionsFromBeamQuery**(`id`): `UseQueryResult`<[`Types.GetReflectionsFromBeamQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L86), `Error`\>

Hook to get reflections of a beam identified by its ID.

**`example`** useGetReflectionsFromBeamQuery hook
```typescript
    // get the reflecions for a beam with ID 123456789
    const reflections = useGetReflectionsFromBeamQuery(
    { id: '123456789' },
    {
      select: data => data.node,
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |


#### Returns

`UseQueryResult`<[`Types.GetReflectionsFromBeamQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L86), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:503](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L503)

___

### useInfiniteGetReflectionsFromBeamQuery

▸ **useInfiniteGetReflectionsFromBeamQuery**(`id`): `UseInfiniteQueryResult`<[`Types.GetReflectionsFromBeamQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L86), `Error`\>

Hook to get reflections of a beam identified by its ID (supports infinite scrolling).

**`example`** useInfiniteGetReflectionsFromBeamQuery hook
```typescript
    // get the reflecions for a beam with ID 123456789
    const reflectionsReq = useInfiniteGetReflectionsFromBeamQuery(
      'id',
      { id: '123456789' },
    );

    const reflections = React.useMemo(() => {
    if (reflectionsReq.data) {
      return reflectionsReq.data.pages;
    }
    return [];
    }, [reflectionsReq.data]);

    // load more
    const handleLoadMore = React.useCallback(() => {
      if (!reflectionsReq.isLoading && reflectionsReq.hasNextPage) {
        reflectionsReq.fetchNextPage();
      }
    }, [reflectionsReq]);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |


#### Returns

`UseInfiniteQueryResult`<[`Types.GetReflectionsFromBeamQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L86), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:521](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L521)

___

### useGetReflectionsByAuthorDidQuery

▸ **useGetReflectionsByAuthorDidQuery**(`id`): `UseQueryResult`<[`Types.GetReflectionsByAuthorDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L88), `Error`\>

Hook to get reflections belonging to a member identified by their DID.

**`example`** useGetReflectionsByAuthorDidQuery hook
```typescript
    // get the reflecions of a member with DID did:key::123456789
    const reflections = useGetReflectionsByAuthorDidQuery(
    { id: 'did:key::123456789' },
    {
      select: data => data.node,
    },
  );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |


#### Returns

`UseQueryResult`<[`Types.GetReflectionsByAuthorDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L88), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:563](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L563)

___

### useInfiniteGetReflectionsByAuthorDidQuery

▸ **useInfiniteGetReflectionsByAuthorDidQuery**(`id`): `UseQueryResult`<[`Types.GetReflectionsByAuthorDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L88), `Error`\>

Hook to get reflections belonging to a member identified by their DID (supports infinite scrolling).

**`example`** useInfiniteGetReflectionsByAuthorDidQuery hook
```typescript
    // get the reflecions of a member with DID did:key::123456789
    const reflectionsReq = useInfiniteGetReflectionsByAuthorDidQuery(
      'id',
    { id: 'did:key::123456789' },
    );

    const reflections = React.useMemo(() => {
    if (reflectionsReq.data) {
      return reflectionsReq.data.pages;
    }
    return [];
    }, [reflectionsReq.data]);

    // load more
    const handleLoadMore = React.useCallback(() => {
      if (!reflectionsReq.isLoading && reflectionsReq.hasNextPage) {
        reflectionsReq.fetchNextPage();
      }
    }, [reflectionsReq]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |


#### Returns

`UseQueryResult`<[`Types.GetReflectionsByAuthorDidQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L88), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:581](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L581)

___

### useGetReflectReflectionsQuery

▸ **useGetReflectReflectionsQuery**(`id`): `UseQueryResult`<[`Types.GetReflectReflectionsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L108), `Error`\>

Hook to get the reflects of a reflection.

**`example`** useGetReflectReflectionsQuery hook
```typescript
    // get the reflect of a reflection with ID 123456789
    const reflectionReflects = useGetReflectReflectionsQuery(
    { id: '123456789' },
     {
      select: data => data.node,
    },
    );
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |


#### Returns

`UseQueryResult`<[`Types.GetReflectReflectionsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L108), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:624](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L624)

___

### useInfiniteGetReflectReflectionsQuery

▸ **useInfiniteGetReflectReflectionsQuery**(`id`): `UseInfiniteQueryResult`<[`Types.GetReflectReflectionsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L108), `Error`\>

Hook to get the reflects of a reflection (supports infinite scrolling).

**`example`** useInfiniteGetReflectReflectionsQuery hook
```typescript
    // get the reflects of a reflection with ID 123456789
    const reflectionReflectsReq = useInfiniteGetReflectReflectionsQuery(
      'id',
    { id: '123456789' },
    );

      const reflectionsReflects = React.useMemo(() => {
    if (reflectionReflectsReq.data) {
      return reflectionReflectsReq.data.pages;
    }
    return [];
    }, [reflectionReflectsReq.data]);

    // load more
    const handleLoadMore = React.useCallback(() => {
      if (!reflectionReflectsReq.isLoading && reflectionReflectsReq.hasNextPage) {
        reflectionReflectsReq.fetchNextPage();
      }
    }, [reflectionReflectsReq]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `before?` | `string` |
| `after?` | `string` |
| `first?` | `number` |
| `last?` | `number` |


#### Returns

`UseInfiniteQueryResult`<[`Types.GetReflectReflectionsQuery`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L108), `Error`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:642](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L642)

___

### useCreateReflectMutation

▸ **useCreateReflectMutation**(`i`): `UseMutationResult`<[`Types.CreateReflectMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L115), `unknown`\>

Hook to create a reflect.

**`example`** useCreateReflectMutation hook
```typescript
    const createReflect = useCreateReflectMutation();

    // example of a reflect's data
    const reflectData = {
      content: {
        active: true,
        beamID: 'CeramicStreamID',
        content: {
          property: 'test',
          provider: 'test',
          value: 'test',
        },
        createdAt: Date.now(),
        isReply: true
      },
    };

    createReflect.mutate({
      i: reflectData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateReflectInput` |

#### Returns

 `UseMutationResult`<[`Types.CreateReflectMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L115), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:672](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L672)

___

### useUpdateReflectMutation

▸ **useUpdateReflectMutation**(`i`): `UseMutationResult`<[`Types.UpdateReflectMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L122), `unknown`\>

Hook to update a reflect.

**`example`** useUpdateReflectMutation hook
```typescript
    const updateReflect = useUpdateReflectMutation();

    // example of a reflect's data
    const reflectData = {
      id: 'some-id',
      content: {
        active: true,
        beamID: 'CeramicStreamID',
        content: {
          property: 'test',
          provider: 'test',
          value: 'test',
        },
        createdAt: Date.now(),
        isReply: true
      },
    };

    updateReflect.mutate({
      i: reflectData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UpdateReflectInput` |

#### Returns

 `UseMutationResult`<[`Types.UpdateReflectMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L122), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:694](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L694)

___

### useCreateReflectReflectionMutation

▸ **useCreateReflectReflectionMutation**(`i`): `UseMutationResult`<[`Types.CreateReflectReflectionMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L129), `unknown`\>

Hook to create a reflect of a reflect.

**`example`** useCreateReflectReflectionMutation hook
```typescript
    const createReflect = useCreateReflectReflectionMutation();

    // example of a reflect's data
    const reflectData = {
      content: {
        active: true,
        reflectID: 'CeramicStreamID',
        reflectionID: 'CeramicStreamID',
      },
    };

    createReflect.mutate({
      i: reflectData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `CreateReflectionInput` |

#### Returns

`UseMutationResult`<[`Types.CreateReflectReflectionMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L129), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:721](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L721)

___

### useUpdateReflectReflectionMutation

▸ **useUpdateReflectReflectionMutation**(`i`): `UseMutationResult`<[`Types.UpdateReflectReflectionMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L129), `unknown`\>

Hook to update a reflect of a reflection.

**`example`** useUpdateReflectReflectionMutation hook
```typescript
    const createReflect = useUpdateReflectReflectionMutation();

    // example of a reflect's data
    const reflectData = {
      id: '1234',
      content: {
        active: true,
        reflectID: 'CeramicStreamID',
        reflectionID: 'CeramicStreamID',
      },
    };

    createReflect.mutate({
      i: reflectData,
    });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UpdateReflectionInput` |

#### Returns

`UseMutationResult`<[`Types.UpdateReflectReflectionMutation`](https://github.com/AKASHAorg/akasha-core/blob/next/typings/src/sdk/graphql-operation-types-new.ts#L136), `unknown`\>

#### Defined in

[ui/hooks/src/generated/hooks-new.ts:748](https://github.com/AKASHAorg/akasha-core/blob/next/ui/hooks/src/generated/hooks-new.ts#L748)

___

### useInfinitePostsByAuthor

▸ **useInfinitePostsByAuthor**(`pubKey`, `limit`, `enabled?`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get an author's posts

**`example`** useInfinitePostsByAuthor hook
```typescript
const authorPostsQuery = useInfinitePostsByAuthor('author-public-key', 15);

const postPages = React.useMemo(() => {
if (authorPostsQuery.data) {
return authorPostsQuery.data.pages;
}
return [];
}, [authorPostsQuery.data]);

// load more posts
const handleLoadMore = React.useCallback(() => {
if (!authorPostsQuery.isLoading && authorPostsQuery.hasNextPage && loginState?.fromCache) {
authorPostsQuery.fetchNextPage();
}
}, [authorPostsQuery, loginState?.fromCache]);
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pubKey` | `string` | `undefined` |
| `limit` | `number` | `undefined` |
| `enabled` | `boolean` | `true` |
| `offset?` | `number` | `undefined` |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:255](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L255)

___

### useInfinitePostsByTag

▸ **useInfinitePostsByTag**(`tagName`, `limit`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get posts that contain a specific tag

**`example`** useInfinitePostsByTag hook
```typescript
const tagPostsQuery = useInfinitePostsByTag('awesometag', 15);

const postPages = React.useMemo(() => {
if (tagPostsQuery.data) {
return tagPostsQuery.data.pages;
}
return [];
}, [tagPostsQuery.data]);

// load more posts
const handleLoadMore = React.useCallback(() => {
if (!tagPostsQuery.isLoading && tagPostsQuery.hasNextPage && loginState?.fromCache) {
tagPostsQuery.fetchNextPage();
}
}, [tagPostsQuery, loginState?.fromCache]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:202](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L202)

___

### useInjectedProvider

▸ **useInjectedProvider**(): `UseQueryResult`<{ `details`: { `iconType`: `string` = ''; `subtitleLabel`: `string` = ''; `titleLabel`: `string` = '' } ; `name`: `INJECTED_PROVIDERS` = INJECTED\_PROVIDERS.NOT\_DETECTED }, `Error`\>

A hook to get injected provider from the SDK

**`example`** useInjectedProvider hook
```typescript
const injectedProviderQuery = useInjectedProvider('selectedProvider');

const injectedProvider = React.useMemo(
() => injectedProviderQuery.data,
[injectedProviderQuery.data],
);
```

#### Returns

`UseQueryResult`<{ `details`: { `iconType`: `string` = ''; `subtitleLabel`: `string` = ''; `titleLabel`: `string` = '' } ; `name`: `INJECTED_PROVIDERS` = INJECTED\_PROVIDERS.NOT\_DETECTED }, `Error`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:54](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-injected-provider.ts#L54)

___

### useInstallApp

▸ **useInstallApp**(): `UseMutationResult`<`string`[], `unknown`, { `id?`: `string` ; `name?`: `string`  }, `unknown`\>

Hook to persist an installed app config to a user's profile

**`example`** useInstallApp hook
```typescript
const installAppQuery = useInstallApp();

installAppQuery.mutate({ name: 'awesome integration', id: 'fhyuhjfhyrtl' });
```

#### Returns

`UseMutationResult`<`string`[], `unknown`, { `id?`: `string` ; `name?`: `string`  }, `unknown`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:76](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-app-settings.ts#L76)

___

### useIsContactMultiple

▸ **useIsContactMultiple**(`mainProfile`, `checkIfContactsPubkeys`): `UseQueryResult`<`string`[], `Error`\>

Hook to check if a list of profiles are contacts for a specific user
A contact relationship is defined by each of the two profiles following each other

**`example`** useIsContactMultiple hook
```typescript
const isContactMultipleQuery = useIsContactMultiple('user-pubkey', ['some-pubkey-1', 'some-pubkey-2']);

const contactList = isContactMultipleQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `mainProfile` | `string` |
| `checkIfContactsPubkeys` | `string`[] |

#### Returns

`UseQueryResult`<`string`[], `Error`\>

#### Defined in

[ui/hooks/src/use-follow.ts:181](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-follow.ts#L181)

___

### useIsFollowingMultiple

▸ **useIsFollowingMultiple**(`followerPubKey`, `followingPubKeyArray`): `UseQueryResult`<`string`[], `Error`\>

Hook to check if a user is following other users

**`example`** useIsFollowingMultiple hook
```typescript
const isFollowingMultipleQuery = useIsFollowingMultiple('user-pubkey', ['some-pubkey-1', 'some-pubkey-2']);

const followedProfiles = isFollowingMultipleQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `followerPubKey` | `string` |
| `followingPubKeyArray` | `string`[] |

#### Returns

`UseQueryResult`<`string`[], `Error`\>

#### Defined in

[ui/hooks/src/use-follow.ts:63](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-follow.ts#L63)

___

### useIsSubscribedToTag

▸ **useIsSubscribedToTag**(`tagName`, `loggedEthAddress`): `UseQueryResult`<`boolean`, `Error`\>

Hook to check if a user is subscribed to a tag

**`example`** useIsSubscribedToTag hook
```typescript
const isSubscribedToTagQuery = useIsSubscribedToTag('awesome tag', 'logged-in-user-eth-address');

const isSubscribedToTag = isSubscribedToTagQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |
| `loggedEthAddress` | `string` |

#### Returns

`UseQueryResult`<`boolean`, `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:51](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-tag.ts#L51)

___

### useIsValidToken

▸ **useIsValidToken**(`props`): `UseQueryResult`<{ `data`: `boolean`  }, `Error`\>

Hook to validate invitation token

**`example`** useIsValidToken hook
```typescript
const inviteTokenQuery = useIsValidToken({ inviteToken: '5b71c9dd7bdea84c9ff2564a', enabler: true });

const isValidToken = inviteTokenQuery.isSuccess;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IUseIsValidTokenProps` |

#### Returns

`UseQueryResult`<{ `data`: `boolean`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-invite-token-validation.ts:30](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-invite-token-validation.ts#L30)

___

### useLegalDoc

▸ **useLegalDoc**(`docName`): `UseQueryResult`<`never`, `Error`\>

Hook to get legal docs stored on ipfs

**`example`** useLegalDoc hook
```typescript
const termsOfUseDocQuery = useLegalDoc('TermsOfUse');

const termsOfUseDoc = termsOfUseDocQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `docName` | `LEGAL_DOCS` |

#### Returns

`UseQueryResult`<`never`, `Error`\>

#### Defined in

[ui/hooks/src/use-legal.ts:24](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-legal.ts#L24)

___

### useLogin

▸ **useLogin**(`onError?`): `UseMutationResult`<`CurrentUser` & { `isNewUser`: `boolean`  }, `Error`, { `checkRegistered`: `boolean` ; `selectedProvider`: `EthProviders`  }, `unknown`\>

Hook to sign in a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError?` | (`err`: `Error`) => `void` |

#### Returns

`UseMutationResult`<`CurrentUser` & { `isNewUser`: `boolean`  }, `Error`, { `checkRegistered`: `boolean` ; `selectedProvider`: `EthProviders`  }, `unknown`\>

#### Defined in

[ui/hooks/src/use-login.ts:137](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-login.ts#L137)

___

### useLogout

▸ **useLogout**(): `UseMutationResult`<``true``, `Error`, `void`, `unknown`\>

Hook to sign out the current user

**`example`** useLogout hook
```typescript
const logoutMutation = useLogout();

// sample logout handler
const handleLogout = async () => {
await logoutMutation.mutateAsync();
// add other logic after logout
};
```

#### Returns

`UseMutationResult`<``true``, `Error`, `void`, `unknown`\>

#### Defined in

[ui/hooks/src/use-login.ts:348](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-login.ts#L348)

___

### useMarkAsRead

▸ **useMarkAsRead**(): `UseMutationResult`<{ `data`: `boolean`  }, `unknown`, `string`, { `previousCheckNotifs`: `boolean` ; `previousNotifs`: `IMessage`[]  }\>

Hook to mark a notification as read
pass the messageId to the mutate function

**`example`** useMarkAsRead hook
```typescript
const markAsReadQuery = useMarkAsRead();

markAsReadQuery.mutate('message id');
```

#### Returns

`UseMutationResult`<{ `data`: `boolean`  }, `unknown`, `string`, { `previousCheckNotifs`: `boolean` ; `previousNotifs`: `IMessage`[]  }\>

#### Defined in

[ui/hooks/src/use-notifications.ts:75](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-notifications.ts#L75)

___

### useMentionSearch

▸ **useMentionSearch**(`mention`): `UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

Hook to search for profiles

**`example`** useMentionSearch hook
```typescript
const mentionQuery = useMentionSearch('awesomemention');

const mentions = mentionQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `mention` | `string` |

#### Returns

`UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

#### Defined in

[ui/hooks/src/use-mentions.ts:32](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-mentions.ts#L32)

___

### useModeration

▸ **useModeration**(): `UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

Hook for creating a moderation decision

**`example`** useModeration hook
```typescript
const moderateMutation = useModeration();

moderateMutation.mutate({ dataToSign: { explanation: 'no violations detected', ... }, contentId: 'some-content-id', contentType: 'item type', url: 'https://apiendpoint', isPending: true });
```

#### Returns

`UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:78](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L78)

___

### useMutationListener

▸ **useMutationListener**<`TVars`\>(`mutationKey`): `Mutation`<`unknown`, `unknown`, `TVars`, `unknown`\>

Hook to detect changes to a mutation

**`example`** useMutationListener hook
```typescript
const sampleMutation = useMutationListener('mutation key');

const variables = sampleMutation.state.variables;
```

#### Type parameters

| Name |
| :------ |
| `TVars` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutationKey` | `MutationKey` |

#### Returns

`Mutation`<`unknown`, `unknown`, `TVars`, `unknown`\>

Mutation | undefined

#### Defined in

[ui/hooks/src/use-query-listener.ts:21](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-query-listener.ts#L21)

___

### useNetworkState

▸ **useNetworkState**(`enabler?`): `UseQueryResult`<{ `networkNotSupported`: `boolean` = true }, `unknown`\>

Hook to check if the web3 provider is set to function on the Rinkeby test network

**`example`** useNetworkState hook
```typescript
const networkStateQuery = useNetworkState(true);

const networkNotSupported = networkStateQuery.data.networkNotSupported;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<{ `networkNotSupported`: `boolean` = true }, `unknown`\>

networkNotSupported: true if web3 provider is not on the specified network

#### Defined in

[ui/hooks/src/use-network-state.ts:29](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-network-state.ts#L29)

___

### usePlaformHealthCheck

▸ **usePlaformHealthCheck**(): `UseQueryResult`<{ `statusCode`: `number` = response.status; `success`: `boolean` = response.ok }, `Error`\>

#### Returns

`UseQueryResult`<{ `statusCode`: `number` = response.status; `success`: `boolean` = response.ok }, `Error`\>

#### Defined in

[ui/hooks/src/use-health-check.ts:13](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-health-check.ts#L13)

___

### usePost

▸ **usePost**(`__namedParameters`): `UseQueryResult`<{ `_id`: `string` ; `author`: { `_id`: `string` ; `avatar`: `string` ; `contentId`: `string` ; `coverImage`: `string` ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `delisted`: `boolean` ; `description`: `string` ; `ethAddress`: `string` ; `moderated`: `boolean` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `reason`: `string` ; `reported`: `boolean` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  } ; `content`: [`DataProviderInput`] ; `contentId`: `string` ; `creationDate`: `string` ; `delisted`: `boolean` ; `mentions`: [`string`] ; `moderated`: `boolean` ; `quotedBy`: [`string`] ; `quotedByAuthors`: [`UserProfile_Response`] ; `quotes`: [`Post_Response`] ; `reason`: `string` ; `reported`: `boolean` ; `tags`: [`string`] ; `title`: `string` ; `totalComments`: `string` ; `type`: `PostType` ; `updatedAt`: `string`  }, `Error`\>

Hook to get data for a specific post

**`example`** usePost hook
```typescript
const postQuery = usePost('some-post-id', 'logged-user-pubkey', true);

const entryData = React.useMemo(() => {
if (postQuery.data) {
// mapEntry is a utility function that transforms the comment/post data into required format.
return mapEntry(postQuery.data);
}
return undefined;
}, [postQuery.data]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `usePostParam` |

#### Returns

`UseQueryResult`<{ `_id`: `string` ; `author`: { `_id`: `string` ; `avatar`: `string` ; `contentId`: `string` ; `coverImage`: `string` ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `delisted`: `boolean` ; `description`: `string` ; `ethAddress`: `string` ; `moderated`: `boolean` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `reason`: `string` ; `reported`: `boolean` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  } ; `content`: [`DataProviderInput`] ; `contentId`: `string` ; `creationDate`: `string` ; `delisted`: `boolean` ; `mentions`: [`string`] ; `moderated`: `boolean` ; `quotedBy`: [`string`] ; `quotedByAuthors`: [`UserProfile_Response`] ; `quotes`: [`Post_Response`] ; `reason`: `string` ; `reported`: `boolean` ; `tags`: [`string`] ; `title`: `string` ; `totalComments`: `string` ; `type`: `PostType` ; `updatedAt`: `string`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:309](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L309)

___

### usePosts

▸ **usePosts**(`__namedParameters`): `UseQueryResult`<{ `_id`: `string` ; `author`: { `_id`: `string` ; `avatar`: `string` ; `contentId`: `string` ; `coverImage`: `string` ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `delisted`: `boolean` ; `description`: `string` ; `ethAddress`: `string` ; `moderated`: `boolean` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `reason`: `string` ; `reported`: `boolean` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  } ; `content`: [`DataProviderInput`] ; `contentId`: `string` ; `creationDate`: `string` ; `delisted`: `boolean` ; `mentions`: [`string`] ; `moderated`: `boolean` ; `quotedBy`: [`string`] ; `quotedByAuthors`: [`UserProfile_Response`] ; `quotes`: [`Post_Response`] ; `reason`: `string` ; `reported`: `boolean` ; `tags`: [`string`] ; `title`: `string` ; `totalComments`: `string` ; `type`: `PostType` ; `updatedAt`: `string`  }, `Error`\>[]

Hook to get an array of post data

**`example`** usePosts hook
```typescript
const postQueries = usePost({ postIds: ['some-post-id', 'some-other-post-id'], loggedUser: 'logged-user-pubkey', enabler: true });

const entryData = postQueries.map(postQuery=>postQuery.data);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `usePostsParam` |

#### Returns

`UseQueryResult`<{ `_id`: `string` ; `author`: { `_id`: `string` ; `avatar`: `string` ; `contentId`: `string` ; `coverImage`: `string` ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `delisted`: `boolean` ; `description`: `string` ; `ethAddress`: `string` ; `moderated`: `boolean` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `reason`: `string` ; `reported`: `boolean` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  } ; `content`: [`DataProviderInput`] ; `contentId`: `string` ; `creationDate`: `string` ; `delisted`: `boolean` ; `mentions`: [`string`] ; `moderated`: `boolean` ; `quotedBy`: [`string`] ; `quotedByAuthors`: [`UserProfile_Response`] ; `quotes`: [`Post_Response`] ; `reason`: `string` ; `reported`: `boolean` ; `tags`: [`string`] ; `title`: `string` ; `totalComments`: `string` ; `type`: `PostType` ; `updatedAt`: `string`  }, `Error`\>[]

#### Defined in

[ui/hooks/src/use-posts.ts:326](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-posts.ts#L326)

___

### useQueryListener

▸ **useQueryListener**<`TData`\>(`queryKey`): `QueryObserverResult`<`TData`, `unknown`\>

Hook to detect changes to a query

**`example`** useQueryListener hook
```typescript
const sampleQuery = useQueryListener('query key');

const result = sampleQuery.data;
```

#### Type parameters

| Name |
| :------ |
| `TData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryKey` | `QueryKey` |

#### Returns

`QueryObserverResult`<`TData`, `unknown`\>

#### Defined in

[ui/hooks/src/use-query-listener.ts:47](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-query-listener.ts#L47)

___

### useReasons

▸ **useReasons**(): [`string`[], `UseReasonsActions`]

A hook to get predefined reasons from moderation API

**`example`** useReasons hook
```typescript
const [reasons, reasonsActions] = useReasons();

// fetch reasons on mount
React.useEffect(() => {
reasonsActions.fetchReasons({ active: true });
}, []);

console.log(reasons);
```

#### Returns

[`string`[], `UseReasonsActions`]

#### Defined in

[ui/hooks/src/use-reasons.ts:58](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-reasons.ts#L58)

___

### useReport

▸ **useReport**(): `UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

Hook for reporting a post, reply or account

**`example`** useReport hook
```typescript
const reportMutation = useReport();

reportMutation.mutate({ dataToSign: { explanation: 'no violations detected', ... }, contentId: 'some-content-id', contentType: 'item type', url: 'https://apiendpoint' });
```

#### Returns

`UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:141](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-moderation.ts#L141)

___

### useRequiredNetworkName

▸ **useRequiredNetworkName**(): `UseQueryResult`<`string`, `unknown`\>

A hook to get required network name from the SDK

**`example`** useRequiredNetworkName hook
```typescript
const requiredNetworkQuery = useRequiredNetworkName();

const requiredNetworkName = requiredNetworkQuery.data;
```

#### Returns

`UseQueryResult`<`string`, `unknown`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:95](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-injected-provider.ts#L95)

___

### useSaveBookmark

▸ **useSaveBookmark**(): `UseMutationResult`<`string`[], `unknown`, { `entryId`: `string` ; `itemType`: `EntityTypes`  }, { `prevBmks`: { `entryId`: `string` ; `type`: `EntityTypes`  }[]  }\>

Hook used to bookmark resources.
Pass as payload, entryData containing the resource id and itemType to the mutate function.

**`example`** useSaveBookmark hook
```typescript
const saveBookmarkQuery = useSaveBookmark();

saveBookmarkQuery.mutate({entryId: 'dbkjjouyahljfe', itemType: 'item type'});
```

#### Returns

`UseMutationResult`<`string`[], `unknown`, { `entryId`: `string` ; `itemType`: `EntityTypes`  }, { `prevBmks`: { `entryId`: `string` ; `type`: `EntityTypes`  }[]  }\>

#### Defined in

[ui/hooks/src/use-bookmarks.ts:60](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-bookmarks.ts#L60)

___

### useSearch

▸ **useSearch**(`searchQuery`, `loggedUser?`, `enabler?`): `UseQueryResult`<{ `comments`: `IEntryData`[] ; `entries`: `IEntryData`[] ; `profiles`: `any`[] ; `tags`: [] \| [`GlobalSearchResultTagItem`]  }, `Error`\>

Hook for fetching search results for a specific query

**`example`** useSearch hook
```typescript
const searchQuery = useSearch('search keyword', 'logged-in-user-pubkey');

const result = searchQuery.data;
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` |
| `loggedUser?` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |

#### Returns

`UseQueryResult`<{ `comments`: `IEntryData`[] ; `entries`: `IEntryData`[] ; `profiles`: `any`[] ; `tags`: [] \| [`GlobalSearchResultTagItem`]  }, `Error`\>

search results for posts, comments, tags and profiles

#### Defined in

[ui/hooks/src/use-search.ts:332](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-search.ts#L332)

___

### useSearchComments

▸ **useSearchComments**(`searchQuery`, `page`, `loggedUser?`, `enabler?`, `pageSize?`): `UseQueryResult`<`IEntryData`[], `Error`\>

Hook to search for comments

**`example`** useSearchComments hook
```typescript
const searchCommentsQuery = useSearchComments('search keyword', 1, 'logged-in-user-pubkey');

const result = searchCommentsQuery.data;
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` |
| `page` | `number` | `undefined` |
| `loggedUser?` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |
| `pageSize` | `number` | `5` |

#### Returns

`UseQueryResult`<`IEntryData`[], `Error`\>

search results for comments

#### Defined in

[ui/hooks/src/use-search.ts:187](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-search.ts#L187)

___

### useSearchPosts

▸ **useSearchPosts**(`searchQuery`, `page`, `loggedUser?`, `enabler?`, `pageSize?`): `UseQueryResult`<`IEntryData`[], `Error`\>

Hook to search for posts

**`example`** useSearchPosts hook
```typescript
const searchPostsQuery = useSearchPosts('search keyword', 1, 'logged-in-user-pubkey');

const result = searchPostsQuery.data;
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` |
| `page` | `number` | `undefined` |
| `loggedUser?` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |
| `pageSize` | `number` | `5` |

#### Returns

`UseQueryResult`<`IEntryData`[], `Error`\>

search results for posts

#### Defined in

[ui/hooks/src/use-search.ts:122](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-search.ts#L122)

___

### useSearchProfiles

▸ **useSearchProfiles**(`searchQuery`, `page`, `loggedUser?`, `enabler?`, `pageSize?`): `UseQueryResult`<`any`[], `Error`\>

Hook to search for profiles

**`example`** useSearchProfiles hook
```typescript
const searchProfilesQuery = useSearchProfiles('search keyword', 1, 'logged-in-user-pubkey');

const result = searchProfilesQuery.data;
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` |
| `page` | `number` | `undefined` |
| `loggedUser?` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |
| `pageSize` | `number` | `5` |

#### Returns

`UseQueryResult`<`any`[], `Error`\>

search results for profiles, containing full profile data

#### Defined in

[ui/hooks/src/use-search.ts:60](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-search.ts#L60)

___

### useSearchTags

▸ **useSearchTags**(`searchQuery`, `enabler?`): `UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

Hook to search for tags

**`example`** useSearchTags hook
```typescript
const searchTagsQuery = useSearchTags('search keyword');

const result = searchTagsQuery.data;
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |

#### Returns

`UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

search results for posts, comments, tags and profiles

#### Defined in

[ui/hooks/src/use-search.ts:225](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-search.ts#L225)

___

### useSignUp

▸ **useSignUp**(`provider`, `checkRegistered?`, `analyticsActions?`): `Object`

Hook to sign up a user

**`example`** useSignUp hook
```typescript
const { signUpState, ethAddress, fireRemainingMessages, error, fullSignUp, resetState } = useSignUp('selected provider', true);
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `provider` | `EthProviders` | `undefined` |
| `checkRegistered` | `boolean` | `false` |
| `analyticsActions?` | `UseAnalyticsActions` | `undefined` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connectWallet` | `UseMutationResult`<{ `data`: `string`  }, `WalletTransactionError`, `void`, `unknown`\> |
| `error` | `ErrorTypes` |
| `ethAddress` | `string` |
| `fireRemainingMessages` | () => `Promise`<`void`\> |
| `fullSignUp` | `UseMutationResult`<{ `data`: `CurrentUser` & { `isNewUser`: `boolean`  }  }, `WalletTransactionError`, `void`, `unknown`\> |
| `resetState` | () => `void` |
| `signUpState` | `number` |

#### Defined in

[ui/hooks/src/use-login.ts:173](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-login.ts#L173)

___

### useTagSearch

▸ **useTagSearch**(`tagName`): `UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

Hook to search for tags

**`example`** useTagSearch hook
```typescript
const tagSearchQuery = useTagSearch('awesometag');

const result =  tagSearchQuery.data
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:164](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-tag.ts#L164)

___

### useTagSubscriptions

▸ **useTagSubscriptions**(`loggedEthAddress`): `UseQueryResult`<`string`[], `Error`\>

Hook to get a user's subscribed tags

**`example`** useTagSubscriptions hook
```typescript
const subscribedTagsQuery = useTagSubscriptions('logged-in-user-eth-address');

const subscribedTags = subscribedTagsQuery.data;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loggedEthAddress` | `string` |

#### Returns

`UseQueryResult`<`string`[], `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:27](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-tag.ts#L27)

___

### useToggleTagSubscription

▸ **useToggleTagSubscription**(): `UseMutationResult`<{ `data`: { `toggleInterestSub`: `boolean`  }  }, `unknown`, `string`, { `previousTagSubs`: `string`[]  }\>

Hook to toggle a user's tag subscription.
Pass the tagName to the mutate function

**`example`** useToggleTagSubscription hook
```typescript
const toggleTagSubscriptionQuery = useToggleTagSubscription();

toggleTagSubscriptionQuery.mutate('awesome tag');
```

#### Returns

`UseMutationResult`<{ `data`: { `toggleInterestSub`: `boolean`  }  }, `unknown`, `string`, { `previousTagSubs`: `string`[]  }\>

#### Defined in

[ui/hooks/src/use-tag.ts:69](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-tag.ts#L69)

___

### useTrendingProfiles

▸ **useTrendingProfiles**(): `UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

Hook to fetch trending profiles

**`example`** useTrendingProfiles hook
```typescript
const trendingProfilesQuery = useTrendingProfiles();

const trendingProfiles = trendingProfilesQuery.data;
```

#### Returns

`UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

#### Defined in

[ui/hooks/src/use-trending.ts:57](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-trending.ts#L57)

___

### useTrendingTags

▸ **useTrendingTags**(): `UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

Hook to fetch trending tags

**`example`** useTrendingTags hook
```typescript
const trendingTagsQuery = useTrendingTags();

const trendingTags = trendingTagsQuery.data;
```

#### Returns

`UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

#### Defined in

[ui/hooks/src/use-trending.ts:27](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-trending.ts#L27)

___

### useUninstallApp

▸ **useUninstallApp**(): `UseMutationResult`<`void`, `unknown`, `string`, `unknown`\>

Hook to uninstall an app

**`example`** useUninstallApp hook
```typescript
const uninstallAppQuery = useUninstallApp();

uninstallAppQuery.mutate('awesome integration');
```

#### Returns

`UseMutationResult`<`void`, `unknown`, `string`, `unknown`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:107](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-app-settings.ts#L107)

___

### useUpdateUsernameProvider

▸ **useUpdateUsernameProvider**(`pubKey?`): `UseMutationResult`<`void` \| { `makeDefaultProvider`: `string`  }, `Error`, { `provider`: `ProfileProviders` ; `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

Hook to register a username for the user.
Pass as payload, the username and provider details to the mutate function

**`example`** useUpdateUsernameProvider hook
```typescript
const updateUsernameProviderQuery = useUpdateUsernameProvider('logged-in-user-pubkey');

// do something with the returned status of the query
React.useEffect(()=> {
if (updateUsernameProviderQuery.status === 'success') {
// perform an action
}
}, [updateUsernameProviderQuery])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey?` | `string` |

#### Returns

`UseMutationResult`<`void` \| { `makeDefaultProvider`: `string`  }, `Error`, { `provider`: `ProfileProviders` ; `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

#### Defined in

[ui/hooks/src/use-username.ts:77](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-username.ts#L77)

___

### useUsernameValidation

▸ **useUsernameValidation**(`username`, `enabler?`): `UseQueryResult`<`any`, `unknown`\>

Hook to check if a username is available

**`example`** useUsernameValidation hook
```typescript
const usernameValidationQuery = useUsernameValidation('awesomeusername', true);

// do something with the returned status of the query
const querySuccess =  usernameValidationQuery.isSuccess
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `username` | `string` | `undefined` |
| `enabler` | `boolean` | `true` |

#### Returns

`UseQueryResult`<`any`, `unknown`\>

#### Defined in

[ui/hooks/src/use-username.ts:225](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/use-username.ts#L225)

___

### validateType

▸ **validateType**<`T`\>(`arg1`, `type`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T` |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[ui/hooks/src/utils/generic-utils.ts:1](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/generic-utils.ts#L1)

___

### withProviders

▸ **withProviders**<`T`\>(`WrappedComponent`): (`props`: `any`) => `Element`

Higher order component that wraps a component with all necessary providers

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `WrappedComponent` | `ComponentType`<`T`\> |

#### Returns

`fn`

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

##### Returns

`Element`

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |

#### Defined in

[ui/hooks/src/utils/provider-hoc.tsx:26](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/ui/hooks/src/utils/provider-hoc.tsx#L26)

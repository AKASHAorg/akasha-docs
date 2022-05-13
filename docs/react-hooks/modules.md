---
id: "modules"
title: "React Hooks"
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

React component that fetches the user selected theme name from the localstorage
and passes it to the ThemeSelector component along with all available themes.

#### Defined in

[ui/hooks/src/utils/theme-wrapper.tsx:11](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/theme-wrapper.tsx#L11)

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

[ui/hooks/src/constants.ts:29](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/constants.ts#L29)

## Functions

### createPendingEntry

▸ **createPendingEntry**(`author`, `entryPublishData`): `PendingEntry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author` | `IProfileData` |
| `entryPublishData` | `IPublishData` & { `entryId?`: `string`  } |

#### Returns

`PendingEntry`

#### Defined in

[ui/hooks/src/utils/entry-utils.ts:199](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/entry-utils.ts#L199)

___

### getLinkPreview

▸ **getLinkPreview**(`url`): `Promise`<`LinkPreview_Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`LinkPreview_Response`\>

#### Defined in

[ui/hooks/src/utils/media-utils.ts:100](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/media-utils.ts#L100)

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

originLink: textile subdomain gateway
fallbackLink: infura subdomain gateway
pathLink: textile path gateway

| Name | Type |
| :------ | :------ |
| `fallbackLink` | `string` |
| `originLink` | `string` |
| `pathLink` | `string` |

#### Defined in

[ui/hooks/src/utils/media-utils.ts:19](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/media-utils.ts#L19)

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

[ui/hooks/src/utils/entry-utils.ts:71](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/entry-utils.ts#L71)

___

### switchToRequiredNetwork

▸ **switchToRequiredNetwork**(): `Promise`<`void`\>

An utility function to switch to required network - Metamask

#### Returns

`Promise`<`void`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:38](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-injected-provider.ts#L38)

___

### uploadMediaToTextile

▸ **uploadMediaToTextile**(`data`, `isUrl?`): `Promise`<{ `data`: { `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = res.size; `src`: { `fallbackUrl`: `string` = ipfsLinks.fallbackLink; `url`: `string` = ipfsLinks.originLink }  } ; `error`: `undefined` = error } \| { `data`: `undefined` ; `error`: `any` = error }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `File` | `undefined` |
| `isUrl` | `boolean` | `false` |

#### Returns

`Promise`<{ `data`: { `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = res.size; `src`: { `fallbackUrl`: `string` = ipfsLinks.fallbackLink; `url`: `string` = ipfsLinks.originLink }  } ; `error`: `undefined` = error } \| { `data`: `undefined` ; `error`: `any` = error }\>

#### Defined in

[ui/hooks/src/utils/media-utils.ts:58](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/media-utils.ts#L58)

___

### useAnalytics

▸ **useAnalytics**(): [`UseAnalyticsActions`]

#### Returns

[`UseAnalyticsActions`]

#### Defined in

[ui/hooks/src/use-analytics.tsx:32](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-analytics.tsx#L32)

___

### useCheckModerator

▸ **useCheckModerator**(`loggedUser`): `UseQueryResult`<`number`, `Error`\>

Hook to check if a user is a moderator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loggedUser` | `string` | textile public key of the user |

#### Returns

`UseQueryResult`<`number`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:188](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L188)

___

### useCheckNewNotifications

▸ **useCheckNewNotifications**(`loggedEthAddress`): `UseQueryResult`<`boolean`, `Error`\>

Hook to check for new notifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loggedEthAddress` | `string` | currently logged in user's eth address |

#### Returns

`UseQueryResult`<`boolean`, `Error`\>

#### Defined in

[ui/hooks/src/use-notifications.ts:109](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-notifications.ts#L109)

___

### useComment

▸ **useComment**(`commentID`, `enabler?`): `UseQueryResult`<`CommentResponse`, `Error`\>

Hook for fetching data for a specific comment

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commentID` | `string` | `undefined` | id of comment to fetch data for |
| `enabler` | `boolean` | `true` | flag for allowing the query |

#### Returns

`UseQueryResult`<`CommentResponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-comments.ts:91](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-comments.ts#L91)

___

### useConnectProvider

▸ **useConnectProvider**(`provider`): `UseQueryResult`<`boolean`, `unknown`\>

A hook to connect to injected provider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `EthProviders` | -: any of type EthProviders |

#### Returns

`UseQueryResult`<`boolean`, `unknown`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:64](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-injected-provider.ts#L64)

___

### useCreateComment

▸ **useCreateComment**(): `UseMutationResult`<`string`, `unknown`, `IPublishData` & { `postID`: `string`  }, { `entryId`: `string` = pendingID; `optimisticComment`: `IPublishData` & { `postID`: `string`  }  }\>

Hook for creating a new comment

#### Returns

`UseMutationResult`<`string`, `unknown`, `IPublishData` & { `postID`: `string`  }, { `entryId`: `string` = pendingID; `optimisticComment`: `IPublishData` & { `postID`: `string`  }  }\>

#### Defined in

[ui/hooks/src/use-comments.ts:175](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-comments.ts#L175)

___

### useCreatePost

▸ **useCreatePost**(): `UseMutationResult`<`string`, `unknown`, `IPublishData`, { `entryId`: `string` = pendingID; `optimisticEntry`: `IPublishData` & { `isPublishing`: `boolean` = true }  }\>

Hook to create a new post
pass the publish data from the editor to the mutate function

#### Returns

`UseMutationResult`<`string`, `unknown`, `IPublishData`, { `entryId`: `string` = pendingID; `optimisticEntry`: `IPublishData` & { `isPublishing`: `boolean` = true }  }\>

#### Defined in

[ui/hooks/src/use-posts.ts:289](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L289)

___

### useCurrentNetwork

▸ **useCurrentNetwork**(`enabler?`): `UseQueryResult`<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<`string`, `unknown`\>

#### Defined in

[ui/hooks/src/use-network-state.ts:37](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-network-state.ts#L37)

___

### useDeleteBookmark

▸ **useDeleteBookmark**(): `UseMutationResult`<{ `data`: `string`[]  }, `unknown`, `string`, { `prevBmks`: { `entryId`: `string` ; `type`: `ItemTypes`  }[]  }\>

Hook used to delete a bookmark

#### Returns

`UseMutationResult`<{ `data`: `string`[]  }, `unknown`, `string`, { `prevBmks`: { `entryId`: `string` ; `type`: `ItemTypes`  }[]  }\>

#### Defined in

[ui/hooks/src/use-bookmarks.ts:95](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-bookmarks.ts#L95)

___

### useDeleteComment

▸ **useDeleteComment**(`commentID`): `UseMutationResult`<``true``, `unknown`, `string`, { `previousComment`: `CommentResponse`  }\>

Hook for deleting a specific comment

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentID` | `string` | id of the comment to be deleted |

#### Returns

`UseMutationResult`<``true``, `unknown`, `string`, { `previousComment`: `CommentResponse`  }\>

#### Defined in

[ui/hooks/src/use-comments.ts:122](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-comments.ts#L122)

___

### useDeletePost

▸ **useDeletePost**(`postID`): `UseMutationResult`<{ `data`: { `removePost`: `boolean`  }  }, `unknown`, `string`, { `previousPost`: `Post_Response`  }\>

Hook to delete a post

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postID` | `string` | id of the post to be deleted |

#### Returns

`UseMutationResult`<{ `data`: { `removePost`: `boolean`  }  }, `unknown`, `string`, { `previousPost`: `Post_Response`  }\>

#### Defined in

[ui/hooks/src/use-posts.ts:229](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L229)

___

### useEditComment

▸ **useEditComment**(`commentID`, `hasCommentData`): `UseMutationResult`<`void` \| { `data`: { `editComment`: `boolean`  }  }, `unknown`, `IPublishData` & { `postID`: `string`  }, { `comment`: `IPublishData` & { `postID`: `string`  }  }\>

Hook for editing a comment

#### Parameters

| Name | Type |
| :------ | :------ |
| `commentID` | `string` |
| `hasCommentData` | `boolean` |

#### Returns

`UseMutationResult`<`void` \| { `data`: { `editComment`: `boolean`  }  }, `unknown`, `IPublishData` & { `postID`: `string`  }, { `comment`: `IPublishData` & { `postID`: `string`  }  }\>

#### Defined in

[ui/hooks/src/use-comments.ts:220](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-comments.ts#L220)

___

### useEditPost

▸ **useEditPost**(): `UseMutationResult`<`boolean`, `Error`, `IPublishData` & { `entryID`: `string`  }, { `editedPost`: `IPublishData` & { `entryID`: `string`  }  }\>

Hook to edit a post
pass the edited post data to the mutation function

#### Returns

`UseMutationResult`<`boolean`, `Error`, `IPublishData` & { `entryID`: `string`  }, { `editedPost`: `IPublishData` & { `entryID`: `string`  }  }\>

#### Defined in

[ui/hooks/src/use-posts.ts:337](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L337)

___

### useEnsByAddress

▸ **useEnsByAddress**(`ethAddress`): `UseQueryResult`<`string`, `Error`\>

Hook to resolve an ethAddress to an ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ethAddress` | `string` | ethereum address to resolve |

#### Returns

`UseQueryResult`<`string`, `Error`\>

#### Defined in

[ui/hooks/src/use-username.ts:212](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-username.ts#L212)

___

### useEnsRegistration

▸ **useEnsRegistration**(`pubKey?`): `UseMutationResult`<{ `makeDefaultProvider`: `string`  }, `Error`, { `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

Hook to register a new ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey?` | `string` | textile public key of the user |

#### Returns

`UseMutationResult`<{ `makeDefaultProvider`: `string`  }, `Error`, { `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

#### Defined in

[ui/hooks/src/use-username.ts:144](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-username.ts#L144)

___

### useEntryNavigation

▸ **useEntryNavigation**(`navigateFn?`, `currentPostId?`): (`navigationDetails`: `IContentClickDetails`, `itemType`: `ItemTypes`) => `void`

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
| `itemType` | `ItemTypes` |

##### Returns

`void`

#### Defined in

[ui/hooks/src/use-navigation.ts:8](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-navigation.ts#L8)

___

### useFetchNotifications

▸ **useFetchNotifications**(`loggedEthAddress`): `UseQueryResult`<`any`[], `Error`\>

Hook to get a user's notifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loggedEthAddress` | `string` | currently logged in user's eth address |

#### Returns

`UseQueryResult`<`any`[], `Error`\>

#### Defined in

[ui/hooks/src/use-notifications.ts:50](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-notifications.ts#L50)

___

### useFollow

▸ **useFollow**(): `UseMutationResult`<{ `data`: { `follow`: `boolean`  }  }, `unknown`, `string`, { `previousFollowedProfiles`: `string`[]  }\>

Hook to follow another user

#### Returns

`UseMutationResult`<{ `data`: { `follow`: `boolean`  }  }, `unknown`, `string`, { `previousFollowedProfiles`: `string`[]  }\>

#### Defined in

[ui/hooks/src/use-follow.ts:156](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-follow.ts#L156)

___

### useFollowers

▸ **useFollowers**(`pubKey`, `limit`, `offset?`): `UseInfiniteQueryResult`<`UserFollowers_Response`, `Error`\>

Hook to get followers for a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | textile generated public key of the user |
| `limit` | `number` | number of followers to return per page |
| `offset?` | `number` | offset for query |

#### Returns

`UseInfiniteQueryResult`<`UserFollowers_Response`, `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:161](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L161)

___

### useFollowing

▸ **useFollowing**(`pubKey`, `limit`, `offset?`): `UseInfiniteQueryResult`<`UserFollowers_Response`, `Error`\>

Hook to get a list of profiles following the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | textile generated public key of the user |
| `limit` | `number` | number of profiles following the user to return per page |
| `offset?` | `number` | offset for query |

#### Returns

`UseInfiniteQueryResult`<`UserFollowers_Response`, `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:190](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L190)

___

### useGetAllInstalledApps

▸ **useGetAllInstalledApps**(`enabler?`): `UseQueryResult`<`any`, `Error`\>

Hook to get all the user's installed apps

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<`any`, `Error`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:37](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-app-settings.ts#L37)

___

### useGetAllIntegrationReleaseIds

▸ **useGetAllIntegrationReleaseIds**(`integrationName`, `offset?`): `UseQueryResult`<{ `nextIndex`: `any` = data.next; `releaseIds`: `any`  }, `Error`\>

Hook to get all the release ids for an integration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `integrationName` | `string` | name of the integration |
| `offset?` | `number` | offset to start from |

#### Returns

`UseQueryResult`<{ `nextIndex`: `any` = data.next; `releaseIds`: `any`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:141](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L141)

___

### useGetAllIntegrationsIds

▸ **useGetAllIntegrationsIds**(`enabler?`, `offset?`): `UseQueryResult`<`any`, `Error`\>

Hook to get all the published integrations ids

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enabler` | `boolean` | `true` |
| `offset?` | `number` | `undefined` |

#### Returns

`UseQueryResult`<`any`, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:122](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L122)

___

### useGetAppConfig

▸ **useGetAppConfig**(`appName`, `enabler?`): `UseQueryResult`<`any`, `Error`\>

Hook to get configuration object for an installed app

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | name of the app |
| `enabler?` | `boolean` | - |

#### Returns

`UseQueryResult`<`any`, `Error`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:20](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-app-settings.ts#L20)

___

### useGetBookmarks

▸ **useGetBookmarks**(`loggedEthAddress`, `enabler?`): `UseQueryResult`<`any`, `unknown`\>

Hook for gettting a user's saved posts and comments

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `loggedEthAddress` | `string` | `undefined` | currently logged in user's ethereum address |
| `enabler` | `boolean` | `true` | flag for allowing the query |

#### Returns

`UseQueryResult`<`any`, `unknown`\>

#### Defined in

[ui/hooks/src/use-bookmarks.ts:16](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-bookmarks.ts#L16)

___

### useGetCount

▸ **useGetCount**(): `UseQueryResult`<{ `delisted`: `number` = 0; `kept`: `number` = 0; `pending`: `number` = 0 }, `Error`\>

Hook to get moderation counters

#### Returns

`UseQueryResult`<{ `delisted`: `number` = 0; `kept`: `number` = 0; `pending`: `number` = 0 }, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:199](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L199)

___

### useGetEntryAuthor

▸ **useGetEntryAuthor**(`entryId`): `UseQueryResult`<`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  }, `Error`\>

Hook to get an entry author's profile data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryId` | `string` | the id of the specific post |

#### Returns

`UseQueryResult`<`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:136](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L136)

___

### useGetFlags

▸ **useGetFlags**(`entryId`): `UseQueryResult`<[`EntryReport`](interfaces/EntryReport.md)[], `Error`\>

Hook to get report flags for a specific entry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entryId` | `string` | id of the entry |

#### Returns

`UseQueryResult`<[`EntryReport`](interfaces/EntryReport.md)[], `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:210](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L210)

___

### useGetIntegrationId

▸ **useGetIntegrationId**(`integrationName`): `UseQueryResult`<{ `id`: `string` = data }, `Error`\>

Hook to get integration id by its name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `integrationName` | `string` | name of the integration |

#### Returns

`UseQueryResult`<{ `id`: `string` = data }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:72](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L72)

___

### useGetIntegrationInfo

▸ **useGetIntegrationInfo**(`integrationId`): `UseQueryResult`<`IntegrationInfo`, `Error`\>

Hook to get integration package info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `integrationId` | `string` | id of the integration |

#### Returns

`UseQueryResult`<`IntegrationInfo`, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:19](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L19)

___

### useGetIntegrationReleaseId

▸ **useGetIntegrationReleaseId**(`integrationName`, `version`, `enabler?`): `UseQueryResult`<{ `id`: `string` = data }, `Error`\>

Hook to get integration release id by its name and version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `integrationName` | `string` | name of the integration |
| `version` | `string` | release version |
| `enabler?` | `boolean` | - |

#### Returns

`UseQueryResult`<{ `id`: `string` = data }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:90](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L90)

___

### useGetIntegrationReleaseInfo

▸ **useGetIntegrationReleaseInfo**(`releaseId`): `UseQueryResult`<`ReleaseInfo`, `Error`\>

Hook to get integration release info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `releaseId` | `string` | id of the integration |

#### Returns

`UseQueryResult`<`ReleaseInfo`, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:163](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L163)

___

### useGetIntegrationsCount

▸ **useGetIntegrationsCount**(): `UseQueryResult`<{ `totalCount`: `any` = data.totalCount }, `Error`\>

Hook to get the number of published integrations

#### Returns

`UseQueryResult`<{ `totalCount`: `any` = data.totalCount }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:55](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L55)

___

### useGetIntegrationsInfo

▸ **useGetIntegrationsInfo**(`opt`): `UseQueryResult`<{ `getIntegrationInfo`: `IntegrationInfo`[]  }, `Error`\>

Hook to get package info for multiple integrations by name or id

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] |

#### Returns

`UseQueryResult`<{ `getIntegrationInfo`: `IntegrationInfo`[]  }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:38](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L38)

___

### useGetIntegrationsReleaseInfo

▸ **useGetIntegrationsReleaseInfo**(`releaseIds`): `UseQueryResult`<`any`[], `Error`\>

Hook to get multiple integrations release info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `releaseIds` | `string`[] | ids of the integrations |

#### Returns

`UseQueryResult`<`any`[], `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:186](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L186)

___

### useGetLatestReleaseInfo

▸ **useGetLatestReleaseInfo**(`opt`): `UseQueryResult`<{ `getLatestRelease`: `ReleaseInfo`[]  }, `Error`\>

Hook to get latest release info for integrations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | { `id?`: `string` ; `name?`: `string`  }[] | array of integration names or ids |

#### Returns

`UseQueryResult`<{ `getLatestRelease`: `ReleaseInfo`[]  }, `Error`\>

#### Defined in

[ui/hooks/src/use-integration-registry.ts:204](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-integration-registry.ts#L204)

___

### useGetLogin

▸ **useGetLogin**(`onError?`): `UseQueryResult`<[`LoginState`](interfaces/LoginState.md), `unknown`\>

Hook for retrieving the current authentication state of the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError?` | (`error`: `Error`) => `void` | outside error handler |

#### Returns

`UseQueryResult`<[`LoginState`](interfaces/LoginState.md), `unknown`\>

#### Defined in

[ui/hooks/src/use-login.ts:48](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-login.ts#L48)

___

### useGetProfile

▸ **useGetProfile**(`pubKey`, `loggedUser?`, `enabler?`): `UseQueryResult`<`IProfileData`, `Error`\>

Hook to get a user's profile data

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pubKey` | `string` | `undefined` | the textile generated public key of the user |
| `loggedUser?` | `string` | `undefined` | the textile generated public key of the currently logged in user |
| `enabler` | `boolean` | `true` | flag to allow the query |

#### Returns

`UseQueryResult`<`IProfileData`, `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:74](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L74)

___

### useGetProfileByEthAddress

▸ **useGetProfileByEthAddress**(`ethAddress`, `loggedUser?`, `enabler?`): `UseQueryResult`<`IProfileData`, `Error`\>

Hook to get a user's profile data

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ethAddress` | `string` | `undefined` | the ethereum public key of the user |
| `loggedUser?` | `string` | `undefined` | the textile generated public key of the currently logged in user |
| `enabler` | `boolean` | `true` | flag to allow the query |

#### Returns

`UseQueryResult`<`IProfileData`, `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:107](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L107)

___

### useGetTag

▸ **useGetTag**(`tagName`, `enabler?`): `UseQueryResult`<`Tag_Response`, `Error`\>

Hook to get a specific tag by name

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tagName` | `string` | `undefined` | name of the tag |
| `enabler` | `boolean` | `true` | flag to allow the query |

#### Returns

`UseQueryResult`<`Tag_Response`, `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:120](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-tag.ts#L120)

___

### useGlobalLogin

▸ **useGlobalLogin**(`props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `UseGlobalLoginProps` |

#### Returns

`void`

#### Defined in

[ui/hooks/src/use-global-login.ts:24](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-global-login.ts#L24)

___

### useInfiniteComments

▸ **useInfiniteComments**(`limit`, `postID`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get the comments for a specific post

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number of comments to fetch on a page |
| `postID` | `string` | id of the parent post |
| `offset?` | `string` | id of where to start |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-comments.ts:49](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-comments.ts#L49)

___

### useInfiniteCustomPosts

▸ **useInfiniteCustomPosts**(`enabler`, `limit`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get posts for personalised user feed from followed profiles and subscribed tags,
sorted chronologically

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler` | `boolean` |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:101](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L101)

___

### useInfiniteDelisted

▸ **useInfiniteDelisted**(`limit`, `offset?`): `UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

Hook to get delisted moderated items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number of items per page |
| `offset?` | `string` | index of query offset |

#### Returns

`UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:289](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L289)

___

### useInfiniteKept

▸ **useInfiniteKept**(`limit`, `offset?`): `UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

Hook to get kept moderated items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number of items per page |
| `offset?` | `string` | index of query offset |

#### Returns

`UseInfiniteQueryResult`<`ModeratedItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:265](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L265)

___

### useInfiniteLog

▸ **useInfiniteLog**(`limit`, `offset?`): `UseInfiniteQueryResult`<`LogItemsReponse`, `Error`\>

Hook to get log of moderated items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number of items per page |
| `offset?` | `string` | index of query offset |

#### Returns

`UseInfiniteQueryResult`<`LogItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:223](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L223)

___

### useInfinitePending

▸ **useInfinitePending**(`limit`, `offset?`): `UseInfiniteQueryResult`<`PendingItemsReponse`, `Error`\>

Hook to get pending moderation items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | number of items per page |
| `offset?` | `string` | index of query offset |

#### Returns

`UseInfiniteQueryResult`<`PendingItemsReponse`, `Error`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:246](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L246)

___

### useInfinitePosts

▸ **useInfinitePosts**(`limit`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get posts for feed, sorted chronologically

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `offset?` | `string` |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:64](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L64)

___

### useInfinitePostsByAuthor

▸ **useInfinitePostsByAuthor**(`pubKey`, `limit`, `enabled?`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get an author's posts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pubKey` | `string` | `undefined` | textile public key of the user |
| `limit` | `number` | `undefined` | - |
| `enabled` | `boolean` | `true` | - |
| `offset?` | `number` | `undefined` | - |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:173](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L173)

___

### useInfinitePostsByTag

▸ **useInfinitePostsByTag**(`name`, `limit`, `offset?`): `UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

Hook to get posts that contain a specific tag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | tag name |
| `limit` | `number` | - |
| `offset?` | `string` | - |

#### Returns

`UseInfiniteQueryResult`<{ `nextIndex`: `string` ; `results`: `string`[] ; `total`: `number`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:137](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L137)

___

### useInjectedProvider

▸ **useInjectedProvider**(): `UseQueryResult`<{ `details`: { `iconType`: `string` = ''; `subtitleLabel`: `string` = ''; `titleLabel`: `string` = '' } ; `name`: `INJECTED_PROVIDERS` = INJECTED\_PROVIDERS.NOT\_DETECTED }, `Error`\>

A hook to get injected provider from the SDK

#### Returns

`UseQueryResult`<{ `details`: { `iconType`: `string` = ''; `subtitleLabel`: `string` = ''; `titleLabel`: `string` = '' } ; `name`: `INJECTED_PROVIDERS` = INJECTED\_PROVIDERS.NOT\_DETECTED }, `Error`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:46](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-injected-provider.ts#L46)

___

### useInstallApp

▸ **useInstallApp**(): `UseMutationResult`<`string`[], `unknown`, { `id?`: `string` ; `name?`: `string`  }, `unknown`\>

Hook to persist an installed app config to a user's profile

#### Returns

`UseMutationResult`<`string`[], `unknown`, { `id?`: `string` ; `name?`: `string`  }, `unknown`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:59](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-app-settings.ts#L59)

___

### useInterests

▸ **useInterests**(`pubKey`): `UseQueryResult`<`Tag_Response`[], `Error`\>

Fetch the list of subscribed tags for a specific pub key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `any` | the textile generated public key of the user |

#### Returns

`UseQueryResult`<`Tag_Response`[], `Error`\>

#### Defined in

[ui/hooks/src/use-profile.ts:227](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L227)

___

### useIsFollowingMultiple

▸ **useIsFollowingMultiple**(`followerEthAddress`, `followingEthAddressArray`): `UseQueryResult`<`string`[], `Error`\>

Hook to check if a user is following other users

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `followerEthAddress` | `string` | ethereum address of user to check for |
| `followingEthAddressArray` | `string`[] | array of ethereum addresses to check if followed |

#### Returns

`UseQueryResult`<`string`[], `Error`\>

#### Defined in

[ui/hooks/src/use-follow.ts:60](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-follow.ts#L60)

___

### useIsSubscribedToTag

▸ **useIsSubscribedToTag**(`tagName`, `loggedEthAddress`): `UseQueryResult`<`boolean`, `Error`\>

Hook to check if a user subscribes to a tag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `string` | name of the tag |
| `loggedEthAddress` | `string` | eth address of the logged in user |

#### Returns

`UseQueryResult`<`boolean`, `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:42](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-tag.ts#L42)

___

### useIsValidToken

▸ **useIsValidToken**(`props`): `UseQueryResult`<{ `data`: `boolean`  }, `Error`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IUseIsValidTokenProps` |

#### Returns

`UseQueryResult`<{ `data`: `boolean`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-invite-token-validation.ts:22](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-invite-token-validation.ts#L22)

___

### useLegalDoc

▸ **useLegalDoc**(`docName`): `UseQueryResult`<`never`, `Error`\>

Hook to get legal docs stored on ipfs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docName` | `LEGAL_DOCS` | type of document to retrieve |

#### Returns

`UseQueryResult`<`never`, `Error`\>

#### Defined in

[ui/hooks/src/use-legal.ts:19](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-legal.ts#L19)

___

### useLogin

▸ **useLogin**(`onError?`): `UseMutationResult`<`CurrentUser` & { `isNewUser`: `boolean`  }, `Error`, { `checkRegistered`: `boolean` ; `selectedProvider`: `EthProviders`  }, `unknown`\>

Hook to sign in a user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError?` | (`err`: `Error`) => `void` | outside error handler |

#### Returns

`UseMutationResult`<`CurrentUser` & { `isNewUser`: `boolean`  }, `Error`, { `checkRegistered`: `boolean` ; `selectedProvider`: `EthProviders`  }, `unknown`\>

#### Defined in

[ui/hooks/src/use-login.ts:110](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-login.ts#L110)

___

### useLogout

▸ **useLogout**(): `UseMutationResult`<``true``, `Error`, `void`, `unknown`\>

Hook to sign out the current user

#### Returns

`UseMutationResult`<``true``, `Error`, `void`, `unknown`\>

#### Defined in

[ui/hooks/src/use-login.ts:316](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-login.ts#L316)

___

### useMarkAsRead

▸ **useMarkAsRead**(): `UseMutationResult`<{ `data`: `boolean`  }, `unknown`, `string`, { `previousCheckNotifs`: `boolean` ; `previousNotifs`: `IMessage`[]  }\>

Hook to mark a notification as read
pass the messageId to the mutate function

#### Returns

`UseMutationResult`<{ `data`: `boolean`  }, `unknown`, `string`, { `previousCheckNotifs`: `boolean` ; `previousNotifs`: `IMessage`[]  }\>

#### Defined in

[ui/hooks/src/use-notifications.ts:62](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-notifications.ts#L62)

___

### useMentionSearch

▸ **useMentionSearch**(`mention`): `UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

Hook to search for profiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mention` | `string` | profile name to search for |

#### Returns

`UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

#### Defined in

[ui/hooks/src/use-mentions.ts:27](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-mentions.ts#L27)

___

### useModeration

▸ **useModeration**(): `UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

Hook for creating a moderation decision

#### Returns

`UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:72](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L72)

___

### useMutationListener

▸ **useMutationListener**<`TVars`\>(`mutationKey`): `Mutation`<`unknown`, `unknown`, `TVars`, `unknown`\>

Hook to detect changes to a mutation

#### Type parameters

| Name |
| :------ |
| `TVars` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutationKey` | `MutationKey` | the key of the mutation to listen to |

#### Returns

`Mutation`<`unknown`, `unknown`, `TVars`, `unknown`\>

Mutation | undefined

#### Defined in

[ui/hooks/src/use-query-listener.ts:16](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-query-listener.ts#L16)

___

### useNetworkState

▸ **useNetworkState**(`enabler?`): `UseQueryResult`<{ `networkNotSupported`: `boolean` = true }, `unknown`\>

Hook to check if the web3 provider is set to function on the Rinkeby test network

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabler?` | `boolean` |

#### Returns

`UseQueryResult`<{ `networkNotSupported`: `boolean` = true }, `unknown`\>

networkNotSupported: true if web3 provider on another network

#### Defined in

[ui/hooks/src/use-network-state.ts:23](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-network-state.ts#L23)

___

### usePost

▸ **usePost**(`__namedParameters`): `UseQueryResult`<{ `_id`: `string` ; `author`: { `_id`: `string` ; `avatar`: `string` ; `contentId`: `string` ; `coverImage`: `string` ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `delisted`: `boolean` ; `description`: `string` ; `ethAddress`: `string` ; `moderated`: `boolean` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `reason`: `string` ; `reported`: `boolean` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  } ; `content`: [`DataProviderInput`] ; `contentId`: `string` ; `creationDate`: `string` ; `delisted`: `boolean` ; `mentions`: [`string`] ; `moderated`: `boolean` ; `quotedBy`: [`string`] ; `quotedByAuthors`: [`UserProfile_Response`] ; `quotes`: [`Post_Response`] ; `reason`: `string` ; `reported`: `boolean` ; `tags`: [`string`] ; `title`: `string` ; `totalComments`: `string` ; `type`: `PostType` ; `updatedAt`: `string`  }, `Error`\>

Hook to get data for a specific post

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `usePostParam` |

#### Returns

`UseQueryResult`<{ `_id`: `string` ; `author`: { `_id`: `string` ; `avatar`: `string` ; `contentId`: `string` ; `coverImage`: `string` ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `delisted`: `boolean` ; `description`: `string` ; `ethAddress`: `string` ; `moderated`: `boolean` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `reason`: `string` ; `reported`: `boolean` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  } ; `content`: [`DataProviderInput`] ; `contentId`: `string` ; `creationDate`: `string` ; `delisted`: `boolean` ; `mentions`: [`string`] ; `moderated`: `boolean` ; `quotedBy`: [`string`] ; `quotedByAuthors`: [`UserProfile_Response`] ; `quotes`: [`Post_Response`] ; `reason`: `string` ; `reported`: `boolean` ; `tags`: [`string`] ; `title`: `string` ; `totalComments`: `string` ; `type`: `PostType` ; `updatedAt`: `string`  }, `Error`\>

#### Defined in

[ui/hooks/src/use-posts.ts:217](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-posts.ts#L217)

___

### useProfileUpdate

▸ **useProfileUpdate**(`pubKey`): `UseMutationResult`<`void`, `unknown`, `UpdateProfileFormData`, { `currentProfile`: `IProfileData`  }\>

Hook to update a user's profile data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | the textile generated public key of the user |

#### Returns

`UseMutationResult`<`void`, `unknown`, `UpdateProfileFormData`, { `currentProfile`: `IProfileData`  }\>

#### Defined in

[ui/hooks/src/use-profile.ts:382](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-profile.ts#L382)

___

### useQueryListener

▸ **useQueryListener**<`TData`\>(`queryKey`): `QueryObserverResult`<`TData`, `unknown`\>

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

[ui/hooks/src/use-query-listener.ts:33](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-query-listener.ts#L33)

___

### useReasons

▸ **useReasons**(): [`string`[], `UseReasonsActions`]

A hook to get predefined reasons from moderation API

#### Returns

[`string`[], `UseReasonsActions`]

#### Defined in

[ui/hooks/src/use-reasons.ts:47](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-reasons.ts#L47)

___

### useReport

▸ **useReport**(): `UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

Hook for reporting a post, reply or account

#### Returns

`UseMutationResult`<`number`, `Error`, `UseModerationParam`, `unknown`\>

#### Defined in

[ui/hooks/src/use-moderation.ts:129](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-moderation.ts#L129)

___

### useRequiredNetworkName

▸ **useRequiredNetworkName**(): `UseQueryResult`<`string`, `unknown`\>

A hook to get required network name from the SDK

#### Returns

`UseQueryResult`<`string`, `unknown`\>

#### Defined in

[ui/hooks/src/use-injected-provider.ts:75](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-injected-provider.ts#L75)

___

### useSaveBookmark

▸ **useSaveBookmark**(): `UseMutationResult`<`string`[], `unknown`, { `entryId`: `string` ; `itemType`: `ItemTypes`  }, { `prevBmks`: { `entryId`: `string` ; `type`: `ItemTypes`  }[]  }\>

Hook used to save bookmarks
can be used to bookmark replies and posts (itemType is passed to mutate()).

#### Returns

`UseMutationResult`<`string`[], `unknown`, { `entryId`: `string` ; `itemType`: `ItemTypes`  }, { `prevBmks`: { `entryId`: `string` ; `type`: `ItemTypes`  }[]  }\>

#### Defined in

[ui/hooks/src/use-bookmarks.ts:50](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-bookmarks.ts#L50)

___

### useSearch

▸ **useSearch**(`searchQuery`, `loggedUser?`, `enabler?`): `UseQueryResult`<{ `comments`: `IEntryData`[] ; `entries`: `IEntryData`[] ; `profiles`: `any`[] ; `tags`: [`GlobalSearchResultTagItem`] \| []  }, `Error`\>

Hook for fetching search results for a specific query

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` | query for the search |
| `loggedUser?` | `string` | `undefined` | pubKey of the logged in user |
| `enabler` | `boolean` | `true` | flag to allow the query |

#### Returns

`UseQueryResult`<{ `comments`: `IEntryData`[] ; `entries`: `IEntryData`[] ; `profiles`: `any`[] ; `tags`: [`GlobalSearchResultTagItem`] \| []  }, `Error`\>

search results for posts, comments, tags and profiles

#### Defined in

[ui/hooks/src/use-search.ts:324](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-search.ts#L324)

___

### useSearchComments

▸ **useSearchComments**(`searchQuery`, `page`, `loggedUser?`, `enabler?`, `pageSize?`): `UseQueryResult`<`IEntryData`[], `Error`\>

Hook to search for comments

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` | query for the search |
| `page` | `number` | `undefined` | page number |
| `loggedUser?` | `string` | `undefined` | pubKey of the logged in user |
| `enabler` | `boolean` | `true` | flag to allow the query |
| `pageSize` | `number` | `5` | number of results per page |

#### Returns

`UseQueryResult`<`IEntryData`[], `Error`\>

search results for comments

#### Defined in

[ui/hooks/src/use-search.ts:186](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-search.ts#L186)

___

### useSearchPosts

▸ **useSearchPosts**(`searchQuery`, `page`, `loggedUser?`, `enabler?`, `pageSize?`): `UseQueryResult`<`IEntryData`[], `Error`\>

Hook to search for posts

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` | query for the search |
| `page` | `number` | `undefined` | page number |
| `loggedUser?` | `string` | `undefined` | pubKey of the logged in user |
| `enabler` | `boolean` | `true` | flag to allow the query |
| `pageSize` | `number` | `5` | number of results per page |

#### Returns

`UseQueryResult`<`IEntryData`[], `Error`\>

search results for posts

#### Defined in

[ui/hooks/src/use-search.ts:122](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-search.ts#L122)

___

### useSearchProfiles

▸ **useSearchProfiles**(`searchQuery`, `page`, `loggedUser?`, `enabler?`, `pageSize?`): `UseQueryResult`<`any`[], `Error`\>

Hook to search for profiles

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` | query for the search |
| `page` | `number` | `undefined` | page number |
| `loggedUser?` | `string` | `undefined` | pubKey of the logged in user |
| `enabler` | `boolean` | `true` | flag to allow the query |
| `pageSize` | `number` | `5` | number of results per page |

#### Returns

`UseQueryResult`<`any`[], `Error`\>

search results for profiles, containing full profile data

#### Defined in

[ui/hooks/src/use-search.ts:61](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-search.ts#L61)

___

### useSearchTags

▸ **useSearchTags**(`searchQuery`, `enabler?`): `UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

Hook to search for tags

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `searchQuery` | `string` | `undefined` | query for the search |
| `enabler` | `boolean` | `true` | flag to allow the query |

#### Returns

`UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

search results for posts, comments, tags and profiles

#### Defined in

[ui/hooks/src/use-search.ts:220](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-search.ts#L220)

___

### useTagSearch

▸ **useTagSearch**(`tagName`): `UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

Hook to search for tags

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `string` | name of the tag |

#### Returns

`UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:140](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-tag.ts#L140)

___

### useTagSubscriptions

▸ **useTagSubscriptions**(`loggedEthAddress`): `UseQueryResult`<`string`[], `Error`\>

Hook to get a user's subscribed tags

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loggedEthAddress` | `string` | eth address of the logged in user |

#### Returns

`UseQueryResult`<`string`[], `Error`\>

#### Defined in

[ui/hooks/src/use-tag.ts:22](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-tag.ts#L22)

___

### useToggleTagSubscription

▸ **useToggleTagSubscription**(): `UseMutationResult`<{ `data`: { `toggleInterestSub`: `boolean`  }  }, `unknown`, `string`, { `previousTagSubs`: `string`[]  }\>

Hook to toggle a user's tag subscription
pass the tagName to the mutation function

#### Returns

`UseMutationResult`<{ `data`: { `toggleInterestSub`: `boolean`  }  }, `unknown`, `string`, { `previousTagSubs`: `string`[]  }\>

#### Defined in

[ui/hooks/src/use-tag.ts:54](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-tag.ts#L54)

___

### useTrendingProfiles

▸ **useTrendingProfiles**(): `UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

Hook to fetch trending profiles

#### Returns

`UseQueryResult`<(`IProfileData` \| { `_id`: `string` ; `avatar`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `coverImage`: { `fallbackUrl`: `string` ; `url`: `string`  } ; `creationDate`: `string` ; `default`: [`DataProviderInput`] ; `description`: `string` ; `ethAddress`: `string` ; `name`: `string` ; `providers`: [`DataProviderInput`] ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts`: `string` ; `userName`: `string`  })[], `Error`\>

#### Defined in

[ui/hooks/src/use-trending.ts:45](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-trending.ts#L45)

___

### useTrendingTags

▸ **useTrendingTags**(): `UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

Hook to fetch trending tags

#### Returns

`UseQueryResult`<`SearchTagsResult_Response`[], `Error`\>

#### Defined in

[ui/hooks/src/use-trending.ts:21](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-trending.ts#L21)

___

### useUnfollow

▸ **useUnfollow**(): `UseMutationResult`<{ `data`: { `unFollow`: `boolean`  }  }, `unknown`, `string`, { `previousFollowedProfiles`: `string`[]  }\>

Hook to unfollow another user

#### Returns

`UseMutationResult`<{ `data`: { `unFollow`: `boolean`  }  }, `unknown`, `string`, { `previousFollowedProfiles`: `string`[]  }\>

#### Defined in

[ui/hooks/src/use-follow.ts:228](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-follow.ts#L228)

___

### useUninstallApp

▸ **useUninstallApp**(): `UseMutationResult`<`void`, `unknown`, `string`, `unknown`\>

Hook to uninstall an app

#### Returns

`UseMutationResult`<`void`, `unknown`, `string`, `unknown`\>

#### Defined in

[ui/hooks/src/use-app-settings.ts:85](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-app-settings.ts#L85)

___

### useUpdateUsernameProvider

▸ **useUpdateUsernameProvider**(`pubKey?`): `UseMutationResult`<`void` \| { `makeDefaultProvider`: `string`  }, `Error`, { `provider`: `ProfileProviders` ; `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

Hook to register a username for the user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey?` | `string` | textile public key of the user |

#### Returns

`UseMutationResult`<`void` \| { `makeDefaultProvider`: `string`  }, `Error`, { `provider`: `ProfileProviders` ; `userName`: `string`  }, { `currentProfile`: `IProfileData`  }\>

#### Defined in

[ui/hooks/src/use-username.ts:70](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-username.ts#L70)

___

### useUsernameValidation

▸ **useUsernameValidation**(`username`, `enabler?`): `UseQueryResult`<`any`, `unknown`\>

Hook to check if a username is available

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `username` | `string` | `undefined` | name to check for |
| `enabler` | `boolean` | `true` | prevent hook from running in passed falsy |

#### Returns

`UseQueryResult`<`any`, `unknown`\>

#### Defined in

[ui/hooks/src/use-username.ts:202](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/use-username.ts#L202)

___

### withProviders

▸ **withProviders**<`T`\>(`WrappedComponent`): (`props`: `any`) => `Element`

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

[ui/hooks/src/utils/provider-hoc.tsx:23](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/ui/hooks/src/utils/provider-hoc.tsx#L23)

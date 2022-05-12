

# React Hooks

Most of the SDK's methods are also implemented as React Hooks.


Currently we have the following hooks:


## Analytics
  - useAnalytics

## AppSettings
  - useGetAppConfig
  - useGetAllInstalledApps
  - useInstallApp
  - useUninstallApp

## Bookmarks
  - useGetBookmarks
  - useSaveBookmark
  - useDeleteBookmark

## Comments
 - useInfiniteComments
 - useComment
 - useDeleteComment
 - useCreateComment
 - useEditComment

## Follow/Unfollow
  - useIsFollowingMultiple
  - useFollow
  - useUnfollow

## GlobalLogin
  - useGlobalLogin

## web3Providers
  - useInjectedProvider
  - useConnectProvider
  - useRequiredNetworkName

## IntegrationRegistry
  - useGetIntegrationInfo
  - useGetIntegrationsInfo
  - useGetIntegrationsCount
  - useGetIntegrationId
  - useGetIntegrationReleaseId
  - useGetAllIntegrationsIds
  - useGetAllIntegrationReleaseIds
  - useGetIntegrationReleaseInfo
  - useGetIntegrationsReleaseInfo
  - useGetLatestReleaseInfo

## InviteTokenValidation
  - useIsValidToken

## Legal
  - useLegalDoc

## Login/Logout
  - useGetLogin
  - useLogin
  - useSignUp
  - signAuthMessage
  - useLogout
  - useCheckSignup

## Mentions
  - useMentionSearch

## Moderation
  - useModeration
  - useReport
  - useCheckModerator
  - useGetCount
  - useGetFlags
  - useInfiniteLog
  - useInfinitePending
  - useInfiniteKept
  - useInfiniteDelisted

## Navigation
  - useEntryNavigation

## NetworkState
  - useNetworkState
  - useCurrentNetwork

## Notifications
  - useFetchNotifications
  - useMarkAsRead
  - useCheckNewNotifications

## Posts
  - useInfinitePosts
  - useInfinitePostsByTag
  - useInfinitePostsByAuthor
  - usePost
  - useDeletePost
  - useCreatePost
  - useEditPost

## Profile
  - useGetProfile
  - useGetProfileByEthAddress
  - useGetEntryAuthor
  - useFollowers
  - useFollowing
  - useInterests
  - useProfileUpdate

## Reasons
  - useReasons

## Search
  - useSearchProfiles
  - useSearchPosts
  - useSearchComments
  - useSearchTags
  - useSearch

## Tag
  - useTagSubscriptions
  - useIsSubscribedToTag
  - useToggleTagSubscription
  - useGetTag
  - useTagSearch

## Trending
  - useTrendingTags
  - useTrendingProfiles

## Username
  - useUpdateUsernameProvider
  - useEnsRegistration
  - useUsernameValidation
  - useEnsByAddress

---
id: "index"
title: "React Hooks"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# React Hooks

Most of the SDK's methods are also implemented as React Hooks.

Currently we have the following hooks:

## Analytics
  - [`useAnalytics`](/docs/react-hooks/modules#useanalytics)

## AppSettings
  - [`useGetAppConfig`](/docs/react-hooks/modules#usegetappconfig)
  - [`useGetAllInstalledApps`](/docs/react-hooks/modules#usegetallinstalledapps)
  - [`useInstallApp`](/docs/react-hooks/modules#useinstallapp)
  - [`useUninstallApp`](/docs/react-hooks/modules#useuninstallapp)

## Bookmarks
  - [`useGetBookmarks`](/docs/react-hooks/modules#usegetbookmarks)
  - [`useSaveBookmark`](/docs/react-hooks/modules#usesavebookmark)
  - [`useDeleteBookmark`](/docs/react-hooks/modules#usedeletebookmark)

## Comments
 - [`useInfiniteComments`](/docs/react-hooks/modules#useinfinitecomments)
 - [`useComment`](/docs/react-hooks/modules#usecomment)
 - [`useDeleteComment`](/docs/react-hooks/modules#usedeletecomment)
 - [`useCreateComment`](/docs/react-hooks/modules#usecreatecomment)
 - [`useEditComment`](/docs/react-hooks/modules#useeditcomment)

## Follow/Unfollow
  - [`useIsFollowingMultiple`](/docs/react-hooks/modules#useisfollowingmultiple)
  - [`useFollow`](/docs/react-hooks/modules#usefollow)
  - [`useUnfollow`](/docs/react-hooks/modules#useunfollow)

## GlobalLogin
  - [`useGlobalLogin`](/docs/react-hooks/modules#usegloballogin)

## web3Providers
  - [`useInjectedProvider`](/docs/react-hooks/modules#useinjectedprovider)
  - [`useConnectProvider`](/docs/react-hooks/modules#useconnectprovider)
  - [`useRequiredNetworkName`](/docs/react-hooks/modules#userequirednetworkname)

## IntegrationRegistry
  - [`useGetIntegrationInfo`](/docs/react-hooks/modules#usegetintegrationinfo)
  - [`useGetIntegrationsInfo`](/docs/react-hooks/modules#usegetintegrationsinfo)
  - [`useGetIntegrationsCount`](/docs/react-hooks/modules#usegetintegrationscount)
  - [`useGetIntegrationId`](/docs/react-hooks/modules#usegetintegrationid)
  - [`useGetIntegrationReleaseId`](/docs/react-hooks/modules#usegetintegrationreleaseid)
  - [`useGetAllIntegrationsIds`](/docs/react-hooks/modules#usegetallintegrationsids)
  - [`useGetAllIntegrationReleaseIds`](/docs/react-hooks/modules#usegetallintegrationreleaseids)
  - [`useGetIntegrationReleaseInfo`](/docs/react-hooks/modules#usegetintegrationreleaseinfo)
  - [`useGetIntegrationsReleaseInfo`](/docs/react-hooks/modules#usegetintegrationsreleaseinfo)
  - [`useGetLatestReleaseInfo`](/docs/react-hooks/modules#usegetlatestreleaseinfo)

## InviteTokenValidation
  - [`useIsValidToken`](/docs/react-hooks/modules#useisvalidtoken)

## Legal
  - [`useLegalDoc`](/docs/react-hooks/modules#uselegaldoc)

## Login/Logout
  - [`useGetLogin`](/docs/react-hooks/modules#usegetlogin)
  - [`useLogin`](/docs/react-hooks/modules#uselogin)
  - [`useSignUp`](/docs/react-hooks/modules#usesignup)
  - [`signAuthMessage`](/docs/react-hooks/modules#signauthmessage)
  - [`useLogout`](/docs/react-hooks/modules#uselogout)
  - [`useCheckSignup`](/docs/react-hooks/modules#usechecksignup)

## Mentions
  - [`useMentionSearch`](/docs/react-hooks/modules#usementionsearch)

## Moderation
  - [`useModeration`](/docs/react-hooks/modules#usemoderation)
  - [`useReport`](/docs/react-hooks/modules#usereport)
  - [`useCheckModerator`](/docs/react-hooks/modules#usecheckmoderator)
  - [`useGetCount`](/docs/react-hooks/modules#usegetcount)
  - [`useGetFlags`](/docs/react-hooks/modules#usegetflags)
  - [`useInfiniteLog`](/docs/react-hooks/modules#useinflog)
  - [`useInfinitePending`](/docs/react-hooks/modules#useinfinitepending)
  - [`useInfiniteKept`](/docs/react-hooks/modules#useinfinitekept)
  - [`useInfiniteDelisted`](/docs/react-hooks/modules#useinfinitedelisted)

## Navigation
  - [`useEntryNavigation`](/docs/react-hooks/modules#useentrynavigation)

## NetworkState
  - [`useNetworkState`](/docs/react-hooks/modules#usenetworkstate)
  - [`useCurrentNetwork`](/docs/react-hooks/modules#usecurrentnetwork)

## Notifications
  - [`useFetchNotifications`](/docs/react-hooks/modules#usefetchnotifications)
  - [`useMarkAsRead`](/docs/react-hooks/modules#usemarkasread)
  - [`useCheckNewNotifications`](/docs/react-hooks/modules#usechecknewnotifications)

## Posts
  - [`useInfinitePosts`](/docs/react-hooks/modules#useinfiniteposts)
  - [`useInfinitePostsByTag`](/docs/react-hooks/modules#useinfinitepostsbytag)
  - [`useInfinitePostsByAuthor`](/docs/react-hooks/modules#useinfinitepostsbyauthor)
  - [`usePost`](/docs/react-hooks/modules#usepost)
  - [`useDeletePost`](/docs/react-hooks/modules#usedeletepost)
  - [`useCreatePost`](/docs/react-hooks/modules#usecreatepost)
  - [`useEditPost`](/docs/react-hooks/modules#useeditpost)

## Profile
  - [`useGetProfile`](/docs/react-hooks/modules#usegetprofile)
  - [`useGetProfileByEthAddress`](/docs/react-hooks/modules#usegetprofilebyethaddress)
  - [`useGetEntryAuthor`](/docs/react-hooks/modules#usegetentryauthor)
  - [`useFollowers`](/docs/react-hooks/modules#usefollowers)
  - [`useFollowing`](/docs/react-hooks/modules#usefollowing)
  - [`useInterests`](/docs/react-hooks/modules#useinterests)
  - [`useProfileUpdate`](/docs/react-hooks/modules#useprofileupdate)

## Reasons
  - [`useReasons`](/docs/react-hooks/modules#usereasons)

## Search
  - [`useSearchProfiles`](/docs/react-hooks/modules#usesearchprofiles)
  - [`useSearchPosts`](/docs/react-hooks/modules#usesearchposts)
  - [`useSearchComments`](/docs/react-hooks/modules#usesearchcomments)
  - [`useSearchTags`](/docs/react-hooks/modules#usesearchtags)
  - [`useSearch`](/docs/react-hooks/modules#usesearch)

## Tag
  - [`useTagSubscriptions`](/docs/react-hooks/modules#usetagsubscriptions)
  - [`useIsSubscribedToTag`](/docs/react-hooks/modules#useissubscribedtotag)
  - [`useToggleTagSubscription`](/docs/react-hooks/modules#usetoggletagsubscription)
  - [`useGetTag`](/docs/react-hooks/modules#usegettag)
  - [`useTagSearch`](/docs/react-hooks/modules#usetagsearch)

## Trending
  - [`useTrendingTags`](/docs/react-hooks/modules#usetrendingtags)
  - [`useTrendingProfiles`](/docs/react-hooks/modules#usetrendingprofiles)

## Username
  - [`useUpdateUsernameProvider`](/docs/react-hooks/modules#useupdateusernameprovider)
  - [`useEnsRegistration`](/docs/react-hooks/modules#useensregistration)
  - [`useUsernameValidation`](/docs/react-hooks/modules#useusernamevalidation)
  - [`useEnsByAddress`](/docs/react-hooks/modules#useensbyaddress)

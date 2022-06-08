# React hooks

Most of the SDK's methods are also implemented as React hooks.

Currently we have the following hooks:

## Analytics

- [`useAnalytics`](/react-hooks/modules#useanalytics)

## AppSettings

- [`useGetAppConfig`](/react-hooks/modules#usegetappconfig)
- [`useGetAllInstalledApps`](/react-hooks/modules#usegetallinstalledapps)
- [`useInstallApp`](/react-hooks/modules#useinstallapp)
- [`useUninstallApp`](/react-hooks/modules#useuninstallapp)

## Bookmarks

- [`useGetBookmarks`](/react-hooks/modules#usegetbookmarks)
- [`useSaveBookmark`](/react-hooks/modules#usesavebookmark)
- [`useDeleteBookmark`](/react-hooks/modules#usedeletebookmark)

## Comments

- [`useInfiniteComments`](/react-hooks/modules#useinfinitecomments)
- [`useComment`](/react-hooks/modules#usecomment)
- [`useDeleteComment`](/react-hooks/modules#usedeletecomment)
- [`useCreateComment`](/react-hooks/modules#usecreatecomment)
- [`useEditComment`](/react-hooks/modules#useeditcomment)

## Follow/Unfollow

- [`useIsFollowingMultiple`](/react-hooks/modules#useisfollowingmultiple)
- [`useFollow`](/react-hooks/modules#usefollow)
- [`useUnfollow`](/react-hooks/modules#useunfollow)

## GlobalLogin

- [`useGlobalLogin`](/react-hooks/modules#usegloballogin)

## web3Providers

- [`useInjectedProvider`](/react-hooks/modules#useinjectedprovider)
- [`useConnectProvider`](/react-hooks/modules#useconnectprovider)
- [`useRequiredNetworkName`](/react-hooks/modules#userequirednetworkname)

## IntegrationRegistry

- [`useGetIntegrationInfo`](/react-hooks/modules#usegetintegrationinfo)
- [`useGetIntegrationsInfo`](/react-hooks/modules#usegetintegrationsinfo)
- [`useGetIntegrationsCount`](/react-hooks/modules#usegetintegrationscount)
- [`useGetIntegrationId`](/react-hooks/modules#usegetintegrationid)
- [`useGetIntegrationReleaseId`](/react-hooks/modules#usegetintegrationreleaseid)
- [`useGetAllIntegrationsIds`](/react-hooks/modules#usegetallintegrationsids)
- [`useGetAllIntegrationReleaseIds`](/react-hooks/modules#usegetallintegrationreleaseids)
- [`useGetIntegrationReleaseInfo`](/react-hooks/modules#usegetintegrationreleaseinfo)
- [`useGetIntegrationsReleaseInfo`](/react-hooks/modules#usegetintegrationsreleaseinfo)
- [`useGetLatestReleaseInfo`](/react-hooks/modules#usegetlatestreleaseinfo)

## InviteTokenValidation

- [`useIsValidToken`](/react-hooks/modules#useisvalidtoken)

## Legal

- [`useLegalDoc`](/react-hooks/modules#uselegaldoc)

## Login/Logout

- [`useGetLogin`](/react-hooks/modules#usegetlogin)
- [`useLogin`](/react-hooks/modules#uselogin)
- [`useSignUp`](/react-hooks/modules#usesignup)
- [`signAuthMessage`](/react-hooks/modules#signauthmessage)
- [`useLogout`](/react-hooks/modules#uselogout)
- [`useCheckSignup`](/react-hooks/modules#usechecksignup)

## Mentions

- [`useMentionSearch`](/react-hooks/modules#usementionsearch)

## Moderation

- [`useModeration`](/react-hooks/modules#usemoderation)
- [`useReport`](/react-hooks/modules#usereport)
- [`useCheckModerator`](/react-hooks/modules#usecheckmoderator)
- [`useGetCount`](/react-hooks/modules#usegetcount)
- [`useGetFlags`](/react-hooks/modules#usegetflags)
- [`useInfiniteLog`](/react-hooks/modules#useinflog)
- [`useInfinitePending`](/react-hooks/modules#useinfinitepending)
- [`useInfiniteKept`](/react-hooks/modules#useinfinitekept)
- [`useInfiniteDelisted`](/react-hooks/modules#useinfinitedelisted)

## Navigation

- [`useEntryNavigation`](/react-hooks/modules#useentrynavigation)

## NetworkState

- [`useNetworkState`](/react-hooks/modules#usenetworkstate)
- [`useCurrentNetwork`](/react-hooks/modules#usecurrentnetwork)

## Notifications

- [`useFetchNotifications`](/react-hooks/modules#usefetchnotifications)
- [`useMarkAsRead`](/react-hooks/modules#usemarkasread)
- [`useCheckNewNotifications`](/react-hooks/modules#usechecknewnotifications)

## Posts

- [`useInfinitePosts`](/react-hooks/modules#useinfiniteposts)
- [`useInfinitePostsByTag`](/react-hooks/modules#useinfinitepostsbytag)
- [`useInfinitePostsByAuthor`](/react-hooks/modules#useinfinitepostsbyauthor)
- [`usePost`](/react-hooks/modules#usepost)
- [`useDeletePost`](/react-hooks/modules#usedeletepost)
- [`useCreatePost`](/react-hooks/modules#usecreatepost)
- [`useEditPost`](/react-hooks/modules#useeditpost)

## Profile

- [`useGetProfile`](/react-hooks/modules#usegetprofile)
- [`useGetProfileByEthAddress`](/react-hooks/modules#usegetprofilebyethaddress)
- [`useGetEntryAuthor`](/react-hooks/modules#usegetentryauthor)
- [`useFollowers`](/react-hooks/modules#usefollowers)
- [`useFollowing`](/react-hooks/modules#usefollowing)
- [`useInterests`](/react-hooks/modules#useinterests)
- [`useProfileUpdate`](/react-hooks/modules#useprofileupdate)

## Reasons

- [`useReasons`](/react-hooks/modules#usereasons)

## Search

- [`useSearchProfiles`](/react-hooks/modules#usesearchprofiles)
- [`useSearchPosts`](/react-hooks/modules#usesearchposts)
- [`useSearchComments`](/react-hooks/modules#usesearchcomments)
- [`useSearchTags`](/react-hooks/modules#usesearchtags)
- [`useSearch`](/react-hooks/modules#usesearch)

## Tag

- [`useTagSubscriptions`](/react-hooks/modules#usetagsubscriptions)
- [`useIsSubscribedToTag`](/react-hooks/modules#useissubscribedtotag)
- [`useToggleTagSubscription`](/react-hooks/modules#usetoggletagsubscription)
- [`useGetTag`](/react-hooks/modules#usegettag)
- [`useTagSearch`](/react-hooks/modules#usetagsearch)

## Trending

- [`useTrendingTags`](/react-hooks/modules#usetrendingtags)
- [`useTrendingProfiles`](/react-hooks/modules#usetrendingprofiles)

## Username

- [`useUpdateUsernameProvider`](/react-hooks/modules#useupdateusernameprovider)
- [`useEnsRegistration`](/react-hooks/modules#useensregistration)
- [`useUsernameValidation`](/react-hooks/modules#useusernamevalidation)
- [`useEnsByAddress`](/react-hooks/modules#useensbyaddress)

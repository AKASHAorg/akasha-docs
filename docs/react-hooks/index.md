---
id: "index"
title: "React hooks"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

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

## List

- [`useGetBookmarks`](/react-hooks/modules#usegetbookmarks)
- [`useSaveBookmark`](/react-hooks/modules#usesavebookmark)
- [`useDeleteBookmark`](/react-hooks/modules#usedeletebookmark)

## Follow/Unfollow

- [`useCreateFollowMutation`](/react-hooks/modules#usecreatefollowmutation)
- [`useUpdateFollowMutation`](/react-hooks/modules#useupdatefollowmutation)

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

- [`useCreateProfileMutation`](/react-hooks/modules#usecreateprofilemutation)

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

## Beams

- [`useGetBeamsQuery`](/react-hooks/modules#usegetbeamsquery)
- [`useInfiniteGetBeamsQuery`](/react-hooks/modules#useinfinitegetbeamsquery)
- [`useGetBeamsByAuthorDidQuery`](/react-hooks/modules#usegetbeamsbyauthordidquery)
- [`useInfiniteGetBeamsByAuthorDidQuery`](/react-hooks/modules#useinfinitegetbeamsbyauthordidquery)
- [`useGetBeamByIdQuery`](/react-hooks/modules#usegetbeambyidquery)
- [`useInfiniteGetBeamByIdQuery`](/react-hooks/modules#useinfinitegetbeambyidquery)
- [`useGetRebeamsFromBeamQuery`](/react-hooks/modules#usegetrebeamsfrombeamquery)
- [`useInfiniteGetRebeamsFromBeamQuery`](/react-hooks/modules#useinfinitegetrebeamsfrombeamquery)
- [`useGetMentionsFromBeamQuery`](/react-hooks/modules#usegetmentionsfrombeamquery)
- [`useInfiniteGetMentionsFromBeamQuery`](/react-hooks/modules#useinfinitegetmentionsfrombeamquery)
- [`useCreateBeamMutation`](/react-hooks/modules#usecreatebeammutation)
- [`useUpdateBeamMutation`](/react-hooks/modules#useupdatebeammutation)
- [`useCreateRebeamMutation`](/react-hooks/modules#usecreaterebeammutation)
- [`useCreateBeamProfileMentionMutation`](/react-hooks/modules#usecreatebeamprofilementionmutation)
  
## Reflections

- [`useGetReflectionsFromBeamQuery`](/react-hooks/modules#usegetreflectionsfrombeamquery)
- [`useInfiniteGetReflectionsFromBeamQuery`](/react-hooks/modules#useinfinitegetreflectionsfrombeamquery)
- [`useGetReflectionsByAuthorDidQuery`](/react-hooks/modules#usegetreflectionsbyauthordidquery)
- [`useInfiniteGetReflectionsByAuthorDidQuery`](/react-hooks/modules#useinfinitegetreflectionsbyauthordidquery)
- [`useGetReflectReflectionsQuery`](/react-hooks/modules#usegetreflectreflectionsquery)
- [`useInfiniteGetReflectReflectionsQuery`](/react-hooks/modules#useinfinitegetreflectreflectionsquery)
- [`useCreateReflectMutation`](/react-hooks/modules#usecreatereflectmutation)
- [`useUpdateReflectMutation`](/react-hooks/modules#useupdatereflectmutation)
- [`useCreateReflectReflectionMutation`](/react-hooks/modules#usecreatereflectreflectionmutation)
- [`useUpdateReflectReflectionMutation`](/react-hooks/modules#useupdatereflectreflectionmutation)

## Profile

- [`useGetEntryAuthor <!-- old -->`](/react-hooks/modules#usegetentryauthor) 
- [`useGetProfileByIdQuery`](/react-hooks/modules#usegetprofilebyidquery)
- [`useInfiniteGetProfileByIdQuery`](/react-hooks/modules#useinfinitegetprofilebyidquery)
- [`useGetProfileByDidQuery`](/react-hooks/modules#usegetprofilebydidquery)
- [`useInfiniteGetProfileByDidQuery`](/react-hooks/modules#useinfinitegetprofilebydidquery)
- [`useGetProfilesQuery`](/react-hooks/modules#usegetprofilesquery)
- [`useInfiniteGetProfilesQuery`](/react-hooks/modules#useinfinitegetprofilesquery)
- [`useGetInterestsQuery`](/react-hooks/modules#usegetinterestsquery)
- [`useInfiniteGetInterestsQuery`](/react-hooks/modules#useinfinitegetinterestsquery)
- [`useGetInterestsByDidQuery`](/react-hooks/modules#usegetinterestsbydidquery)
- [`useInfiniteGetInterestsByDidQuery`](/react-hooks/modules#useinfinitegetinterestsbydidquery)
- [`useGetInterestsByIdQuery`](/react-hooks/modules#usegetinterestsbyidquery)
- [`useInfiniteGetInterestsByIdQuery`](/react-hooks/modules#useinfinitegetinterestsbyidquery)
- [`useGetFollowingListByDidQuery`](/react-hooks/modules#usegetfollowinglistbydidquery)
- [`useInfiniteGetFollowingListByDidQuery`](/react-hooks/modules#useinfinitegetfollowinglistbydidquery)
- [`useGetFollowersListByDidQuery`](/react-hooks/modules#usegetfollowerslistbydidquery)
- [`useInfiniteGetFollowersListByDidQuery`](/react-hooks/modules#useinfinitegetfollowerslistbydidquery)
- [`useGetMyProfileQuery`](/react-hooks/modules#usegetmyprofilequery)
- [`useInfiniteGetMyProfileQuery`](/react-hooks/modules#useinfinitegetmyprofilequery)
- [`useUpdateProfileMutation`](/react-hooks/modules#useupdateprofilemutation)
- [`useCreateInterestsMutation`](/react-hooks/modules#usecreateinterestsmutation)
- [`useUpdateInterestsMutation`](/react-hooks/modules#useupdateinterestsmutation)

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

## Username (no longer available)

- [`useUpdateUsernameProvider`](/react-hooks/modules#useupdateusernameprovider)
- [`useEnsRegistration`](/react-hooks/modules#useensregistration)
- [`useUsernameValidation`](/react-hooks/modules#useusernamevalidation)
- [`useEnsByAddress`](/react-hooks/modules#useensbyaddress)

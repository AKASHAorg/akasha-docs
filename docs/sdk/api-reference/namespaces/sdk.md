---
id: "sdk"
title: "Namespace: sdk"
sidebar_label: "sdk"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

## Enumerations

- [EthProviders](../enums/sdk.EthProviders.md)
- [INJECTED_PROVIDERS](../enums/sdk.INJECTED_PROVIDERS.md)
- [LEGAL_DOCS](../enums/sdk.LEGAL_DOCS.md)
- [PostType](../enums/sdk.PostType.md)

## Classes

- [AWF_Auth](../classes/sdk.AWF_Auth.md)
- [AWF_Comments](../classes/sdk.AWF_Comments.md)
- [AWF_ENS](../classes/sdk.AWF_ENS.md)
- [AWF_Entry](../classes/sdk.AWF_Entry.md)
- [AWF_IC_REGISTRY](../classes/sdk.AWF_IC_REGISTRY.md)
- [AWF_IpfsConnector](../classes/sdk.AWF_IpfsConnector.md)
- [AWF_Profile](../classes/sdk.AWF_Profile.md)
- [AWF_Tags](../classes/sdk.AWF_Tags.md)
- [AppSettings](../classes/sdk.AppSettings.md)
- [DB](../classes/sdk.DB.md)
- [EventBus](../classes/sdk.EventBus.md)
- [Logging](../classes/sdk.Logging.md)
- [Settings](../classes/sdk.Settings.md)
- [Stash](../classes/sdk.Stash.md)
- [Web3Connector](../classes/sdk.Web3Connector.md)

## Interfaces

- [AWF_APP_SOURCE_MANIFEST](../interfaces/sdk.AWF_APP_SOURCE_MANIFEST.md)
- [AWF_IAuth](../interfaces/sdk.AWF_IAuth.md)
- [AWF_IComments](../interfaces/sdk.AWF_IComments.md)
- [AWF_IENS](../interfaces/sdk.AWF_IENS.md)
- [AWF_IEntry](../interfaces/sdk.AWF_IEntry.md)
- [AWF_IIC_REGISTRY](../interfaces/sdk.AWF_IIC_REGISTRY.md)
- [AWF_IIpfsConnector](../interfaces/sdk.AWF_IIpfsConnector.md)
- [AWF_IProfile](../interfaces/sdk.AWF_IProfile.md)
- [AWF_ITags](../interfaces/sdk.AWF_ITags.md)
- [AppsSchema](../interfaces/sdk.AppsSchema.md)
- [Comment_Response](../interfaces/sdk.Comment_Response.md)
- [Comments_Response](../interfaces/sdk.Comments_Response.md)
- [ConfigInfo](../interfaces/sdk.ConfigInfo.md)
- [CurrentUser](../interfaces/sdk.CurrentUser.md)
- [DataProviderInput](../interfaces/sdk.DataProviderInput.md)
- [GlobalSearchResult](../interfaces/sdk.GlobalSearchResult.md)
- [GlobalSearchResultItem](../interfaces/sdk.GlobalSearchResultItem.md)
- [GlobalSearchResultTagItem](../interfaces/sdk.GlobalSearchResultTagItem.md)
- [GqlOperation](../interfaces/sdk.GqlOperation.md)
- [IAppSettings](../interfaces/sdk.IAppSettings.md)
- [IDBService](../interfaces/sdk.IDBService.md)
- [IGqlClient](../interfaces/sdk.IGqlClient.md)
- [ILogService](../interfaces/sdk.ILogService.md)
- [ILogger](../interfaces/sdk.ILogger.md)
- [IMessage](../interfaces/sdk.IMessage.md)
- [ISettingsService](../interfaces/sdk.ISettingsService.md)
- [IStashService](../interfaces/sdk.IStashService.md)
- [IWeb3Connector](../interfaces/sdk.IWeb3Connector.md)
- [IntegrationInfo](../interfaces/sdk.IntegrationInfo.md)
- [LRUOptions](../interfaces/sdk.LRUOptions.md)
- [LinkPreview_Response](../interfaces/sdk.LinkPreview_Response.md)
- [Post_Response](../interfaces/sdk.Post_Response.md)
- [PostsResult_Response](../interfaces/sdk.PostsResult_Response.md)
- [ReleaseInfo](../interfaces/sdk.ReleaseInfo.md)
- [SearchTagsResult_Response](../interfaces/sdk.SearchTagsResult_Response.md)
- [SettingsSchema](../interfaces/sdk.SettingsSchema.md)
- [Tag_Response](../interfaces/sdk.Tag_Response.md)
- [TagsResult_Response](../interfaces/sdk.TagsResult_Response.md)
- [UserFollowers_Response](../interfaces/sdk.UserFollowers_Response.md)
- [UserProfile_Response](../interfaces/sdk.UserProfile_Response.md)
- [VersionInfo](../interfaces/sdk.VersionInfo.md)
- [VideoPreview_Response](../interfaces/sdk.VideoPreview_Response.md)

## Type aliases

### GlobalEventBusData

**GlobalEventBusData**: `Object`

#### Type declaration

| Name    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args?` | `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `data`  | `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `event` | [`AUTH_EVENTS`](../enums/typings.events.AUTH_EVENTS.md) \| [`APP_EVENTS`](../enums/typings.events.APP_EVENTS.md) \| [`COMMENTS_EVENTS`](../enums/typings.events.COMMENTS_EVENTS.md) \| [`ENS_EVENTS`](../enums/typings.events.ENS_EVENTS.md) \| [`ENTRY_EVENTS`](../enums/typings.events.ENTRY_EVENTS.md) \| [`PROFILE_EVENTS`](../enums/typings.events.PROFILE_EVENTS.md) \| [`TAG_EVENTS`](../enums/typings.events.TAG_EVENTS.md) \| [`WEB3_EVENTS`](../enums/typings.events.WEB3_EVENTS.md) |

#### Defined in

sdk/typings/lib/interfaces/common.d.ts:7

---

### IQuickLRU

**IQuickLRU**: `QuickLRU`<`string`, `any`\>

#### Defined in

[sdk/src/stash/index.ts:8](https://github.com/AKASHAorg/akasha-framework/blob/d370b59a/sdk/src/stash/index.ts#L8)

---

### ServiceCallResult

**ServiceCallResult**<`T`\>: `Observable`<{ `data`: `T` }\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

sdk/typings/lib/interfaces/responses.d.ts:3

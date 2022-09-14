---
id: "typings"
title: "Namespace: typings"
sidebar_label: "typings"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

## Enumerations

- [APP\_EVENTS](../enums/typings.APP_EVENTS.md)
- [AUTH\_EVENTS](../enums/typings.AUTH_EVENTS.md)
- [COMMENTS\_EVENTS](../enums/typings.COMMENTS_EVENTS.md)
- [ENS\_EVENTS](../enums/typings.ENS_EVENTS.md)
- [ENTRY\_EVENTS](../enums/typings.ENTRY_EVENTS.md)
- [EthProviders](../enums/typings.EthProviders.md)
- [INJECTED\_PROVIDERS](../enums/typings.INJECTED_PROVIDERS.md)
- [LEGAL\_DOCS](../enums/typings.LEGAL_DOCS.md)
- [PROFILE\_EVENTS](../enums/typings.PROFILE_EVENTS.md)
- [PROVIDER\_ERROR\_CODES](../enums/typings.PROVIDER_ERROR_CODES.md)
- [PostType](../enums/typings.PostType.md)
- [TAG\_EVENTS](../enums/typings.TAG_EVENTS.md)
- [WEB3\_EVENTS](../enums/typings.WEB3_EVENTS.md)

## Interfaces

- [AWF\_APP\_BUILD\_MANIFEST](../interfaces/typings.AWF_APP_BUILD_MANIFEST.md)
- [AWF\_APP\_SOURCE\_MANIFEST](../interfaces/typings.AWF_APP_SOURCE_MANIFEST.md)
- [AWF\_IAuth](../interfaces/typings.AWF_IAuth.md)
- [AWF\_IComments](../interfaces/typings.AWF_IComments.md)
- [AWF\_IENS](../interfaces/typings.AWF_IENS.md)
- [AWF\_IEntry](../interfaces/typings.AWF_IEntry.md)
- [AWF\_IIC\_REGISTRY](../interfaces/typings.AWF_IIC_REGISTRY.md)
- [AWF\_IIpfsConnector](../interfaces/typings.AWF_IIpfsConnector.md)
- [AWF\_IProfile](../interfaces/typings.AWF_IProfile.md)
- [AWF\_ITags](../interfaces/typings.AWF_ITags.md)
- [Comment\_Response](../interfaces/typings.Comment_Response.md)
- [Comments\_Response](../interfaces/typings.Comments_Response.md)
- [CurrentUser](../interfaces/typings.CurrentUser.md)
- [DataProviderInput](../interfaces/typings.DataProviderInput.md)
- [GlobalSearchResult](../interfaces/typings.GlobalSearchResult.md)
- [GlobalSearchResultItem](../interfaces/typings.GlobalSearchResultItem.md)
- [GlobalSearchResultTagItem](../interfaces/typings.GlobalSearchResultTagItem.md)
- [IAppSettings](../interfaces/typings.IAppSettings.md)
- [IAwfSDK](../interfaces/typings.IAwfSDK.md)
- [IDBService](../interfaces/typings.IDBService.md)
- [IGqlClient](../interfaces/typings.IGqlClient.md)
- [ILogService](../interfaces/typings.ILogService.md)
- [ILogger](../interfaces/typings.ILogger.md)
- [IMessage](../interfaces/typings.IMessage.md)
- [IServices](../interfaces/typings.IServices.md)
- [ISettingsService](../interfaces/typings.ISettingsService.md)
- [IStashService](../interfaces/typings.IStashService.md)
- [IWeb3Connector](../interfaces/typings.IWeb3Connector.md)
- [IntegrationInfo](../interfaces/typings.IntegrationInfo.md)
- [LRUOptions](../interfaces/typings.LRUOptions.md)
- [LinkPreview\_Response](../interfaces/typings.LinkPreview_Response.md)
- [Post\_Response](../interfaces/typings.Post_Response.md)
- [PostsResult\_Response](../interfaces/typings.PostsResult_Response.md)
- [ReleaseInfo](../interfaces/typings.ReleaseInfo.md)
- [SearchTagsResult\_Response](../interfaces/typings.SearchTagsResult_Response.md)
- [Tag\_Response](../interfaces/typings.Tag_Response.md)
- [TagsResult\_Response](../interfaces/typings.TagsResult_Response.md)
- [UserFollowers\_Response](../interfaces/typings.UserFollowers_Response.md)
- [UserProfile\_Response](../interfaces/typings.UserProfile_Response.md)
- [VideoPreview\_Response](../interfaces/typings.VideoPreview_Response.md)

## References

### ILog

Renames and re-exports [ILogService](../interfaces/typings.ILogService.md)

## Type aliases

### GlobalEventBusData

 **GlobalEventBusData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `unknown` |
| `data` | `unknown` |
| `event` | [`AUTH_EVENTS`](../enums/typings.AUTH_EVENTS.md) \| [`APP_EVENTS`](../enums/typings.APP_EVENTS.md) \| [`COMMENTS_EVENTS`](../enums/typings.COMMENTS_EVENTS.md) \| [`ENS_EVENTS`](../enums/typings.ENS_EVENTS.md) \| [`ENTRY_EVENTS`](../enums/typings.ENTRY_EVENTS.md) \| [`PROFILE_EVENTS`](../enums/typings.PROFILE_EVENTS.md) \| [`TAG_EVENTS`](../enums/typings.TAG_EVENTS.md) \| [`WEB3_EVENTS`](../enums/typings.WEB3_EVENTS.md) |

#### Defined in

typings/sdk/common.d.ts:7

___

### ServiceCallResult

 **ServiceCallResult**<`T`\>: `Observable`<{ `data`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/sdk/responses.d.ts:3

## Variables

### TYPES

 `Const` **TYPES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AppSettings` | `symbol` |
| `Auth` | `symbol` |
| `Comment` | `symbol` |
| `Db` | `symbol` |
| `ENS` | `symbol` |
| `Entry` | `symbol` |
| `EventBus` | `symbol` |
| `Gql` | `symbol` |
| `ICRegistry` | `symbol` |
| `IPFS` | `symbol` |
| `Log` | `symbol` |
| `Misc` | `symbol` |
| `Profile` | `symbol` |
| `Settings` | `symbol` |
| `Stash` | `symbol` |
| `Tag` | `symbol` |
| `Web3` | `symbol` |

#### Defined in

typings/sdk/index.d.ts:25

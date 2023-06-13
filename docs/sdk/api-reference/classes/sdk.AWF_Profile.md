---
id: "sdk.AWF_Profile"
title: "Class: AWF_Profile"
sidebar_label: "AWF_Profile"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../namespaces/sdk.md).AWF_Profile

## Implements

- [`AWF_IProfile`](../interfaces/typings.AWF_IProfile.md)

## Constructors

### constructor

**new AWF_Profile**(`log`, `gql`, `auth`, `settings`, `globalChannel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `settings` | [`Settings`](sdk.Settings.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |

#### Defined in

[sdk/src/profiles/index.ts:71](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L71)

## Properties

### TagSubscriptions

 `Readonly` **TagSubscriptions**: ``"@TagSubscriptions"``

#### Defined in

[sdk/src/profiles/index.ts:52](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L52)

___

### graphQLDocs

 `Readonly` **graphQLDocs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AddProfileProvider` | `DocumentNode` |
| `Follow` | `DocumentNode` |
| `GetFollowers` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetFollowing` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetInterests` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GetProfile` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `GlobalSearch` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `IsFollowing` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `MakeDefaultProvider` | `DocumentNode` |
| `RegisterUsername` | `DocumentNode` |
| `ResolveProfile` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `SaveMetaData` | `DocumentNode` |
| `SearchProfiles` | `TypedQueryDocumentNode`<{ `[key: string]`: `any`;  }, { `[key: string]`: `any`;  }\> |
| `ToggleInterestSub` | `DocumentNode` |
| `UnFollow` | `DocumentNode` |

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[graphQLDocs](../interfaces/typings.AWF_IProfile.md#graphqldocs)

#### Defined in

[sdk/src/profiles/index.ts:53](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L53)

## Methods

### addProfileProvider

**addProfileProvider**(`opt`): `Observable`<{ `data`: { `addProfileProvider`: `string`  }  }\>

Mutation request to add a profile provider to the profile object

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | [`DataProviderInput`](../interfaces/typings.DataProviderInput.md)[] |

#### Returns

`Observable`<{ `data`: { `addProfileProvider`: `string`  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[addProfileProvider](../interfaces/typings.AWF_IProfile.md#addprofileprovider)

#### Defined in

[sdk/src/profiles/index.ts:89](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L89)

___

### follow

**follow**(`pubKey`): `Observable`<{ `data`: { `follow`: `boolean`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |

#### Returns

`Observable`<{ `data`: { `follow`: `boolean`  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[follow](../interfaces/typings.AWF_IProfile.md#follow)

#### Defined in

[sdk/src/profiles/index.ts:237](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L237)

___

### getFollowers

**getFollowers**(`pubKey`, `limit`, `offset?`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getFollowers`: [`UserFollowers_Response`](../interfaces/typings.UserFollowers_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |
| `limit` | `number` |
| `offset?` | `number` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getFollowers`: [`UserFollowers_Response`](../interfaces/typings.UserFollowers_Response.md)  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[getFollowers](../interfaces/typings.AWF_IProfile.md#getfollowers)

#### Defined in

[sdk/src/profiles/index.ts:534](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L534)

___

### getFollowing

**getFollowing**(`pubKey`, `limit`, `offset?`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getFollowing`: [`UserFollowers_Response`](../interfaces/typings.UserFollowers_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |
| `limit` | `number` |
| `offset?` | `number` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getFollowing`: [`UserFollowers_Response`](../interfaces/typings.UserFollowers_Response.md)  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[getFollowing](../interfaces/typings.AWF_IProfile.md#getfollowing)

#### Defined in

[sdk/src/profiles/index.ts:551](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L551)

___

### getInterests

**getInterests**(`pubKey`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getInterests`: `string`[]  }\>

Retrieve subscription list

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getInterests`: `string`[]  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[getInterests](../interfaces/typings.AWF_IProfile.md#getinterests)

#### Defined in

[sdk/src/profiles/index.ts:566](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L566)

___

### getProfile

**getProfile**(`opt`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getProfile?`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)  } & { `resolveProfile`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.ethAddress?` | `string` |
| `opt.pubKey?` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `getProfile?`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)  } & { `resolveProfile`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[getProfile](../interfaces/typings.AWF_IProfile.md#getprofile)

#### Defined in

[sdk/src/profiles/index.ts:206](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L206)

___

### getTagSubscriptions

**getTagSubscriptions**(): `Observable`<{ `data`: { `getInterests`: `string`[]  }  }\>

#### Returns

`Observable`<{ `data`: { `getInterests`: `string`[]  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[getTagSubscriptions](../interfaces/typings.AWF_IProfile.md#gettagsubscriptions)

#### Defined in

[sdk/src/profiles/index.ts:490](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L490)

___

### getTrending

**getTrending**(): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchProfiles`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)[]  }\>

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchProfiles`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)[]  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[getTrending](../interfaces/typings.AWF_IProfile.md#gettrending)

#### Defined in

[sdk/src/profiles/index.ts:445](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L445)

___

### globalSearch

**globalSearch**(`keyword`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `globalSearch`: [`GlobalSearchResult`](../interfaces/typings.GlobalSearchResult.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `globalSearch`: [`GlobalSearchResult`](../interfaces/typings.GlobalSearchResult.md)  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[globalSearch](../interfaces/typings.AWF_IProfile.md#globalsearch)

#### Defined in

[sdk/src/profiles/index.ts:517](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L517)

___

### isFollowing

**isFollowing**(`opt`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `isFollowing`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.follower` | `string` |
| `opt.following` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `isFollowing`: `boolean`  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[isFollowing](../interfaces/typings.AWF_IProfile.md#isfollowing)

#### Defined in

[sdk/src/profiles/index.ts:313](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L313)

___

### isSubscribedToTag

**isSubscribedToTag**(`tagName`): `Observable`<{ `data`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Observable`<{ `data`: `boolean`  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[isSubscribedToTag](../interfaces/typings.AWF_IProfile.md#issubscribedtotag)

#### Defined in

[sdk/src/profiles/index.ts:501](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L501)

___

### makeDefaultProvider

**makeDefaultProvider**(`opt`): `Observable`<{ `data`: { `makeDefaultProvider`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | [`DataProviderInput`](../interfaces/typings.DataProviderInput.md)[] |

#### Returns

`Observable`<{ `data`: { `makeDefaultProvider`: `string`  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[makeDefaultProvider](../interfaces/typings.AWF_IProfile.md#makedefaultprovider)

#### Defined in

[sdk/src/profiles/index.ts:126](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L126)

___

### registerUserName

**registerUserName**(`userName`): `Observable`<{ `data`: { `registerUserName`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userName` | `string` |

#### Returns

`Observable`<{ `data`: { `registerUserName`: `string`  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[registerUserName](../interfaces/typings.AWF_IProfile.md#registerusername)

#### Defined in

[sdk/src/profiles/index.ts:163](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L163)

___

### saveMediaFile

**saveMediaFile**(`data`): `Promise`<{ `CID`: `string` = cid; `blob`: `any` = resized.image; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = resized.size }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.config?` | `Object` |
| `data.config.autoRotate?` | `boolean` |
| `data.config.maxHeight` | `number` |
| `data.config.maxWidth` | `number` |
| `data.config.mimeType?` | `string` |
| `data.config.quality?` | `number` |
| `data.content` | `any` |
| `data.isUrl?` | `boolean` |
| `data.name?` | `string` |

#### Returns

`Promise`<{ `CID`: `string` = cid; `blob`: `any` = resized.image; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = resized.size }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[saveMediaFile](../interfaces/typings.AWF_IProfile.md#savemediafile)

#### Defined in

[sdk/src/profiles/index.ts:328](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L328)

___

### searchProfiles

**searchProfiles**(`name`): [`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchProfiles`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceCallResult`](../namespaces/typings.md#servicecallresult)<{ `searchProfiles`: [`UserProfile_Response`](../interfaces/typings.UserProfile_Response.md)[]  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[searchProfiles](../interfaces/typings.AWF_IProfile.md#searchprofiles)

#### Defined in

[sdk/src/profiles/index.ts:431](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L431)

___

### toggleTagSubscription

**toggleTagSubscription**(`tagName`): `Observable`<{ `data`: { `toggleInterestSub`: `boolean`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`Observable`<{ `data`: { `toggleInterestSub`: `boolean`  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[toggleTagSubscription](../interfaces/typings.AWF_IProfile.md#toggletagsubscription)

#### Defined in

[sdk/src/profiles/index.ts:453](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L453)

___

### unFollow

**unFollow**(`pubKey`): `Observable`<{ `data`: { `unFollow`: `boolean`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKey` | `string` |

#### Returns

`Observable`<{ `data`: { `unFollow`: `boolean`  }  }\>

#### Implementation of

[AWF_IProfile](../interfaces/typings.AWF_IProfile.md).[unFollow](../interfaces/typings.AWF_IProfile.md#unfollow)

#### Defined in

[sdk/src/profiles/index.ts:275](https://github.com/AKASHAorg/akasha-core/blob/c052f00c/sdk/src/profiles/index.ts#L275)

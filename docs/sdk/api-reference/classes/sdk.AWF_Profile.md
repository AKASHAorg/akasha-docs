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

[sdk](../modules/sdk.md).AWF_Profile

## Constructors

### constructor

**new AWF_Profile**(`log`, `gql`, `auth`, `globalChannel`, `ipfs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | [`Logging`](sdk.Logging.md) |
| `gql` | `Gql` |
| `auth` | [`AWF_Auth`](sdk.AWF_Auth.md) |
| `globalChannel` | [`EventBus`](sdk.EventBus.md) |
| `ipfs` | [`AWF_IpfsConnector`](sdk.AWF_IpfsConnector.md) |

#### Defined in

[sdk/src/profiles/index.ts:41](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L41)

## Properties

### TagSubscriptions

 `Readonly` **TagSubscriptions**: ``"@TagSubscriptions"``

#### Defined in

[sdk/src/profiles/index.ts:39](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L39)

## Methods

### addProfileProvider

**addProfileProvider**(`opt`): `Promise`<{ `data`: { `addProfileProvider`: {} = {} }  }\>

Mutation request to add a profile provider to the profile object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | [`DataProviderInput`](../modules/sdk.md#dataproviderinput)[] | DataProviderInput |

#### Returns

`Promise`<{ `data`: { `addProfileProvider`: {} = {} }  }\>

#### Defined in

[sdk/src/profiles/index.ts:209](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L209)

___

### createFollow

**createFollow**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[sdk/src/profiles/index.ts:203](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L203)

___

### createProfile

**createProfile**(`profileData`): `Promise`<`undefined` \| { `data`: { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

Create a new profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileData` | [`ProfileInput`](../modules/sdk.md#profileinput) | [ProfileInput](../modules/sdk.md#profileinput) - profileData.name is mandatory |

#### Returns

`Promise`<`undefined` \| { `data`: { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:59](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L59)

___

### follow

**follow**(`pubKey`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | public key |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:253](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L253)

___

### getFollowers

**getFollowers**(`pubKey`, `limit`, `offset?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | public key of the user |
| `limit` | `number` | number of followers to return |
| `offset?` | `number` | offset to start from |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:386](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L386)

___

### getFollowersByDid

**getFollowersByDid**(`did`): `Promise`<`undefined` \| { `data`: `undefined` \| { `edges?`: ``null`` \| (``null`` \| { `node?`: ``null`` \| { `isFollowing`: `boolean` ; `profile?`: ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }  })[] ; `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`undefined` \| { `data`: `undefined` \| { `edges?`: ``null`` \| (``null`` \| { `node?`: ``null`` \| { `isFollowing`: `boolean` ; `profile?`: ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }  })[] ; `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:173](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L173)

___

### getFollowing

**getFollowing**(`pubKey`, `limit`, `offset?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | public key of the user |
| `limit` | `number` | number of following to return |
| `offset?` | `number` | offset to start from |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:397](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L397)

___

### getFollowingByDid

**getFollowingByDid**(`did`): `Promise`<`undefined` \| { `data`: `undefined` \| ``null`` \| { `edges?`: ``null`` \| (``null`` \| { `node?`: ``null`` \| { `isFollowing`: `boolean` ; `profile?`: ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }  })[] ; `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`undefined` \| { `data`: `undefined` \| ``null`` \| { `edges?`: ``null`` \| (``null`` \| { `node?`: ``null`` \| { `isFollowing`: `boolean` ; `profile?`: ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }  })[] ; `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:188](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L188)

___

### getInterests

**getInterests**(`pubKey`): `Promise`<`any`\>

Retrieve subscription list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | public key of the user |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:406](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L406)

___

### getMyProfile

**getMyProfile**(): `Promise`<`undefined` \| { `data`: `undefined` \| ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

Get the current user profile

#### Returns

`Promise`<`undefined` \| { `data`: `undefined` \| ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:141](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L141)

___

### getProfile

**getProfile**(`opt`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | `Object` | object - ethAddress or pubKey |
| `opt.ethAddress?` | `string` | - |
| `opt.pubKey?` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:239](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L239)

___

### getProfileByDid

**getProfileByDid**(`did`): `Promise`<`undefined` \| { `data`: `undefined` \| ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

Get a profile by the profile id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | string - profile did |

#### Returns

`Promise`<`undefined` \| { `data`: `undefined` \| ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:158](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L158)

___

### getProfiles

**getProfiles**(`opt?`): `Promise`<`undefined` \| { `data`: { `edges?`: ``null`` \| (``null`` \| { `node?`: ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  })[] ; `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  }  }\>

Get a list of profiles. Defaults to last 5 profiles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt?` | [`Exact`](../modules/sdk.md#exact)<{ `after?`: [`InputMaybe`](../modules/sdk.md#inputmaybe)<`string`\> ; `before?`: [`InputMaybe`](../modules/sdk.md#inputmaybe)<`string`\> ; `first?`: [`InputMaybe`](../modules/sdk.md#inputmaybe)<`number`\> ; `last?`: [`InputMaybe`](../modules/sdk.md#inputmaybe)<`number`\>  }\> | GetProfilesQueryVariables |

#### Returns

`Promise`<`undefined` \| { `data`: { `edges?`: ``null`` \| (``null`` \| { `node?`: ``null`` \| { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  })[] ; `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:118](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L118)

___

### getTagSubscriptions

**getTagSubscriptions**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:358](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L358)

___

### getTrending

**getTrending**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:342](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L342)

___

### globalSearch

**globalSearch**(`keyword`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyword` | `string` | keyword to search for |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:375](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L375)

___

### isFollowing

**isFollowing**(`opt`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | `Object` | object - follower and following public keys |
| `opt.follower` | `string` | - |
| `opt.following` | `string` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:271](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L271)

___

### isSubscribedToTag

**isSubscribedToTag**(`tagName`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `string` | tag name |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:366](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L366)

___

### makeDefaultProvider

**makeDefaultProvider**(`opt`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opt` | [`DataProviderInput`](../modules/sdk.md#dataproviderinput)[] | DataProviderInput |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:221](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L221)

___

### registerUserName

**registerUserName**(`userName`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userName` | `string` | Username |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:230](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L230)

___

### saveMediaFile

**saveMediaFile**(`data`): `Promise`<{ `CID`: `string` = cid; `blob`: `Blob` = resized.image; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = resized.size }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | media file data |
| `data.config?` | `Object` | - |
| `data.config.autoRotate?` | `boolean` | - |
| `data.config.maxHeight` | `number` | - |
| `data.config.maxWidth` | `number` | - |
| `data.config.mimeType?` | `string` | - |
| `data.config.quality?` | `number` | - |
| `data.content` | `any` | - |
| `data.email?` | \`${string}@${string}\` | - |
| `data.isUrl?` | `boolean` | - |
| `data.name?` | `string` | - |

#### Returns

`Promise`<{ `CID`: `string` = cid; `blob`: `Blob` = resized.image; `size`: { `height`: `number` ; `naturalHeight`: `number` ; `naturalWidth`: `number` ; `width`: `number`  } = resized.size }\>

#### Defined in

[sdk/src/profiles/index.ts:280](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L280)

___

### searchProfiles

**searchProfiles**(`name`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name to search for |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:334](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L334)

___

### toggleTagSubscription

**toggleTagSubscription**(`tagName`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `string` | tag name |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:350](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L350)

___

### unFollow

**unFollow**(`pubKey`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKey` | `string` | public key |

#### Returns

`Promise`<`any`\>

#### Defined in

[sdk/src/profiles/index.ts:262](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L262)

___

### updateProfile

**updateProfile**(`id`, `profileData`): `Promise`<`undefined` \| { `data`: { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

Update a profile using the profile id.

**`Remarks`**

The id can be found on the root object returned from getProfileByDid call

**`See`**

[GetProfileByDidQuery](../modules/sdk.md#getprofilebydidquery) for the profileData.id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | string - profileData.id received from getProfileByDid call |
| `profileData` | [`ProfileInput`](../modules/sdk.md#profileinput) | ProfileInput - fields of the profile to update |

#### Returns

`Promise`<`undefined` \| { `data`: { `avatar?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `background?`: ``null`` \| { `alternatives?`: ``null`` \| (``null`` \| { `height`: `number` ; `src`: `any` ; `width`: `number`  })[] ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } ; `createdAt`: `any` ; `description?`: ``null`` \| `string` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  }  } ; `id`: `string` ; `links?`: ``null`` \| (``null`` \| { `href`: `any` ; `label?`: ``null`` \| `string`  })[] ; `name`: `string`  }  }\>

#### Defined in

[sdk/src/profiles/index.ts:89](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/profiles/index.ts#L89)

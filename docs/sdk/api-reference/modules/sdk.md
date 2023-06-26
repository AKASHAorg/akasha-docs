---
id: "sdk"
title: "Module: sdk"
sidebar_label: "sdk"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

## Enumerations

- [PostType](../enums/sdk.PostType.md)

## Classes

- [AWF\_Auth](../classes/sdk.AWF_Auth.md)
- [AWF\_Comments](../classes/sdk.AWF_Comments.md)
- [AWF\_ENS](../classes/sdk.AWF_ENS.md)
- [AWF\_Entry](../classes/sdk.AWF_Entry.md)
- [AWF\_IC\_REGISTRY](../classes/sdk.AWF_IC_REGISTRY.md)
- [AWF\_IpfsConnector](../classes/sdk.AWF_IpfsConnector.md)
- [AWF\_Misc](../classes/sdk.AWF_Misc.md)
- [AWF\_Profile](../classes/sdk.AWF_Profile.md)
- [AWF\_Tags](../classes/sdk.AWF_Tags.md)
- [AppSettings](../classes/sdk.AppSettings.md)
- [DB](../classes/sdk.DB.md)
- [EventBus](../classes/sdk.EventBus.md)
- [Logging](../classes/sdk.Logging.md)
- [Settings](../classes/sdk.Settings.md)
- [Stash](../classes/sdk.Stash.md)
- [Web3Connector](../classes/sdk.Web3Connector.md)
- [default](../classes/sdk.default.md)
- [default](../classes/sdk.default-1.md)
- [default](../classes/sdk.default-2.md)

## Interfaces

- [ConfigInfo](../interfaces/sdk.ConfigInfo.md)
- [IntegrationSchema](../interfaces/sdk.IntegrationSchema.md)
- [SettingsSchema](../interfaces/sdk.SettingsSchema.md)
- [VersionInfo](../interfaces/sdk.VersionInfo.md)

## Type Aliases

### AddCommentMutation

 **AddCommentMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addComment?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:128

___

### AddProfileProviderMutation

 **AddProfileProviderMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addProfileProvider` | `string` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:808

___

### BeamInput

 **BeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars-1)[``"Boolean"``] |
| `content` | [`InputMaybe`](sdk.md#inputmaybe)<[`BeamProviderValueInput`](sdk.md#beamprovidervalueinput)\>[] |
| `createdAt` | [`Scalars`](sdk.md#scalars-1)[``"DateTime"``] |
| `tags?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\>[]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:175

___

### BeamProviderValueInput

 **BeamProviderValueInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |
| `provider` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |
| `value` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:186

___

### CommentData

 **CommentData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mentions?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\>[]\> |
| `postID?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `replyTo?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `tags?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\>[]\> |

#### Defined in

typings/sdk/graphql-types.d.ts:38

___

### CreateBeamInput

 **CreateBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`BeamInput`](sdk.md#beaminput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:285

___

### CreateBeamMutation

 **CreateBeamMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createBeam?` | { `document`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:233

___

### CreateBeamProfileMentionMutation

 **CreateBeamProfileMentionMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createProfileMention?` | { `document`: { `beam?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null`` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:323

___

### CreateEntryMutation

 **CreateEntryMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createPost?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:442

___

### CreateFollowInput

 **CreateFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`FollowInput`](sdk.md#followinput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:300

___

### CreateFollowMutation

 **CreateFollowMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createFollow?` | { `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1303

___

### CreateInterestsInput

 **CreateInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`InterestsInput`](sdk.md#interestsinput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:315

___

### CreateInterestsMutation

 **CreateInterestsMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createInterests?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1267

___

### CreateProfileInput

 **CreateProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`ProfileInput`](sdk.md#profileinput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:330

___

### CreateProfileMentionInput

 **CreateProfileMentionInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`ProfileMentionInput`](sdk.md#profilementioninput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:334

___

### CreateProfileMutation

 **CreateProfileMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createProfile?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1161

___

### CreateRebeamInput

 **CreateRebeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`RebeamInput`](sdk.md#rebeaminput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:360

___

### CreateRebeamMutation

 **CreateRebeamMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createRebeam?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `beam?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null`` ; `quotedBeam?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:280

___

### CreateReflectInput

 **CreateReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`ReflectInput`](sdk.md#reflectinput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:375

___

### CreateReflectMutation

 **CreateReflectMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createReflect?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:539

___

### CreateReflectReflectionMutation

 **CreateReflectReflectionMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createReflection?` | { `document`: { `active`: `boolean` ; `reflect?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null`` ; `reflection?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:595

___

### CreateReflectionInput

 **CreateReflectionInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`ReflectionInput`](sdk.md#reflectioninput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:390

___

### CreateTagMutation

 **CreateTagMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createTag?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:789

___

### DataProvider

 **DataProvider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | [`Scalars`](sdk.md#scalars)[``"String"``] |
| `provider` | [`Scalars`](sdk.md#scalars)[``"String"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``] |

#### Defined in

typings/sdk/graphql-types.d.ts:49

___

### DataProviderInput

 **DataProviderInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | [`Scalars`](sdk.md#scalars)[``"String"``] |
| `provider` | [`Scalars`](sdk.md#scalars)[``"String"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``] |

#### Defined in

typings/sdk/graphql-types.d.ts:54

___

### EditCommentMutation

 **EditCommentMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `editComment?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:136

___

### EditEntryMutation

 **EditEntryMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `editPost?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:450

___

### Exact

 **Exact**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

typings/sdk/graphql-types-new.d.ts:3

___

### Exact

 **Exact**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

typings/sdk/graphql-types.d.ts:3

___

### FollowInput

 **FollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing` | [`Scalars`](sdk.md#scalars-1)[``"Boolean"``] |
| `profileID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:427

___

### FollowMutation

 **FollowMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `follow?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:888

___

### GetBeamByIdQuery

 **GetBeamByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:93

___

### GetBeamsByAuthorDidQuery

 **GetBeamsByAuthorDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `beamList?`: { `edges?`: ({ `node?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:59

___

### GetBeamsQuery

 **GetBeamsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beamIndex?` | { `edges?`: ({ `node?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:24

___

### GetCommentQuery

 **GetCommentQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getComment` | { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `postId`: `string` ; `replyTo?`: `string` \| ``null`` ; `totalReplies?`: `number` \| ``null`` ; `updatedAt?`: `string` \| ``null``  } |
| `getComment._id` | `string` |
| `getComment.author` | { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } |
| `getComment.author.avatar?` | `string` \| ``null`` |
| `getComment.author.coverImage?` | `string` \| ``null`` |
| `getComment.author.description?` | `string` \| ``null`` |
| `getComment.author.ethAddress` | `string` |
| `getComment.author.name?` | `string` \| ``null`` |
| `getComment.author.pubKey` | `string` |
| `getComment.author.totalFollowers` | `number` |
| `getComment.author.totalFollowing` | `number` |
| `getComment.author.totalInterests` | `number` |
| `getComment.author.totalPosts?` | `string` \| ``null`` |
| `getComment.author.userName?` | `string` \| ``null`` |
| `getComment.content?` | { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` |
| `getComment.creationDate` | `string` |
| `getComment.postId` | `string` |
| `getComment.replyTo?` | `string` \| ``null`` |
| `getComment.totalReplies?` | `number` \| ``null`` |
| `getComment.updatedAt?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:23

___

### GetCommentsQuery

 **GetCommentsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getComments?` | { `nextIndex?`: `string` \| ``null`` ; `results?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `postId`: `string` ; `replyTo?`: `string` \| ``null`` ; `totalReplies?`: `number` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:56

___

### GetCustomFeedQuery

 **GetCustomFeedQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCustomFeed?` | { `nextIndex?`: `number` \| ``null`` ; `results?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `quotedBy?`: (`string` \| ``null``)[] \| ``null`` ; `quotedByAuthors?`: ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `quotes?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:673

___

### GetEntriesQuery

 **GetEntriesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `posts?` | { `nextIndex?`: `string` \| ``null`` ; `results?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `quotedBy?`: (`string` \| ``null``)[] \| ``null`` ; `quotedByAuthors?`: ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `quotes?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:364

___

### GetEntryQuery

 **GetEntryQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPost` | { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `quotedBy?`: (`string` \| ``null``)[] \| ``null`` ; `quotedByAuthors?`: ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `quotes?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  } |
| `getPost._id` | `string` |
| `getPost.author` | { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } |
| `getPost.author.avatar?` | `string` \| ``null`` |
| `getPost.author.coverImage?` | `string` \| ``null`` |
| `getPost.author.description?` | `string` \| ``null`` |
| `getPost.author.ethAddress` | `string` |
| `getPost.author.name?` | `string` \| ``null`` |
| `getPost.author.pubKey` | `string` |
| `getPost.author.totalFollowers` | `number` |
| `getPost.author.totalFollowing` | `number` |
| `getPost.author.totalInterests` | `number` |
| `getPost.author.totalPosts?` | `string` \| ``null`` |
| `getPost.author.userName?` | `string` \| ``null`` |
| `getPost.content?` | { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` |
| `getPost.creationDate` | `string` |
| `getPost.quotedBy?` | (`string` \| ``null``)[] \| ``null`` |
| `getPost.quotedByAuthors?` | ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` |
| `getPost.quotes?` | { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` |
| `getPost.tags?` | `string`[] \| ``null`` |
| `getPost.title?` | `string` \| ``null`` |
| `getPost.totalComments` | `string` |
| `getPost.type` | [`PostType`](../enums/sdk.PostType.md) |
| `getPost.updatedAt?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:289

___

### GetFollowersListByDidQuery

 **GetFollowersListByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `isViewer`: `boolean` ; `profile?`: { `followers`: { `edges?`: ({ `node?`: { `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  }  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1041

___

### GetFollowersQuery

 **GetFollowersQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getFollowers?` | { `nextIndex?`: `number` \| ``null`` ; `results?`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:954

___

### GetFollowingListByDidQuery

 **GetFollowingListByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `followList?`: { `edges?`: ({ `node?`: { `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:971

___

### GetFollowingQuery

 **GetFollowingQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getFollowing?` | { `nextIndex?`: `number` \| ``null`` ; `results?`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:978

___

### GetIntegrationInfoQuery

 **GetIntegrationInfoQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getIntegrationInfo?` | ({ `author`: `string` ; `enabled`: `boolean` ; `id`: `string` ; `integrationType`: `number` ; `latestReleaseId`: `string` ; `name`: `string`  } \| ``null``)[] \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:1071

___

### GetInterestsByDidQuery

 **GetInterestsByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `interests?`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:934

___

### GetInterestsByIdQuery

 **GetInterestsByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:952

___

### GetInterestsQuery

 **GetInterestsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getInterests?` | (`string` \| ``null``)[] \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:1000

___

### GetInterestsQuery

 **GetInterestsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `interestsIndex?` | { `edges?`: ({ `node?`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:909

___

### GetLatestReleaseQuery

 **GetLatestReleaseQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getLatestRelease?` | ({ `author`: `string` ; `createdAt?`: `number` \| ``null`` ; `enabled`: `boolean` ; `id?`: `string` \| ``null`` ; `integrationID`: `string` ; `integrationType`: `number` ; `links?`: { `detailedDescription?`: `string` \| ``null`` ; `documentation?`: `string` \| ``null`` ; `publicRepository?`: `string` \| ``null``  } \| ``null`` ; `manifestData`: { `description?`: `string` \| ``null`` ; `displayName?`: `string` \| ``null`` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license?`: `string` \| ``null`` ; `mainFile`: `string`  } ; `name`: `string` ; `sources?`: `string`[] \| ``null`` ; `version`: `string`  } \| ``null``)[] \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:1043

___

### GetLinkPreviewMutation

 **GetLinkPreviewMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getLinkPreview?` | { `contentType`: `string` ; `description?`: `string` \| ``null`` ; `faviconPreviewHash?`: `string` \| ``null`` ; `favicons?`: (`string` \| ``null``)[] \| ``null`` ; `imagePreviewHash?`: `string` \| ``null`` ; `images?`: (`string` \| ``null``)[] \| ``null`` ; `mediaType?`: `string` \| ``null`` ; `siteName?`: `string` \| ``null`` ; `title?`: `string` \| ``null`` ; `url`: `string` ; `videos?`: ({ `height?`: `string` \| ``null`` ; `secureUrl?`: `string` \| ``null`` ; `type?`: `string` \| ``null`` ; `url?`: `string` \| ``null`` ; `width?`: `string` \| ``null``  } \| ``null``)[] \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:648

___

### GetMentionsFromBeamQuery

 **GetMentionsFromBeamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `mentions`: { `edges?`: ({ `node?`: { `beam?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null`` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null``  }  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:159

___

### GetMyProfileQuery

 **GetMyProfileQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `viewer?` | { `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1109

___

### GetPostsByAuthorQuery

 **GetPostsByAuthorQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPostsByAuthor?` | { `nextIndex?`: `number` \| ``null`` ; `results?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `quotedBy?`: (`string` \| ``null``)[] \| ``null`` ; `quotedByAuthors?`: ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `quotes?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:465

___

### GetPostsByTagQuery

 **GetPostsByTagQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPostsByTag?` | { `nextIndex?`: `number` \| ``null`` ; `results?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `quotedBy?`: (`string` \| ``null``)[] \| ``null`` ; `quotedByAuthors?`: ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `quotes?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `tags?`: `string`[] \| ``null`` ; `title?`: `string` \| ``null`` ; `totalComments`: `string` ; `type`: [`PostType`](../enums/sdk.PostType.md) ; `updatedAt?`: `string` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:545

___

### GetProfileByDidQuery

 **GetProfileByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `isViewer`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:790

___

### GetProfileByIdQuery

 **GetProfileByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:740

___

### GetProfileQuery

 **GetProfileQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getProfile` | { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `default?`: ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `providers?`: ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } |
| `getProfile.avatar?` | `string` \| ``null`` |
| `getProfile.coverImage?` | `string` \| ``null`` |
| `getProfile.default?` | ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` |
| `getProfile.description?` | `string` \| ``null`` |
| `getProfile.ethAddress` | `string` |
| `getProfile.name?` | `string` \| ``null`` |
| `getProfile.providers?` | ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` |
| `getProfile.pubKey` | `string` |
| `getProfile.totalFollowers` | `number` |
| `getProfile.totalFollowing` | `number` |
| `getProfile.totalInterests` | `number` |
| `getProfile.totalPosts?` | `string` \| ``null`` |
| `getProfile.userName?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:860

___

### GetProfilesQuery

 **GetProfilesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `profileIndex?` | { `edges?`: ({ `node?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:846

___

### GetRebeamsFromBeamQuery

 **GetRebeamsFromBeamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `rebeams`: { `edges?`: ({ `node?`: { `beam?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null`` ; `quotedBeam?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null``  }  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:114

___

### GetReflectReflectionsQuery

 **GetReflectReflectionsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `reflections`: { `edges?`: ({ `node?`: { `reflect?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  }  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:500

___

### GetReflectionsByAuthorDidQuery

 **GetReflectionsByAuthorDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `isViewer`: `boolean` ; `reflectList?`: { `edges?`: ({ `node?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:458

___

### GetReflectionsFromBeamQuery

 **GetReflectionsFromBeamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `reflections`: { `edges?`: ({ `node?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  }  } \| {} \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:417

___

### GetRepliesQuery

 **GetRepliesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getReplies?` | { `nextIndex?`: `string` \| ``null`` ; `results?`: { `_id`: `string` ; `author`: { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } ; `content?`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] \| ``null`` ; `creationDate`: `string` ; `postId`: `string` ; `replyTo?`: `string` \| ``null`` ; `totalReplies?`: `number` \| ``null``  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:93

___

### GetTagQuery

 **GetTagQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getTag?` | { `creationDate`: `string` ; `name`: `string` ; `totalPosts`: `number`  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:755

___

### GetTagsQuery

 **GetTagsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tags?` | { `nextIndex?`: `string` \| ``null`` ; `results?`: { `creationDate`: `string` ; `name`: `string` ; `totalPosts`: `number`  }[] \| ``null`` ; `total?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:766

___

### GlobalSearchQuery

 **GlobalSearchQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `globalSearch?` | { `comments?`: ({ `id`: `string`  } \| ``null``)[] \| ``null`` ; `posts?`: ({ `id`: `string`  } \| ``null``)[] \| ``null`` ; `profiles?`: ({ `id`: `string`  } \| ``null``)[] \| ``null`` ; `tags?`: ({ `id`: `string` ; `name`: `string` ; `totalPosts`: `number`  } \| ``null``)[] \| ``null``  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:931

___

### IQuickLRU

 **IQuickLRU**: `QuickLRU`<`string`, `any`\>

#### Defined in

[sdk/src/stash/index.ts:8](https://github.com/AKASHAorg/akasha-core/blob/978d02d1/sdk/src/stash/index.ts#L8)

___

### InfoLink

 **InfoLink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `detailedDescription?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `documentation?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `publicRepository?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |

#### Defined in

typings/sdk/graphql-types.d.ts:101

___

### InputMaybe

 **InputMaybe**<`T`\>: [`Maybe`](sdk.md#maybe-1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/sdk/graphql-types-new.d.ts:2

___

### InputMaybe

 **InputMaybe**<`T`\>: [`Maybe`](sdk.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/sdk/graphql-types.d.ts:2

___

### InterestsInput

 **InterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `topics` | [`InputMaybe`](sdk.md#inputmaybe)<[`InterestsLabeledInput`](sdk.md#interestslabeledinput)\>[] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:451

___

### InterestsLabeledInput

 **InterestsLabeledInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `labelType` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |
| `value` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:458

___

### IsFollowingQuery

 **IsFollowingQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:901

___

### IsUserNameAvailableQuery

 **IsUserNameAvailableQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isUserNameAvailable?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:1006

___

### MakeDefaultProviderMutation

 **MakeDefaultProviderMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `makeDefaultProvider` | `string` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:814

___

### ManifestInfo

 **ManifestInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `displayName?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `keywords?` | [`Maybe`](sdk.md#maybe)<[`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\>[]\> |
| `license?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `mainFile` | [`Scalars`](sdk.md#scalars)[``"String"``] |

#### Defined in

typings/sdk/graphql-types.d.ts:140

___

### Maybe

 **Maybe**<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/sdk/graphql-types.d.ts:1

___

### Maybe

 **Maybe**<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/sdk/graphql-types-new.d.ts:1

___

### PartialBeamInput

 **PartialBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"Boolean"``]\> |
| `content?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`BeamProviderValueInput`](sdk.md#beamprovidervalueinput)\>[]\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"DateTime"``]\> |
| `tags?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\>[]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:576

___

### PartialFollowInput

 **PartialFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"Boolean"``]\> |
| `profileID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:582

___

### PartialInterestsInput

 **PartialInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `topics?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`InterestsLabeledInput`](sdk.md#interestslabeledinput)\>[]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:586

___

### PartialProfileInput

 **PartialProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avatar?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `background?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"DateTime"``]\> |
| `description?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `links?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileLinkSourceInput`](sdk.md#profilelinksourceinput)\>[]\> |
| `name?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:589

___

### PartialReflectInput

 **PartialReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"Boolean"``]\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``]\> |
| `content?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ReflectProviderValueInput`](sdk.md#reflectprovidervalueinput)\>[]\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"DateTime"``]\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"Boolean"``]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:606

___

### PartialReflectionInput

 **PartialReflectionInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"Boolean"``]\> |
| `reflectID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``]\> |
| `reflectionID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:613

___

### PostData

 **PostData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mentions?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\>[]\> |
| `quotes?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\>[]\> |
| `tags?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\>[]\> |
| `title?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `type?` | [`InputMaybe`](sdk.md#inputmaybe-1)<[`PostType`](../enums/sdk.PostType.md)\> |

#### Defined in

typings/sdk/graphql-types.d.ts:261

___

### ProfileImageSourceInput

 **ProfileImageSourceInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | [`Scalars`](sdk.md#scalars-1)[``"Int"``] |
| `src` | [`Scalars`](sdk.md#scalars-1)[``"URI"``] |
| `width` | [`Scalars`](sdk.md#scalars-1)[``"Int"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:656

___

### ProfileImageVersionsInput

 **ProfileImageVersionsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alternatives?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageSourceInput`](sdk.md#profileimagesourceinput)\>[]\> |
| `default` | [`ProfileImageSourceInput`](sdk.md#profileimagesourceinput) |

#### Defined in

typings/sdk/graphql-types-new.d.ts:665

___

### ProfileInput

 **ProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avatar?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `background?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `createdAt` | [`Scalars`](sdk.md#scalars-1)[``"DateTime"``] |
| `description?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `links?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileLinkSourceInput`](sdk.md#profilelinksourceinput)\>[]\> |
| `name` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:669

___

### ProfileLinkSourceInput

 **ProfileLinkSourceInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `href` | [`Scalars`](sdk.md#scalars-1)[``"URI"``] |
| `label?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:681

___

### ProfileMentionInput

 **ProfileMentionInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beamID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |
| `profileID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:706

___

### RebeamInput

 **RebeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars-1)[``"Boolean"``] |
| `beamID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |
| `quotedBeamID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:811

___

### ReflectInput

 **ReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars-1)[``"Boolean"``] |
| `beamID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |
| `content` | [`InputMaybe`](sdk.md#inputmaybe)<[`ReflectProviderValueInput`](sdk.md#reflectprovidervalueinput)\>[] |
| `createdAt` | [`Scalars`](sdk.md#scalars-1)[``"DateTime"``] |
| `isReply` | [`Scalars`](sdk.md#scalars-1)[``"Boolean"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:855

___

### ReflectProviderValueInput

 **ReflectProviderValueInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |
| `provider` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |
| `value` | [`Scalars`](sdk.md#scalars-1)[``"String"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:867

___

### ReflectionInput

 **ReflectionInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars-1)[``"Boolean"``] |
| `reflectID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |
| `reflectionID` | [`Scalars`](sdk.md#scalars-1)[``"CeramicStreamID"``] |

#### Defined in

typings/sdk/graphql-types-new.d.ts:894

___

### RegisterUsernameMutation

 **RegisterUsernameMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `registerUserName` | `string` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:826

___

### RemoveCommentMutation

 **RemoveCommentMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `removeComment?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:142

___

### RemoveEntryMutation

 **RemoveEntryMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `removePost?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:456

___

### ResolveProfileQuery

 **ResolveProfileQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resolveProfile` | { `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `default?`: ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `providers?`: ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } |
| `resolveProfile.avatar?` | `string` \| ``null`` |
| `resolveProfile.coverImage?` | `string` \| ``null`` |
| `resolveProfile.default?` | ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` |
| `resolveProfile.description?` | `string` \| ``null`` |
| `resolveProfile.ethAddress` | `string` |
| `resolveProfile.name?` | `string` \| ``null`` |
| `resolveProfile.providers?` | ({ `property`: `string` ; `provider`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` |
| `resolveProfile.pubKey` | `string` |
| `resolveProfile.totalFollowers` | `number` |
| `resolveProfile.totalFollowing` | `number` |
| `resolveProfile.totalInterests` | `number` |
| `resolveProfile.totalPosts?` | `string` \| ``null`` |
| `resolveProfile.userName?` | `string` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:832

___

### SaveMetaDataMutation

 **SaveMetaDataMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `saveMetaData` | `string` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:907

___

### Scalars

 **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Boolean` | `boolean` |
| `Float` | `number` |
| `ID` | `string` |
| `Int` | `number` |
| `String` | `string` |
| `_FieldSet` | `any` |

#### Defined in

typings/sdk/graphql-types.d.ts:15

___

### Scalars

 **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Boolean` | `boolean` | - |
| `CeramicCommitID` | `any` | A Ceramic Commit ID |
| `CeramicStreamID` | `any` | A Ceramic Stream ID |
| `DID` | `any` | A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. |
| `DateTime` | `any` | A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. |
| `Float` | `number` | - |
| `ID` | `string` | - |
| `Int` | `number` | - |
| `InterPlanetaryCID` | `any` | A IPLD CID |
| `String` | `string` | - |
| `URI` | `any` | A field whose value conforms to the standard Uniform Resource Identifier (URI) format as specified in RFC3986. |
| `_FieldSet` | `any` | - |

#### Defined in

typings/sdk/graphql-types-new.d.ts:15

___

### SearchProfilesQuery

 **SearchProfilesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `searchProfiles?` | ({ `avatar?`: `string` \| ``null`` ; `coverImage?`: `string` \| ``null`` ; `description?`: `string` \| ``null`` ; `ethAddress`: `string` ; `name?`: `string` \| ``null`` ; `pubKey`: `string` ; `totalFollowers`: `number` ; `totalFollowing`: `number` ; `totalInterests`: `number` ; `totalPosts?`: `string` \| ``null`` ; `userName?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:913

___

### SearchTagsQuery

 **SearchTagsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `searchTags?` | ({ `name`: `string` ; `totalPosts`: `number`  } \| ``null``)[] \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:780

___

### ToggleInterestSubMutation

 **ToggleInterestSubMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toggleInterestSub?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:820

___

### UnFollowMutation

 **UnFollowMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `unFollow?` | `boolean` \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types.d.ts:894

___

### UpdateBeamInput

 **UpdateBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`PartialBeamInput`](sdk.md#partialbeaminput) |
| `id` | [`Scalars`](sdk.md#scalars-1)[``"ID"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:933

___

### UpdateBeamMutation

 **UpdateBeamMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateBeam?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `id`: `string` ; `rebeamsCount`: `number` ; `reflectionsCount`: `number` ; `tags?`: (`string` \| ``null``)[] \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:256

___

### UpdateFollowInput

 **UpdateFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`PartialFollowInput`](sdk.md#partialfollowinput) |
| `id` | [`Scalars`](sdk.md#scalars-1)[``"ID"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:950

___

### UpdateFollowMutation

 **UpdateFollowMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateFollow?` | { `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1362

___

### UpdateInterestsInput

 **UpdateInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`PartialInterestsInput`](sdk.md#partialinterestsinput) |
| `id` | [`Scalars`](sdk.md#scalars-1)[``"ID"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:967

___

### UpdateInterestsMutation

 **UpdateInterestsMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateInterests?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1285

___

### UpdateOptionsInput

 **UpdateOptionsInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `replace?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"Boolean"``]\> | Fully replace the document contents instead of performing a shallow merge |
| `version?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"CeramicCommitID"``]\> | Only perform mutation if the document matches the provided version |

#### Defined in

typings/sdk/graphql-types-new.d.ts:984

___

### UpdateProfileInput

 **UpdateProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`PartialProfileInput`](sdk.md#partialprofileinput) |
| `id` | [`Scalars`](sdk.md#scalars-1)[``"ID"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:990

___

### UpdateProfileMutation

 **UpdateProfileMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateProfile?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string`  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:1214

___

### UpdateReflectInput

 **UpdateReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`PartialReflectInput`](sdk.md#partialreflectinput) |
| `id` | [`Scalars`](sdk.md#scalars-1)[``"ID"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:1041

___

### UpdateReflectMutation

 **UpdateReflectMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateReflect?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:567

___

### UpdateReflectReflectionMutation

 **UpdateReflectReflectionMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateReflection?` | { `document`: { `active`: `boolean` ; `reflect?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null`` ; `reflection?`: { `active`: `boolean` ; `author`: { `id`: `string`  } ; `beam?`: { `author`: { `id`: `string`  } ; `id`: `string`  } \| ``null`` ; `content`: { `property`: `string` ; `provider`: `string` ; `value`: `string`  }[] ; `isReply`: `boolean` ; `reflectionsCount`: `number` ; `version`: `any`  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/sdk/graphql-operation-types-new.d.ts:645

___

### UpdateReflectionInput

 **UpdateReflectionInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars-1)[``"String"``]\> |
| `content` | [`PartialReflectionInput`](sdk.md#partialreflectioninput) |
| `id` | [`Scalars`](sdk.md#scalars-1)[``"ID"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/sdk/graphql-types-new.d.ts:1058

___

### UserProfile

 **UserProfile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | [`Scalars`](sdk.md#scalars)[``"ID"``] |
| `avatar?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `coverImage?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `creationDate?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `default?` | [`Maybe`](sdk.md#maybe)<[`Maybe`](sdk.md#maybe)<[`DataProvider`](sdk.md#dataprovider)\>[]\> |
| `description?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `ethAddress` | [`Scalars`](sdk.md#scalars)[``"String"``] |
| `name?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `providers?` | [`Maybe`](sdk.md#maybe)<[`Maybe`](sdk.md#maybe)<[`DataProvider`](sdk.md#dataprovider)\>[]\> |
| `pubKey` | [`Scalars`](sdk.md#scalars)[``"String"``] |
| `totalFollowers` | [`Scalars`](sdk.md#scalars)[``"Int"``] |
| `totalFollowing` | [`Scalars`](sdk.md#scalars)[``"Int"``] |
| `totalInterests` | [`Scalars`](sdk.md#scalars)[``"Int"``] |
| `totalPosts?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |
| `userName?` | [`Maybe`](sdk.md#maybe)<[`Scalars`](sdk.md#scalars)[``"String"``]\> |

#### Defined in

typings/sdk/graphql-types.d.ts:420

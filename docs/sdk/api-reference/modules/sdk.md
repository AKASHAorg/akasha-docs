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

- [AkashaAppApplicationType](../enums/sdk.AkashaAppApplicationType.md)
- [AkashaAppsStreamModerationStatus](../enums/sdk.AkashaAppsStreamModerationStatus.md)
- [AkashaBeamStreamModerationStatus](../enums/sdk.AkashaBeamStreamModerationStatus.md)
- [AkashaContentBlockBlockDef](../enums/sdk.AkashaContentBlockBlockDef.md)
- [AkashaContentBlockStreamModerationStatus](../enums/sdk.AkashaContentBlockStreamModerationStatus.md)
- [AkashaIndexedStreamModerationStatus](../enums/sdk.AkashaIndexedStreamModerationStatus.md)
- [AkashaIndexedStreamStreamType](../enums/sdk.AkashaIndexedStreamStreamType.md)
- [AkashaInterestsStreamModerationStatus](../enums/sdk.AkashaInterestsStreamModerationStatus.md)
- [AkashaProfileStreamModerationStatus](../enums/sdk.AkashaProfileStreamModerationStatus.md)
- [AkashaReflectStreamModerationStatus](../enums/sdk.AkashaReflectStreamModerationStatus.md)
- [SortOrder](../enums/sdk.SortOrder.md)

## Classes

- [AWF\_Auth](../classes/sdk.AWF_Auth.md)
- [AWF\_Config](../classes/sdk.AWF_Config.md)
- [AWF\_IpfsConnector](../classes/sdk.AWF_IpfsConnector.md)
- [AWF\_Misc](../classes/sdk.AWF_Misc.md)
- [AWF\_Profile](../classes/sdk.AWF_Profile.md)
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

### AkashaAppApplicationTypeValueFilterInput

 **AkashaAppApplicationTypeValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:131

___

### AkashaAppFiltersInput

 **AkashaAppFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppFiltersInput`](sdk.md#akashaappfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppFiltersInput`](sdk.md#akashaappfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppFiltersInput`](sdk.md#akashaappfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppObjectFilterInput`](sdk.md#akashaappobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:152

___

### AkashaAppInput

 **AkashaAppInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md)\> |
| `contributors?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"DID"``][``"input"``]\>[]\> |
| `coverImage?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AppImageSourceInput`](sdk.md#appimagesourceinput)\> |
| `createdAt` | [`Scalars`](sdk.md#scalars)[``"DateTime"``][``"input"``] |
| `description` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `displayName` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `gallery?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppImageSourceInput`](sdk.md#appimagesourceinput)\>[]\> |
| `keywords?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\>[]\> |
| `license` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `links?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppLinkSourceInput`](sdk.md#applinksourceinput)\>[]\> |
| `logoImage?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AppImageSourceInput`](sdk.md#appimagesourceinput)\> |
| `meta?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppProviderValueInput`](sdk.md#appprovidervalueinput)\>[]\> |
| `name` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:158

___

### AkashaAppObjectFilterInput

 **AkashaAppObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationTypeValueFilterInput`](sdk.md#akashaappapplicationtypevaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `displayName?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `name?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:226

___

### AkashaAppReleaseFiltersInput

 **AkashaAppReleaseFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppReleaseFiltersInput`](sdk.md#akashaappreleasefiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppReleaseFiltersInput`](sdk.md#akashaappreleasefiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppReleaseFiltersInput`](sdk.md#akashaappreleasefiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppReleaseObjectFilterInput`](sdk.md#akashaappreleaseobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:255

___

### AkashaAppReleaseInput

 **AkashaAppReleaseInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationID` | [`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``] |
| `createdAt` | [`Scalars`](sdk.md#scalars)[``"DateTime"``][``"input"``] |
| `meta?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppProviderValueInput`](sdk.md#appprovidervalueinput)\>[]\> |
| `source` | [`Scalars`](sdk.md#scalars)[``"URI"``][``"input"``] |
| `version` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:261

___

### AkashaAppReleaseObjectFilterInput

 **AkashaAppReleaseObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `version?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:309

___

### AkashaAppReleaseSortingInput

 **AkashaAppReleaseSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `version?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:314

___

### AkashaAppSortingInput

 **AkashaAppSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `displayName?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `name?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:319

___

### AkashaAppsStreamFiltersInput

 **AkashaAppsStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamFiltersInput`](sdk.md#akashaappsstreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamFiltersInput`](sdk.md#akashaappsstreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamFiltersInput`](sdk.md#akashaappsstreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamObjectFilterInput`](sdk.md#akashaappsstreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:349

___

### AkashaAppsStreamModerationStatusValueFilterInput

 **AkashaAppsStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamModerationStatus`](../enums/sdk.AkashaAppsStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamModerationStatus`](../enums/sdk.AkashaAppsStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamModerationStatus`](../enums/sdk.AkashaAppsStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamModerationStatus`](../enums/sdk.AkashaAppsStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:370

___

### AkashaAppsStreamObjectFilterInput

 **AkashaAppsStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `applicationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppsStreamModerationStatusValueFilterInput`](sdk.md#akashaappsstreammoderationstatusvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:377

___

### AkashaAppsStreamSortingInput

 **AkashaAppsStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `applicationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:384

___

### AkashaBeamFiltersInput

 **AkashaBeamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamFiltersInput`](sdk.md#akashabeamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamFiltersInput`](sdk.md#akashabeamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamFiltersInput`](sdk.md#akashabeamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamObjectFilterInput`](sdk.md#akashabeamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:434

___

### AkashaBeamInput

 **AkashaBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``] |
| `content` | [`InputMaybe`](sdk.md#inputmaybe)<[`BeamBlockRecordInput`](sdk.md#beamblockrecordinput)\>[] |
| `createdAt` | [`Scalars`](sdk.md#scalars)[``"DateTime"``][``"input"``] |
| `embeddedStream?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BeamEmbeddedTypeInput`](sdk.md#beamembeddedtypeinput)\> |
| `mentions?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"DID"``][``"input"``]\>[]\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `tags?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`BeamLabeledInput`](sdk.md#beamlabeledinput)\>[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:440

___

### AkashaBeamObjectFilterInput

 **AkashaBeamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:493

___

### AkashaBeamSortingInput

 **AkashaBeamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:498

___

### AkashaBeamStreamFiltersInput

 **AkashaBeamStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamFiltersInput`](sdk.md#akashabeamstreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamFiltersInput`](sdk.md#akashabeamstreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamFiltersInput`](sdk.md#akashabeamstreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamObjectFilterInput`](sdk.md#akashabeamstreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:527

___

### AkashaBeamStreamModerationStatusValueFilterInput

 **AkashaBeamStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamModerationStatus`](../enums/sdk.AkashaBeamStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamModerationStatus`](../enums/sdk.AkashaBeamStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamModerationStatus`](../enums/sdk.AkashaBeamStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamModerationStatus`](../enums/sdk.AkashaBeamStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:548

___

### AkashaBeamStreamObjectFilterInput

 **AkashaBeamStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaBeamStreamModerationStatusValueFilterInput`](sdk.md#akashabeamstreammoderationstatusvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:555

___

### AkashaBeamStreamSortingInput

 **AkashaBeamStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:562

___

### AkashaContentBlockInput

 **AkashaContentBlockInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``] |
| `appVersionID` | [`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``] |
| `content` | [`InputMaybe`](sdk.md#inputmaybe)<[`BlockLabeledValueInput`](sdk.md#blocklabeledvalueinput)\>[] |
| `createdAt` | [`Scalars`](sdk.md#scalars)[``"DateTime"``][``"input"``] |
| `kind?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockBlockDef`](../enums/sdk.AkashaContentBlockBlockDef.md)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:702

___

### AkashaContentBlockStreamFiltersInput

 **AkashaContentBlockStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamFiltersInput`](sdk.md#akashacontentblockstreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamFiltersInput`](sdk.md#akashacontentblockstreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamFiltersInput`](sdk.md#akashacontentblockstreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamObjectFilterInput`](sdk.md#akashacontentblockstreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:793

___

### AkashaContentBlockStreamModerationStatusValueFilterInput

 **AkashaContentBlockStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamModerationStatus`](../enums/sdk.AkashaContentBlockStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamModerationStatus`](../enums/sdk.AkashaContentBlockStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamModerationStatus`](../enums/sdk.AkashaContentBlockStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamModerationStatus`](../enums/sdk.AkashaContentBlockStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:814

___

### AkashaContentBlockStreamObjectFilterInput

 **AkashaContentBlockStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `blockID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockStreamModerationStatusValueFilterInput`](sdk.md#akashacontentblockstreammoderationstatusvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:821

___

### AkashaContentBlockStreamSortingInput

 **AkashaContentBlockStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `blockID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:828

___

### AkashaFollowInput

 **AkashaFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing` | [`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``] |
| `profileID` | [`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:863

___

### AkashaFollowInterfaceSortingInput

 **AkashaFollowInterfaceSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `profileID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:899

___

### AkashaFollowSortingInput

 **AkashaFollowSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `profileID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:907

___

### AkashaIndexedStreamFiltersInput

 **AkashaIndexedStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamFiltersInput`](sdk.md#akashaindexedstreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamFiltersInput`](sdk.md#akashaindexedstreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamFiltersInput`](sdk.md#akashaindexedstreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamObjectFilterInput`](sdk.md#akashaindexedstreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:975

___

### AkashaIndexedStreamModerationStatusValueFilterInput

 **AkashaIndexedStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamModerationStatus`](../enums/sdk.AkashaIndexedStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamModerationStatus`](../enums/sdk.AkashaIndexedStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamModerationStatus`](../enums/sdk.AkashaIndexedStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamModerationStatus`](../enums/sdk.AkashaIndexedStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:999

___

### AkashaIndexedStreamObjectFilterInput

 **AkashaIndexedStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `indexType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `indexValue?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamModerationStatusValueFilterInput`](sdk.md#akashaindexedstreammoderationstatusvaluefilterinput)\> |
| `stream?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `streamType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamStreamTypeValueFilterInput`](sdk.md#akashaindexedstreamstreamtypevaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1006

___

### AkashaIndexedStreamSortingInput

 **AkashaIndexedStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `indexType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `indexValue?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `stream?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `streamType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1016

___

### AkashaIndexedStreamStreamTypeValueFilterInput

 **AkashaIndexedStreamStreamTypeValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamStreamType`](../enums/sdk.AkashaIndexedStreamStreamType.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamStreamType`](../enums/sdk.AkashaIndexedStreamStreamType.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamStreamType`](../enums/sdk.AkashaIndexedStreamStreamType.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaIndexedStreamStreamType`](../enums/sdk.AkashaIndexedStreamStreamType.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1036

___

### AkashaInterestsStreamFiltersInput

 **AkashaInterestsStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamFiltersInput`](sdk.md#akashainterestsstreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamFiltersInput`](sdk.md#akashainterestsstreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamFiltersInput`](sdk.md#akashainterestsstreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamObjectFilterInput`](sdk.md#akashainterestsstreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1067

___

### AkashaInterestsStreamModerationStatusValueFilterInput

 **AkashaInterestsStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamModerationStatus`](../enums/sdk.AkashaInterestsStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamModerationStatus`](../enums/sdk.AkashaInterestsStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamModerationStatus`](../enums/sdk.AkashaInterestsStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamModerationStatus`](../enums/sdk.AkashaInterestsStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1089

___

### AkashaInterestsStreamObjectFilterInput

 **AkashaInterestsStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `labelType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaInterestsStreamModerationStatusValueFilterInput`](sdk.md#akashainterestsstreammoderationstatusvaluefilterinput)\> |
| `value?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1096

___

### AkashaInterestsStreamSortingInput

 **AkashaInterestsStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `labelType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `value?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1104

___

### AkashaProfileFiltersInput

 **AkashaProfileFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileFiltersInput`](sdk.md#akashaprofilefiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileFiltersInput`](sdk.md#akashaprofilefiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileFiltersInput`](sdk.md#akashaprofilefiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileObjectFilterInput`](sdk.md#akashaprofileobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1153

___

### AkashaProfileInput

 **AkashaProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avatar?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `background?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `createdAt` | [`Scalars`](sdk.md#scalars)[``"DateTime"``][``"input"``] |
| `description?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `links?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileLinkSourceInput`](sdk.md#profilelinksourceinput)\>[]\> |
| `name` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1159

___

### AkashaProfileInterestsInput

 **AkashaProfileInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `topics` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileLabeledInput`](sdk.md#profilelabeledinput)\>[] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1188

___

### AkashaProfileObjectFilterInput

 **AkashaProfileObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `name?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1255

___

### AkashaProfileSortingInput

 **AkashaProfileSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `name?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1260

___

### AkashaProfileStreamFiltersInput

 **AkashaProfileStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamFiltersInput`](sdk.md#akashaprofilestreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamFiltersInput`](sdk.md#akashaprofilestreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamFiltersInput`](sdk.md#akashaprofilestreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamObjectFilterInput`](sdk.md#akashaprofilestreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1289

___

### AkashaProfileStreamModerationStatusValueFilterInput

 **AkashaProfileStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamModerationStatus`](../enums/sdk.AkashaProfileStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamModerationStatus`](../enums/sdk.AkashaProfileStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamModerationStatus`](../enums/sdk.AkashaProfileStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamModerationStatus`](../enums/sdk.AkashaProfileStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1310

___

### AkashaProfileStreamObjectFilterInput

 **AkashaProfileStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `profileID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaProfileStreamModerationStatusValueFilterInput`](sdk.md#akashaprofilestreammoderationstatusvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1317

___

### AkashaProfileStreamSortingInput

 **AkashaProfileStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `profileID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1324

___

### AkashaReflectFiltersInput

 **AkashaReflectFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectFiltersInput`](sdk.md#akashareflectfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectFiltersInput`](sdk.md#akashareflectfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectFiltersInput`](sdk.md#akashareflectfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectObjectFilterInput`](sdk.md#akashareflectobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1363

___

### AkashaReflectInput

 **AkashaReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | [`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``] |
| `beamID` | [`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``] |
| `content` | [`InputMaybe`](sdk.md#inputmaybe)<[`ReflectProviderValueInput`](sdk.md#reflectprovidervalueinput)\>[] |
| `createdAt` | [`Scalars`](sdk.md#scalars)[``"DateTime"``][``"input"``] |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `mentions?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``]\>[]\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `reflection?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``]\> |
| `tags?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\>[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1369

___

### AkashaReflectInterfaceFiltersInput

 **AkashaReflectInterfaceFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectInterfaceFiltersInput`](sdk.md#akashareflectinterfacefiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectInterfaceFiltersInput`](sdk.md#akashareflectinterfacefiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectInterfaceFiltersInput`](sdk.md#akashareflectinterfacefiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectInterfaceObjectFilterInput`](sdk.md#akashareflectinterfaceobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1412

___

### AkashaReflectInterfaceObjectFilterInput

 **AkashaReflectInterfaceObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `reflection?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1418

___

### AkashaReflectInterfaceSortingInput

 **AkashaReflectInterfaceSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `reflection?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1426

___

### AkashaReflectObjectFilterInput

 **AkashaReflectObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `reflection?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1434

___

### AkashaReflectSortingInput

 **AkashaReflectSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `reflection?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1442

___

### AkashaReflectStreamFiltersInput

 **AkashaReflectStreamFiltersInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `and?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamFiltersInput`](sdk.md#akashareflectstreamfiltersinput)[]\> |
| `not?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamFiltersInput`](sdk.md#akashareflectstreamfiltersinput)\> |
| `or?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamFiltersInput`](sdk.md#akashareflectstreamfiltersinput)[]\> |
| `where?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamObjectFilterInput`](sdk.md#akashareflectstreamobjectfilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1477

___

### AkashaReflectStreamModerationStatusValueFilterInput

 **AkashaReflectStreamModerationStatusValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamModerationStatus`](../enums/sdk.AkashaReflectStreamModerationStatus.md)\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamModerationStatus`](../enums/sdk.AkashaReflectStreamModerationStatus.md)[]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamModerationStatus`](../enums/sdk.AkashaReflectStreamModerationStatus.md)\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamModerationStatus`](../enums/sdk.AkashaReflectStreamModerationStatus.md)[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1501

___

### AkashaReflectStreamObjectFilterInput

 **AkashaReflectStreamObjectFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`BooleanValueFilterInput`](sdk.md#booleanvaluefilterinput)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `reflectionID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `replyTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`StringValueFilterInput`](sdk.md#stringvaluefilterinput)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaReflectStreamModerationStatusValueFilterInput`](sdk.md#akashareflectstreammoderationstatusvaluefilterinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1508

___

### AkashaReflectStreamSortingInput

 **AkashaReflectStreamSortingInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `beamID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `createdAt?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `isReply?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `moderationID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `reflectionID?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `replyTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |
| `status?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SortOrder`](../enums/sdk.SortOrder.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1518

___

### AppImageSourceInput

 **AppImageSourceInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Int"``][``"input"``]\> |
| `src` | [`Scalars`](sdk.md#scalars)[``"URI"``][``"input"``] |
| `width?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Int"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1533

___

### AppLinkSourceInput

 **AppLinkSourceInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `href` | [`Scalars`](sdk.md#scalars)[``"URI"``][``"input"``] |
| `label?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1542

___

### AppProviderValueInput

 **AppProviderValueInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `property` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `provider` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1551

___

### BeamBlockRecordInput

 **BeamBlockRecordInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockID` | [`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``] |
| `order` | [`Scalars`](sdk.md#scalars)[``"Int"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1560

___

### BeamEmbeddedTypeInput

 **BeamEmbeddedTypeInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `embeddedID` | [`Scalars`](sdk.md#scalars)[``"CeramicStreamID"``][``"input"``] |
| `label` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1568

___

### BeamLabeledInput

 **BeamLabeledInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `labelType` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1576

___

### BlockLabeledValueInput

 **BlockLabeledValueInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `propertyType` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1585

___

### BooleanValueFilterInput

 **BooleanValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1590

___

### CacaoHeader

 **CacaoHeader**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `t` | [`Scalars`](sdk.md#scalars)[``"CacaoHeaderT"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1599

___

### CacaoPayload

 **CacaoPayload**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aud` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `domain` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `exp?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `iat` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `iss` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `nbf?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `nonce` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `requestId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `resources?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\>[]\> |
| `statement?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `version` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1602

___

### CacaoSignature

 **CacaoSignature**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `s` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `t` | [`Scalars`](sdk.md#scalars)[``"CacaoSignatureT"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1615

___

### Cacao\_Capability

 **Cacao\_Capability**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `h` | [`CacaoHeader`](sdk.md#cacaoheader) |
| `p` | [`CacaoPayload`](sdk.md#cacaopayload) |
| `s?` | [`InputMaybe`](sdk.md#inputmaybe)<[`CacaoSignature`](sdk.md#cacaosignature)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1594

___

### CreateAkashaBeamInput

 **CreateAkashaBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaBeamInput`](sdk.md#akashabeaminput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`CreateOptionsInput`](sdk.md#createoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1965

___

### CreateAkashaContentBlockInput

 **CreateAkashaContentBlockInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaContentBlockInput`](sdk.md#akashacontentblockinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`CreateOptionsInput`](sdk.md#createoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1981

___

### CreateAkashaProfileInput

 **CreateAkashaProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaProfileInput`](sdk.md#akashaprofileinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SetOptionsInput`](sdk.md#setoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1997

___

### CreateAkashaProfileInterestsInput

 **CreateAkashaProfileInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaProfileInterestsInput`](sdk.md#akashaprofileinterestsinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SetOptionsInput`](sdk.md#setoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2002

___

### CreateAkashaReflectInput

 **CreateAkashaReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaReflectInput`](sdk.md#akashareflectinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`CreateOptionsInput`](sdk.md#createoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2029

___

### CreateAppMutation

 **CreateAppMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setAkashaApp?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:2646

___

### CreateBeamMutation

 **CreateBeamMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAkashaBeam?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `blockID`: `any` ; `order`: `number`  }[] ; `createdAt`: `any` ; `embeddedStream?`: { `embeddedID`: `any` ; `label`: `string`  } \| ``null`` ; `id`: `string` ; `nsfw?`: `boolean` \| ``null`` ; `reflections`: { `edges?`: ({ `cursor`: `string`  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `reflectionsCount`: `number` ; `tags?`: ({ `labelType`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:96

___

### CreateContentBlockMutation

 **CreateContentBlockMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAkashaContentBlock?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `appVersion?`: { `application?`: { `displayName`: `string` ; `id`: `string` ; `name`: `string`  } \| ``null`` ; `applicationID`: `any` ; `id`: `string` ; `version`: `string`  } \| ``null`` ; `appVersionID`: `any` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `kind?`: [`AkashaContentBlockBlockDef`](../enums/sdk.AkashaContentBlockBlockDef.md) \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:182

___

### CreateFollowMutation

 **CreateFollowMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setAkashaFollow?` | { `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1253

___

### CreateInterestsMutation

 **CreateInterestsMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAkashaProfileInterests?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1217

___

### CreateOptionsInput

 **CreateOptionsInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldIndex?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> | Inform indexers if they should index this document or not |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2045

___

### CreateProfileMutation

 **CreateProfileMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAkashaProfile?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1107

___

### CreateReflectMutation

 **CreateReflectMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAkashaReflect?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `beam?`: { `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `isReply?`: `boolean` \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflection?`: `any` \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:744

___

### Did\_Jws

 **Did\_Jws**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `payload` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `signatures` | [`Jws_Signature`](sdk.md#jws_signature)[] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2049

___

### Exact

 **Exact**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3

___

### GetAppReleaseByIdQuery

 **GetAppReleaseByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `application?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null`` ; `applicationID`: `any` ; `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3902

___

### GetAppsByIdQuery

 **GetAppsByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3336

___

### GetAppsByPublisherDidQuery

 **GetAppsByPublisherDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaAppList?`: { `edges?`: ({ `node?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null``  } \| ``null``)[] \| ``null``  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3470

___

### GetAppsQuery

 **GetAppsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `akashaAppIndex?` | { `edges?`: ({ `cursor`: `string` ; `node?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3166

___

### GetAppsReleasesByPublisherDidQuery

 **GetAppsReleasesByPublisherDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaAppReleaseList?`: { `edges?`: ({ `node?`: { `application?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null`` ; `applicationID`: `any` ; `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3610

___

### GetAppsReleasesQuery

 **GetAppsReleasesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `akashaAppReleaseIndex?` | { `edges?`: ({ `cursor`: `string` ; `node?`: { `application?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null`` ; `applicationID`: `any` ; `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3756

___

### GetAppsStreamQuery

 **GetAppsStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaAppsStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `applicationID`: `any` ; `createdAt`: `any` ; `moderationID?`: `any` \| ``null`` ; `status?`: [`AkashaAppsStreamModerationStatus`](../enums/sdk.AkashaAppsStreamModerationStatus.md) \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:3311

___

### GetBeamByIdQuery

 **GetBeamByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `blockID`: `any` ; `order`: `number`  }[] ; `createdAt`: `any` ; `embeddedStream?`: { `embeddedID`: `any` ; `label`: `string`  } \| ``null`` ; `id`: `string` ; `mentions?`: ({ `id`: `string`  } \| ``null``)[] \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflections`: { `edges?`: ({ `cursor`: `string`  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `reflectionsCount`: `number` ; `tags?`: ({ `labelType`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `version`: `any`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:510

___

### GetBeamStreamQuery

 **GetBeamStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaBeamStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `beamID`: `any` ; `createdAt`: `any` ; `moderationID?`: `any` \| ``null`` ; `status?`: [`AkashaBeamStreamModerationStatus`](../enums/sdk.AkashaBeamStreamModerationStatus.md) \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:361

___

### GetBeamsByAuthorDidQuery

 **GetBeamsByAuthorDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaBeamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `blockID`: `any` ; `order`: `number`  }[] ; `createdAt`: `any` ; `embeddedStream?`: { `embeddedID`: `any` ; `label`: `string`  } \| ``null`` ; `id`: `string` ; `mentions?`: ({ `id`: `string`  } \| ``null``)[] \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflections`: { `edges?`: ({ `cursor`: `string`  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `reflectionsCount`: `number` ; `tags?`: ({ `labelType`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `akashaBeamListCount`: `number` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:452

___

### GetBeamsQuery

 **GetBeamsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `akashaBeamIndex?` | { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `blockID`: `any` ; `order`: `number`  }[] ; `createdAt`: `any` ; `embeddedStream?`: { `embeddedID`: `any` ; `label`: `string`  } \| ``null`` ; `id`: `string` ; `mentions?`: ({ `id`: `string`  } \| ``null``)[] \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflections`: { `edges?`: ({ `cursor`: `string`  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `reflectionsCount`: `number` ; `tags?`: ({ `labelType`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:392

___

### GetBlockStorageByIdQuery

 **GetBlockStorageByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `active`: `boolean` ; `appVersion?`: { `application?`: { `displayName`: `string` ; `id`: `string` ; `name`: `string`  } \| ``null`` ; `applicationID`: `any` ; `id`: `string` ; `version`: `string`  } \| ``null`` ; `appVersionID`: `any` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `block?`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `blockID`: `any` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `version`: `any`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:619

___

### GetContentBlockByIdQuery

 **GetContentBlockByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `active`: `boolean` ; `appVersion?`: { `application?`: { `displayName`: `string` ; `id`: `string` ; `name`: `string`  } \| ``null`` ; `applicationID`: `any` ; `id`: `string` ; `version`: `string`  } \| ``null`` ; `appVersionID`: `any` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `kind?`: [`AkashaContentBlockBlockDef`](../enums/sdk.AkashaContentBlockBlockDef.md) \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `version`: `any`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:586

___

### GetContentBlockStreamQuery

 **GetContentBlockStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaContentBlockStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `blockID`: `any` ; `createdAt`: `any` ; `moderationID?`: `any` \| ``null`` ; `status?`: [`AkashaContentBlockStreamModerationStatus`](../enums/sdk.AkashaContentBlockStreamModerationStatus.md) \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `akashaContentBlockStreamListCount`: `number` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:559

___

### GetFollowDocumentsByDidQuery

 **GetFollowDocumentsByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaFollowList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `profileID`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1435

___

### GetFollowersListByDidQuery

 **GetFollowersListByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaProfile?`: { `followers`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `did`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null``  } ; `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `profileID`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1936

___

### GetFollowingListByDidQuery

 **GetFollowingListByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaFollowList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `did`: { `id`: `string`  } ; `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `profileID`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1857

___

### GetIndexedStreamCountQuery

 **GetIndexedStreamCountQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaIndexedStreamListCount`: `number` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:696

___

### GetIndexedStreamQuery

 **GetIndexedStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaIndexedStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `createdAt`: `any` ; `indexType`: `string` ; `indexValue`: `string` ; `moderationID?`: `any` \| ``null`` ; `status?`: [`AkashaIndexedStreamModerationStatus`](../enums/sdk.AkashaIndexedStreamModerationStatus.md) \| ``null`` ; `stream`: `any` ; `streamType?`: [`AkashaIndexedStreamStreamType`](../enums/sdk.AkashaIndexedStreamStreamType.md) \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `akashaIndexedStreamListCount`: `number` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:665

___

### GetInterestsByDidQuery

 **GetInterestsByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaProfileInterests?`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1819

___

### GetInterestsByIdQuery

 **GetInterestsByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1837

___

### GetInterestsQuery

 **GetInterestsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `akashaProfileInterestsIndex?` | { `edges?`: ({ `cursor`: `string` ; `node?`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1762

___

### GetInterestsStreamQuery

 **GetInterestsStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaInterestsStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `createdAt`: `any` ; `id`: `string` ; `labelType`: `string` ; `value`: `string`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1794

___

### GetMyProfileQuery

 **GetMyProfileQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `viewer?` | { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null``  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1375

___

### GetProfileByDidQuery

 **GetProfileByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1605

___

### GetProfileByIdQuery

 **GetProfileByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1553

___

### GetProfileStatsByDidQuery

 **GetProfileStatsByDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaBeamListCount`: `number` ; `akashaFollowListCount`: `number` ; `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `followersCount`: `number` ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `akashaReflectListCount`: `number` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:2058

___

### GetProfileStreamQuery

 **GetProfileStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaProfileStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `createdAt`: `any` ; `moderationID?`: `any` \| ``null`` ; `profileID`: `any` ; `status?`: [`AkashaProfileStreamModerationStatus`](../enums/sdk.AkashaProfileStreamModerationStatus.md) \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null``  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1734

___

### GetProfilesQuery

 **GetProfilesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `akashaProfileIndex?` | { `edges?`: ({ `cursor`: `string` ; `node?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1665

___

### GetReflectReflectionsQuery

 **GetReflectReflectionsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `akashaReflectIndex?` | { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `beam?`: { `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `isReply?`: `boolean` \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflection?`: `any` \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1005

___

### GetReflectionByIdQuery

 **GetReflectionByIdQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `beam?`: { `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `isReply?`: `boolean` \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflection?`: `any` \| ``null`` ; `version`: `any`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:970

___

### GetReflectionStreamQuery

 **GetReflectionStreamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaReflectStreamList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `beamID`: `any` ; `createdAt`: `any` ; `isReply?`: `boolean` \| ``null`` ; `moderationID?`: `any` \| ``null`` ; `reflectionID`: `any` ; `replyTo?`: `any` \| ``null`` ; `status?`: [`AkashaReflectStreamModerationStatus`](../enums/sdk.AkashaReflectStreamModerationStatus.md) \| ``null``  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:941

___

### GetReflectionsByAuthorDidQuery

 **GetReflectionsByAuthorDidQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `akashaReflectList?`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `beam?`: { `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `isReply?`: `boolean` \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflection?`: `any` \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } \| ``null`` ; `isViewer`: `boolean`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:891

___

### GetReflectionsFromBeamQuery

 **GetReflectionsFromBeamQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node?` | { `reflections`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `beam?`: { `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `isReply?`: `boolean` \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflection?`: `any` \| ``null`` ; `version`: `any`  } \| ``null``  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `reflectionsCount`: `number`  } \| {} \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:841

___

### IndexBeamMutation

 **IndexBeamMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexBeam?` | { `document?`: { `beamID`: `string`  } \| ``null``  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:12

___

### IndexContentBlockMutation

 **IndexContentBlockMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexContentBlock?` | { `document?`: { `blockID`: `string`  } \| ``null``  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:23

___

### IndexProfileMutation

 **IndexProfileMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexProfile?` | { `document?`: { `profileID`: `string`  } \| ``null``  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1050

___

### IndexReflectionMutation

 **IndexReflectionMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexReflection?` | { `document?`: { `reflectionID`: `string`  } \| ``null``  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:709

___

### InputMaybe

 **InputMaybe**<`T`\>: [`Maybe`](sdk.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2

___

### Jws\_Signature

 **Jws\_Signature**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `protected` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `signature` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2346

___

### Maybe

 **Maybe**<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:1

___

### PartialAkashaAppInput

 **PartialAkashaAppInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `applicationType?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md)\> |
| `contributors?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"DID"``][``"input"``]\>[]\> |
| `coverImage?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AppImageSourceInput`](sdk.md#appimagesourceinput)\> |
| `description?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `gallery?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppImageSourceInput`](sdk.md#appimagesourceinput)\>[]\> |
| `links?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppLinkSourceInput`](sdk.md#applinksourceinput)\>[]\> |
| `logoImage?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AppImageSourceInput`](sdk.md#appimagesourceinput)\> |
| `meta?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppProviderValueInput`](sdk.md#appprovidervalueinput)\>[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2600

___

### PartialAkashaAppReleaseInput

 **PartialAkashaAppReleaseInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`AppProviderValueInput`](sdk.md#appprovidervalueinput)\>[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2610

___

### PartialAkashaBeamInput

 **PartialAkashaBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2617

___

### PartialAkashaContentBlockInput

 **PartialAkashaContentBlockInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `kind?` | [`InputMaybe`](sdk.md#inputmaybe)<[`AkashaContentBlockBlockDef`](../enums/sdk.AkashaContentBlockBlockDef.md)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2629

___

### PartialAkashaFollowInput

 **PartialAkashaFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFollowing?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2637

___

### PartialAkashaProfileInput

 **PartialAkashaProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avatar?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `background?` | [`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageVersionsInput`](sdk.md#profileimageversionsinput)\> |
| `description?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `links?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileLinkSourceInput`](sdk.md#profilelinksourceinput)\>[]\> |
| `name?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2649

___

### PartialAkashaProfileInterestsInput

 **PartialAkashaProfileInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `topics?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileLabeledInput`](sdk.md#profilelabeledinput)\>[]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2657

___

### PartialAkashaReflectInput

 **PartialAkashaReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `nsfw?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2664

___

### ProfileImageSourceInput

 **ProfileImageSourceInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | [`Scalars`](sdk.md#scalars)[``"Int"``][``"input"``] |
| `src` | [`Scalars`](sdk.md#scalars)[``"URI"``][``"input"``] |
| `width` | [`Scalars`](sdk.md#scalars)[``"Int"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2680

___

### ProfileImageVersionsInput

 **ProfileImageVersionsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alternatives?` | [`InputMaybe`](sdk.md#inputmaybe)<[`InputMaybe`](sdk.md#inputmaybe)<[`ProfileImageSourceInput`](sdk.md#profileimagesourceinput)\>[]\> |
| `default` | [`ProfileImageSourceInput`](sdk.md#profileimagesourceinput) |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2689

___

### ProfileLabeledInput

 **ProfileLabeledInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `labelType` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2697

___

### ProfileLinkSourceInput

 **ProfileLinkSourceInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `href` | [`Scalars`](sdk.md#scalars)[``"URI"``][``"input"``] |
| `label?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:2705

___

### ReflectProviderValueInput

 **ReflectProviderValueInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `propertyType` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |
| `value` | [`Scalars`](sdk.md#scalars)[``"String"``][``"input"``] |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3044

___

### Scalars

 **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Boolean` | { `input`: `boolean` ; `output`: `boolean`  } | - |
| `Boolean.input` | `boolean` | - |
| `Boolean.output` | `boolean` | - |
| `CacaoHeaderT` | { `input`: `any` ; `output`: `any`  } | - |
| `CacaoHeaderT.input` | `any` | - |
| `CacaoHeaderT.output` | `any` | - |
| `CacaoSignatureT` | { `input`: `any` ; `output`: `any`  } | - |
| `CacaoSignatureT.input` | `any` | - |
| `CacaoSignatureT.output` | `any` | - |
| `CeramicCommitID` | { `input`: `any` ; `output`: `any`  } | A Ceramic Commit ID |
| `CeramicCommitID.input` | `any` | - |
| `CeramicCommitID.output` | `any` | - |
| `CeramicStreamID` | { `input`: `any` ; `output`: `any`  } | A Ceramic Stream ID |
| `CeramicStreamID.input` | `any` | - |
| `CeramicStreamID.output` | `any` | - |
| `DID` | { `input`: `any` ; `output`: `any`  } | A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. |
| `DID.input` | `any` | - |
| `DID.output` | `any` | - |
| `DateTime` | { `input`: `any` ; `output`: `any`  } | A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. |
| `DateTime.input` | `any` | - |
| `DateTime.output` | `any` | - |
| `Float` | { `input`: `number` ; `output`: `number`  } | - |
| `Float.input` | `number` | - |
| `Float.output` | `number` | - |
| `ID` | { `input`: `string` ; `output`: `string`  } | - |
| `ID.input` | `string` | - |
| `ID.output` | `string` | - |
| `Int` | { `input`: `number` ; `output`: `number`  } | - |
| `Int.input` | `number` | - |
| `Int.output` | `number` | - |
| `String` | { `input`: `string` ; `output`: `string`  } | - |
| `String.input` | `string` | - |
| `String.output` | `string` | - |
| `URI` | { `input`: `any` ; `output`: `any`  } | A field whose value conforms to the standard Uniform Resource Identifier (URI) format as specified in RFC3986. |
| `URI.input` | `any` | - |
| `URI.output` | `any` | - |
| `_FieldSet` | { `input`: `any` ; `output`: `any`  } | - |
| `_FieldSet.input` | `any` | - |
| `_FieldSet.output` | `any` | - |
| `join__FieldSet` | { `input`: `any` ; `output`: `any`  } | - |
| `join__FieldSet.input` | `any` | - |
| `join__FieldSet.output` | `any` | - |
| `link__Import` | { `input`: `any` ; `output`: `any`  } | - |
| `link__Import.input` | `any` | - |
| `link__Import.output` | `any` | - |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:23

___

### SetAkashaAppInput

 **SetAkashaAppInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaAppInput`](sdk.md#akashaappinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SetOptionsInput`](sdk.md#setoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3049

___

### SetAkashaAppReleaseInput

 **SetAkashaAppReleaseInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaAppReleaseInput`](sdk.md#akashaappreleaseinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SetOptionsInput`](sdk.md#setoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3065

___

### SetAkashaFollowInput

 **SetAkashaFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`AkashaFollowInput`](sdk.md#akashafollowinput) |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`SetOptionsInput`](sdk.md#setoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3145

___

### SetAppReleaseMutation

 **SetAppReleaseMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setAkashaAppRelease?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `application?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null`` ; `applicationID`: `any` ; `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:2370

___

### SetOptionsInput

 **SetOptionsInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldIndex?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> | Inform indexers if they should index this document or not |
| `syncTimeout?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Int"``][``"input"``]\> | Maximum amount of time to lookup the stream over the network, in seconds - see https://developers.ceramic.network/reference/typescript/interfaces/_ceramicnetwork_common.CreateOpts.html#syncTimeoutSeconds |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3257

___

### StringValueFilterInput

 **StringValueFilterInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `equalTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `greaterThan?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `greaterThanOrEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `in?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``][]\> |
| `isNull?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> |
| `lessThan?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `lessThanOrEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `notEqualTo?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `notIn?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``][]\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3267

___

### UpdateAkashaAppInput

 **UpdateAkashaAppInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaAppInput`](sdk.md#partialakashaappinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3278

___

### UpdateAkashaAppReleaseInput

 **UpdateAkashaAppReleaseInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaAppReleaseInput`](sdk.md#partialakashaappreleaseinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3295

___

### UpdateAkashaBeamInput

 **UpdateAkashaBeamInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaBeamInput`](sdk.md#partialakashabeaminput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3329

___

### UpdateAkashaContentBlockInput

 **UpdateAkashaContentBlockInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaContentBlockInput`](sdk.md#partialakashacontentblockinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3380

___

### UpdateAkashaFollowInput

 **UpdateAkashaFollowInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaFollowInput`](sdk.md#partialakashafollowinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3414

___

### UpdateAkashaProfileInput

 **UpdateAkashaProfileInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaProfileInput`](sdk.md#partialakashaprofileinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3465

___

### UpdateAkashaProfileInterestsInput

 **UpdateAkashaProfileInterestsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaProfileInterestsInput`](sdk.md#partialakashaprofileinterestsinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3471

___

### UpdateAkashaReflectInput

 **UpdateAkashaReflectInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientMutationId?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"String"``][``"input"``]\> |
| `content` | [`PartialAkashaReflectInput`](sdk.md#partialakashareflectinput) |
| `id` | [`Scalars`](sdk.md#scalars)[``"ID"``][``"input"``] |
| `options?` | [`InputMaybe`](sdk.md#inputmaybe)<[`UpdateOptionsInput`](sdk.md#updateoptionsinput)\> |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3516

___

### UpdateAkashaReflectMutation

 **UpdateAkashaReflectMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaReflect?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `beam?`: { `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `id`: `string`  } \| ``null`` ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `isReply?`: `boolean` \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `reflection?`: `any` \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:777

___

### UpdateAppMutation

 **UpdateAppMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaApp?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:2777

___

### UpdateAppReleaseMutation

 **UpdateAppReleaseMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaAppRelease?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `application?`: { `applicationType?`: [`AkashaAppApplicationType`](../enums/sdk.AkashaAppApplicationType.md) \| ``null`` ; `author`: { `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } ; `contributors?`: ({ `akashaProfile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null`` ; `id`: `string` ; `isViewer`: `boolean`  } \| ``null``)[] \| ``null`` ; `description`: `string` ; `displayName`: `string` ; `id`: `string` ; `keywords?`: (`string` \| ``null``)[] \| ``null`` ; `license`: `string` ; `name`: `string` ; `releases`: { `edges?`: ({ `cursor`: `string` ; `node?`: { `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  } \| ``null``  } \| ``null``)[] \| ``null``  } ; `releasesCount`: `number`  } \| ``null`` ; `applicationID`: `any` ; `createdAt`: `any` ; `id`: `string` ; `source`: `any` ; `version`: `string`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:2508

___

### UpdateBeamMutation

 **UpdateBeamMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaBeam?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `blockID`: `any` ; `order`: `number`  }[] ; `createdAt`: `any` ; `embeddedStream?`: { `embeddedID`: `any` ; `label`: `string`  } \| ``null`` ; `id`: `string` ; `nsfw?`: `boolean` \| ``null`` ; `reflections`: { `edges?`: ({ `cursor`: `string`  } \| ``null``)[] \| ``null`` ; `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `reflectionsCount`: `number` ; `tags?`: ({ `labelType`: `string` ; `value`: `string`  } \| ``null``)[] \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:139

___

### UpdateContentBlockMutation

 **UpdateContentBlockMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaContentBlock?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `active`: `boolean` ; `appVersion?`: { `application?`: { `displayName`: `string` ; `id`: `string` ; `name`: `string`  } \| ``null`` ; `applicationID`: `any` ; `id`: `string` ; `version`: `string`  } \| ``null`` ; `appVersionID`: `any` ; `author`: { `id`: `string` ; `isViewer`: `boolean`  } ; `content`: { `label`: `string` ; `propertyType`: `string` ; `value`: `string`  }[] ; `createdAt`: `any` ; `id`: `string` ; `kind?`: [`AkashaContentBlockBlockDef`](../enums/sdk.AkashaContentBlockBlockDef.md) \| ``null`` ; `nsfw?`: `boolean` \| ``null`` ; `version`: `any`  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:218

___

### UpdateFollowMutation

 **UpdateFollowMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaFollow?` | { `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `isFollowing`: `boolean` ; `profile?`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  } \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1314

___

### UpdateInterestsMutation

 **UpdateInterestsMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaProfileInterests?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `did`: { `id`: `string`  } ; `id`: `string` ; `topics`: { `labelType`: `string` ; `value`: `string`  }[]  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1235

___

### UpdateOptionsInput

 **UpdateOptionsInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `replace?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> | Fully replace the document contents instead of performing a shallow merge |
| `shouldIndex?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"Boolean"``][``"input"``]\> | Inform indexers if they should index this document or not |
| `version?` | [`InputMaybe`](sdk.md#inputmaybe)<[`Scalars`](sdk.md#scalars)[``"CeramicCommitID"``][``"input"``]\> | Only perform mutation if the document matches the provided version |

#### Defined in

typings/lib/sdk/graphql-types-new.d.ts:3550

___

### UpdateProfileMutation

 **UpdateProfileMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `updateAkashaProfile?` | { `clientMutationId?`: `string` \| ``null`` ; `document`: { `avatar?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `background?`: { `alternatives?`: ({ `height`: `number` ; `src`: `any` ; `width`: `number`  } \| ``null``)[] \| ``null`` ; `default`: { `height`: `number` ; `src`: `any` ; `width`: `number`  }  } \| ``null`` ; `createdAt`: `any` ; `description?`: `string` \| ``null`` ; `did`: { `id`: `string` ; `isViewer`: `boolean`  } ; `followers`: { `pageInfo`: { `endCursor?`: `string` \| ``null`` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: `string` \| ``null``  }  } ; `id`: `string` ; `links?`: ({ `href`: `any` ; `label?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `name`: `string` ; `nsfw?`: `boolean` \| ``null``  }  } \| ``null`` |

#### Defined in

typings/lib/sdk/graphql-operation-types-new.d.ts:1162

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
- [GQL\_EVENTS](../enums/typings.GQL_EVENTS.md)
- [INJECTED\_PROVIDERS](../enums/typings.INJECTED_PROVIDERS.md)
- [LEGAL\_DOCS](../enums/typings.LEGAL_DOCS.md)
- [PROFILE\_EVENTS](../enums/typings.PROFILE_EVENTS.md)
- [PROVIDER\_ERROR\_CODES](../enums/typings.PROVIDER_ERROR_CODES.md)
- [PostType](../enums/typings.PostType.md)
- [TAG\_EVENTS](../enums/typings.TAG_EVENTS.md)
- [WEB3\_EVENTS](../enums/typings.WEB3_EVENTS.md)

## Interfaces

- [IDBService](../interfaces/typings.IDBService.md)
- [IGqlClient](../interfaces/typings.IGqlClient.md)
- [LinkPreview\_Response](../interfaces/typings.LinkPreview_Response.md)
- [VideoPreview\_Response](../interfaces/typings.VideoPreview_Response.md)

## Type Aliases

### AWF\_APP\_BUILD\_MANIFEST

 **AWF\_APP\_BUILD\_MANIFEST**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `links?` | `z.infer`<typeof [`IntegrationInfoLinksSchema`](typings.md#integrationinfolinksschema)\> |
| `sources` | `string`[] |

#### Defined in

typings/lib/sdk/registry.d.ts:22

___

### CurrentUser

 **CurrentUser**: `z.infer`<typeof [`CurrentUserSchema`](typings.md#currentuserschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:42

___

### DataProviderInput

 **DataProviderInput**: `z.infer`<typeof [`DataProviderInputSchema`](typings.md#dataproviderinputschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:26

___

### Ens

 **Ens**: `z.infer`<typeof [`EnsSchema`](typings.md#ensschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:44

___

### EthAddress

 **EthAddress**: `z.infer`<typeof [`EthAddressSchema`](typings.md#ethaddressschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:4

___

### GlobalEventBusData

 **GlobalEventBusData**<`D`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `unknown` |
| `data` | `D` |
| `event` | [`AUTH_EVENTS`](../enums/typings.AUTH_EVENTS.md) \| [`APP_EVENTS`](../enums/typings.APP_EVENTS.md) \| [`COMMENTS_EVENTS`](../enums/typings.COMMENTS_EVENTS.md) \| [`ENS_EVENTS`](../enums/typings.ENS_EVENTS.md) \| [`ENTRY_EVENTS`](../enums/typings.ENTRY_EVENTS.md) \| [`PROFILE_EVENTS`](../enums/typings.PROFILE_EVENTS.md) \| [`TAG_EVENTS`](../enums/typings.TAG_EVENTS.md) \| [`WEB3_EVENTS`](../enums/typings.WEB3_EVENTS.md) \| [`GQL_EVENTS`](../enums/typings.GQL_EVENTS.md) |

#### Defined in

typings/lib/sdk/common.d.ts:27

___

### IntegrationId

 **IntegrationId**: `z.infer`<typeof [`IntegrationIdSchema`](typings.md#integrationidschema)\>

#### Defined in

typings/lib/sdk/registry.d.ts:3

___

### IntegrationName

 **IntegrationName**: `z.infer`<typeof [`IntegrationNameSchema`](typings.md#integrationnameschema)\>

#### Defined in

typings/lib/sdk/registry.d.ts:7

___

### IntegrationReleaseId

 **IntegrationReleaseId**: `z.infer`<typeof [`IntegrationReleaseIdSchema`](typings.md#integrationreleaseidschema)\>

#### Defined in

typings/lib/sdk/registry.d.ts:5

___

### InviteCode

 **InviteCode**: `z.infer`<typeof [`InviteCodeSchema`](typings.md#invitecodeschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:12

___

### PubKey

 **PubKey**: `z.infer`<typeof [`PubKeySchema`](typings.md#pubkeyschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:8

___

### ServiceCallResult

 **ServiceCallResult**<`T`\>: `Observable`<{ `data`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

typings/lib/sdk/responses.d.ts:2

___

### TagName

 **TagName**: `z.infer`<typeof [`TagNameSchema`](typings.md#tagnameschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:6

___

### Username

 **Username**: `z.infer`<typeof [`UsernameSchema`](typings.md#usernameschema)\>

#### Defined in

typings/lib/sdk/common.d.ts:10

## Variables

### CurrentUserSchema

 `Const` **CurrentUserSchema**: `z.ZodObject`<{ `ethAddress`: `z.ZodOptional`<`z.ZodString`\> ; `id`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `ethAddress?`: `string` ; `id?`: `string`  }, { `ethAddress?`: `string` ; `id?`: `string`  }\>

#### Defined in

typings/lib/sdk/common.d.ts:32

___

### DataProviderInputSchema

 `Const` **DataProviderInputSchema**: `z.ZodObject`<{ `property`: `z.ZodString` ; `provider`: `z.ZodString` ; `value`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `property?`: `string` ; `provider?`: `string` ; `value?`: `string`  }, { `property?`: `string` ; `provider?`: `string` ; `value?`: `string`  }\>

#### Defined in

typings/lib/sdk/common.d.ts:13

___

### EnsSchema

 `Const` **EnsSchema**: `z.ZodEffects`<`z.ZodString`, `string`, `string`\>

#### Defined in

typings/lib/sdk/common.d.ts:43

___

### EthAddressSchema

 `Const` **EthAddressSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/common.d.ts:3

___

### EthProvidersSchema

 `Const` **EthProvidersSchema**: `z.ZodNativeEnum`<typeof [`EthProviders`](../enums/typings.EthProviders.md)\>

#### Defined in

typings/lib/sdk/web3.connector.d.ts:9

___

### IntegrationIdSchema

 `Const` **IntegrationIdSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/registry.d.ts:2

___

### IntegrationInfoLinksSchema

 `Const` **IntegrationInfoLinksSchema**: `z.ZodObject`<{ `detailedDescription`: `z.ZodOptional`<`z.ZodString`\> ; `documentation`: `z.ZodOptional`<`z.ZodString`\> ; `publicRepository`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `detailedDescription?`: `string` ; `documentation?`: `string` ; `publicRepository?`: `string`  }, { `detailedDescription?`: `string` ; `documentation?`: `string` ; `publicRepository?`: `string`  }\>

#### Defined in

typings/lib/sdk/registry.d.ts:9

___

### IntegrationNameSchema

 `Const` **IntegrationNameSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/registry.d.ts:6

___

### IntegrationReleaseIdSchema

 `Const` **IntegrationReleaseIdSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/registry.d.ts:4

___

### IntegrationTypeSchema

 `Const` **IntegrationTypeSchema**: `z.ZodNumber`

#### Defined in

typings/lib/sdk/registry.d.ts:8

___

### InviteCodeSchema

 `Const` **InviteCodeSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/common.d.ts:11

___

### LegalDocsSchema

 `Const` **LegalDocsSchema**: `z.ZodNativeEnum`<typeof [`LEGAL_DOCS`](../enums/typings.LEGAL_DOCS.md)\>

#### Defined in

typings/lib/sdk/common.d.ts:52

___

### PubKeySchema

 `Const` **PubKeySchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/common.d.ts:7

___

### TYPES

 `Const` **TYPES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AppSettings` | `symbol` |
| `Auth` | `symbol` |
| `Ceramic` | `symbol` |
| `Comment` | `symbol` |
| `Config` | `symbol` |
| `Db` | `symbol` |
| `ENS` | `symbol` |
| `Entry` | `symbol` |
| `EventBus` | `symbol` |
| `Gql` | `symbol` |
| `ICRegistry` | `symbol` |
| `IPFS` | `symbol` |
| `Lit` | `symbol` |
| `Log` | `symbol` |
| `Misc` | `symbol` |
| `Profile` | `symbol` |
| `ScrollState` | `symbol` |
| `Settings` | `symbol` |
| `Stash` | `symbol` |
| `Tag` | `symbol` |
| `Web3` | `symbol` |

#### Defined in

typings/lib/sdk/index.d.ts:10

___

### TagNameSchema

 `Const` **TagNameSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/common.d.ts:5

___

### UsernameSchema

 `Const` **UsernameSchema**: `z.ZodString`

#### Defined in

typings/lib/sdk/common.d.ts:9

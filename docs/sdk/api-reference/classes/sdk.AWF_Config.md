---
id: "sdk.AWF_Config"
title: "Class: AWF_Config"
sidebar_label: "AWF_Config"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).AWF_Config

## Constructors

### constructor

**new AWF_Config**()

#### Defined in

[sdk/src/common/config.ts:20](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/config.ts#L20)

## Methods

### getOption

**getOption**(`key`): `string`

Get a config value.

**`Example`**

```
const config = new Config();
const ceramicEndpoint = config.get('ceramic_api_endpoint');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | ``"ceramic_api_endpoint"`` \| ``"graphql_uri"`` \| ``"indexing_did"`` \| ``"w3_storage_delegate_base_url"`` \| ``"ipfs_path_gateway"`` \| ``"ipfs_origin_gateway"`` \| ``"ipfs_fallback_gateway"`` \| ``"wallet_connect_project_id"`` \| ``"log_level"`` \| ``"api_status_path"`` | Config key |

#### Returns

`string`

Config value

#### Defined in

[sdk/src/common/config.ts:63](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/config.ts#L63)

___

### setOption

**setOption**(`key`, `value`): `void`

Set a config value.

**`Example`**

```
const config = new Config();
config.setOption('log_level', 'debug');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | ``"ceramic_api_endpoint"`` \| ``"graphql_uri"`` \| ``"indexing_did"`` \| ``"w3_storage_delegate_base_url"`` \| ``"ipfs_path_gateway"`` \| ``"ipfs_origin_gateway"`` \| ``"ipfs_fallback_gateway"`` \| ``"wallet_connect_project_id"`` \| ``"log_level"`` \| ``"api_status_path"`` | Config key |
| `value` | `string` | New config value |

#### Returns

`void`

#### Defined in

[sdk/src/common/config.ts:47](https://github.com/AKASHAorg/akasha-core/blob/21e566cd/libs/sdk/src/common/config.ts#L47)

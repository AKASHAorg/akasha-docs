---
id: "sdk.Logging"
title: "Class: Logging"
sidebar_label: "Logging"
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

[sdk](../modules/sdk.md).Logging

## Constructors

### constructor

**new Logging**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AWF_Config`](sdk.AWF_Config.md) |

#### Defined in

[sdk/src/logging/index.ts:15](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/logging/index.ts#L15)

## Methods

### create

**create**(`nameSpace?`): `Logger`<`LoggerOptions` & `ChildLoggerOptions`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSpace?` | `string` | Logger name attribute |

#### Returns

`Logger`<`LoggerOptions` & `ChildLoggerOptions`\>

ILogger

#### Defined in

[sdk/src/logging/index.ts:28](https://github.com/AKASHAorg/akasha-core/blob/6ca157f7/libs/sdk/src/logging/index.ts#L28)

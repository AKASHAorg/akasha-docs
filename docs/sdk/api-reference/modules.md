---
id: "modules"
title: "AKASHA SDK Reference"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
pagination_prev: null
pagination_next: null
hide_title: true
description: "Test Description"
---

AKASHA SDK is a modular set of utilities and apis that can be used to build
your own app.

## Namespaces

- [sdk](namespaces/sdk.md)
- [typings](namespaces/typings.md)

## Interfaces

- [AWF_SDK](interfaces/AWF_SDK.md)
- [SDK_API](interfaces/SDK_API.md)
- [SDK_Services](interfaces/SDK_Services.md)

## Functions

### default

**default**(): [`AWF_SDK`](interfaces/AWF_SDK.md)

Creates a new SDK instance or returns a previusly created one.

**`example`**

```ts
import getSDK from "@akashaorg/awf-sdk";
const sdk = getSDK();
```

#### Returns

[`AWF_SDK`](interfaces/AWF_SDK.md)

#### Defined in

[sdk/src/index.ts:68](https://github.com/AKASHAorg/akasha-core/blob/d370b59a/sdk/src/index.ts#L68)

---

### init

**init**(): [`AWF_SDK`](interfaces/AWF_SDK.md)

Creates a new SDK instance.

**`example`**

```ts
import { init } from "@akashaorg/awf-sdk";
const sdk = init();
```

#### Returns

[`AWF_SDK`](interfaces/AWF_SDK.md)

#### Defined in

[sdk/src/index.ts:85](https://github.com/AKASHAorg/akasha-core/blob/d370b59a/sdk/src/index.ts#L85)

---
sidebar_position: 5
sidebar_label: Content block
title: Add a new Content Block to Devkit
---

This tutorial adds further explanation on how content blocks work, defines a content block from the Devkit and makes it available in the [unified editor](../../extensions/editor/index.md). A content block requires two modes collectively referred to as [Content Block Modes](../../extensions/editor/content_blocks.md#content-block-modes):

- EDIT mode used when the block is mounted on the editor
- READONLY mode used to render the block anywhere else that does not require editing

We are going to create a simple content block that allows us to generate a "Dad Joke" in the editor and add it to the beam content. It renders a button, which when clicked, fetches a joke from the [Dad Joke API](https://icanhazdadjoke.com/api).

:::info
The fully working implementation is available on the devkit's [examples/content-block](https://github.com/AKASHAorg/extension-devkit/tree/examples/content-block) branch.
:::

Before you proceed, be sure you have cloned and [set up the Devkit](../../devkit/setup.mdx) locally or on a DevContainer.

On your browser, open the unified editor from the Global antenna. Click on the `Add a block` button by the bottom left corner. You should see a page similar to the image below.

<img src="/img/blocklist.png"></img>

The tutorial is divided into 4 sections:

- [Edit Mode component](#edit-mode-component)
- [Readonly Mode component](#readonly-mode-component)
- [Content block level index file](#content-block-level-index-file)
- [Application level index file](#application-level-index-file)

## Edit Mode component

1. Create a new component in the Devkit's `src` folder. This will hold the logic for the edit mode block.

```bash title="run this from the root of the project"
cd src
mkdir extensions
cd extensions
mkdir dad-joke-block
cd dad-joke-block
touch dad-joke.tsx
```

2. Open this file in your code editor, then copy and paste the code snippet below. This is the basic component we shall build upon.

```tsx title="src/extensions/dad-joke-block/dad-joke.tsx"
import React from 'react';
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
} from '@akashaorg/typings/lib/ui';

export const DadJokeBlock = (
  props: ContentBlockRootProps & { blockRef?: React.RefObject<BlockInstanceMethods> },
) => {
    return ();
};
```

3. Next, let's start to define the logic in the component.

- Initialize state variables to hold the request status and the response from the API
- Initialize variables to hold mutation state, sdk instance and retryCount. In order to create a content block, we are using the [useCreateContentBlockMutation](../../data-fetching-and-mutations/hooks/apollo-hooks/#usecreatecontentblockmutation) hook. The `retryCount` variable holds number of retries (if any) initiated during the block creation process

```tsx title="src/extensions/dad-joke-block/dad-joke.tsx"
import React from 'react';
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
} from '@akashaorg/typings/lib/ui';
// diff-add-start
import {
  useCreateContentBlockMutation,
} from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import getSDK from '@akashaorg/core-sdk';
// diff-add-end

export const DadJokeBlock = (
  props: ContentBlockRootProps & { blockRef?: React.RefObject<BlockInstanceMethods> }
) => {
    // diff-add-start
    const [joke, setJoke] = React.useState<string | null>(null);
    const [requesting, setRequesting] = React.useState<boolean>(false);

    const [createContentBlock, contentBlockQuery] = useCreateContentBlockMutation();
    const sdk = React.useRef(getSDK());
    const retryCount = React.useRef<number>(0);
    // diff-add-end
    return ();
};
```

- Define a function to fetch a joke from the API and save to state

```tsx title="src/extensions/dad-joke-block/dad-joke.tsx"
import React from 'react';
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
} from '@akashaorg/typings/lib/ui';
import {
  useCreateContentBlockMutation,
} from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import getSDK from '@akashaorg/core-sdk';

export const DadJokeBlock = (
  props: ContentBlockRootProps & { blockRef?: React.RefObject<BlockInstanceMethods> }
) => {
    const [joke, setJoke] = React.useState<string | null>(null);
    const [requesting, setRequesting] = React.useState<boolean>(false);

    const [createContentBlock, contentBlockQuery] = useCreateContentBlockMutation();
    const sdk = React.useRef(getSDK());
    const retryCount = React.useRef<number>(0);

    // diff-add-start
    const fetchDadJoke = async () => {
        setRequesting(true);
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                    },
            });
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Error fetching joke:", error.message);
        } finally {
            setRequesting(false);
        }
    };
    // diff-add-end
    return ();
};
```

- Make a query call using [useGetAppsQuery](../../data-fetching-and-mutations/hooks/apollo-hooks/#usegetappsquery) to get the applications's release id. This which will be used in the block creation process. We can access the parent application name from the props passed into the component `props.blockInfo.appName`.

```tsx title="src/extensions/dad-joke-block/dad-joke.tsx"
import React from 'react';
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
} from '@akashaorg/typings/lib/ui';
// diff-remove-start
import {
  useCreateContentBlockMutation,
} from '@akashaorg/ui-core-hooks/lib/generated/apollo';
// diff-remove-end
import getSDK from '@akashaorg/core-sdk';
// diff-add-start
import {
  useCreateContentBlockMutation,
  useGetAppsQuery,
} from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import { selectLatestRelease } from '@akashaorg/ui-core-hooks/lib/selectors/get-apps-query';
// diff-add-end


export const DadJokeBlock = (
  props: ContentBlockRootProps & { blockRef?: React.RefObject<BlockInstanceMethods> }
) => {
    const [joke, setJoke] = React.useState<string | null>(null);
    const [requesting, setRequesting] = React.useState<boolean>(false);

    const [createContentBlock, contentBlockQuery] = useCreateContentBlockMutation();
    const sdk = React.useRef(getSDK());
    const retryCount = React.useRef<number>(0);

    const fetchDadJoke = async () => {
        setRequesting(true);
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                    },
            });
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Error fetching joke:", error.message);
        } finally {
            setRequesting(false);
        }
    };

    // diff-add-start
    const appReq = useGetAppsQuery({
        variables: {
            first: 1,
            filters: { where: { name: { equalTo: props.blockInfo.appName } } },
        },
    });
    const appRelease = selectLatestRelease(appReq.data!);
    // diff-add-end
    return ();
};
```

- Define function blocks to
  - create the content block,
  - handle block creation retry logic, and finally,
  - expose the required `useImperativeHandle` React api for edit mode. This api helps us decide exactly what properties or methods should be available on the passed ref `props.blockRef`.

```tsx title="src/extensions/dad-joke-block/dad-joke.tsx"
import React from 'react';
// diff-remove-start
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
} from '@akashaorg/typings/lib/ui';
// diff-remove-end
import getSDK from '@akashaorg/core-sdk';
import {
  useCreateContentBlockMutation,
  useGetAppsQuery,
} from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import { selectLatestRelease } from '@akashaorg/ui-core-hooks/lib/selectors/get-apps-query';
// diff-add-start
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
  CreateContentBlock,
} from '@akashaorg/typings/lib/ui';
import {
  AkashaContentBlockBlockDef,
  BlockLabeledValue,
} from '@akashaorg/typings/lib/sdk/graphql-types-new';
// diff-add-end

export const DadJokeBlock = (
  props: ContentBlockRootProps & { blockRef?: React.RefObject<BlockInstanceMethods> }
) => {
    const [joke, setJoke] = React.useState<string | null>(null);
    const [requesting, setRequesting] = React.useState<boolean>(false);

    const [createContentBlock, contentBlockQuery] = useCreateContentBlockMutation();
    const sdk = React.useRef(getSDK());
    const retryCount = React.useRef<number>(0);

    const fetchDadJoke = async () => {
        setRequesting(true);
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                    },
            });
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Error fetching joke:", error.message);
        } finally {
            setRequesting(false);
        }
    };

    const appReq = useGetAppsQuery({
        variables: {
            first: 1,
            filters: { where: { name: { equalTo: props.blockInfo.appName } } },
        },
    });
    const appRelease = selectLatestRelease(appReq.data!);

    // diff-add-start
    const createBlock = React.useCallback(
        async ({ nsfw }: CreateContentBlock) => {
            if (!appRelease?.node?.id) {
                return {
                    response: {
                        blockID: "",
                        error: "Extension not found!",
                    },
                    blockInfo: props.blockInfo,
                    retryCount: retryCount.current,
                };
            }
            const contentBlockValue: BlockLabeledValue = {
                label: props.blockInfo.appName,
                propertyType: props.blockInfo.propertyType,
                value: JSON.stringify({ joke }),
            };
            try {
                const resp = await createContentBlock({
                    variables: {
                        i: {
                            content: {
                                appVersionID: appRelease?.node?.id,
                                createdAt: new Date().toISOString(),
                                content: [contentBlockValue],
                                active: true,
                                kind: AkashaContentBlockBlockDef.Text,
                                nsfw,
                            },
                        },
                    },
                    context: { source: sdk.current.services.gql.contextSources.composeDB },
                });
                return {
                    response: {
                        blockID: resp.data?.createAkashaContentBlock?.document.id as string,
                        error: "",
                    },
                    blockInfo: props.blockInfo,
                    retryCount: retryCount.current,
                };
            } catch (err) {
                console.error("error creating content block", err.message);
                return {
                    response: {
                        blockID: "",
                        error: err.message,
                    },
                    blockInfo: props.blockInfo,
                    retryCount: retryCount.current,
                };
            }
        },
        [createContentBlock, props.blockInfo, appRelease?.node?.id, joke]
    );

    const retryCreate = React.useCallback(
        async (arg: CreateContentBlock) => {
            if (contentBlockQuery.called) {
                contentBlockQuery.reset();
            }
            retryCount.current += 1;
            return createBlock(arg);
        },
        [contentBlockQuery, createBlock]
    );

    React.useImperativeHandle(
        props.blockRef,
        () => ({
            createBlock,
            retryBlockCreation: retryCreate,
        }),
        [createBlock, retryCreate]
    );
    // diff-add-end

    return ();
};
```

4. Let us return a UI from this component. A conditional text tag to indicate loading state, another one to display the joke, if available and a button to fetch the joke on click.

```tsx title="src/extensions/dad-joke-block/dad-joke.tsx"
import React from 'react';
import getSDK from '@akashaorg/core-sdk';
import {
  useCreateContentBlockMutation,
  useGetAppsQuery,
} from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import { selectLatestRelease } from '@akashaorg/ui-core-hooks/lib/selectors/get-apps-query';
import {
  BlockInstanceMethods,
  ContentBlockRootProps,
  CreateContentBlock,
} from '@akashaorg/typings/lib/ui';
import {
  AkashaContentBlockBlockDef,
  BlockLabeledValue,
} from '@akashaorg/typings/lib/sdk/graphql-types-new';
// diff-add-start
import { Button } from '@/components/ui/button';
import { Stack } from '@/components/ui/stack';
import { Typography } from '@/components/ui/typography';
// diff-add-end

export const DadJokeBlock = (
  props: ContentBlockRootProps & { blockRef?: React.RefObject<BlockInstanceMethods> }
) => {
    const [joke, setJoke] = React.useState<string | null>(null);
    const [requesting, setRequesting] = React.useState<boolean>(false);

    const [createContentBlock, contentBlockQuery] = useCreateContentBlockMutation();
    const sdk = React.useRef(getSDK());
    const retryCount = React.useRef<number>(0);

    const fetchDadJoke = async () => {
        setRequesting(true);
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                    },
            });
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Error fetching joke:", error.message);
        } finally {
            setRequesting(false);
        }
    };

    const appReq = useGetAppsQuery({
        variables: {
            first: 1,
            filters: { where: { name: { equalTo: props.blockInfo.appName } } },
        },
    });
    const appRelease = selectLatestRelease(appReq.data!);

    const createBlock = React.useCallback(
        async ({ nsfw }: CreateContentBlock) => {
            if (!appRelease?.node?.id) {
                return {
                    response: {
                        blockID: "",
                        error: "Extension not found!",
                    },
                    blockInfo: props.blockInfo,
                    retryCount: retryCount.current,
                };
            }
            const contentBlockValue: BlockLabeledValue = {
                label: props.blockInfo.appName,
                propertyType: props.blockInfo.propertyType,
                value: JSON.stringify({ joke }),
            };
            try {
                const resp = await createContentBlock({
                    variables: {
                        i: {
                            content: {
                                appVersionID: appRelease?.node?.id,
                                createdAt: new Date().toISOString(),
                                content: [contentBlockValue],
                                active: true,
                                kind: AkashaContentBlockBlockDef.Text,
                                nsfw,
                            },
                        },
                    },
                    context: { source: sdk.current.services.gql.contextSources.composeDB },
                });
                return {
                    response: {
                        blockID: resp.data?.createAkashaContentBlock?.document.id as string,
                        error: "",
                    },
                    blockInfo: props.blockInfo,
                    retryCount: retryCount.current,
                };
            } catch (err) {
                console.error("error creating content block", err.message);
                return {
                    response: {
                        blockID: "",
                        error: err.message,
                    },
                    blockInfo: props.blockInfo,
                    retryCount: retryCount.current,
                };
            }
        },
        [createContentBlock, props.blockInfo, appRelease?.node?.id, joke]
    );

    const retryCreate = React.useCallback(
        async (arg: CreateContentBlock) => {
            if (contentBlockQuery.called) {
                contentBlockQuery.reset();
            }
            retryCount.current += 1;
            return createBlock(arg);
        },
        [contentBlockQuery, createBlock]
    );

    React.useImperativeHandle(
        props.blockRef,
        () => ({
            createBlock,
            retryBlockCreation: retryCreate,
        }),
        [createBlock, retryCreate]
    );

    // diff-remove
    return ();
    // diff-add-start
    return (
        <Stack direction="column" spacing={2}>
            {requesting && <Typography> fetching joke ...</Typography>}
            {joke && !requesting && <Typography>{joke}</Typography>}
            <div>
            <Button
                size="sm"
                type="button"
                className="self-end text(black dark:white)"
                disabled={requesting}
                onClick={fetchDadJoke}
            >
                {joke ? "New joke" : "Get joke"}
            </Button>
            </div>
        </Stack>
    );
    // diff-add-end
};
```

Now we have created the edit mode component, let's proceed to do a similar thing for the readonly mode block.

## Readonly Mode component

1. Create another component in the Devkit's `src/extensions/dad-joke-block` folder. This will hold the logic for the readonly mode block

```bash title="run this from the root of the project"
cd src
cd extensions
cd dad-joke-block
touch dad-joke-readonly.tsx
```

2. Open this file in your code editor, then copy and paste the code snippet below.

```tsx title="src/extensions/dad-joke-block/dad-joke-readonly.tsx"
import React from 'react';
import { BlockInstanceMethods, ContentBlockRootProps } from '@akashaorg/typings/lib/ui';

export const DadJokeReadonlyBlock = (
  props: ContentBlockRootProps & {
    blockRef?: React.RefObject<BlockInstanceMethods>;
  },
) => {
  return ();
};
```

3. We shall parse the value of the content block passed through the props. In our case, this parsed value returns a simple text, hence we can render the result directly in a text tag.

```tsx title="src/extensions/dad-joke-block/dad-joke-readonly.tsx"
import React from 'react';
import { BlockInstanceMethods, ContentBlockRootProps } from '@akashaorg/typings/lib/ui';
// diff-add
import { Typography } from '@/components/ui/typography';

export const DadJokeReadonlyBlock = (
  props: ContentBlockRootProps & {
    blockRef?: React.RefObject<BlockInstanceMethods>;
  },
) => {
    // diff-remove
    return ();
    // diff-add-start
    const stringifiedValue = JSON.parse(props.content.value);

    return <Typography>{stringifiedValue.joke}</Typography>;
    // diff-add-end
};
```

## Content block level index file

Now we have created the two modes, let's define in an index file how these two modes should operate.

1. Create an index file in the `dad-joke-block` folder.

```bash title="run this from the root of the project"
cd src
cd extensions
cd dad-joke-block
touch index.tsx
```

2. Open this file in your code editor, then copy and paste the code snippet below. This component simply does the work of conditionally rendering the two block modes components defined earlier based on the received props.

```tsx title="src/extensions/dad-joke-block/index.tsx"
import * as React from "react";
import { withProviders } from "@akashaorg/ui-core-hooks";
import {
  BlockInstanceMethods,
  ContentBlockModes,
  ContentBlockRootProps,
} from "@akashaorg/typings/lib/ui";
import { DadJokeBlock } from "./dad-joke";
import { DadJokeReadonlyBlock } from "./dad-joke-readonly";

const DadJokeBlockExtension = (
  props: ContentBlockRootProps & {
    blockRef?: React.RefObject<BlockInstanceMethods>;
  }
) => {
  return (
    <>
      {props.blockInfo.mode === ContentBlockModes.EDIT && (
        <DadJokeBlock {...props} />
      )}
      {props.blockInfo.mode === ContentBlockModes.READONLY && (
        <DadJokeReadonlyBlock {...props} />
      )}
    </>
  );
};
export default withProviders<ContentBlockRootProps>(DadJokeBlockExtension);
```

## Application level index file

In the final section of this tutorial we are going to update the root app's index file with the details of the new content block we have just created.

1. In the register function's return object, right after the `menuItems`, we need to update the code block below.

```tsx title="src/index.tsx"
import {
  IAppConfig,
  IntegrationRegistrationOptions,
  MenuItemAreaType,
  LogoTypeSource,
} from "@akashaorg/typings/lib/ui";
// diff-add
import { CirclePlay } from "lucide-react";

/**
 * Changes in this file requires a full reload in the browser!
 */

const SidebarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 stroke-secondaryLight dark:stroke-secondaryDark"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    />
  </svg>
);

export const register = (opts: IntegrationRegistrationOptions): IAppConfig => {
  return {
    rootComponent: () => import("./components"),
    mountsIn: opts.layoutSlots?.applicationSlotId as string,
    menuItems: {
      label: "Extension Devkit",
      logo: { type: LogoTypeSource.ICON, value: <SidebarIcon /> },
      area: [MenuItemAreaType.UserAppArea],
      subRoutes: [],
    },
    // diff-add-start
    contentBlocks: [
      {
        propertyType: "dad-joke-block",
        icon: <CirclePlay />,
        displayName: "Dad Joke block",
        rootComponent: () => import("./extensions/dad-joke-block"),
      },
    ],
    // diff-add-end
  };
};
```

To recap the steps in this tutorial, we;

- created two components, each for the two content block modes
- created an index file and defined the logic to implement these two modes
- updated the app's index file to include the path where this content block can be found.

Now, let's go back to the browser, refresh the entire page (while still in `Test release mode`) and open the unified editor from the Global antenna. Click on the `Add a block` button by the bottom left corner and you will see a new block "Dad Joke Block" in the list like in image below. Select this block, go ahead and interact with it, generate a joke and publish the beam.

<img src="/img/blocklist_updated.png"></img>

Congratulations, we have now created a content block from the Devkit. Note that same can happen with any application and you can create as many content blocks as you want.

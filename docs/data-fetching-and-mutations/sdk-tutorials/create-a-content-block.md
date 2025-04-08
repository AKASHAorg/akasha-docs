---
sidebar_position: 823
sidebar_label: Create a Content Block
---

# Create A Content Block

Content blocks are the basic building block used in creating and rendering beams. Creating a content block involves mutating
the underlying <span className="highlight-1">content block model</span> using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

:::info
Click [here](../../extensions/editor/content_blocks.md) for a detailed explanation of what content blocks are
:::

We shall now proceed to create a content block

1. Let's start by creating a new file

```bash
touch create-content-block.ts
```

2. Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="create-content-block.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

3. Let's define a function to handle and return the response from the SDK service.

```ts title="create-content-block.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

const createContentBlockHandler = async () => {
  try {
    const response = await gqlClient.CreateContentBlock({});
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
```

4. Next, we modify the `CreateContentBlock` function to add the required variables.

```ts title="create-content-block.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createContentBlockHandler = async () => {
  try {
    // diff-remove
    const response = await gqlClient.CreateContentBlock({});
    // diff-add-start
    const response = await gqlClient.CreateContentBlock({
      i: {
        content: {
          active: true,
          nsfw: false,
          kind: "TEXT",
          createdAt: new Date(),
          // version of the application from which this content block is being created
          appVersionID: "application version ID",
          content: [
            {
              label: "block1",
              propertyType: "text-block",
              value: "some text here...",
            },
          ],
        },
      },
    });

    // log the response document, and take note of the content block Id
    console.log(response.data?.createAkashaContentBlock?.document);
    // diff-add-end
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
```

5. We can now run the function to create the content block

```ts title="create-content-block.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createContentBlockHandler = async () => {
  try {
    const response = await gqlClient.CreateContentBlock({
      i: {
        content: {
          active: true,
          nsfw: false,
          kind: "TEXT",
          createdAt: new Date(),
          // version of the application from which this content block is being created
          appVersionID: "application version ID",
          content: [
            {
              label: "block1",
              propertyType: "text-block",
              value: "some text here...",
            },
          ],
        },
      },
    });
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

createContentBlockHandler();
// diff-add-end
```

:::tip
The id of the newly created content block can be got from the response document object using;
`response.data?.createAkashaContentBlock?.document?.id`
:::

Congratulations! We have just created our first content block. Feel free to create some more content blocks and then we can proceed to [create a beam](./create-a-beam.md)

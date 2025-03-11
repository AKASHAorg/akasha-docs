---
sidebar_position: 823
sidebar_label: Create a Beam
---

# Create A Beam

Creating a beam involves mutating the underlying <span className="highlight-1">beam model</span> using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

1. Let's start by creating a new file

```bash
touch create-beam.ts
```

2. Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="create-beam.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

3. Let's define a function to handle and return the response from the SDK service. This function will have two params, first parameter being the content of the beam we wish to create. This is an array that holds the `ID` of the individual [content blocks](../../extensions/editor/content_blocks.md) in the beam and their corresponding `order`. The second parameter is optional (defaults to `true`) and specifies whether the beam is active or has beem removed by its author

```ts title="create-beam.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

const createBeamHandler = (
  content: { blockID: any; order: number }[],
  isBeamActive = true
) => {
  try {
    const response = await gqlClient.CreateBeam({});
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
``;
```

4. We need to pass some parameters to the `CreateBeam` method. This includes the required parameters like `content`, `active` `createdAt`, `appID`, `appVersionID`. Additionally, we shall log the response from this method, so we can see the newly created beam's id

```ts title="create-beam.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createBeamHandler = (
  content: { blockID: any; order: number }[],
  isBeamActive = true
) => {
  try {
    // diff-remove
    const response = await gqlClient.CreateBeam({});
    // diff-add-start
    const response = await gqlClient.CreateBeam({
      i: {
        content: {
          content: content,
          active: isBeamActive,
          createdAt: new Date(),
          appID: "application ID",
          appVersionID: "application version ID",
        },
      },
    });

    // log the response document, and take note of the beam Id
    console.log(response.data?.createAkashaBeam?.document);
    // diff-add-end
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
```

5. Let's now run the function, passing to it the `content` of the beam we wish to create

```ts title="create-beam.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createBeamHandler = (
  content: { blockID: any; order: number }[],
  isBeamActive = true
) => {
  try {
    const response = await gqlClient.CreateBeam({
      i: {
        content: {
          content: content,
          active: isBeamActive,
          createdAt: new Date(),
          appID: "application ID",
          appVersionID: "application version ID",
        },
      },
    });

    // log the response document, and take note of the beam Id
    console.log(response.data?.createAkashaBeam?.document);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

createBeamHandler([
  { blockID: "block1", order: 1 },
  { blockID: "block2", order: 2 },
]);
// diff-add-end
```

:::tip
The id of the newly created beam can be got from the response document object using;
`response.data?.createAkashaBeam?.document?.id`
:::

COngratulations! We have just created our first beam, let's proceed to [fetch the beam](./fetch-a-beam-by-id.md)

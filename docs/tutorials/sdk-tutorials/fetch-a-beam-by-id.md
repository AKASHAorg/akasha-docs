---
sidebar_position: 824
sidebar_label: Fetch a Beam  by Id
---

# Fetch A Beam By Id

Fetching a beam by its id involves querying the underlying <span className='highlight-1'>beam model</span> using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

We can fetch the beam we just created in the [previous](./create-a-beam.md) tutorial using its `id`

1. First, let's create a new file

```bash
touch fetch-beam-by-id.ts
```

2. Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="fetch-beam-by-id.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

3. Again, let's define a function to handle and return the response from the SDK service. The function will have just one parameter which is the id of the beam we are about to fetch

```ts title="fetch-beam-by-id.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

const fetchBeamByIdHandler = (beamId: string) => {
  try {
    const response = await gqlClient.GetBeamByDid({
      id: beamId,
    });

    // the beam data is contained in a node
    console.log(response.data?.node);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
```

4. Let's run the function, passing to it the `beamId` variable

```ts title="fetch-beam-by-id.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const fetchBeamByIdHandler = (beamId: string) => {
  try {
    const response = await gqlClient.GetBeamByDid({
      id: beamId,
    });

    // the beam data is contained in a node
    console.log(response.data?.node);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

fetchBeamByIdHandler(
  "kjzl6kcym7w8y84k406k7e4bo0u5jmglj4y7qj8nz60fqvvcqxkmr49kxsijpc1"
);
// diff-add-end
```

Congratulations, we have now fetched a beam using its id

How about we explore how to [fetch a list of beams](./fetch-beam-list.md)?

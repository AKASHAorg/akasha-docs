---
sidebar_position: 826
sidebar_label: Fetch list of Beams
---

# Fetch List of Beams

Fetching a list of beams is quite similar to what we did with fetching a beam with its id in the [previous](./fetch-a-beam-by-id.md) tutorial, only that we do not to specify any id. It involves querying the underlying <span className='highlight-1'>beam model</span> using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

1. Let's start again by creating a new file

```bash
touch fetch-beam-list.ts
```

2. Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="fetch-beam-list.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

3. Let's define a function to handle and return the response from the SDK service.

```ts title="fetch-beam-list.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

const fetchBeamsHandler = async () => {
  try {
    const response = await gqlClient.GetBeams({});
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
```

4. We need to provide some parameters to the `GetBeams` method from the gqlClient. These parameters could be

- `first`: to get a part of the beams from the start of the list (eg: `{ first: 10 }`)
- `last`: to get a part of the beams from the end of the list (eg: `{ last: 5 }`)
- `before`: to get the beams before that specifed cursor position
- `after`: to get the beams after that specifed cursor position
- `filters`: to filter beams (eg: get beams where the authorId match a given value)
- `sorting`: to sort the list (eg: get beams sorted in ascending chronological order)

Let's get the first 10 beams, sorted in a descending chronological order

```ts title="fetch-beam-list.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const fetchBeamsHandler = async () => {
  try {
    // diff-remove
    const response = await gqlClient.GetBeams({});
    // diff-add-start
    const response = await gqlClient.GetBeams({
      first: 10,
      sorting: "DESC",
    });

    console.log(response.data);
    // diff-add-end
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
```

1. We can now run the function

```ts title="fetch-beam-list.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const fetchBeamsHandler = async () => {
  try {
    const response = await gqlClient.GetBeams({
      first: 10,
      sorting: "DESC",
    });

    // the list of beams is contained in a node
    console.log(response.data?.akashaBeamIndex?.edges[0].node);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

fetchBeamsHandler();
// diff-add-end
```

Congratulations! We have successfully fetched a list of beams. Feel free to by tweak the optional parameters in the `GetBeams` method and compare the variations in the list of beams returned

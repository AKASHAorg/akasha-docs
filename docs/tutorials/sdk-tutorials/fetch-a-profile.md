---
sidebar_position: 822
sidebar_label: Fetch a Profile
---

# Fetch A Profile

Fetching a profile involves querying the underlying <span className='highlight-1'>profile model</span> using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

We can fetch the profile we just created in the [previous](./create-a-profile.md) tutorial using its `DID`

1. Let's create another file

```bash
touch fetch-profile.ts
```

2. Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="fetch-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

3. Similar to steps we took while creating a profile, let's define a function to handle and return the response from the SDK service. The function will have just one parameter which is the DID of the profile we are about to fetch

```ts title="fetch-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

const fetchProfileHandler = async (did: string) => {
  try {
    const response = await gqlClient.GetProfileByDid({
      id: did,
    });

    // the profile data is contained in a node
    console.log(response.data?.node);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
```

4. Let's run the function, passing to it the `did` variable

```ts title="fetch-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const fetchProfileHandler = async (did: string) => {
  try {
    const response = await gqlClient.GetProfileByDid({
      id: did,
    });

    // the profile data is contained in a node
    console.log(response.data?.node);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

fetchProfileHandler(
  "did:pkh:eip155:11155111:0x4f0004b6802eb9b1d4ac21f81bd872a26feb189e"
);
// diff-add-end
```

We have just demonstrated how a profile can be fetched using its DID. Feel free to explore the profile data from the response object and build something great

Ready to learn some more? Let's try [creating a beam](./create-a-beam.md)

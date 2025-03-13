---
sidebar_position: 821
sidebar_label: Create a Profile
---

# Create A Profile

Creating a profile involves mutating the underlying <span className="highlight-1">profile model</span> using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

1. First, let's create a new file

```bash
touch create-profile.ts
```

2. Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

3. Let's define a function to handle and return the response from the SDK service. This function will have two params, first parameter being the name of the profile we wish to create. The second parameter (optional, defaults to `false`) specifies whether the profile is `Not Safe For Work`

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

const createProfileHandler = (userName: string, isNsfw = false) => {
  try {
    const response = await gqlClient.CreateProfile({});
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
```

4. Next, we pass some parameters to the `CreateProfile` method of the gqlClient instance. This includes the required parameters like `name`, `createdAt`, `appID`, `appVersionID` and optional parameters like `nsfw`. Additionally, we shall log the response from this method, so we can see the newly created profile's DID

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createProfileHandler = (userName: string, isNsfw = false) => {
  try {
    // diff-remove
    const response = await gqlClient.CreateProfile({});
    // diff-add-start
    const response = await gqlClient.CreateProfile({
      i: {
        content: {
          name: userName,
          nsfw: isNsfw,
          createdAt: new Date(),
          appID: "application ID",
          appVersionID: "application version ID",
        },
      },
    });

    // log the response document, and take note of the profile's DID
    console.log(response.data?.setAkashaProfile?.document);
    // diff-add-end
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
```

5. We can now run the function, passing to it the `userName` of the profile we wish to create

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createProfileHandler = (userName: string, isNsfw = false) => {
  try {
    const response = await gqlClient.CreateProfile({
      i: {
        content: {
          name: userName,
          nsfw: isNsfw,
          createdAt: new Date(),
          appID: "application ID",
          appVersionID: "application version ID",
        },
      },
    });

    // log the response document, and take note of the profile's DID
    console.log(response.data?.setAkashaProfile?.document);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

createProfileHandler("John Doe");
// diff-add-end
```

:::tip
The Decentralized Identity (DID) of the newly created profile can be got from the response document object using;
`response.data?.setAkashaProfile?.document?.did.id`
:::

6. If we wish to create a `NSFW profile`, we can simply specify so in the second parameter

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;

const createProfileHandler = (userName: string, isNsfw = false) => {
  try {
    const response = await gqlClient.CreateProfile({
      i: {
        content: {
          name: userName,
          nsfw: isNsfw,
          createdAt: new Date(),
          appID: "application ID",
          appVersionID: "application version ID",
        },
      },
    });

    console.log(response.data?.setAkashaProfile?.document);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};

// diff-remove
createProfileHandler("John Doe");
// diff-add
createProfileHandler("John Not Doe", true);
```

Now that we have successfully created a new profile, let's proceed to [fetch the profile](./fetch-a-profile.md)

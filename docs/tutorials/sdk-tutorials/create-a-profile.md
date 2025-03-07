---
sidebar_position: 821
sidebar_label: Create A Profile
---

# Create A Profile

Creating a profile involves mutating the underlying profile model using GraphQL API through the SDK's [GQL service](../../data-fetching-and-mutations/sdk/services/Services.md#graphql).

First, let's create a new file

```bash
touch create-profile.ts
```

Open this new file, import the SDK package and assign the graphQL client (from SDK services) to a variable

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
```

Next, let's define a function to hold and return the response from the SDK method.

The function will have two params, first parameter being the name of the profile we wish to create. The second parameter is optional (defaults to `false`) and specifies if the profile is NSFW.

```ts title="create-profile.ts"
import getSDK from "@akashaorg/awf-sdk";

const gqlClient = getSDK().services.gql.client;
// diff-add-start

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

    // log the response, and take note of the profile id
    console.log(response.node?.setAkashaProfile?.document);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-end
```

We can now run the function, passing to it the `userName` parameter.

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

    // log the response, and take note of the profile id
    console.log(response.node?.setAkashaProfile?.document);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};
// diff-add-start

console.log(createProfileHandler("John Doe"));
// diff-add-end
```

If we wish to create a `NSFW profile`, we can simply specify in the second parameter like so;

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

    console.log(response.node?.setAkashaProfile?.document);
  } catch (error) {
    console.log(`An error occured: ${error.message}`);
  }
};

// diff-remove
console.log(createProfileHandler("John Doe"));
// diff-add
console.log(createProfileHandler("John Not Doe", true));
```

Now that we have successfully created a profile, let's proceed to [fetch the profile](./fetch-a-profile.md)

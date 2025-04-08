---
sidebar_position: 4
sidebar_label: Fetch Profile Data
title: Fetch Profile Data using Hooks
---

In this tutorial we will demostrate how you can use the hooks to fetch profile data

:::info
The fully working implementation is available on the devkit's [examples/fetch-profile-data](https://github.com/AKASHAorg/extension-devkit/tree/examples/fetch-profile-data) branch
:::

Akasha Core's Hooks package provides easy way to interact with the SDK methods using generated hooks. In order to get a profile's data, we shall use the [useGetProfileByDidQuery](../../data-fetching-and-mutations/hooks/apollo-hooks/index.md#usegetprofilebydidquery) hook

To complete this tutorial, you must have [installed and setup the devkit](../../devkit/index.mdx) locally or on DevContainers

1. Let's start by cleaning up the `app.tsx` file and leaving only the necessary packages for this tutorial

```tsx title='src/components/app.tsx'
import { useAkashaStore } from "@akashaorg/ui-core-hooks";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Typography } from "./ui/typography";

const App = () => {
  const { data } = useAkashaStore();

    const handleAuth = () => {
        // some auth logic
    };

  return (
    // some ui code
  );
};

export default App;
```

2. Next, we import the hook to get authenticated user's profile data together with its matching selector. The `authenticatedDID` is got from the useAkashaStore hook after you have authenticated

:::tip
A `selector` is an utility function in Akasha Core's Hooks package that tries to return specified data from a query's response, if available. Usually a selector's file name will match the name of the target hook. Read more about selectors [here](../../data-fetching-and-mutations/hooks/apollo-hooks/index.md#type-predicates)
:::

```tsx title='src/components/app.tsx'
import { useAkashaStore } from "@akashaorg/ui-core-hooks";
// diff-add-start
import { useGetProfileByDidQuery } from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import { selectProfileData } from '@akashaorg/ui-core-hooks/lib/selectors/get-profile-by-did-query';
//diff-add-end
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Typography } from "./ui/typography";

const App = () => {
  const { data } = useAkashaStore();

    const handleAuth = () => {
        // some auth logic
    };

  return (
    // some ui code
  );
};

export default App;
```

3. We then initialize the hook and implement its selector. At this point, you can also log the `userProfile` variable to view the profile data of the authenticatedDID.

```tsx title='src/components/app.tsx'
import { useAkashaStore } from "@akashaorg/ui-core-hooks";
import { useGetProfileByDidQuery } from '@akashaorg/ui-core-hooks/lib/generated/apollo';
import { selectProfileData } from '@akashaorg/ui-core-hooks/lib/selectors/get-profile-by-did-query';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Typography } from "./ui/typography";

const App = () => {
  const { data } = useAkashaStore();

    const handleAuth = () => {
        // some auth logic
    };
    // diff-add-start

    const profileDataReq = useGetProfileByDidQuery({
        variables: { id: authenticatedDID },
        skip: !authenticatedDID, // do not run the query if there is no authenticated DID
    });

    const userProfile = profileDataReq.data ? selectProfileData(profileDataReq.data) : null;

    const profileCreationDate = new Date(userProfile?.createdAt);
    // diff-add-end

  return (
    // some ui code
  );
};

export default App;
```

4. We can finally show this profile info in a basic card in the component's `return` block.

```tsx title='src/components/app.tsx'
import { useAkashaStore } from "@akashaorg/ui-core-hooks";
import { useGetProfileByDidQuery } from "@akashaorg/ui-core-hooks/lib/generated/apollo";
import { selectProfileData } from "@akashaorg/ui-core-hooks/lib/selectors/get-profile-by-did-query";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Typography } from "./ui/typography";

const App = () => {
  // diff-remove
  const { data } = useAkashaStore();
  // diff-add-start
  const {
    data: { isAuthenticating, authenticatedDID },
  } = useAkashaStore();
  // diff-add-end

  const handleAuth = () => {
    // some auth logic
  };

  const profileDataReq = useGetProfileByDidQuery({
    variables: { id: authenticatedDID },
    skip: !authenticatedDID, // do not run the query if there is no authenticated DID
  });

  const userProfile = profileDataReq.data
    ? selectProfileData(profileDataReq.data)
    : null;

  const profileCreationDate = new Date(userProfile?.createdAt);

  return (
    // diff-remove
    // some ui code
    // diff-add-start
    <div>
      {isAuthenticating && <div>User is authenticating...</div>}

      {!isAuthenticating && (
        <>
          {!authenticatedDID && (
            <div>
              <h3>No authenticated user</h3>
              <Button onClick={handleAuth}>Authenticate</Button>
            </div>
          )}
          {authenticatedDID && (
            <Card>
              <CardHeader>
                <Typography>Hello, {userProfile?.name}</Typography>
              </CardHeader>
              <CardContent style={{ flexDirection: "column", gap: "0.5rem" }}>
                <Typography>
                  Your profile was created on: {profileCreationDate.getDay()}/
                  {profileCreationDate.getMonth()}/
                  {profileCreationDate.getFullYear()}
                </Typography>
                <Typography>
                  Your Decentralized IDentity is: {userProfile?.did.id}
                </Typography>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
    // diff-add-end
  );
};

export default App;
```

<div className="card tip-card">
Congratulations, you have now utilized an Apollo Hook to fetch profile data on DevKit.

Note that you can also fetch any profile data using same method, all you have to do is to pass the profile's DID as a variable to the hook and specify any additional `skip` logic

</div>

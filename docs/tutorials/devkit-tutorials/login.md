---
sidebar_position: 3
sidebar_label: Login Flow
title: Login flow in the context of a world
---

In this tutorial we will implement the login flow in the context of a world.

:::info
A fully working implementation is available on devkit's [examples/login-and-authenticated-profile-data](https://github.com/AKASHAorg/extension-devkit/tree/examples/login-and-authenticated-profile-data) branch.
:::

To ease up the flow and to provide a consistent UX for the login flow, we are delegating this feature to a particular app (Authentication App) which is installed by default in AKASHA World.

This means that whenever we want to do a login we just need redirect the user to this application and by using a special `redirectTo` QueryString in the url, we'll ensure that after the login was successful, the user is redirected back to the url that we've set in the query string.

When the login is succesful, an event is emitted on the [global event bus](../../data-fetching-and-mutations/sdk/api/API.md#globalchannel-eventbus) with the following payload:

```ts
// sign-in event payload
{
    data: {
        id: 'did...', // did of the authenticated user
        ethAddress: '0x...' // the eth address of the authenticated user (if available)
    },
    event: AUTH_EVENTS.SIGN_IN // constant available in the typings package
}
```

This event is then used by the AuthenticationStore to save these details and provide them to the components.

For convenience, this AuthenticationStore also fetches the logged in user's profile data automatically - almost in all cases the profile data is needed along with the login details - and for this reason, if you want to fetch the default profile used in AKASHA World it is much simple to use the provided hook [`useAkashaStore`](../../data-fetching-and-mutations/hooks/custom-hooks/index.md) which includes all this functionality by default.

By default, the devkit already contains parts of this flow in the `src/components/app.tsx`

```tsx title="/src/components/app.tsx"
/*@ts-ignore-next-line*/
import logoWhite from '../assets/devkit-logo-white.png?inline';
/*@ts-ignore-next-line*/
import logoBlack from '../assets/devkit-logo-black.png?inline';

import { Button } from './ui/button';
import { useAkashaStore } from '@akashaorg/ui-core-hooks';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Image, ImageRoot } from './ui/image';
import { Typography } from './ui/typography';

const App = () => {
  const { data } = useAkashaStore();

  const handleAuth = () => {
    // @todo
  };

  return (
    <div>
      <div className="p-4 rounded-2xl text-black dark:text-white justify-center border-none">
        <div className="gap-4 flex flex-col">
          <div>
            <ImageRoot className="flex justify-center opacity-60">
              <Image src={logoWhite} className="hidden dark:block w-2/3" />
              <Image src={logoBlack} className="dark:hidden w-2/3" />
            </ImageRoot>
          </div>
          <div className="w-full flex">
            <div className="flex justify-center w-full">
              Documentation:
              <a
                className="ml-2 text-indigo-400"
                href="https://docs.akasha.world/devkit"
                target="_blank"
              >
                docs.akasha.world/devkit
              </a>
            </div>
          </div>
        </div>
      </div>
      {data.isAuthenticating && <div>User is authenticating...</div>}
      {data.authenticatedDID && (
        <Card>
          <CardHeader>
            <Typography>Authenticated User</Typography>
          </CardHeader>
          <CardContent>DID: {data.authenticatedDID}</CardContent>
          <CardFooter>
            <Button>View Profile</Button>
          </CardFooter>
        </Card>
      )}
      {!data.isAuthenticating && !data.authenticatedDID && (
        <div>
          <h3>No authenticated user</h3>
          <Button onClick={handleAuth}>Authenticate</Button>
        </div>
      )}
    </div>
  );
};

```

In this file, we already have the 'useAkashaStore' hook mounted and ready return the authentication data when it occurs.
The data object will contain the `authenticatedDID` field which is the DID of the profile.

Besides, there is also a flag `isAuthenticating` that is set to true when the authentication logic starts - or the existing session is being resumed on page reload/revisit.

So it's safe to asume that if the authenticatedDID is null and isAuthenticating is false, then the user is not authenticated.

In most of the cases, you want to allow viewing the content for unauthenticated user but prevent it to take actions by requesting to login.
This logic can be done using the `Profile App`'s Login modal extension point. There are quite a number of things happening behind the scenes but for now let's focus on this particular logic and the only thing that we need to now is that the profile is able to mount a login modal at our request and that modal is in turn redirecting to the `Authentication App`, preserving the `redirectTo` query string.

Let's modify the handleAuth to redirect to the `Profile App`'s login modal and also make sure that after the successful login, the `Authentication App` will redirect the user back to our page. for this we'll use a method that is passed down by the `app-loader` which is called `navigateToModal`. This means that we can access this function from the `useRootComponentProps` hook.

```tsx title="/src/components/app.tsx"
/*@ts-ignore-next-line*/
import logoWhite from '../assets/devkit-logo-white.png?inline';
/*@ts-ignore-next-line*/
import logoBlack from '../assets/devkit-logo-black.png?inline';

import { Button } from './ui/button';
// diff-remove
import { useAkashaStore } from '@akashaorg/ui-core-hooks';
// diff-add
import { useAkashaStore, useRootComponentProps } from '@akashaorg/ui-core-hooks';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Image, ImageRoot } from './ui/image';
import { Typography } from './ui/typography';



const App = () => {
  const { data } = useAkashaStore();
  //diff-add-start
  // we'll use the navigateToModal function to navigate to the Profile App's login modal
  const { navigateToModal } = useRootComponentProps();
  //diff-add-end

  const handleAuth = () => {
    // diff-remove
    // @todo
    // diff-add-start
    navigateToModal({
        name: 'login',
        redirectTo: window.location.pathname
    });
    // diff-add-end
  };

  return (
    <div>
      <div className="p-4 rounded-2xl text-black dark:text-white justify-center border-none">
        <div className="gap-4 flex flex-col">
          <div>
            <ImageRoot className="flex justify-center opacity-60">
              <Image src={logoWhite} className="hidden dark:block w-2/3" />
              <Image src={logoBlack} className="dark:hidden w-2/3" />
            </ImageRoot>
          </div>
          <div className="w-full flex">
            <div className="flex justify-center w-full">
              Documentation:
              <a
                className="ml-2 text-indigo-400"
                href="https://docs.akasha.world/devkit"
                target="_blank"
              >
                docs.akasha.world/devkit
              </a>
            </div>
          </div>
        </div>
      </div>
      {data.isAuthenticating && <div>User is authenticating...</div>}
      {data.authenticatedDID && (
        <Card>
          <CardHeader>
            <Typography>Authenticated User</Typography>
          </CardHeader>
          <CardContent>DID: {data.authenticatedDID}</CardContent>
          <CardFooter>
            <Button>View Profile</Button>
          </CardFooter>
        </Card>
      )}
      {!data.isAuthenticating && !data.authenticatedDID && (
        <div>
          <h3>No authenticated user</h3>
          <Button onClick={handleAuth}>Authenticate</Button>
        </div>
      )}
    </div>
  );
};
```

And just like that, we are guiding the user to the authentication flow and after login it will return to our page in which we'll be able to show the authentication info.

You can observe that other entities in the page are also updated with the authenticated profile. All of those are using the same `useAkashaStore` hook.

### Authenticated profile's data

The `useAkashaStore` hook automatically fetches the authenticated profile's data and it can be accessed from `data.authenticatedProfile`.

Let's see this in action:

```tsx title="/src/components/app.tsx"
const App = () => {
  const { data } = useAkashaStore();
  // we'll use the navigateToModal function to navigate to the Profile App's login modal
  const { navigateToModal } = useRootComponentProps();

  const handleAuth = () => {
    navigateToModal({
        name: 'login',
        redirectTo: window.location.pathname
    });
  };

  return (
    <div>
      <div className="p-4 rounded-2xl text-black dark:text-white justify-center border-none">
        <div className="gap-4 flex flex-col">
          <div>
            <ImageRoot className="flex justify-center opacity-60">
              <Image src={logoWhite} className="hidden dark:block w-2/3" />
              <Image src={logoBlack} className="dark:hidden w-2/3" />
            </ImageRoot>
          </div>
          <div className="w-full flex">
            <div className="flex justify-center w-full">
              Documentation:
              <a
                className="ml-2 text-indigo-400"
                href="https://docs.akasha.world/devkit"
                target="_blank"
              >
                docs.akasha.world/devkit
              </a>
            </div>
          </div>
        </div>
      </div>
      {data.isAuthenticating && <div>User is authenticating...</div>}
      {data.authenticatedDID && (
        <Card>
          <CardHeader>
            <Typography>Authenticated User</Typography>
          </CardHeader>
          //diff-remove
          <CardContent>DID: {data.authenticatedDID}</CardContent>
          //diff-add-start
          <CardContent>
            <Typography>DID: {data.authenticatedDID}</Typography>
            <Typography>Name: {data.authenticatedProfile.name}</Typography>
            <Typography>About: {data.authenticatedProfile.description}</Typography>
          </CardContent>
          //diff-add-end
          <CardFooter>
            <Button>View Profile</Button>
          </CardFooter>
        </Card>
      )}
      {!data.isAuthenticating && !data.authenticatedDID && (
        <div>
          <h3>No authenticated user</h3>
          <Button onClick={handleAuth}>Authenticate</Button>
        </div>
      )}
    </div>
  );
};
```

### Error handling

The same hook also exposes any errors that happened during the authentication or during the profile info fetch operation. This is available via the `data.authenticatedProfileError` and `data.authenticationError` respectively.

Now that you know about how the login works and you have the data for the authenticated profile, why not [fetching other's profile data](./fetch-profile-data.md) :P


### So, how do modals work

When `navigateToModal` is called, a new entry is added to the history's stack (this is basically navigation) and a query string is appended to the current URL. This query string contains the name of the modal that we want to navigate to. 

For example `?modal[name]=login` (url encoded is `?modal%5Bname%5D=login`) will instruct the Layout widget to create a node (right now it creates a `div`) with the id `login`. When this happens, the app-loader (using the `extension-point-store` plugin) will query all the extension points provided by apps and try to find an extension point that matches this mount-point. The property that is looking for is called `mountsIn`. If any (or even more) of these extension points are matched it will try to load (render) the first one that matches - this is only applicable for the modals because you cannot have more than 1 modal rendered at any given time. The general rule for the extension points is to render all of them if they matches.

In other words, this little trick allows us to request mounting a node with the provided name thus triggering a render of the matching exension-point.

You can trigger a modal with any name you want by modifying the query-string however the actual component will be rendered only if it matches!
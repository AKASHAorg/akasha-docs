# Custom Hooks
This section provides in-depth information on the custom hooks used in the Akasha Core.

### useRootComponentProps
Manage and access props received by the root component. These props may contain the context of the plugins for routing, translation, and extensions. It contains some utility functions ...

> This hook encompasses certain methods and values that can be applied in various instances in the Core. For example, the `worldConfig` object can be used to access the config info related to the application's World. the `navigateToModal` method, helps to load the matching modal from the modal params. `getCorePlugins` exposes the main plugins used in Core, such as the routing plugin, which is useful for navigation within an application.


:::info
This hook requires the provider to mounted. show example usage
:::

**Example usage**
```jsx
import { transformSource, useRootComponentProps } from '@akashaorg/ui-core-hooks';

const {
   baseRouteName,
   uiEvents,
   worldConfig,
   getCorePlugins,
   getTranslationPlugin,
   navigateToModal,
   // ...
} = useRootComponentProps();

// get i18n instance from the translation plugin
const i18n = getTranslationPlugin().i18n

// handle navigation using the routing from core plugins
const handleNavigate = () => {
  getCorePlugins().routing.navigateTo({
    appName: 'applicaton namspace',
    getNavigationUrl: () => {
      // ...
    }
  })
}
```
_________
### useAnalytics
Handle analytics in your applications

> This hook is helpful in managing opt-in analytics functionality in a world.

**Example usage**
```jsx
import { AnalyticsCategories } from '@akashaorg/typings/lib/ui';
import { useAnalytics } from '@akashaorg/ui-core-hooks';

const [ analyticsActions ] = useAnalytics();

const subscribed = true;

// handle navigation using the routing from core plugins
const handleTopicSubscription = () => {
  analyticsActions.trackEvent({
    category: AnalyticsCategories.FILTER_SEARCH,
    action: subscribed ? 'Topic Subscribed' : 'Topic Unsubscribed'
  })
}
```
_________
### useConnectWallet
Connect to a user's wallet during user profile authentication

> This hook provides seamless way to connect to a user's web3 wallet during authentication (first time or returning user)

**Example usage**
```jsx
const connectWalletCall = useConnectWallet();

useEffect(() => {
  connectWalletCall.connect(); // trigger the connect method when the component mounts
}, [])
```
_________
### useRequiredNetwork
Get the required network name for user authentication from the SDK
_________
### useNetworkChangeListener
_________
### useEntryNavigation
_________
### useLegalDoc
_________
### usePlaformHealthCheck
_________
### useDismissedCard
_________
### useValidDid
_________
### useModerationCategory
_________
### useAccordion
_________
### useModalData
Handle data supplied to the modal extension. This hook uses a helper utility method `getModalFromParams` from [useRootComponentProps](#userootcomponentprops). It needs to be called in a modal component so it can have access to the modal params.

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `modalData` - an object containing important information for rendering a modal, such as name, message, title.

**Example usage**
```tsx
import { useModalData } from '@akashaorg/ui-core-hooks',

const BeamRemoveComponent = () => {

const { modalData } = useModalData();

const beamId = modalData('beamId');

return (
  <div>
    {/** do something with beamId*/}
  </div>
)
```
_________
### useListenForMutationEvents
Listen for GraphQL mutation events emitted from the SDk's globalChannel.

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `data` - response from GraphQL mutation events' subscription to the globalChannel.

**Example usage**
```tsx
import { useListenForMutationEvents } from '@akashaorg/ui-core-hooks',

const Component = () => {

const mutationEvents = useListenForMutationEvents();

useEffect(() => {
  if (mutationEvents) {
    const {
      messageObj,
      appid,
      success,
      pending
    } = mutationEvents

    // do something with returned data
  }
}, [mutationEvents])
```
_________
### useTheme
Check or set user's UI theme preference (Light or Dark theme)

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `theme` - the current theme preference
- `propagateTheme` - an utility function to update the theme preference

**Example usage**
```tsx
import { useTheme } from '@akashaorg/ui-core-hooks',

const Component = () => {

const { theme, propagateTheme } = useTheme();


const handleThemeSwitch = (value: string) => () => {
  propagateTheme(value, true);
};
}

return (
  <div>
    User's current theme is: {theme}
    <button onClick={handleThemeSwitch('Light Theme')}>
      Set Theme
    </button>
  </div>
)
```
_________
### useProfileStats
Get a profile's statistics (number of beams, followers, following, interests) from the SDK profile service.

#### Required variables
- profileId: `string` - id of the profile whose stats is to be read

#### Optional variables
- readCache: `boolean` - indicate whether or not to read value from cache

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `data` - app settings from the SDK
- `loading` - loading state of the request
- `error` - error object from the request, if any

**Example usage**
```tsx
import { useProfileStats } from '@akashaorg/ui-core-hooks',

const Component = () => {

const { data, loading, error } = useProfileStats('some profile id');


if (isLoading) {
  return (
    <div>loading ...</div>
  )
};

if (error) {
  return (
    <div>An error has occured: {error.message}</div>
  )
};

return (
  <div>
    {/** do something with `data` */}
  </div>
)
```
_________
### useSaveSettings
Save an application's settings using SDK settings service

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `saveNotificationSettings` - an utility function to save the settings
- `data` - data from the request
- `isLoading` - loading state of the request
- `error` - error object from the request, if any

**Example usage**
```tsx
import { useSaveSettings } from '@akashaorg/ui-core-hooks',

const Component = () => {

const { saveNotificationSettings, data, isLoading, error } = useSaveSettings();

const handleSaveSettings = () => {
  saveNotificationSettings(
    {
      app: "@akashaorg/app-notifications",
      options: {
        // ...
      }
    },
    {
      onComplete: () => {
        // ...
      }
    },
  );
}

if (isLoading) {
  return (
    <div>loading ...</div>
  )
};

if (error) {
  return (
    <div>An error has occured: {error.message}</div>
  )
};

return (
  <div>
    {/** do something with `data` */}
  </div>
)
```
_________
### useGetSettings
Get saved settings for a given application from the SDK

#### Required variables
- app: `string` - name of the application (eg: @akashaorg/app-extensions)

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `data` - app settings from the SDK
- `isLoading` - loading state of the request
- `error` - error object from the request, if any

**Example usage**
```tsx
import { useGetSettings } from '@akashaorg/ui-core-hooks',

const Component = () => {

const { data, isLoading, error } = useGetSettings("@akashaorg/app-notifications");

if (isLoading) {
  return (
    <div>loading ...</div>
  )
};

if (error) {
  return (
    <div>An error has occured: {error.message}</div>
  )
};

return (
  <div>
    {/** do something with `data` */}
  </div>
)
```
_________
### useNsfwToggling
Get and set user's choice for displaying `Not Safe For Work` (NSFW) contents

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `showNsfw` - a boolean value.
- `toggleShowNsfw` - an utility function for toggling the value of the `showNsfw`

**Example usage**
```tsx
import { useNsfwToggling } from '@akashaorg/ui-core-hooks',

const Component = () => {

const { showNsfw, toggleShowNsfw } = useNsfwToggling();


const handleToggleNSFW = (value: boolean) => () => {
  toggleShowNsfw(value);
};
}

return (
  <div>
    Can user currently see nsfw content? {showNsfw}
    <button onClick={handleToggleNSFW(false)}>
    Hide Nsfw
    </button>
  </div>
)
```
_________
### useMentions
Retrieve and/or set the mentions associated with a profile

#### Required variables
- authenticatedDID: `string` - id of the logged user

#### Returned data object
When the hook has successfully run, it returns an object containing:
- `setMentionQuery` - a useState hook that sets the mention.
- `mentions` - a list of mentions object
- `allFollowing` - a list of the profiles, the logged user is following

**Example usage**
```tsx
import { useMentions } from '@akashaorg/ui-core-hooks',

const Component = ({ authenticatedDID } ) => {

const { setMentionQuery, mentions } = useMentions(authenticatedDID);

const handleGetMentions = (query: string) => {
  setMentionQuery(query);
};
}

return (
  <div>
  {/** do something with `mentions` */}
  </div>
)
```
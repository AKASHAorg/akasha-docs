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

<p>Hello world</p>
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
### useNetworkState [deprecated]
Check that the web3 provider's network is set to the correct network during authentication
_________
### useCurrentNetwork [deprecated]
Check user's web3 provider's network
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
_________
### useListenForMutationEvents
_________
### useShowFeedback
_________
### useTheme
_________
### useProfileStats
_________
### useSaveSettings
_________
### useGetSettings
_________
### useNsfwToggling
_________
### useMentions
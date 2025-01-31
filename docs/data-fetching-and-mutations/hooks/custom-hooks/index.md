# Custom Hooks
This section provides in-depth information on the custom hooks used in the Akasha Core.

### useRootComponentProps
Manage and access the context of the plugins for routing, translation, and extensions

> This hook encompasses certain methods and values that can be applied in various instances in the Core. For example, the `worldConfig` object can be used to access the config info related to the application's World. the `navigateToModal` method, as the names implies, helps to load the matching modal froom the modal params. `getCorePlugins` exposes the main plugins used in Core, such as the routing plugin, which is useful for navigation within an application.

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
__________
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
__________
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
__________
### useNetworkState [deprecated]
Check that the web3 provider's network is set to the correct network during authentication
__________
### useCurrentNetwork [deprecated]
Check user's web3 provider's network
__________
### useRequiredNetwork
Get the required network name for user authentication from the SDK
__________
### useNetworkChangeListener
__________
### useEntryNavigation
__________
### useLegalDoc
__________
### usePlaformHealthCheck
__________
### useDismissedCard
__________
### useValidDid
__________
### useModerationCategory
__________
### useAccordion
__________
### useModalData
__________
### useListenForMutationEvents
__________
### useShowFeedback
__________
### useTheme
__________
### useProfileStats
__________
### useSaveSettings
__________
### useGetSettings
__________
### useNsfwToggling
__________
### useMentions
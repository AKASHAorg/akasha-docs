## React Hooks overview
For extensions that are using React, we are generating react-apollo hooks for the ComposeDB graphql operations.

To use be able to use the hooks you must first wrap your component with the apollo client provider

example:

```tsx title="./my-root-component.tsx"
import { ApolloProvider } from '@apollo/client';
import getSDK from '@akashaorg/awf-sdk';
import MyComponentUsingHooks from './my-component-with-hooks'
const MyRootComponent = () => {
  return (
    <ApolloProvider
      client={getSDK().services.gql.queryClient}
    >
      <MyComponentUsingHooks />
    </ApolloProvider>
  )
}
```

then you can import and use any of the generated hooks from the `@akashaorg/ui-awf-hooks` package

```tsx title="./my-component-with-hooks.tsx"

import {useGetBeamStreamQuery} from ''@akashaorg/ui-awf-hooks/lib/generated/apollo';

const MyComponentWithHooks = () => {
  const {loading, data} = useGetBeamStreamQuery({
    variables: {
      first: 10
    }
  });
  if (loading) return <div>Loading data</div>;
  return <div>{data.node?.akashaBeamStreamList.edges.map(edge => (
    <div>beam id: {edge.node?.beamID}</div>
  ))}</div>
}

```

The hooks library also contains some custom hooks to allow an easier development like:

> `Work in progress`

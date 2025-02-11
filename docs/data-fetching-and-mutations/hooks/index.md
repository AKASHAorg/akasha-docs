---
sidebar_position: 42
sidebar_label: React Hooks
---

# React Hooks overview
For extensions that are using React, we are generating react-apollo hooks for the ComposeDB graphql operations.

To use be able to use these hooks you must first wrap your component with the Apollo Client Provider

***Example usage***

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
import { useGetBeamStreamQuery } from  '@akashaorg/ui-core-hooks/lib/generated/apollo';
import getSDK from '@akashaorg/awf-sdk';

const MyComponentWithHooks = () => {
  const sdk = getSDK();
  const { data, loading, error } = useGetBeamStreamQuery({
    variables: {
      indexer: sdk.services.gql.indexingDID,
      filters: {
        where: {
          beamID: {
            equalTo: 'id of the beam',
          }
        }
      },
      last: 1,
    },
  });

  if (loading) return <div>Loading data</div>;

  return <div>{data.node?.akashaBeamStreamList.edges.map(edge => (
    <div>beam id: {edge.node?.beamID}</div>
  ))}</div>
}

```

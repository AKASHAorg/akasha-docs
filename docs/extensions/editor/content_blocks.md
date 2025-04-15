---
sidebar_position: 1
sidebar_label: Content Blocks
---

# Content Blocks

The content beamed (posted) into the apps is composed of one or more blocks. For example, a beam can contain a rich text format block, an image block,
a code block etc. All of these blocks can be `injected` into the editor by different apps.

To register a content-block an app should define an optional param in its [register](https://github.com/AKASHAorg/akasha-core/blob/4f5934e4b3aef6b1920af1d196e372e5c75afe24/extensions/apps/antenna/src/index.tsx#L74) function, called `contentBlocks`.

## Interface

Registering content-blocks will require the following properties:

```
{
   propertyType: 'text-block',
   displayName: 'Text Block',
   icon: <GlobeAltIcon />,
   rootComponent: () => import('./content-blocks/sample-block'),
}
```

**[rootComponent](../app-loader.md)** -> - lazy loads the root React component of the content-block.

**propertyType** -> used to match the content published through this content.

**displayName** -> used in the editor's menu to be able to select one when there are multiple content block types available

**icon** -> used also in the editor's menu

::::tip
A more advanced beam editor can be found [here](https://github.com/AKASHAorg/akasha-core/blob/next/extensions/apps/antenna/src/extensions/beam-editor/beam-editor.tsx)
::::

## Content Block Modes

A content block should handle 2 modes which is controlled through the `props.blockInfo.mode` param passed to the root's react component:

### editor-mode

This mode is displayed when the block is mounted inside the [editor](../editor/index.md). All the logic for data input and validation is handled internally by the block.

In edit mode the content block must expose a simple api using React's `useImperativeHandle` to allow editor to use it for publishing. The ref is passed as prop so there is no need to use forwardRef.

```ts
React.useImperativeHandle(props.blockRef, () => ({
  async createBlock() {},
  async retryBlockCreation() {},
}));
```

### read-only-mode

The content block in `readonly` mode is used to render the saved data and provide the required interaction logic. For example, a voting block can contain the voting interaction logic in readonly mode and the question editing part in the
edit-mode block.

The content-block is matched against both the application's name and the `propertyType` param when rendering the content.

## Creating/Storing Content Block data

Creating the content block should only happen when the block is in [ContentBlockModes.EDIT](https://github.com/AKASHAorg/akasha-core/blob/next/libs/typings/src/ui/editor-blocks.ts) mode and it should be done through a call on `CreateBlock`, available in the composeDB API.

You can explore existing methods for your models using `yarn composedb:graphql`.

Please check the [documentation](https://developers.ceramic.network/docs/composedb/getting-started) for ComposeDB.

The interface of a content-block model is:

```tsx
contentBlock = {
  // controls the visiblity of this block
  // true when visible
  active: boolean,
  // the version of the app that this
  // block was published with
  appVersionID: string,
  // the content-nodes of this block, these are
  // the actual values that were inserted by the user
  content: [titleNode, bodyNode],
  // the creation date of this content-block
  createdAt: new Date().toISOString(),
  // must be one of: 'FORM', 'OTHER' or 'TEXT'
  kind: string,
};
```

### Content Nodes

A content block can contain one or more content-nodes which are stored in the content-blocks `content` property. The properties of a content node are as follows:

```tsx
const titleNode = {
  /**
   * this propertyType will be matched against the
   * propertyType defined in the block's registration params
   */
  propertyType: string,
  /**
   * each content-node should have different label to be
   * recognizable when rendering this content-node
   */
  label: string,
  // the value of the content-node, added by the user,
  value: string,
};
```

## Displaying Content Block's data

Displaying the data stored by a content block happens when the `props.blockInfo.mode` param is set to [ContentBlockModes.READONLY](https://github.com/AKASHAorg/akasha-core/blob/next/libs/typings/src/ui/editor-blocks.ts).

In `readonly-mode` the component will receive the actual content-node that needs to be rendered through the React's `props.content` parameter.

::::info
The component will also receive the whole content-block's data as `props.blockData` but the properties that need to be rendered are in the `props.content`.
::::

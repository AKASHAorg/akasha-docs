---
sidebar_position: 8
sidebar_label: Editor
---

# Editor
The Editor makes it possible to add contents to an [Antenna](../glossary#antenna). It is a list of [content blocks](./content_blocks.md), each content block being added/provided by an application. In order to use a specific content block, for example an `image` block, the application that provides it must be installed.

## Loading and mounting blocks

When the editor mounts a content block, it will pass down a property `mode` which will always be equal to `"edit-mode"`. You can use this property to display the editor version of the content block.

::::tip
In typescript, you can make use of the `ContentBlockModes` enum.
::::

## Publishing, Retrying and Error Handling

In the publishing phase, the editor will call the `createBlock` instance method on the content-block. If it fails, or the returned response contains an error, the editor will display an option to retry. Retrying a block creation is made through the `retryBlockCreation` instance method on the content-block.

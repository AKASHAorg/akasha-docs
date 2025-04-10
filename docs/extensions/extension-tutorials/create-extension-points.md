---
sidebar_position: 5
sidebar_label: Create Extension Points
---

# Create extension points

Extension points are always provided by apps (or widgets) so you must first [create an app](./create-an-app.md)
(or [create a widget](./create-a-widget.md)).

This tutorial asumes you have followed the `create an app` tutorial.

We will create a `Bookmark` button which will be visible on the bottom of the beam card that will allow users to save the beam for later read.
For simplicity we will store the beam data into the localStorage.

Make a new folder in the `src/extensions/bookmark` of your previously created app.

```bash title="root folder of the app"
mkdir -p src/extensions/bookmark
```

Create a new file in `src/extension/bookmark` named `index.tsx`. This will be the entry file for this extension-point.

```bash
touch src/extensions/bookmark/index.tsx
```

This file will need to export the `single-spa-react` lifecycle functions.

Here is an example of a super simple bookmark extension-point.

:::caution
Untested code - if you encounter any errors feel free to open an issue or a pr with a fix ;)
:::

```tsx title="src/extensions/bookmark/index.tsx"
import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import { useRootComponentProps, withProviders } from "@akashaorg/ui-awf-hooks";
import { IRootExtensionProps } from "@akashaorg/typings/lib/ui";
import Button from "@akashaorg/design-system-core/lib/Button";
import {
  BookmarkIcon,
  BookmarkSlashIcon,
} from "@akashaorg/design-system-core/lib/components/Icon/hero-icons-outline";

// we will store the data under this key
const BOOKMARK_STORAGE_KEY = "@myAppName/bookmarks";

const getBookmarkList = () => {
  const bookmarks = localstorage.getItem(BOOKMARK_STORAGE_KEY);
  if (bookmarks) {
    return JSON.parse(bookmarks);
  }
  return [];
};

const BookmarkExtension: React.FC<IRootExtensionProps> = (
  props: IRootExtensionProps
) => {
  // extensionData the props that are pased down using the <Extension /> component are under the extensionData key;
  const { extensionData } = props;
  // asuming the beamID is passed down
  // this is done by passing a beamID props to the <Extension /> component
  const { beamID } = extensionData;

  const [isBookmarked, setIsBookmarked] = React.useState(() =>
    getBookmarkList().includes(beamID)
  );

  const saveBookmark = () => {
    setIsBookmarked(true);
    localStorage.setItem(
      BOOKMARK_STORAGE_KEY,
      JSON.stringify([...getBookmarkList(), beamID])
    );
  };
  const removeBookmark = () => {
    setIsBookmarked(false);
    localStorage.getItem(
      BOOKMARK_STORAGE_KEY,
      JSON.stringify(
        getBookmarkList().filter((bookmarkID) => bookmarkID !== beamID)
      )
    );
  };
  const handleClick = () => {
    if (isBookmarked) {
      return removeBookmark();
    }
    saveBookmark();
  };

  return (
    <Button
      icon={}
      label="Bookmark"
      onClick={handleClick}
      size="xs"
      variant="primary"
    />
  );
};

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  // withProviders is a handy HOC that will setup common React context providers
  // used by almost all entities.
  // https://github.com/AKASHAorg/akasha-core/blob/next/libs/hooks/src/utils/provider-hoc.tsx
  rootComponent: withProviders(BookmarkExtension),
  errorBoundary: (err, errorInfo, props: IRootExtensionProps) => {
    if (props.logger) {
      props.logger.error(`${JSON.stringify(errorInfo)}, ${errorInfo}`);
    }
    return <div>Error</div>;
  },
});
```

### Adding the extension-point config

Let's open our app's entry file (`src/index.ts`) and add the following to the config.

```ts title="apps's index.ts"
export const register = () => {
  return {
    // ... the other options
    extensions: [
      {
        loadingFn: () => import("./extensions/bookmarks/index"),
        mountsIn: "beam-card/card-footer-extension",
      },
    ],
  };
};
```

Now, if you rebuild the project and navigate to the Antenna app you will see the extension-point rendered and functional in every beam card.

:::info
If you don't see it rendered it might be because the extension-point's name chaged or no longer there.
Please open an issue in AKASHA Core's repo referencing this note.
:::

Congratulations! You have just created an extension-point using AKASHA Core!

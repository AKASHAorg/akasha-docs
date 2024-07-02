---
sidebar_position: 3
sidebar_label: Create a Plugin
---

# Create a plugin
Let's create a simple plugin that will provide a few methods to store some data into localstorage.

Make sure you already followed the [extension bootstrapping](index.md) steps and after you have the whole setups done, proceed by creating a `src` folder in the root of you plugin.

`mkdir src`

Finally let's create the entry file in the `src`

`touch src/index.ts`

Let's add the registration function in the `index.ts` file and create the required methods.

```ts title="registration function"
export const getPlugin = (options) => {
  return {
    storage: {
      saveData<T>(key: string, data: T): void {
        try {
          const stringified = JSON.stringify(data);
          localStorage.setItem(key, stringified);
          return true;
        } catch (err) {
          options.logger.log('Failed to save data to storage');
          return false;
        }
      }
      getData<T>(key: string): T {
        const dataString = localStorage.getItem(key);
        return JSON.parse(dataString);
      }
      removeData(key: string) {
        localStorage.removeItem(key);
      }
    }
  }
}
```
`getPlugin` - the registration function for plugins
`storage` - just a namespace we've chosen to allow extending this plugin with other namespaces in the future. This is just a preference and it also works without it. However as soon as other extensions is using it it's hard to change without introducing breaking changes. It can also be used as a versioning namespace, for example `v1`.

Once installed, this plugin will be available to all other installed extensions using:

`props.plugins['my-awesome-plugin'].storage.saveData('test', {a: 1})`

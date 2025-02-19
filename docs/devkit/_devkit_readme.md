# Extension devkit for Worlds
The starter kit allows you to develop extensions compatible with [AKASHA Core](https://github.com/AKASHAorg/akasha-core).

## Features
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Shadcn](https://ui.shadcn.com/)
- [AKASHA React Hooks](https://github.com/AKASHAorg/akasha-core/tree/next/libs/hooks)
- [AKASHA React Apollo Hooks](https://github.com/AKASHAorg/akasha-core/blob/next/libs/hooks/README_GENERATED.md)
- [AKASHA SDK](https://github.com/AKASHAorg/akasha-core/tree/next/libs/sdk)
- Live Reload - reloads the extension on change


## Installation

### Using DevContainers
This repository contains the configuration for running it in DevContainers which is highly recommended.

**Prerequisites**
- Docker
- An IDE or text editor that has support for DevContainers (Webstorm, Vs Code, Cursor, etc.).

1. Open the project with your editor and make sure you have the devcontainer extension installed (vs code will prompt you with the recommendation to install it)
2. Open the project in devcontainer
    - vs code will prompt you to do it if you have the extension installed
3. Follow the on-screen instructions on how to get it mounted into a world.


### Manual installation
If you don't want to use DevContainers you can setup the project manually.

**Prerequisites**
Make sure you have [`yarn`](https://yarnpkg.com/getting-started/install) version `4.3.1` or newer installed

1. Install dependencies using `yarn install`
2. Run yarn dev to start the dev server and follow the on-screen steps to mount the extension.


## Docs and tutorials

Documentation is available on [https://docs.akasha.world](https://docs.akasha.world)

Tutorials and examples coming soon.
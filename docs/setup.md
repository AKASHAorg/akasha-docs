---
sidebar_position: 2
sidebar_label: Setup
---

# AKASHA Core Development Quickstart

This tutorial will guide you on how to install and setup the akasha-core repository. If you want to develop an app we recommend the [extension devkit](./devkit/index.mdx).

## Requirements

- [Node.js](https://nodejs.org) >= v20.9.x
- [yarn](https://yarnpkg.com/getting-started/install) >= v4.1.x
- Operating System - Linux/MacOS

:::caution Windows OS
This guide assumes that you are using Linux or MacOS. For Windows, please use Windows Subsystem for Linux ([WSL](https://docs.microsoft.com/en-us/windows/wsl/install)).
:::

:::info
This project runs on a specific version of yarn - @4.1.1. If you are already on this version of yarn, and your node version meets the minimum requirement, you may skip to the Getting Started section.
:::

## Install/Update required packages
1. If you are using different versions of node and yarn, consider using [nvm](https://github.com/nvm-sh/nvm) and corepack respectively to handle the versions on your computer.

2. If you already have nvm, please skip to next step. If you do not already have [nvm](https://github.com/nvm-sh/nvm) installed, you can follow a more detailed instructions here on nvm github repo.

3. Once you have installed and verified your [nvm](https://github.com/nvm-sh/nvm) installation, you can now install the specified versions of `node` and `yarn`.
> If you are already on the minimum node version (v20.9.0), you may skip to step 5

4. Run `nvm install 21.7.1` to install the specified version - 21.7.1 and `nvm use 21.7.1` to use this installed version.
> For the purpose of this documentation, we are using node version 21.7.1, however you may replace this with any version that meets the minimum node version, as specified above.
* Verify the currently active node installation on your nvm by running `nvm which node`. You should see value like `{user_path}/.nvm/versions/node/v21.7.1/bin/node`
> corepack should already be installed globally, verify this with `npm list -g`

5. Enable corepack using `corepack enable`

6. Add the specific version of yarn using `corepack install -g yarn@4.1.1`. For more details, check the [yarn docs](https://yarnpkg.com/getting-started/install)
> Note: Yarn will be installed globally so make sure it doesn't affect other projects which require a different version of yarn. By using nvm, each node version you install will have it's own global packages so you can change to different versions of yarn.

7. Restart your terminal and verify you are on the correct versions of node and yarn

## Set Up a Local Ceramic Node
**1. Follow this [ComposeDB's guide](https://composedb.js.org/docs/0.4.x/set-up-your-environment) that shows you how to install and configure relevant packages for running a Ceramic node locally.**

**2. Verify that you have everything set up correctly**

Run
```bash
$ npx @ceramicnetwork/cli daemon
```

in your Terminal and if you see the following message
```bash
$ IMPORTANT: Ceramic API running on 0.0.0.0:7007'
```
you have successfully set up your local Ceramic node 🚀.

:::info
In the future, we will provide a public node for Ceramic connection and this step will no longer be needed.
:::

## Clone and Install Project locally

**1. Fork the [repository](https://github.com/AKASHAorg/akasha-core) on GitHub**

**2. Clone the newly forked repository to your local machine.**
```bash title="replace <your-github-username> with your GitHub username"
$ git clone https://github.com/<your-github-username>/akasha-core.git
```

**3. Change directory to repository's root**
```bash
$ cd akasha-core
```

**4. Set up env values**

Create a new file `.env` at the root of the project with the contents of [env.example](https://github.com/AKASHAorg/akasha-core/blob/next/.env.example).

Follow the comments from the example env file on how to fill in the values.

**5. Install dependencies and build the application**

```bash
$ yarn build:all
```
:::info
If you encounter errors please refer to the [Troubleshooting](./troubleshooting.md) section of this documentation
:::

## Running the application

From the root directory run:

```bash
$ yarn world:dev
```

Visit `https://localhost:8131/` on your browser.

:::info
We are using a self-signed certificate for localhost.
You will need to accept the certificate in your browser.
:::

**Congrats!** You're ready to start developing.

Before diving into creating simple app, let's learn more about [extensions](./extensions/index.md). Once you're ready, you can start by [building a super simple app](./tutorials/extension-tutorials/create-an-app.md)

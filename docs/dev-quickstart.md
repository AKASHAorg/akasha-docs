---
sidebar_position: 3
pagination_next: integrations/applications/create-an-app
---

# Development quickstart

### Requirements

- [Node.js](https://nodejs.org) v16.x
- [yarn](https://classic.yarnpkg.com/lang/en/) v1.x

:::caution Windows OS
This guide assumes that you are using a Linux or MacOS. For Windows, please use Windows Subsystem for Linux ([WSL](https://docs.microsoft.com/en-us/windows/wsl/install)).
:::

### Set Up a Local Ceramic Node:
   
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


### Installation Steps:

**1. Fork the [repository](https://github.com/AKASHAorg/akasha-core) on GitHub**

**2. Clone the newly forked repository to your local machine.**

```bash title="replace <your-username> with your GitHub username"
$ git clone https://github.com/<your-username>/akasha-core.git
```

**3. Change directory to repository's root**

```bash
$ cd akasha-core
```

**4. Install dependencies**

```bash
$ yarn bootstrap
```

**5. Set up env values**

Create a new file `.env` at the root of the project with the contents of [env.example](https://github.com/AKASHAorg/akasha-core/blob/next/.env.example).

Follow the comments from the example env file on how to fill in the values.

**6. Build the application**

```bash
$ yarn build:all
```

### Running the application

From the root directory run:

```bash
$ yarn start:feed-app
```

Visit `https://localhost:8131/` in your browser.

:::info
We are using a self-signed certificate for localhost.
You will need to accept the certificate in your browser.
:::

**Congrats!** You're ready to start developing.
Let's start by [creating a super simple app](/integrations/applications/create-an-app).
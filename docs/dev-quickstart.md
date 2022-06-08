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

### Installation Steps:

**1. Fork the [repository](https://github.com/AKASHAorg/akasha-world-framework) on GitHub**

**2. Clone the newly forked repository to your local machine.**

```bash title="replace <your-username> with your GitHub username"
$ git clone https://github.com/<your-username>/akasha-world-framework.git
```

**3. Change directory to repository's root**

```bash
$ cd akasha-world-framework
```

**4. Install dependencies**

```bash
$ yarn bootstrap
```

**5. Build the application**

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

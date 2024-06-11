# AKASHA Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

### Init and Update Submodules
First time running this project locally? please use;
```
$ git submodule update --init --recursive
```

This fetches and updates the linked submodules. Subsequently, you may use;
```
$ git submodule update --recursive --remote
```

### Set up Algolia
- Create an account on Algolia (if you already have one, skip to next step)
- Create an Index and copy out its `Application ID` and `Search API Key`
-  Update the matching fields in the [config file](./docusaurus.config.js)
- Read more about the DocSearch Migration [here](https://docusaurus.io/blog/2021/11/21/algolia-docsearch-migration)


### Start Local Server
```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deploy

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

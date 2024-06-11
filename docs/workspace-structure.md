---
sidebar_position: 6
---

# Workspace Structure

AKASHA Core's main repository has a structure of a monorepo and is managed using [nx](https://nx.dev/).

You can find more details in the repository's [README](https://github.com/AKASHAorg/akasha-core/blob/next/README.md) file.

A high level overview of the repository structure:

```treeview
akasha-core/
├── extensions/
│   ├── apps/
│   ├── widgets/
├── libs/
│   ├── app-loader/
│   ├── composedb/
│   ├── design-system-components/
│   ├── design-system-core/
│   ├── extensions/
│   ├── feed/
│   ├── hooks/
│   ├── sdk/
│   ├── typings/
├── tests/
│   ├── utils/
├── tools/
│   ├── executors/
│   ├── functions/
│   ├── scripts/
├── worlds/
│   ├── akasha.world/
└── package.json
```

---
sidebar_position: 10
sidebar_label: Errors and Troubleshooting
---

# Errors and Toubleshooting

### Error when running yarn install or yarn build:all for the first time

```bash
> YN0002:
root-workspace-0b6124@workspace:. doesn\'t provide @testing-library/dom (pa2b9f), requested by @testing-library/user-event.
> YN0086: Some peer dependencies are incorrectly met; run yarn explain peer-requirements
> <hash> for details, where ‹hash› is the six-letter p-prefixed code.
> YN0000: L Completed
> YN0000:
> r Fetch step
> YN0018: one-webcrypto@https://github.com/web3-storage/one-webcrypto.git\#commit=5148d14d5489a8ac4d3822387002db15a2382: The remote archive doesn't match the expected checksum
• YN0000: L Completed in 12s 138ms
YN0000: • Failed with errors in 12s 412ms akasha-core git: (next)
```

This is related to the `yarn` version. Most likely you have a different `yarn` version installed globally.

Execute the following command in the root of the project:

```bash
corepack use yarn@4.1.1
```

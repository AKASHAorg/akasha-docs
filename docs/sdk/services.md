

# SDK Services
Services that are available through the SDK.

* appSettings
    - get
    - getAll
    - install
    - toggleAppStatus
    - uninstall
    - updateConfig
    - updateVersion
* common
  - ipfs
    - gateway: string
    - originGateway: string
    - buildOriginLink
    - buildPathLink
    - catDocument
    - getSettings
    - multiAddrToUri
    - transformBase16HashToV1
  - web3
    - network: string;
    - networkId: Record<networkName, number>;
    - checkCurrentNetwork
    - connect
    - detectInjectedProvider
    - disconnect
    - getCurrentAddress
    - getRequiredNetworkName
    - getSigner
    - requestWalletPermissions
    - signMessage
    - switchToRequiredNetwork
* db
  - create
  - getCollection
  - getDB
  - open
* gql
  - run
  - makeOperation
* log
  - create
* settings
  - get
  - remove
  - set
* stash
  - create
  - getUIStash

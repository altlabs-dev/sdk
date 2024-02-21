# A set of functions that we use in projects.
We are always open to new ideas. We are waiting for you in [issues](https://github.com/altlabs-dev/sdk/issues). 😊

## Install

```sh
bun install @altlabs/sdk
```

```sh
npm install @altlabs/sdk
```

```sh
yarn add @altlabs/sdk
```

## Usage
```ts
import {
    type BigintIsh,
    ZERO_ADDRESS,
    MAX_UINT_256,
    shortAddressFilter,
    formatNumber,
    erc20ABI,
    erc721ABI,
    erc1155ABI
} from '@altlabs/sdk'

shortAddressFilter(ZERO_ADDRESS) // 0x000...0000

console.log(MAX_UINT_256.toString() // 11579...

formatNumber(10000) // 10K
```

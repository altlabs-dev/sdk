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
    shortAddressFilter,
    ZERO_ADDRESS,
    MAX_UINT_256,
    erc20ABI,
    erc721ABI,
    erc1155ABI
} from '@altlabs/sdk'

console.log(shortAddressFilter(ZERO_ADDRESS))
console.log(MAX_UINT_256.toString())
```

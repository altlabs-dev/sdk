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
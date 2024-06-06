import JSBI from 'jsbi'

export type BigintIsh = JSBI | string | number

export type Address = `0x${ string }`

export const MAX_UINT_256: BigintIsh = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export const ZERO_ADDRESS: Address  = '0x0000000000000000000000000000000000000000'

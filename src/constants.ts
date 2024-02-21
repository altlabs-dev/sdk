import JSBI from 'jsbi'

export type BigintIsh = JSBI | string | number

export const MAX_UINT_256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

import JSBI from 'jsbi'

export type BigintIsh = JSBI | string | number

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

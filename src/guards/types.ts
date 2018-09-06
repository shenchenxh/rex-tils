type Blank = null | undefined | void

/**
 * // object collects {} and Array<any> so adding both {} and Array<any> is not needed
 * @private
 */
export type AllowedEmptyCheckTypes = Blank | string | object

/**
 * GetEmpty mapped type that will cast any AllowedEmptyCheckTypes to empty equivalent
 * @private
 */
export type GetEmpty<T extends AllowedEmptyCheckTypes> = T extends Blank
  ? T
  : T extends string
    ? ''
    : T extends any[] ? Empty.Array : T extends object ? {} : never

export interface NonEmptyArray<T> extends Array<T> {
  0: T
}

// https://twitter.com/karoljmajewski/status/1037618989801893888?s=20
export type Empty = Empty.Array | Empty.Object | Empty.String
declare namespace Empty {
  type String = ''
  type Array = never[]
  type Object = Record<string, never>
}
/* eslint-env jest */
import { immutaTest } from 'test.utils'
import { takeRight } from 'array'

describe('TakeRight', () => {

  it('should take one element at the end of the array', () => {
    immutaTest((input, path) => {
      const output = takeRight(input, path, 1)
      expect(output).toEqual({
        nested: { prop: [3] },
        other: {},
      })
      return output
    }, {
      nested: { prop: [1, 2, 3] },
      other: {},
    }, 'nested.prop')
  })

  it('should replace deep undefined with array', () => {
    immutaTest((input, path) => {
      const output = takeRight(input, path)
      expect(output).toEqual({ nested: { prop: [] } })
      return output
    }, undefined, 'nested.prop')
  })
})

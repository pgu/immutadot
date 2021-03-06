/* eslint-env jest */
import { immutaTest } from 'test.utils'
import { unshift } from 'array'

describe('array.unshift', () => {

  it('should add one element', () => {
    immutaTest((input, path) => {
      const output = unshift(input, path, 3)
      expect(output).toEqual({
        nested: { prop: [3, 1, 2] },
        other: {},
      })
      return output
    }, {
      nested: { prop: [1, 2] },
      other: {},
    }, 'nested.prop')
  })

  it('should add several elements', () => {
    immutaTest((input, path) => {
      const output = unshift(input, path, 3, 4)
      expect(output).toEqual({
        nested: { prop: [3, 4, 1, 2] },
        other: {},
      })
      return output
    }, {
      nested: { prop: [1, 2] },
      other: {},
    }, 'nested.prop')
  })

  it('should replace deep undefined with array', () => {
    immutaTest((input, path) => {
      const output = unshift(input, path, 1)
      expect(output).toEqual({ nested: { prop: [1] } })
      return output
    }, undefined, 'nested.prop')
  })
})

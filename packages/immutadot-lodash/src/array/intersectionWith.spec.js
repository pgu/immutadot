/* eslint-env jest */
import { immutaTest } from 'test.utils'
import { intersectionWith } from 'array'

describe('IntersectionWith', () => {

  it('should replace by intersection of arrays', () => {
    immutaTest((input, path) => {
      const output = intersectionWith(input, path, [{ x: 2 }, { x: 3 }], (a, b) => a.x === b.x)
      expect(output).toEqual({
        nested: { prop: [{ x: 2 }] },
        other: {},
      })
      return output
    }, {
      nested: { prop: [{ x: 1 }, { x: 2 }] },
      other: {},
    }, 'nested.prop')
  })
})

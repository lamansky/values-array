'use strict'

const assert = require('assert')
const values = require('.')

describe('valuesArray()', function () {
  it('should return a values array', function () {
    const arr = values(['a', 'b'])
    assert(Array.isArray(arr))
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], 'a')
    assert.strictEqual(arr[1], 'b')
  })

  it('should support the bind operator', function () {
    const arr = values.call(['a', 'b'])
    assert(Array.isArray(arr))
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], 'a')
    assert.strictEqual(arr[1], 'b')
  })
})

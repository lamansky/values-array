# values-array

Returns an array of the values of an Array, Iterator, Object, Map, Set, or Typed Array. Useful for when you need the values of a collection object but aren’t sure what type of collection you’ll be given.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i values-array
```

## API

The module exports a single function.

### Parameter

Bindable: `c` (Array, Iterator, Object, Map, Set, or Typed Array)

### Return Value

An array of values from the collection.

## Examples

### Arrays

```javascript
const values = require('values-array')

values(['a', 'b']) // ['a', 'b']

// Supports the bind operator
['a', 'b']::values() // ['a', 'b']
```

### Iterators

```javascript
const values = require('values-array')

function * gen () {
  yield 'a'
  yield 'b'
}

values(gen()) // ['a', 'b']
```

### Maps

```javascript
const values = require('values-array')

const map = new Map()
map.set('key', 'value')

values(map) // ['value']
```

### Objects

```javascript
const values = require('values-array')

values({key: 'value'}) // ['value']

// Supports the bind operator
const obj = {key: 'value'}
obj::values() // ['value']
```

### Sets

```javascript
const values = require('values-array')

const set = new Set()
set.add('first')
set.add('second')

values(set) // ['first', 'second']
```

### Typed Arrays

```javascript
const values = require('values-array')

const typedArray = new Int32Array(new ArrayBuffer(4))

values(typedArray) // [0]
```

## Related

* [entries-iterator](https://github.com/lamansky/entries-iterator)
* [entries-array](https://github.com/lamansky/entries-array)
* [keys-iterator](https://github.com/lamansky/keys-iterator)
* [keys-array](https://github.com/lamansky/keys-array)
* [values-iterator](https://github.com/lamansky/values-iterator)

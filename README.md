![immutadot logo](https://raw.githubusercontent.com/Zenika/immutadot/master/misc/otter.svg?sanitize=true)
===

A JavaScript library to deal with nested immutable structures.

```js
set({ english: { greeting: 'Hi' } }, 'english.greeting', 'Hello')
// → { english: { greeting: 'Hello' } }

push({ i18n: { languages: ['English', 'French'] } }, 'i18n.languages', 'German', 'Spanish')
// → { i18n: { languages: ['English', 'French', 'German', 'Spanish'] } }
```
immutad●t gives you a short and meaningful syntax to apply operations on immutable structures.

[![npm version](https://badge.fury.io/js/immutadot.svg)](https://badge.fury.io/js/immutadot)
[![Try on RunKit](https://badge.runkitcdn.com/immutadot.svg)](https://npm.runkit.com/immutadot)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://zenika.github.io/immutadot/immutadot)

[![CircleCI](https://circleci.com/gh/Zenika/immutadot.svg?style=shield&circle-token=8b309750f5785783ec9fb4531ba097da60563beb)](https://circleci.com/gh/Zenika/immutadot)
[![codecov](https://codecov.io/gh/Zenika/immutadot/branch/master/graph/badge.svg)](https://codecov.io/gh/Zenika/immutadot)
[![Greenkeeper](https://badges.greenkeeper.io/Zenika/immutadot.svg)](https://greenkeeper.io/)

## [1.0](https://github.com/Zenika/immutadot/releases) is out 🎉

If you were using a previous version of immutad●t, check out the [migrating guide](docs/MIGRATING_TO_1_0.md).

## Installation

immutad●t is available on [npm repository](https://www.npmjs.com/package/immutadot).

using yarn:

```shell
$ yarn add immutadot
```

using npm:

```shell
$ npm install immutadot
```

or you can directly download [sources](https://github.com/Zenika/immutadot/releases).

## Usage

ES modules:

```js
import { set } from 'immutadot'
```

CommonJS:  

```js
const { set } = require('immutadot')
```

### Example

Quickly set nested properties using [set()](https://zenika.github.io/immutadot/immutadot/1.0/core.html#.set)

```js
import { set } from 'immutadot'

const animals = {
  weasels: {
    lutraLutra: {
      commonNames: ['eurasian otter'],
    },
  },
}

const newAnimals = set(animals, 'weasels.lutraLutra.name', 'Lutrinae')
```

Learn more about what immutad●t can do in the [Getting started](https://github.com/Zenika/immutadot/blob/master/docs/GETTING_STARTED.md).

Feel free to [try immutad●t on runkit](https://npm.runkit.com/immutadot).

## Documentation

### Getting started

A fast overview of immutad●t's features is available in the [Getting started](https://github.com/Zenika/immutadot/blob/master/docs/GETTING_STARTED.md) guide.

### API

The detailed API documentations of the different packages are available here:
- [immutadot](https://zenika.github.io/immutadot/immutadot)
- [immutadot-lodash](https://zenika.github.io/immutadot/immutadot-lodash/)

Looking for older versions API documentation? Links are available [here](https://github.com/Zenika/immutadot/blob/master/docs/README.md).

### Migrating from 0.x versions

If you were using a version of immutad●t previous to 1.0, check out the [migrating guide](docs/MIGRATING_TO_1_0.md).

## Performances

A [simple benchmark](https://github.com/Zenika/immutadot/tree/master/packages/immutadot-benchmark/src/updateTodos.spec.js) (freely inspired from one made by [mweststrate](https://github.com/mweststrate) for [immer](https://github.com/mweststrate/immer)) reveals that immutad●t shows good results compared to other libraries.

:warning: The following results should be taken with caution, they may vary depending on the hardware, the JavaScript engine, and the kind of operations performed. This particular test updates 10% out of a list of todos items, and was ran with Node 9.3.0 on an Intel® Core™ i7-6560U CPU @ 2.20GHz.

```
Update small todos list (1000 items):
  ES2015 destructuring: ~16961ops/s (0.06ms/op) on 50000ops
  immutable 3.8.2 (w/o conversion to plain JS objects): ~6538ops/s (0.15ms/op) on 50000ops
  immutable 3.8.2 (w/ conversion to plain JS objects): ~106ops/s (9.43ms/op) on 3195ops
  immer 0.8.1 (proxy implementation w/o autofreeze): ~2191ops/s (0.46ms/op) on 50000ops
  immer 0.8.1 (ES5 implementation w/o autofreeze): ~494ops/s (2.02ms/op) on 14827ops
  immutad●t 1.0.0: ~2431ops/s (0.41ms/op) on 50000ops
Update medium todos list (10000 items):
  ES2015 destructuring: ~1781ops/s (0.56ms/op) on 5000ops
  immutable 3.8.2 (w/o conversion to plain JS objects): ~587ops/s (1.70ms/op) on 5000ops
  immutable 3.8.2 (w/ conversion to plain JS objects): ~10ops/s (100.80ms/op) on 299ops
  immer 0.8.1 (proxy implementation w/o autofreeze): ~185ops/s (5.42ms/op) on 5000ops
  immer 0.8.1 (ES5 implementation w/o autofreeze): ~47ops/s (21.21ms/op) on 1415ops
  immutad●t 1.0.0: ~245ops/s (4.08ms/op) on 5000ops
Update large todos list (100000 items):
  ES2015 destructuring: ~116ops/s (8.61ms/op) on 500ops
  immutable 3.8.2 (w/o conversion to plain JS objects): ~56ops/s (17.95ms/op) on 500ops
  immutable 3.8.2 (w/ conversion to plain JS objects): ~1ops/s (1052.45ms/op) on 29ops
  immer 0.8.1 (proxy implementation w/o autofreeze): ~21ops/s (47.81ms/op) on 500ops
  immer 0.8.1 (ES5 implementation w/o autofreeze): ~4ops/s (275.59ms/op) on 110ops
  immutad●t 1.0.0: ~23ops/s (44.15ms/op) on 500ops
```

## Immutability

In the last few years one of our biggest challenge has been to find an efficient way to detect changes in our data to determine when to re-render our interfaces.

An immutable object is an object that cannot be changed once created. It brings several benefits<sup>[1](#notes)</sup>:

- Data changes detection made simple (Shallow comparison)
- Memoization
- Improve rendering performances
- Explicit data changes
- Avoid side effects

## Our approach

### Concise

[ES2015+](https://mdn.io/JavaScript/Reference) new features are great to deal with arrays and objects. As data structures expand, the code you write to make data immutable gets bigger and less readable. immutad●t uses the dot notation to address this issue.

### Interoperability

immutad●t uses plain JavaScript objects so you can access your data using standard ways. Moreover, it lets you freely enjoy your favorite libraries.

### Exhaustive and yet extensible

immutad●t comes with a large set of built-in utilities, mostly based on [ES2015+](https://mdn.io/JavaScript/Reference). You can also find a package called [immutadot-lodash](https://github.com/Zenika/immutadot/tree/master/packages/immutadot-lodash) with some of [lodash](https://lodash.com/)'s utilities. You haven't found what you're looking for? Do it yourself with the [`convert`](https://zenika.github.io/immutadot/immutadot/1.0/core.html#.convert) feature.

### Learning curve

If you are already familiar with [ES2015+](https://mdn.io/JavaScript/Reference) and [lodash](https://lodash.com/) then you should be able to use immutad●t quickly.

## Contributing

We want contributing to immutad●t to be fun, enjoyable, and educational for anyone, and everyone.

### [Code of Conduct](https://github.com/Zenika/immutadot/blob/master/.github/CODE_OF_CONDUCT.md)

In the interest of fostering an open and welcoming environment, we have adopted a Code of Conduct that we expect project participants to commit to. Please read the [full text](https://github.com/Zenika/immutadot/blob/master/.github/CODE_OF_CONDUCT.md) so that you can understand what behavior will and will not be tolerated.

### [Contributing guide](https://github.com/Zenika/immutadot/blob/master/.github/CONTRIBUTING.md)

If you are interested in contributing to immutad●t, please read our [contributing guide](https://github.com/Zenika/immutadot/blob/master/.github/CONTRIBUTING.md) to learn more about how to suggest bugfixes and improvements.

## License

immutad●t is [MIT licensed](https://github.com/Zenika/immutadot/blob/master/LICENSE.md).

## Notes

- [1](#immutability): You can find more informations about immutability and its benefits in the following article http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/

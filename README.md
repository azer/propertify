## propertify

Propertify given object by applying [property](http://github.com/azer/property) to each property.

## Install

```bash
$ npm install propertify
```

## Usage

```js
propertify = require('propertify')

obj = propertify({ foo: 'bar', span: 'eggs' })

obj.foo()
// => 'bar'

obj.span()
// => 'eggs

obj.foo('strange')

obj.foo()
// => 'strange'
```

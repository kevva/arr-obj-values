# arr-obj-values [![Build Status](https://travis-ci.org/kevva/arr-obj-values.svg?branch=master)](https://travis-ci.org/kevva/arr-obj-values)

> Get the values of an array of objects


## Install

```
$ npm install --save arr-obj-values
```


## Usage

```js
var arrObjValues = require('arr-obj-values');

arrObjValues([{
	cat: 'meow'
}, {
	foo: 'bar'
}, {
	unicorn: 'meow'
}, {
	cat: 'foo'
}]);
//=> ['meow', 'bar', 'foo']
```


## API

### arrObjValues(array)

#### array

*Required*  
Type: `array`

An array of objects with the values you want to get.


## License

MIT © [Kevin Martensson](http://github.com/kevva)

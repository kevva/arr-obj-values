'use strict';
var deepEqual = require('deep-equal');
var test = require('ava');
var arrObjKeys = require('./');

test(function (t) {
	var arr = arrObjKeys([{
		cat: 'meow'
	}, {
		foo: 'bar'
	}, {
		unicorn: 'meow'
	}, {
		cat: 'foo'
	}]);

	t.assert(deepEqual(arr, ['meow', 'bar', 'meow', 'foo']));
});

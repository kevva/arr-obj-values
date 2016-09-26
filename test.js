import test from 'ava';
import m from './';

test('get values from an array of objects', t => {
	t.deepEqual(m([{
		cat: 'meow',
		foo: 'unicorn'
	}, {
		foo: 'bar'
	}, {
		unicorn: 'meow'
	}, {
		cat: 'foo',
		hello: ['there']
	}]), ['meow', 'unicorn', 'bar', 'meow', 'foo', ['there']]);
});

test('accepts an array', t => {
	t.throws(m.bind(null, 'string'), 'Expected an `Array`, got `string`');
});

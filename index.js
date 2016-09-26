'use strict';
const objectValues = require('object-values');

module.exports = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError(`Expected an \`Array\`, got \`${typeof arr}\``);
	}

	return arr.map(x => objectValues(x)).reduce((a, b) => a.concat(b), []);
};

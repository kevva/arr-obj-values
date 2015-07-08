'use strict';
var objectValues = require('object-values');

module.exports = function (arr) {
	var ret = [];

	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	for (var i = 0; i < arr.length; i++) {
		ret = ret.concat(objectValues(arr[i]));
	}

	return ret;
};

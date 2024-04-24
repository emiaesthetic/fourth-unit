'use strict';

const addPrefix = (words, prefix) => {
	const result = [];

	for (const word of words) {
		result.push(`${prefix} ${word}`);
	}

	return result;
};

const names = [
	'Noah',
	'Liam',
	'Mason',
	'Jacob',
	'Robot',
	'William',
	'Ethan',
	'Michael',
	'Alexander',
];

const prefixedNames = addPrefix(names, 'Mr');
console.log(prefixedNames);

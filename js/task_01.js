'use strict';

const randomNumberGenerator = (length) => {
	const numbers = [...Array(length)].map(() => {
		return Math.ceil(Math.random() * 100);
	});

	return numbers;
};

console.log(randomNumberGenerator(10));

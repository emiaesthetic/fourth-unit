'use strict';

const randomNumberGenerator = (length, n, m) => {
	const [start, end] = n > m ? [m, n] : [n, m];

	const randomNumbers = [...Array(length)].map(() => {
		return Math.floor(start + Math.random() * (end - start + 1));
	});

	return randomNumbers;
};

console.log(randomNumberGenerator(10, 10, 20));

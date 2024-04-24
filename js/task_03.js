'use strict';

const evenRandomNumber = (min, max) => {
	const number = Math.floor(min + Math.random() * (max - min));
	const evenNumber = number % 2 ? number + 1 : number;
	return evenNumber;
};

const oddRandomNumber = (min, max) => {
	const number = Math.floor(min + Math.random() * (max - min));
	const oddNumber = number % 2 ? number : number + 1;
	return oddNumber;
};

const anyRandomNumber = (min, max) => {
	return Math.floor(min + Math.random() * (max - min + 1));
};

const randomNumberGenerator = (length, n, m, characteristic = null) => {
	const [min, max] = n > m ? [m, n] : [n, m];

	switch (characteristic) {
		case 'even':
			const evenRandomNumbers = [...Array(length)].map(() => {
				return evenRandomNumber(min, max);
			});
			return evenRandomNumbers;

		case 'odd':
			const oddRandomNumbers = [...Array(length)].map(() => {
				return oddRandomNumber(min, max);
			});
			return oddRandomNumbers;

		default:
			const randomNumbers = [...Array(length)].map(() => {
				return anyRandomNumber(min, max);
			});
			return randomNumbers;
	}
};

console.log(randomNumberGenerator(10, 1, 50, 'odd'));

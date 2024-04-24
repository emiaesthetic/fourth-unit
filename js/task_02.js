'use strict';

const getAverageValue = (numbers) => {
	let sum = 0;

	for (const number of numbers) {
		sum += number;
	}

	return Math.floor(sum / numbers.length);
};

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const averageCheck = getAverageValue(allCashbox);
console.log(averageCheck);

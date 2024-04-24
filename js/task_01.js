'use strict';

function getPriceRubles(euroPrice) {
	const euroDollarRate = 1.2;
	const dollarRublesRate = 73;

	return euroPrice * euroDollarRate * dollarRublesRate;
}

const result = getPriceRubles(20);
console.log(`Цена в рублях: ${result}`);

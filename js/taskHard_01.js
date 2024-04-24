'use strict';

const userSalary = +prompt('Введите свой доход: ');

const minIncome = 15000;
const maxIncome = 50000;

const minTaxRate = 0.13;
const midTaxRate = 0.2;
const maxTaxRate = 0.3;

let incomeTax = 0;
if (userSalary > 0 && userSalary <= minIncome) {
	incomeTax = userSalary * minTaxRate;
} else if (userSalary > minIncome && userSalary <= maxIncome) {
	incomeTax = userSalary * midTaxRate;
} else if (userSalary < maxIncome) {
	incomeTax = userSalary * maxTaxRate;
}

console.log(`Сумма налога равна ${incomeTax}`);

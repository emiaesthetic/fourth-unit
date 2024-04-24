'use strict';

const firstValue = +prompt('Введите первое число: ', 0);
const secondValue = +prompt('Введите второе число: ', 0);

const getMinValue = (a, b) => a > b ? b : a;

const result = getMinValue(firstValue, secondValue);
console.log(result);

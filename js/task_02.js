'use strict';

const getSumArray = array => {
  if (array.length === 1) return array[0];
  return array[0] + getSumArray(array.slice(1));
};

const addRandomNumber = array => array.push(Math.floor(Math.random() * 10 + 1));

const checkSumArray = array => {
  addRandomNumber(array);

  if (getSumArray(array) >= 50) return array;
  return checkSumArray(array);
};

const result = checkSumArray([1, 2, 3]);
console.log(result);

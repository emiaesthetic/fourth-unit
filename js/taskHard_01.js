'use strict';

const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
}

const result = gcd(81, 54);
console.log(result);

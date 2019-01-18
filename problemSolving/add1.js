const {perfTime} = require('../performance');

function add(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function add2(n) {
  return n * (n + 1) / 2;
}

function add3(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

function add4(arr) {
  let sum = 0;
  arr.forEach(n => sum += n);
  return sum;
}

perfTime(add, 10);
perfTime(add2, 10);

const arr = [...Array(123456).keys()];

perfTime(add3, arr);
perfTime(add4, arr);
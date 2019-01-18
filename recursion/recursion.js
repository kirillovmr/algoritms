/**
 * Recursion 
 */

function countDown(num) {
  if (num <= 0) return;
  console.log(num);
  countDown(--num);
}

// countDown(5);

function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(--num);
}

// console.log('[sumRange]:', sumRange(10));

function countFromTo(from, to) {
  if (from > to) return null;
  if(from === to) return to;
  return from + countFromTo(++from, to);
}

// console.log('[countFromTo]:', countFromTo(1, 10));

function factorial(num) {
  if (num < 1) return null;
  return num === 1 ? 1 : num * factorial(--num);
}

// console.log('[factorial]:', factorial(5));

function collectOddValues(arr) {
  let result = [];

  (function helper(input) {
    if(input.length === 0) return;

    if(input[0] % 2 !== 0)
      result.push(input[0]);

    helper(input.slice(1));
  })(arr);
  // helper(arr);

  return result;
}

// console.log('[collectOddValues]:', collectOddValues([1,2,3,4,5,6,7]));

function collectOddValuesPure(arr, res=[]) {
  if (arr.length === 0) return;

  if(arr[0] % 2 !== 0)
    res.push(arr[0]);

  collectOddValuesPure(arr.slice(1), res);

  return res;
}

// console.log('[collectOddValuesPure]:', collectOddValuesPure([1,2,3,4,5,6,7]));
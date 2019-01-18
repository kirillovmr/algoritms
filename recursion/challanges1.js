function power(num, to) {
  if (to === 0) return 1;
  return num * power(num, --to);
}

// console.log('[Power]:', power(2,0));
// console.log('[Power]:', power(2,2));
// console.log('[Power]:', power(2,4));

function factorial(num) {
  return num === 0 ? 1 : num * factorial(--num);
}

// console.log('[factorial]:', factorial(0));
// console.log('[factorial]:', factorial(1));
// console.log('[factorial]:', factorial(2));
// console.log('[factorial]:', factorial(4));
// console.log('[factorial]:', factorial(7));

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log('[productOfArray]:', productOfArray([1,2,3]));
// console.log('[productOfArray]:', productOfArray([1,2,3,10]));

function recursiveRange(n){
  if (n === 0) return 0;
  return n + recursiveRange(--n);
}

// console.log('[recursiveRange]:', recursiveRange(6));
// console.log('[recursiveRange]:', recursiveRange(10));

function fib(num){
  if (num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}

// console.log('[fib]:', fib(4))// 3
// console.log('[fib]:', fib(10)) // 55
// console.log('[fib]:', fib(28)) // 317811
// console.log('[fib]:', fib(35)) // 9227465
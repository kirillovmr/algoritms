const { performance } = require('perf_hooks');

// Receives numbers / array with numbera as arguments
function ssum(...nums) {
  // Sum first element if it is an array
  if (typeof nums[0] === 'object')
    nums[0] = nums[0].reduce((acc, val) => acc + val);

  // Sum all inputs together
  return nums.reduce((acc, val) => {

    // If current element is an array - sum it
    if (typeof val === 'object')
      return acc + val.reduce((acc2, val2) => acc2 + val2);
    return acc + val
  });
}

let t1 = performance.now();
ssum( [1,1], 1, [1,2,3], [1,2,3] );
let t2 = performance.now();
console.log(`w arrays: \t${(t2-t1) / 1000 } sec.`);

let t3 = performance.now();
ssum( 1,2,3,4,5,6,7,8,9,10 );
let t4 = performance.now();
console.log(`w/o arrays: \t${(t4-t3) / 1000 } sec.`);
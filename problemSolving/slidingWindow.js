/**
 * Sliding window pattern
 */
//                i
const t3arr1 = [1,2,5,2,8,1,5] //,2 = 10
//                    j
//                             //,4 = 17
const t3arr2 = [] //,4 = null

function maxSubarraySum(arr, n) {
  if(arr.length < n)
    return null;

  let sum = -Infinity;

  for (let i=0, j=n-1; j < arr.length; i++, j++) {
    let curSum = arr.slice(i, j+1).reduce((acc, val) => acc + val);
    sum = curSum > sum ? curSum : sum;
  }

  return sum;
}

console.log('[maxSubarraySum]:', maxSubarraySum(t3arr1, 3));

//                    i
const t3arr3 = [1,2,5,2,8,1,5] //,3 = 15
//                j
//                  k

function maxSubarraySum2(arr, n) {
  if(arr.length < n) return null;

  // Creating pointers
  let indexes = {},
        maxSum = 0;
        curSum = 0;
  for (let i = 0; i < n; i++) {
    indexes[i] = i;
    curSum += arr[i];
  }

  // Going through array
  for (let i = 0; i < arr.length; i++) {
    
    // const log = Object.keys(indexes).map(index => {
    //   return arr[indexes[index]];
    // }); // Just for log
    // console.log('PREV:', log, 'MaxSum:', maxSum);

    const firstIndex = i % n;
    curSum = curSum - arr[indexes[firstIndex]]; // Minus previous value

    indexes[firstIndex] += n;
    if (indexes[firstIndex] >= arr.length)
      break;

    curSum += arr[indexes[firstIndex]];
    maxSum = Math.max(curSum, maxSum); 
  }

  return maxSum;
}

console.log('[maxSubarraySum2]:', maxSubarraySum2(t3arr1, 3));
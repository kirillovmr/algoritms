/**
 * Frequency counter
 */

function sameFrequency(num1, num2) {
  let n1 = num1.toString(),
      n2 = num2.toString();

  if (n1.length !== n2.length) return false;

  const freq1 = {},
        freq2 = {};

  for (const l of n1)
    freq1[l] = (freq1[l] || 0) + 1;
  for (const l of n2)
    freq2[l] = (freq2[l] || 0) + 1;

  for (const key in freq1) {
    if (!freq2[key])
      return false;
    if (freq1[key] !== freq2[key])
      return false;
  }

  return true;
}

// console.log('[sameFrequency]:', sameFrequency(182, 281)); // true
// console.log('[sameFrequency]:', sameFrequency(34, 14)); // false
// console.log('[sameFrequency]:', sameFrequency(3589578, 5879385)); // true
// console.log('[sameFrequency]:', sameFrequency(22, 222)); // false

/**
 * Are There Duplicates
 */

function areThereDuplicates(...args) {
  const freq = {};

  for (const arg of args)
    if(freq[arg])
      return true;
    else
      freq[arg] = 1;
  
  return false;
}

function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}

// console.log('[areThereDuplicates]:', areThereDuplicates(1,2,3)); // false
// console.log('[areThereDuplicates]:', areThereDuplicates(1,2,2)); // true
// console.log('[areThereDuplicates]:', areThereDuplicates('a', 'b', 'c', 'a')); // true

/**
 * Avarege Pair | Input - sorted array, value.
 * Look not for a consequative pair
 */

function averagePair(arr, val){
  if (arr.length < 2) return false;

  let p1 = 0,
      p2 = 1;

  while (p1 < arr.length - 1) {
    
    const avg = (arr[p1] + arr[p2]) / 2;
    // console.log(arr[p1], arr[p2], avg);

    if(avg < val) {
      if (p2 !== arr.length - 1)
        p2++;
      else {
        p1++;
        p2 = p1 + 1;
      }
    }
    else if (avg > val) {
      p1++; 
      p2 = p1 + 1;
    }
    else {
      return true;
    }
  }
  
  return false;
}

// console.log('[averagePair]:', averagePair([1,2,3], 2.5)); // true
// console.log('[averagePair]:', averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
// console.log('[averagePair]:', averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log('[averagePair]:', averagePair([], 4)); // false

/**
 * Find Subsequence in Sequence
 * Search str1 in str2
 */

function isSubsequence(what, where) {
  let p1 = 0,
      p2 = 0;

  while (p2 < where.length) {
    if (where[p2] === what[p1])
      p1++;
    p2++;

    if (p1 === what.length)
      return true;
  }
  return false;
}

// console.log('[isSubsequence]:', isSubsequence('hello', 'hello world')); // true
// console.log('[isSubsequence]:', isSubsequence('sing', 'sting')); // true
// console.log('[isSubsequence]:', isSubsequence('abc', 'abracadabra')); // true
// console.log('[isSubsequence]:', isSubsequence('abc', 'acb')); // false

/**
 * Max Subarray Sum
 */

function maxSubarraySum(arr, len){
  if (arr.length < len) return null;

  let max = 0,
      cur = 0;

  for (let i = 0; i < len; i++)
    max += arr[i];

  cur = max;
  for (let i = len; i < arr.length; i++) {
    cur = cur - arr[i-len] + arr[i];
    max = Math.max(max,cur);
  }
  return max;
}

// console.log('[maxSubarraySum]:', maxSubarraySum([100, 200, 300, 400], 2)) // 700
// console.log('[maxSubarraySum]:', maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
// console.log('[maxSubarraySum]:', maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log('[maxSubarraySum]:', maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
// console.log('[maxSubarraySum]:', maxSubarraySum([2,3], 3)) // null
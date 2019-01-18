/**
 * Return pair which sum is zero. Input - sorted array
 */

const t1arr1 = [-4,-3,-2,-1,0,1,2,5];
const t1arr2 = [-4,3];

function sumZero(arr) {
  let steps = 0;
  for (let left = 0, right = arr.length-1; left < right;) {
    steps++;
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      console.log(`[sumZero]: ${steps} steps`);
      return [arr[left], arr[right]];
    } 
    else if (sum > 0) {
      right--;
      continue;
    } else {
      left++;
      continue;
    }
  }
  console.log(`[sumZero]: ${steps} steps`);
}

console.log('[sumZero]:', sumZero(t1arr1));

/**
 * Count Unique Values. Input - sorted array
 */
//                i
const t2arr1 = [1,1,1,1,2,2,2,4];
//                        j
const t2arr2 = [1,2,3,4,4,4,7,7,12,13,13];
const t2arr3 = [1];

function countUnique(arr) {
  if (arr.length < 2)
    return arr.length;

  let i = 0, j = 1, unique = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      unique ++;
      i = j;
    } 
    j ++;
  }
  return unique;
}

console.log('[countUnique]:', countUnique(t2arr1));

function countUnique2(arr) {
  if (arr.length < 2)
    return arr.length;

  let i = 0, j = 1;

  while (j<arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i+1;
}

console.log('[countUnique2]:', countUnique2(t2arr1));
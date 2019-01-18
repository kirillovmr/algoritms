/**
 * Binary search | Input - sorted array, search value
 */

const t1arr1 = [1,2,3,4,5,6,7,8,9,10];

function search(arr, val) {
  let min = 0,
      max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val)
      min = middle + 1;
    else if (currentElement > val)
      max = middle - 1;
    else
      return middle;
  }
  return -1;
}

console.log('Result index:', search(t1arr1, 10));
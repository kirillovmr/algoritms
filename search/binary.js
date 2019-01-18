/**
 * Time Complexity O(log n) || O(1)
 * Input - sorted array
 */

function binary(value, arr) {
  let start = 0,
        end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const el = arr[middle];
    
    if (el > value)
      end = middle - 1;
    else if (el < value)
      start = middle + 1;
    else
      return middle;
  }
  
  return -1;
}

console.log("[binary]:", binary('D', ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'K', 'L']));
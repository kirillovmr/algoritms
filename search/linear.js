/**
 * Time Complexity O(N);
 */

function linearSearch(value, arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === value) return i;
  return -1;
}

console.log("[linearSearch]:", linearSearch('David', ['Nick', 'David', 'Mike']));


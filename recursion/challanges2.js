function reverse(str, res=[]) {
  str = typeof str === 'string' ? str.split('') : str;
  if(str.length === 0) return;
  
  res.push(str.pop());
  reverse(str, res);

  return res.join('');
}

// console.log('[reverse]:', reverse('awesome'));
// console.log('[reverse]:', reverse('rithmschool'));


function isPalindrome(str) {
  str = typeof str === 'string' ? str.split('') : str;
  if (str.length <= 1) return true;
  if (str.pop() === str.shift())
    return isPalindrome(str);
  else
    return false;
}

// console.log('[isPalindrome]:', isPalindrome('awesome'));
// console.log('[isPalindrome]:', isPalindrome('foobar'));
// console.log('[isPalindrome]:', isPalindrome('tacocat'));
// console.log('[isPalindrome]:', isPalindrome('amanaplanacanalpanama'));
// console.log('[isPalindrome]:', isPalindrome('amanaplanacanalpandemonium'));


function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr.pop())) return true;
  return someRecursive(arr, cb);
}
const isOdd = val => val % 2 !== 0;

// console.log('[someRecursive]:', someRecursive([1,2,3,4], isOdd));
// console.log('[someRecursive]:', someRecursive([4,6,8,9], isOdd));
// console.log('[someRecursive]:', someRecursive([4,6,8], isOdd));
// console.log('[someRecursive]:', someRecursive([4,6,8], val => val > 10));


function flatten(arr, res=[]){
  if (arr.length === 0) return;
  const pop = arr.pop();
  if (typeof pop === 'number')
    res.push(pop);
  else
    res.push(flatten(pop));
  flatten(arr,res);
  return res;
}

console.log('[flatten]:', flatten([1, 2, 3, [4, 5] ]));
console.log('[flatten]:', flatten([1, [2, [3, 4], [[5]]]]));
console.log('[flatten]:', flatten([[1],[2],[3]]));
console.log('[flatten]:', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
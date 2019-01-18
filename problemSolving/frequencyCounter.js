let arr1 = [1,2,3,4], arr2 = [1,4,9,16];

function same(arr1, arr2) {
  let same = true;
  arr1.every((val, i) => {
    if (val*val !== arr2[i])
      return same = false;
    return true;
  })
  return same;
}

// console.log('Same1:', same(arr1, arr2));

/**
 * Arrays can be mixed
 */
let a1 = [1,2,3,1], a2 = [1,9,4,1];

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  let same = true;
  arr1.every(el => {
    const i2 = arr2.indexOf(el ** 2);
    if (i2 !== -1) {
      arr2[i2] = null; // Removing element from array
      return true; // Need to ge to next element in array
    } else {
      return same = false;
    }
  });
  return same;
}

// console.log('Same2:', same2(a1,a2)); 

/**
 * Arrays can be mixed refactor
 */
a1 = [1,2,3], a2 = [1,9,4];

function same3(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  const freqCounter1 = {}, freqCounter2 = {};

  for (const val of arr1)
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  for (const val of arr2)
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;

  for (const key in freqCounter1) {
    if (!freqCounter2[key**2])
      return false;
    if (freqCounter2[key**2] !== freqCounter1[key])
      return false;
  }
  return true;
}

// console.log('Same3:', same3(a1, a2));

/**
 * Anagrams
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length)
    return false;

  const freqCounter1 = {}, freqCounter2 = {};

  for (const l of str1)
    freqCounter1[l] = (freqCounter1[l] || 0) + 1;
  for (const l of str2)
    freqCounter2[l] = (freqCounter2[l] || 0) + 1;

  for (const key in freqCounter1) {
    if (!freqCounter2[key])
      return false;
    if(freqCounter2[key] !== freqCounter1[key])
      return false;
  }

  return true;
}

const str1 = 'helloo';
const str2 = 'lolheo';
console.log('Anagrams:' ,validAnagram(str1, str2));
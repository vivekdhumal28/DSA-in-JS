/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

function findAnagaram(str1, str2) {
  // check length
  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};

  for (let i of str1) {
    counter[i] = (counter[i] || 0) + 1;
  }

  for (let item of str2) {
    if (!counter[item]) {
      return false;
    }
    counter[item]--;
  }

  for (let key in counter) {
    if (counter[key] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(findAnagaram("Vivek", "keviV"));

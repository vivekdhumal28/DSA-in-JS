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

// -----------------------------------------------------------

function validAnagram(s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}
console.log(validAnagram("rat", "atr"));

// -----------------------------------------------------------

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let object1 = {};
  let object2 = {};

  for (let i = 0; i < s.length; i++) {
    object1[s[i]] = (object1[s[i]] || 0) + 1;
    object1[t[i]] = (object1[t[i]] || 0) + 1;
  }
  for (const key in object1) {
    // for...in loop is works for object
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("rat", "tar"));

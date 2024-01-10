/**
 * find first non-repeating character in a string.
 *
 * Input = "leetcode";
 * output = l
 *
 * Input = "vivek";
 * Output = i
 *
 */

function firstNonRepeatingChar(str) {
  let counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let char of str) {
    if (counts[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("vivek"));

/**
 *  If string with Uppercase characters
 *
 * Input = "Vivek"
 * Output = i
 */

function firstNonRepeatingChar(str) {
  let counts = {};

  let lowerStr = str.toLowerCase();

  for (let char of lowerStr) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let char of str) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("VIVEK"));

//Occurences of char in a string

function Occurences(str) {
  let counts = {};

  for (let key of str) {
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;

  // Array of object
  // return Object.entries(counts).map(([char, count]) => ({ char, count }));
}
console.log(Occurences("My name is Vivek"));

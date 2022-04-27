/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let replacedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let start = 0;
  let end = replacedStr.length - 1;
  while (start < end) {
    if (replacedStr[start] !== replacedStr[end]) return false;
    start++;
    end--;
  }
  return true;
};

var isPalindrome = function (s) {
  let replacedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversedStr = s
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase().split('')
    .reverse().join('');
  return replacedStr === reversedStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

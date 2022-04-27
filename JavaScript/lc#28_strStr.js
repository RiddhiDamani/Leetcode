/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.includes(needle);
};

var strStr1 = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr1("hello", "ll"));
console.log(strStr("aaaaa", "bba"));

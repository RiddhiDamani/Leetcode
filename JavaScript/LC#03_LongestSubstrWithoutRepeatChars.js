// O(N+N)
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let longestSubStr = new Set();
  let maxSubStrLen = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    //longestSubStr += s[windowEnd];

    while (longestSubStr.has(s[windowEnd])) {
      longestSubStr.delete(s[windowStart]);
      windowStart++;
    }
    longestSubStr.add(s[windowEnd]);
    maxSubStrLen = Math.max(maxSubStrLen, windowEnd - windowStart + 1);
  }

  return maxSubStrLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

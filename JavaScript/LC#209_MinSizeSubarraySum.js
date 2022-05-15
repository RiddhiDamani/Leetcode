var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) return 0;

  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum = windowSum + nums[windowEnd];

    while (windowSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum = windowSum - nums[windowStart];
      windowStart++;
    }
  }

  if(minLength === Infinity) return 0;

  return minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

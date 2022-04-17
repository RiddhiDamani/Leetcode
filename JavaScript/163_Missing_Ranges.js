/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  let res = [];
  let formattedOutput = [];
  if(nums.length === 1) {
      return [];
  }
  if(nums.length === 0) {
      res.push([lower, upper]);
  }
  for (let i = 0; i < nums.length; i++) {
      
    if (i === nums.length - 1) {
      let lowerbound = nums[i] + 1;
      let upperbound = upper;
      res.push([lowerbound, upperbound]);
    }
    if (nums[i + 1] - nums[i] > 1) {
      let lowerbound = nums[i] + 1;
      let upperbound = nums[i + 1] - 1;
      res.push([lowerbound, upperbound]);
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i][0] === res[i][1]) {
      formattedOutput.push(res[i][0].toString());
    } else {
      formattedOutput.push(res[i][0].toString() + "->" + res[i][1].toString());
    }
  }
  return formattedOutput;
};

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
console.log(findMissingRanges([-1], -1, -1));
console.log(findMissingRanges([], 1, 1));

var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 1 && nums[0] === lower && nums[0] === upper) {
    return [];
  }
};

console.log(findMissingRanges([-1], -1, -1));
//console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));

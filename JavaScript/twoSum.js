var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let x = target - currentNum;

    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(currentNum, i);
  }

  return null;
};

console.log(twoSum([2, 7, 11, 15, 5, 4], 9));
//console.log(twoSum([3, 2, 4], 6));
//console.log(twoSum([3, 3], 6));

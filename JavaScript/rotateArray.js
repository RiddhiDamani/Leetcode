// var rotate = function (nums, k) {
//   let i = 0;
//   while (i < k) {
//     let end = nums.pop();
//     nums.unshift(end);
//     i++;
//   }
//   return nums;
// };

var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[k + i] = nums[i];
  }
  while (k - 1 >= 0) {
    nums[k - 1] = nums.pop();
    k--;
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

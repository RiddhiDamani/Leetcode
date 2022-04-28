var twoSumLessThanK = function (nums, k) {
  let max = 0;

  nums.sort((a, b) => {
    return a - b;
  });
  let i=0;
  let j= i+1;
  while(i < j) {
        let sum = nums[i] + nums[j] ;
        if( sum > max && sum < k) {
            max = sum;
        }
        else {
            
        }
  }
  return nums;
};

console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));

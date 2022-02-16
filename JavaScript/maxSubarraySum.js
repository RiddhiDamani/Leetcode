// Big O(n^2) - Time Complexity

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var maxSubarraySum = function(nums, n) { 
    if(nums.length === 0) {
      return null;
    }
    if(n > nums.length) {
      return null;
    }
    let max = -Infinity;
    for(let i=0; i <= nums.length - n; i++) {  
      let temp = 0;
      for(let j=0; j < n; j++) {
         temp = temp + nums[i+j]
      }
      if(temp > max) {
        max = temp;
      }
     // console.log(temp, max);
    }
  return max;
};

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
console.log(maxSubarraySum([],4));

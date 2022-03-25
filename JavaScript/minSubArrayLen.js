function minSubArrayLen(arr, n) {
  let minSum = 0;
  let tempSum = 0;
  let minSumLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return 1;
    }
  }

  return minSum;
}

// n value is greater than or equal to contiguous subarray
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
//console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
//console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0

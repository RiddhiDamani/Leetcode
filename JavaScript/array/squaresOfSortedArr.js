var sortedSquares = function (nums) {
  let squaredNums = nums
    .map(function (a) {
      return a * a;
    })
    .sort(function (a, b) {
      return a - b;
    });
  return squaredNums;
};

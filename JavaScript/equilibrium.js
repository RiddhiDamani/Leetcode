// JS program to find equilibrium index of an array

// Efficient Algorithm
// Big O(N)
function equilibrium(arr) {
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    rightSum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    rightSum -= arr[i];
  }

  return -1;
}

// Time Complexity: O(n)
// function equilibrium(arr) {
//   let leftSum, rightSum;
//   for (let i = 0; i < arr.length; i++) {
//     // get left sum
//     leftSum = 0;
//     for (let j = 0; j < i; j++) {
//       leftSum += arr[j];
//     }

//     rightSum = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       rightSum += arr[j];
//     }

//     if (leftSum === rightSum) return i;
//   }

//   return -1;
// }

console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0]));

// Method 1 - ES5
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// Method 2 - ES6
// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

// Optimized version for nearly sorted array
function bubbleSort(arr) {
  var noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2]));
console.log(bubbleSort([51, 32, 14, 1, 332, -5]));

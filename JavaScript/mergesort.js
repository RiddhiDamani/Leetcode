function mergeSort(arr1, arr2, k) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length && res.length < k - 1) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    }
    if (arr2[j] < arr1[i]) {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length && res.length < k) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length && res.length < k) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

let result = mergeSort([1, 10, 50], [2, 14, 99, 100], 3);
console.log(result);

// If the cut length k is greater than size of sum of both arrays, then are we suppose to set to some default values?

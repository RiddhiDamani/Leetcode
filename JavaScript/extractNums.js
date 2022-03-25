// Questions :  Extract a list of numbers from a list of strings such as ["A2D", "1B", "3F5", "67FE2", "AA"] such that the final result would be [2, 1, 3, 5, 67, 2].

function extract(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      if (!isNaN(arr[i][j]) && isNaN(arr[i][j + 1])) {
        res.push(arr[i][j]);
      }
      if (!isNaN(arr[i][j]) && !isNaN(arr[i][j + 1])) {
        temp = temp + arr[i][j];
      }
    }
  }

  return res;
}

console.log(extract(["A2D", "1B", "3F5", "67FE2", "AA"]));

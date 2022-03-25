function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

/** For anyone else confused, we iterate backwards so that we can copy the values (to make space in the array) //without losing something we need. To my understanding, if we iterated forwards, we would have to save a temporary value on every inner-loop iteration so that we don't overwrite a value we need. (Not positive about that - never got the forward-iteration implementation working) Only once I understood the algorithm did I realize that iterating forwards was just creating a lot more work for myself.

Mental cue: Imagine trying to file a sheet of paper in a binder, and you start from the back of the binder. Turn the page, keep turning until you find the right spot, then add the sheet.

**/

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1; j--) {
      // the place we're looking is still too big -> copy value to the right to make room
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];

        // don't need to copy anymore because we've successfully made room
      } else {
        break;
      }
    }
    // put our currentVal in the spot we created for it
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Another approach
function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        arr.splice(j, 0, arr[i]);
        arr.splice(i + 1, 1);
      }
    }
  }
  return arr;
}
console.log(insertionSort([1, 2, 9, 76, 20]));

function solution(A) {
  if (A.length === 0) return 0;
  if (A.length === 1) return 1;

  // stack keeps track of the slices
  let stack = [];
  stack.push(0);
  for (let i = 1; i < A.length; i++) {
    if (A[i] >= A[i - 1]) {
      stack.push(i);
    }
    for (let j = i; j > 0 && A[j] < A[j - 1]; j--) {
      let temp = A[j];
      A[j] = A[j-1];
      A[j-1] = temp;
      if (j <= stack.peek()) {
        stack.pop();
      }
    }
  }
  return stack.length;
}

Array.prototype.peek = function () {
  if (this.length === 0) {
    throw new Error("Array Index Out of Bounds");
  }
  return this[this.length - 1];
};

console.log(solution([2, 4, 1, 6, 5, 9, 7]));
console.log(solution([4, 3, 2, 6, 1]));
console.log(solution([2, 1, 6, 4, 3, 7]));
console.log(solution([]));

// function solution(A, B) {
//   var startHours = parseInt(A.slice(0, 2));
//   var startMins = parseInt(A.slice(3));
//   var finishHours = parseInt(B.slice(0, 2));
//   var finishMins = parseInt(B.slice(3));
//   var sum = 0;

//   if (finishHours < startHours) {
//     sum = 24 * 60;
//   }
//   if (finishHours === startHours && finishMins < startMins) {
//     sum = 24 * 60;
//   }

//   // Converting the start and end times in minutes for futher checking the number of rounds played by John
//   let startTimeMinutes = startMins + startHours * 60;
//   let finishTimeMinutes = finishMins + sum + finishHours * 60;
//   let maxNumOfFullRounds = calculateRounds(startTimeMinutes, finishTimeMinutes);

//   return maxNumOfFullRounds;
// }

// const calculateRounds = (startTimeMinutes, finishTimeMinutes) => {
//   let count = 0;
//   for (let i = startTimeMinutes; i <= finishTimeMinutes; i++) {
//     if (i % 15 === 0) {
//       count = count + 1;
//     }
//   }
//   return count === 0 ? count : count-1;
// };

// console.log(solution("12:01", "12:44"));
// console.log(solution("20:00", "06:00"));
// console.log(solution("00:00", "23:59"));
// console.log(solution("12:03", "12:03"));
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S, A) {
//   if (S.length !== A.length) return "";
//   if (S.length === null || A.length === 0) return "";
//   let dupArr = duplicateCheck(A);
//   if (dupArr.length !== 0) return "";

//   let message = "";
//   let i = 0;

//   do {
//     message += S[i];
//     i = A[i];
//   } while (i < S.length && message.length <= S.length && i !== 0);

//   return message;
// }

// const duplicateCheck = (arr) =>
//   arr.filter((item, index) => arr.indexOf(item) !== index);

// console.log(solution("cdeo", [3, 2, 2, 1]));
// console.log(solution("cdeenetpi", [5, 2, 0, 1]));
// console.log(solution("cdeo", [3, 2, 0, 1]));

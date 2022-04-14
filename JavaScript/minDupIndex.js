function solution(a) {
  let minSecOccurrence = a[0];
  let minimalIndex = Infinity;
  let duplicateFound = false;

  for (let i = 0; i < a.length; i++) {
    for (let j = a.length - 1; j > i; j--) {
      if (a[i] === a[j]) {
        if (minimalIndex > j) {
          minSecOccurrence = a[j];
          minimalIndex = j;
        }
        duplicateFound = true;
      }
    }
  }
  return duplicateFound ? minSecOccurrence : -1;
}

console.log(solution([2, 1, 3, 5, 3, 2]));
console.log(solution([2, 4, 3, 5, 1]));

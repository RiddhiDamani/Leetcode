function solution(A) {
  A.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < A.length; i++) {
    if (!A.includes(i) && i > 0) {
      return i;
    }
  }
  return A[A.length - 1] + 1;
}


console.log(solution([-1, -3]));

var myAtoi = function (s) {
  let sign = 1;
  let ans = 0;
  let str = s.trimStart();
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  let i = 0;
  if (str[0] === "-") {
    sign = -1;
  }

  i = str[0] === "+" || str[0] === "-" ? 1 : 0;

  while (i < str.length) {
    if (str[i] === " " || isNaN(str[i])) {
      break;
    } else {
      ans = ans * 10 + (str[i] - "0");
    }
    i++;
  }

  ans = ans * sign;
  if (ans < min) return min;
  if (ans > max) return max;
  return ans;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));

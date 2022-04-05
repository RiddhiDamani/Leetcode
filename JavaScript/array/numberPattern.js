// Number Pattern
// 01
// 01 02
// 01 02 03
// 01 02 03 04
// 01 02 03 04 05
// x = pattern height
function num1Pattern(x) {
  let ans = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      ans += "0" + j + " ";
    }
    ans += "\n";
  }
  console.log(ans);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function num2Pattern(x) {
  let ans = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      ans += j;
    }
    ans += "\n";
  }
  console.log(ans);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function num3Pattern(x) {
  let ans = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      ans += i;
    }
    ans += "\n";
  }
  console.log(ans);
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
function num4Pattern(x) {
  let ans = "";
  let count = 1;
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      ans += count;
      count++;
    }
    ans += "\n";
  }
  console.log(ans);
}

// 12345
// 1234
// 123
// 12
// 1
function num5Pattern(x) {
  let ans = "";
  for (let i = x; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      ans += j;
    }
    ans += "\n";
  }
  console.log(ans);
}

// 54321
// 5432
// 543
// 54
// 5
function num6Pattern(x) {
  let ans = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x - i + 1; j++) {
      ans += x - j + 1;
    }
    ans += "\n";
  }
  console.log(ans);
}

// 54321
// 4321
// 321
// 21
// 1
function num7Pattern(x) {
  let ans = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x - i + 1; j++) {
      ans += x - j - i + 2;
    }
    ans += "\n";
  }
  console.log(ans);
}

num1Pattern(5);
num2Pattern(5);
num3Pattern(5);
num4Pattern(4);
num5Pattern(5);
num6Pattern(5);
num7Pattern(5);

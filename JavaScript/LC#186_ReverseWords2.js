var reverseWords = function (s) {
  if (s.length === 0) {
    return [];
  }
  if (s.length === 1) {
    return s;
  }
  let i = 0;
  let j = s.length - 1;

  // reverse entire array
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }

  i = 0;
  let flag = false;
  // reverse each word
   

  return s;
};
console.log(
  reverseWords([
    "t",
    "h",
    "e",
    " ",
    "s",
    "k",
    "y",
    " ",
    "i",
    "s",
    " ",
    "b",
    "l",
    "u",
    "e",
  ])
);

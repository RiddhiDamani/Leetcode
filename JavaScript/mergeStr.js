function solution(s1, s2) {
  let record1 = {};
  let record2 = {};

  var res = [];

  for (let i in s1) {
    if (record1[s1[i]]) record1[s1[i]]++;
    else record1[s1[i]] = 1;
  }

  for (let j in s2) {
    if (record2[s2[j]]) record2[s2[j]]++;
    else record2[s2[j]] = 1;
  }

  console.log(record1);
  console.log(record2);

  // merge with two pointers
  var len1 = s1.length;
  var len2 = s2.length;
  var i = 0;
  var j = 0;

  while (i < len1 && j < len2) {
    if (record1[s1[i]] < record2[s2[j]]) {
      res.push(s1[i]);
      i++;
    } else if (record1[s1[i]] > record2[s2[j]]) {
      res.push(s2[j]);
      j++;
    } else {
      // if equal times
      if (s1[i] <= s2[j]) {
        res.push(s1[i]);
        i++;
      } else if (s1[i] > s2[j]) {
        res.push(s2[j]);
        j++;
      }
    }
  }

  // Append the remaining characters
  // of any of the two strings
  while (i < len1) {
    res.push(s1[i]);
    i++;
  }
  while (j < len2) {
    res.push(s2[j]);
    j++;
  }

  let ans = "";
  // Print the final string
  res.forEach((a) => {
    ans = ans + a;
  });
  return ans;
}

console.log(solution("dce", "cccbdec"));

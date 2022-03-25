function validAnagram(s, t) {
  let obj1 = {};
  let obj2 = {};
  for (let char of s) {
    if (obj1[char]) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }
  for (let char of t) {
    if (obj2[char]) {
      obj2[char]++;
    } else {
      obj2[char] = 1;
    }
  }
  console.log(obj1);
  console.log(obj2);
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

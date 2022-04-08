function stringSearch(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      console.log(shortStr[j], longStr[i + j]);
      if (longStr[i + j] !== shortStr[j]) {
        console.log("BREAK!!");
        break;
      }
      if (j === shortStr.length - 1) {
        //console.log("FOUND ONE!");
        count += 1;
      }
    }
  }
  return count;
}

console.log(stringSearch("wowomgzomg", "omg"));

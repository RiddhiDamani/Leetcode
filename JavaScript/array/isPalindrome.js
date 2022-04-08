function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (i !== j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("mother"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("riddhi"));

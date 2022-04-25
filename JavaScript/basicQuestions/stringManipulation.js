// Challenge # 1 — Counting duplicate characters
// A very common programming interview question is that given a string you need to find out the duplicate characters in the string.

// Input: “adsjfdsfsfjsdjfhacabcsbajda”
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

// The first solution iterates the string characters and use a dictionary <key, value> to store the characters as keys and the number of occurences as values.

var duplicateChars = function (str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    if (!res[str[i]]) res[str[i]] = 1;
    else res[str[i]]++;
  }
  return res;
};

// We turn the string into a character array and then sort the array and put them together to form a new string. As this string is sorted, we can use a regular expression (here is /(.)\1+/g) to match the repeated characters.
const count_duplicate_characters = function (str) {
  let res = {};
  let arr = [...str.toLowerCase()]
    .sort()
    .join("")
    .match(/(.)\1+/g);
  if (arr !== null) {
    arr.forEach((element) => {
      res[element[0]] = element.length;
    });
  }
  return res;
};

var input = "adsjfdsfsfjsdjfhacabcsbajda";
console.log(count_duplicate_characters(input));

// Challenge #2 — Finding the first non-repeated character

const first_non_repeated_character = function (str) {
  let res = {};

  for (let i = 0; i < str.length; i++) {
    if (!res[str[i]]) res[str[i]] = 1;
    else res[str[i]]++;
  }
  console.log(res);
  for (let char in res) {
    if (res[char] === 1) return char;
  }
  return "_";
};

function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";
}

// We will re-solve the problem in the single traversal approach. Here, we use a flag array with 256 items to store non-repeated characters and then we find smallest index containing a non-repeated character.

const EXTENDED_ASCII_CODES = 256;

const first_non_repeated_character1 = function (str) {
  var flags = [];
  for (let i = 0; i < EXTENDED_ASCII_CODES; i++) {
    flags.push(-1);
  }

  for (let j = 0; j < str.length; j++) {
    var ch = str.charCodeAt(j);
    if (flags[ch] == -1) {
      flags[ch] = j;
    } else {
      flags[ch] = -2;
    }
  }

  var position = Number.MAX_SAFE_INTEGER;

  for (let k = 0; k < EXTENDED_ASCII_CODES; k++) {
    if (flags[k] > 0) {
      position = Math.min(position, flags[k]);
    }
  }

  return str[position];
};

var input = "abacabad";
console.log(first_non_repeated_character1(input));

// Challenge # 3 — Reversing letters and words

const reverse = function (str) {
  let res = str
    .split(" ")
    .map(function (item) {
      return item.split("").reverse().join("");
    })
    .join(" ");
  return res;
};
var test_string = "emocleW ot SJ ni nialP hsilgnE";
console.log(reverse(test_string));

// Challenge # 4 — Checking whether a string is a palindrome
// a palindrome looks unchanged when it’s reversed.

const is_palindrome = function (str) {
  return str === str.split("").reverse().join("");
};

const is_palindrome1 = function (str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const is_palindrome2 = function (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      return false;
    }
  }
  return true;
};

console.log(is_palindrome1("madame"));

// Challenge #5 — Sorting an array of strings by length

const sortStrByLength = function (arr) {
  return arr.sort((a, b) => a.length - b.length);
};

const sortStrByLength1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && temp.length < arr[j].length) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

console.log(sortStrByLength1(["You", "are", "beautiful", "looking"]));

// Challenge # 6 — Checking that a string contains a substring
const string = "foo";
const substring = "oo";
console.log(string.includes(substring));
// Alternatively, a solution can be implemented by relying on String.prototype.indexOf():
console.log(string.indexOf(substring));
console.log(string.indexOf(substring) !== -1);

// Challenge # 7 — Checking whether two strings are anagrams
// An anagram of a string is another string that contains same characters, only the order of characters can be different

// Quick one-liner solution with javascript functions - toLowerCase(), split(), sort() and join():

// 1. Convert input string to lowercase
// 2. Make array of the string with split()
// 3. Sort the array alphabetically
// 4. Now join the sorted array into a string using join()
function Compare(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

// Efficient Algo
//using {} for fast lookups
function Anagrams(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    const remainingChars = str1.length - (i + 1);

    lookup[char1] = (lookup[char1] || 0) + 1;
    lookup[char2] = (lookup[char2] || 0) - 1;

    if (lookup[char1] > remainingChars || lookup[char2] > remainingChars) {
      return false;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (lookup[str1[i]] !== 0 || lookup[str2[i]] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(Anagrams("abc", "cba")); //true
console.log(Anagrams("abcc", "cbaa")); //false
console.log(Anagrams("abc", "cde")); //false
console.log(Anagrams("aaaaaaaabbbbbb", "bbbbbbbbbaaaaa")); //false
console.log(Anagrams("banana", "ananab")); //true

console.log(Compare("Listen", "Silent")); //true
console.log(Compare("Mary", "arms")); //false

// Challenge # 8 — Given a string, return all permutations of the string.

const permutations = (str, res) => {
  if (str.length === 0) {
    console.log(res);
  }
  for (let i = 0; i < str.length; i++) {
    let rest = str.substring(0, i) + str.substring(i + 1);
    //console.log("rest:", rest);
    permutations(rest, res + str[i]);
  }
};
permutations("let", "");

const permute_and_print = function (str) {
  permute("", str);
};

const permute = function (prefix, str) {
  var n = str.length;
  if (n == 0) {
    console.log(prefix + "");
  }
  if (n != 0) {
    for (let i = 0; i < n; i++) {
      permute(
        prefix + str.charAt(i),
        str.substring(i + 1, n) + str.substring(0, i)
      );
    }
  }
};
permute_and_print("ABC");
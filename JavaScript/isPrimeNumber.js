// Prime numbers: 2, 3, 5, 7, 11, 13, 17, ...

const isPrime = function (x) {
  if (x == 1) {
    return false;
  }

  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return true;
    }
  }

  return false;
};

console.log(isPrime(17));

//Two is the only even Prime number.
/*Every prime number can be represented in form of 6n+1 or 6n-1 except the prime number 2 and 3, where n is a natural number. */

// JavaScript program to check whether a number
// is prime or not using recursion

// function check whether a number
// is prime or not
function isPrime(num, div = 3) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  if (div * div > num) return true;
  if (num % div === 0) return false;

  return isPrime(num, div + 2);
}

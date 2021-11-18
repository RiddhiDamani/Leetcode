// Prime numbers: 2, 3, 5, 7, 11, 13, 17, ...

const isPrime = function(x) {
  
    if (x == 1) {
      return false
    }
    
    for(let i=2; i < x; i++) {
      if( x % i == 0) {
        return true
      }
    }
      
    return false
    
  }
    
    console.log(isPrime(17))
function firstRecurChar(input) {
  
    // O(n^2)
     for(let i=0; i < input.length; i++) {
        for(let j= i + 1; j < input.length; j++) {
          if(input[i] === input[j]) {
            return input[i];
          } 
        } 
      }
      
      return undefined;
    }
    
      
    console.log(firstRecurChar([2,5,1,2,3,5,1,2,4]))
    
    // O(N)
    function firstRecurChar2(input) {
      let map = {};
      for(let i=0; i < input.length; i++) {
          //console.log(map[input[i]]);
          if(map[input[i]] !== undefined) {
              return input[i]
          }
          else {
           map[input[i]] = i
          }
        console.log(map)
      }
      return undefined;
    
    }
    console.log(firstRecurChar2([2,5,1,2,3,5,1,2,4]))
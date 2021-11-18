
// First Approach
function reverseString(str) {
    // Check input 
    if(!str || str.length < 2 || typeof str != 'string')
      return 'not a good string'
    
    const backwards = [];
    const totalItems = str.length - 1; 
    
    for(let i=totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    }
    
    console.log(backwards)
    return backwards.join('');
  }
  
  console.log(reverseString('Hi My name is Riddhi'))
  
  
  // Second Approach
  function reverseString2(str) {
    return str.split('').reverse().join('') 
  }
  
  console.log(reverseString2('Hi My name is Mayank'))
  
  
  // Third Approach  : using arrow function 
  const reverseString3 = str => str.split('').reverse().join('');
  console.log(reverseString3('Hi My name is Karuna'))
  
  
  // Fourth Approach 
  const reverseString4 = str => [...str].reverse().join('');
  console.log(reverseString4('Hi My name is Sudhir'))
  
  
  // Practice
  const str = 'Kabooom';
  console.log([...str]);
  
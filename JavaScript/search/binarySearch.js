/**
 * @param {string} s
 * @return {boolean}
 */
 function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);
    //console.log(start, end, middle); 
      
    while(arr[middle] !== val && start <= end) {
       if(val < arr[middle]) end = middle - 1;
       else start = middle + 1; 
        
       middle = Math.floor((start + end)/2);
    }
  
    return arr[middle] === val ? middle : -1; 
  }
  
  console.log(binarySearch([1,3,5,6,7,8], 6));
        
        // 1,3,5,6,7,8
        // S   M     E
function mergeSortedArrays(array1, array2) {
  
    const mergedArr = []
    
    if(array1.length === 0) 
       return array2
    
    if(array2.length === 0) 
       return array1
     
    let arr1Item = array1[0];
    let arr2Item = array2[0];
    let i = 1, j = 1;
    
    
    while(arr1Item || arr2Item) {
      
      console.log(arr1Item, arr2Item)
     if(!arr2Item || arr1Item < arr2Item) {
        mergedArr.push(arr1Item)
        arr1Item = array1[i]
        i++;
     }
     else {
        mergedArr.push(arr2Item);
        arr2Item = array2[j];
        j++;
     }
      
    }
     
     return mergedArr
    
  }
  
  console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
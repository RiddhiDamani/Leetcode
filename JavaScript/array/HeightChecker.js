var heightChecker = function(heights) {
    const orgHeights = [...heights];
    const sortedHeights = heights.sort(function(a,b){return a - b});   
    let track = 0;
    for(let i=0; i < orgHeights.length; i++) {
      if(orgHeights[i] !== sortedHeights[i]) {
         track += 1;
      }
    }
   return track;
};
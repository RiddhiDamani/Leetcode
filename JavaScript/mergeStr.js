function solution(s1, s2) {
     var len1 = s1.length;
     var len2 = s2.length;
     var pntr1 = 0;
     var pntr2 = 0;
  
     var ans = "";
  
     // Traverse the strings
     while (pntr1 < len1 && pntr2 < len2) {
         
         let str1Count = 1;
         let str1chars = s1[pntr1];
         let str2Count = 1;
         let str2chars = s2[pntr2];
         let i = pntr1;
         let j = pntr2;
         while (i < len1) {
             if(s1[i] === s1[i+1]) {
             str1chars = str1chars + s1[i];   
             str1Count++;
             i++;
            }
         }
         
          while (j < len2) {
             if(s2[j] === s2[j+1]) {
             str2chars = str2chars + s2[j];  
             str2Count++;
             j++;
            }
         }
         
         if(str1Count < str2Count) {
             ans = ans + str1chars; 
             pntr1 = i;
         }
         
         if(str2Count < str1Count) {
             ans = ans + str2chars; 
             pntr2 = j;
         }
         
         if(str1Count === str2Count) {
             // Append the smaller of the
             // two current characters
             if (str1chars < str2chars) {
                  ans += str1chars;
                  pntr1 = i;
             }
             else {
                  ans += str2chars;
                  pntr2 = j;
             }
         }
         
      
     }
  
     // Append the remaining characters
     // of any of the two strings
     if (pntr1 < len1) {
         ans += s1.substr(pntr1, len1);
     }
     if (pntr2 < len2) {
         ans += s2.substr(pntr2, len2);
     }
  
     // Print the final string
     return ans;
 }
 
 
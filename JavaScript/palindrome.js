var isPalindrome = function(x) {
    let revNum = x.toString();
    let len = revNum.length;
    for(let i=0; i <= len; i++) { 
        if(revNum[i] != revNum[len-i-1]) { 
           return false  
        }
    }
    return true
}

isPalindrome(101);
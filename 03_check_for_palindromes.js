function palindrome(str) {

 str=str.replace(/[^0-9a-z]/gi,"").toLowerCase();
 var len=str.length;
  
  for (var i=0;i<len/2;i++){
  
    if(str[i]!==str[len-1-i]){
      return false;
    }
   }
   return true;
}

/* //another way
  var arr_reversed=arr.split("").reverse().join("");
return arr===arr_reversed;
*/
palindrome("almostomla");

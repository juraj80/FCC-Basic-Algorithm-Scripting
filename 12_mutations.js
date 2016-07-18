function mutation(arr) {
arr[0]=arr[0].toLowerCase();
arr[1]=arr[1].toLowerCase();
  
var i=0;
  
while (i<arr[1].length){
  if(arr[0].indexOf(arr[1][i])!==-1){ //if true i++
       i++ ;  
  } else {
       return false;}                 //if false return false
  }
return true;                          //return true 
}

mutation(["hello", "Hello"]);

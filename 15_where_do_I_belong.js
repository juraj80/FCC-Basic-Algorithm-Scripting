function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
    return a-b;
  });
   
var x=0;
while(x<=arr.length){
    if(arr[x]>=num){
      return arr.indexOf(arr[x]);
    }
    x++;
  }  

return arr.length;
}

getIndexToIns([2, 5, 10], 15);


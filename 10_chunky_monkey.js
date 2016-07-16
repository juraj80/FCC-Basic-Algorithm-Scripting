function chunkArrayInGroups(arr, size) {
  var array = [];
  var len = arr.length/size;

  for(var i=0;i<len;++i){  
    array.push(arr.slice(i*size,size*(i+1)));
  }
  
 return array; 
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
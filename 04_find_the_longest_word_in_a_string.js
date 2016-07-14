function findLongestWord(str) {
  str= str.split(" ");
  var arr=[];
  
  for(var i=0;i<str.length;i++){
    arr.push(str[i].length);
  }
  return Math.max.apply(null,arr);
}

findLongestWord("The quick brown fox jumped over the lazy dog");

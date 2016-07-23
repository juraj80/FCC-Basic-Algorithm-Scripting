function rot13(str) { 
 var regex=/[^a-zA-Z0-9_]/;
 var arr=[];
 
 for(var i=0;i<str.length;i++){  
  if(str[i].match(regex)){
     arr.push(str[i]);     
  } else if (str.charCodeAt(i)-13<65){
     arr.push(String.fromCharCode(str.charCodeAt(i)+13));
  } else {
     arr.push(String.fromCharCode(str.charCodeAt(i)-13));
  }
 }
  return arr.join("");
}
 
rot13("SERR YBIR?");
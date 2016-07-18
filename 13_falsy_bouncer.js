function bouncer(arr) {
  
   function isBoolean(value){
     return Boolean(value);
   }
return arr.filter(isBoolean);
}

bouncer([7, "ate", "", false, 9]);

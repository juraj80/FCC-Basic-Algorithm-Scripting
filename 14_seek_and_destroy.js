
function destroyer(arr) {
                                                  // Remove all the values
  var args=Array.prototype.slice.call(arguments);// returns the virtual array with arguments;
  var abc=args.splice(0,1);                      // remove original array and assigns it to abc; args is [2,3];
  
  function des(value){
                                      //checks if given value is not in args array
    return args.indexOf(value)===-1;   //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    
  }
  
  return abc[0].filter(des);           //creates a new array with arguments which passes the test
}

destroyer([1, 2, 3, 1, 2, 3],2,3);


function confirmEnding(str, target) {
  var len=target.length;
  if (target===str.substr(-len,len)){
    return true;
  }
  else{
    return false;
  }
}

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");

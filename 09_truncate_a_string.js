function truncateString(str, num) {
  if(num<=3){
    return str.slice(null,num)+"...";
  }
  else if(str.length>num){
    return str.slice(null,num-3)+"...";
  }
  else{
    return str.slice(null,num);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);


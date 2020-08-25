const camelCase = function(str) {
  var copy = [];
  for(i = 0; i < str.length; i++){
    if(str[i] === ' '){
      i++;
      copy[i] = str[i].toUpperCase();
    }
    else
      copy[i] = str[i]; 
  }
  return copy.join('').toString();  
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
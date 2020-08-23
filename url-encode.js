const urlEncode = function(text) {
  var arr = [];


  for(let i = 0; i < text.length ; i++){
    arr[i] = text[i];
    if(arr[i] === ' ')
      arr.splice(i, 1, '%20');

  }
  return arr.join('').toString();
};


console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode("blue is greener than purple for sure"));




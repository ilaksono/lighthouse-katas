const urlDecode = text => {
  var obj = {};
  var propNames = [];
  var temp = [];
  var propVal = [];
  let j = 0;
  let stateVal = 0;
  for(let i = 0; i < text.length; i++){
    if(! (text[i] === '=' || text[i] === '&')){
      if(text[i] === '%' && text[i+1] === '2' && text[i+2] === '0'){
        temp.push(' ');
        i += 2;
      }
      else  
        temp.push(text[i]); 
    }
    if(text[i] === '='){
      propNames[j] = temp;
      temp = [];
    }
    else if(text[i] === '&' || i === text.length - 1){
      propVal[j] = temp;   
      j++;
      temp = []; 
    }
  }
  for(j = 0; j < propNames.length; j++){
    obj[propNames[j].join('').toString()] = propVal[j].join('').toString();
  }
  return obj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
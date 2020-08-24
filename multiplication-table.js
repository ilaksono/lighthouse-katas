const multiplicationTable = maxValue => {
  var x = [];
  var y = [];
  
  
  for(let i = 0; i < maxValue; i++){
    for(let j = 0; j < maxValue; j++){
      y.push((i+1)*(j+1));
    }
    x[i] = y.join(' ');
    console.log(x[i]);
    y = [];
  }

  return '\n';
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
const squareCode = str => {
  var sqr = [];
  var copy = [];
  var temp = [];
  for(let a of str){
    if(a != ' ')
      copy.push(a);
  }
  var numRows = Math.ceil(Math.sqrt(copy.length));
  for(let i = 0; i < numRows; i++){
    for(let j = 0; j < Math.ceil(copy.length / numRows); j++){
      temp.push(copy[j*numRows + i])
    }
    sqr[i] = temp.join('').toString();
    temp = [];
  }
  console.log(copy.length);
  return sqr.join(' ').toString();
};
//sqrt = 8, i -> 7, j-> 6

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
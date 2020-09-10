const squareCode = function(message) {
  message = message.split(''); //arrayify message
  for(let i = 0; i < message.length; i++){ //removing all spaces
    if(message[i] === ' '){ message.splice(i, 1) }
  }
  /* set line length to be sqrt rounded up */
  let lineLength = Math.ceil(Math.sqrt(message.length));
  let output = ''; 

  /* count how many lines are needed to print whole message */
  let countLines = Math.ceil(message.length / lineLength);

  /* create array of line arrays */
  let stagingArray = [];
  for(let i = 0; i <= countLines; i++){ 
    /* remove lineLength # of items, return as array, and push to outer array */
    stagingArray.push(message.splice(0, lineLength));
  }

  /* iterate through 2d array starting with outer array */
  for(let i = 0; i < countLines + 1; i++){
    for(let j = 0; j < countLines; j++){
      if(j < stagingArray.length && i < stagingArray[j].length){ output += stagingArray[j][i] };
    }
    output += ' ';
  }
  return output.trim();
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
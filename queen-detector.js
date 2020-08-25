const queenThreat = arr => {
  if(checkDiagonal(arr) && checkStraight(arr))
    return false;
  return true;    
};
const checkStraight = arr => {
  var safe = true;
  var cpy = [[],[],[],[],[],[],[],[]];
  //check if queens are on same horizontal
  for(let a of arr){
    if(a.indexOf(1) != a.lastIndexOf(1))
      safe = false;  
  }  
  //transpose board to prepare to turn vertical into horizontal
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      cpy[j][i] = arr[i][j];
    }
  }
  //check if queens are on same vertical(which is horizontal on cpy)
  for(a of cpy){
    if(a.indexOf(1) != a.lastIndexOf(1))
      safe = false;
  }
  return safe;
};
const checkDiagonal = arr => {
  let pos = [[],[]];
  let cntr = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i][j] === 1){
        pos[cntr] = [i, j];
        cntr++;
      }
    }
  }
  if(Math.abs(pos[0][0] - pos[1][0]) === Math.abs(pos[0][1] - pos[1][1]))
    return false;
  return true;  
};
const generateBoard = (arr1, arr2) => {
  let board = [[],[],[],[],[],[],[],[]];
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++)
      board[i][j] = 0;
  }
  board[arr1[0]][arr1[1]] = 1;
  board[arr2[0]][arr2[1]] = 1;
  return board;
} 
// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// console.log(checkStraight(generatedBoard));
// console.log(checkDiagonal(generatedBoard));


let whiteQueen = [6, 6];
let blackQueen = [7, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));s
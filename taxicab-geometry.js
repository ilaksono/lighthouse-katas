const blocksAway = directions => {
  var facing = ['up', 'right', 'down', 'left'];
  var index = 0;
  var pos = [0, 0];
  var obj = {};
  for(let i = 0; i < directions.length; i += 2) {
    switch(directions[i]){
    case 'right':
      if(index === 3)
        index = 0;
      else
        index++;
      break;  
    case 'left':
      if(index === 0)
        index = 3;
      else
        index--;
        break;
    default:
      break;            
    }
    switch(index){
    case 0:
      pos[1] += directions[i+1];
      break;
    case 1:
      pos[0] += directions[i+1];
      break;
    case 2:
      pos[1] -= directions[i+1];
      break;
    case 3:
      pos[0] -= directions[i+1];
      break;
    default:
      break;  
    }
  }
  obj[pos[0] >= 0 ? 'east' : 'west'] = Math.abs(pos[0]);
  obj[pos[1] >= 0 ? 'north' : 'south'] = Math.abs(pos[1]);
  return obj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
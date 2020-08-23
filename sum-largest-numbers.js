const sumLargestNumbers = arr => {
  var arrCpy = arr.slice(0, arr.length);
  var max1 = arr[0];
  var max2 = arr[0];
  var index = 0;
  var cntr = 0;

  for(let element of arrCpy){
    if(element > max1){
      index = cntr;
      max1 = element;
    } 
    cntr++;  
  }
  arrCpy.splice(index, 1);
  index = 0;
  cntr = 0;
  
  for(element of arrCpy){
    if(element > max2){
      max2 = element;
      index = cntr;
    }
    cntr++;
  }

  return max1+max2;
}

console.log(sumLargestNumbers([0,1,2,3,4,5,6,7,1,2,3]));



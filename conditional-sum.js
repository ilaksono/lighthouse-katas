const conditionalSum = (arr, cndtn) => {
  sum = 0;
  if(cndtn === 'odd'){
    for(let elem of arr){
      if(elem % 2 === 1 || elem % 2 === -1)
        sum += elem;
    }
  }
  else if(cndtn === 'even'){
      for(let eleme of arr){
        if(eleme % 2 === 0)
          sum += eleme;
      }

  }
  else  
    return -1;

  return sum;  

}

console.log(conditionalSum([0,1,2,3,45,6,1,2,-3,2,1,2,3, -4], 'even'));

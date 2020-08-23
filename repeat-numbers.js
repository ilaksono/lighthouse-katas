const repeatNumbers = arr => {
  let res = [];
  let bigRes = [];
  let dig;
  let j = 0;
  for(let a of arr){
    dig = a[0];  
    for(let i = 0; i < a[1]; i++){
      res.push(dig);
    }
    bigRes[j] = res;
    j++;
    res = [];
  }
  return join2DArray(bigRes).join(', ').toString();
};

const join2DArray = arr => {
  for(let i = 0 ; i < arr.length ; i++)
    arr[i] = arr[i].join('');
  return arr;  
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
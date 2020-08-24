const A = [
  [2,3],
  [3,6],
  [7,1]
];
console.log(A.join('').toString());

for(let i = 0; i < A.length; i++)
  A[i] = A[i].join('');

console.log(A.join(','));

console.log('s'+32);
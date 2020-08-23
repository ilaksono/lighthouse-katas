const longestName = (obj) =>{
  let maxLen = obj[0].name.length;
  let indOfMax = 0;
  let cntr = 0;
  for(let elem of obj){
    if (maxLen < elem.name.length){
      indOfMax = cntr;
      maxLen = elem.name.length 
    }  
    cntr++;  
  }
  return obj[indOfMax];
};

const A = [{name: 'Mark', course: 'iOS'},
  {name: 'Jeremy', course: 'Web'},
  {name: 'Oph', course: 'Web'},
  {name: 'A Really Long Name', course:'Best Course Ever'}
];

console.log(longestName(A));
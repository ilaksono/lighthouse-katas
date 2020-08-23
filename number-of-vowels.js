const numberOfVowels = str => {
  var vowels = ['a','e','i','o','u'];
  let cntr = 0;
  for(let i of str){
    for(j of vowels){
      if(i === j)
        cntr++;
    }
  }

  return cntr;
}

console.log(numberOfVowels('vowel'));
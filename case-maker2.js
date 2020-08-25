const makeCase = (input, type) => {
  let i = 0;
  var res = input;
  if(Array.isArray(type) === true)
    type = checkPrecedence(type);
    switch (type) {
      case 'camel':
        res = camelCase(input);
        break;
      case 'pascal':
        res = pascalCase(input);
        break;
      case 'snake':
        res = snakeCase(input);
        break;
      case 'kebab':
        res = kebabCase(input);
        break;
      case 'title':
        res = titleCase(input);
        break;
      case 'vowel':
        res = vowelCase(input);
        break;
      case 'consonant':
        res = consonantCase(input);
        break;
      case 'upper':
        res = input.toUpperCase();
        break;
      case 'lower':
        res = input.toLowerCase();
        break;
      default:
        break;
    }
    if(Array.isArray(type) === true) {
      for(let a of type){
        res = makeCase(res, a);
      }
    }
  return res;
}

const camelCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      i++;
      copy[i] = str[i].toUpperCase();
    }
    else
      copy[i] = str[i]; 
  }
  return copy.join('').toString();
}

const pascalCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(i === 0) 
      copy.push(str[i].toUpperCase());
    else if(str[i] === ' '){
      i++;
      copy[i] = str[i].toUpperCase();
    }
    else
      copy[i] = str[i]; 
  }
  return copy.join('').toString();
}

const snakeCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      copy[i] = '_';
    }
    else
      copy[i] = str[i]; 
  }
  return copy.join('').toString();
}

const kebabCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      copy[i] = '-';
    }
    else
      copy[i] = str[i]; 
  }
  return copy.join('').toString();
}

const titleCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(i === 0) 
      copy.push(str[i].toUpperCase());
    else if(str[i] === ' '){
      copy[i] = ' ';
      copy[i+1] = str[i+1].toUpperCase();
      i++;
    }
    else
      copy[i] = str[i]; 
  }
  return copy.join('').toString();
}

const vowelCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      copy[i] = str[i].toUpperCase();
    }
    else
      copy[i] = str[i].toLowerCase();; 
  }
  return copy.join('').toString();
}

const consonantCase = str => {
  var copy = [];
  for(let i = 0; i < str.length; i++){
    if(!(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'))
      copy[i] = str[i].toUpperCase();
    else
      copy[i] = str[i].toLowerCase();; 
  }
  return copy.join('').toString();
}

const checkPrecedence = arr => {
  var order = [];
  var names = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  var amt = Array(9).fill(0);
  for(let a of arr){
    for(let i = 0; i < names.length; i++){
      if(a === names[i])
        amt[i]++;
    }
  }
  for(i = 0; i < amt.length; i++){
    if(amt[i] > 0)
      order.push(names[i]);
  }
  console.log(order); 
  return order;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "snake", 'kebab', 'vowel', 'lower']));
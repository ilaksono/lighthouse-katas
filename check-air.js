const checkAir = function(samples, threshold) {
  var dirtyCount = 0;
  for(let a of samples){
    if(a === 'dirty')
      dirtyCount++;
  }
  if(dirtyCount / samples.length > threshold)
    return 'Polluted';
  return 'Clean';  
};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

const PI = 3.14159;

const sphereVolume = rad => {
  return 4 / 3 * PI * Math.pow(rad, 3);
}
const coneVolume = (rad, height) => {
  return 1 / 3 * PI * rad * rad * height;
}
const prismVolume = (height, width, depth) => {
  return height * width * depth;
}

const totalVolume = solids => {

  let vol = 0;
  for(let a of solids){
    if(a.type === 'sphere')
      vol += sphereVolume(a.radius);
    if(a.type === 'cone')
      vol += coneVolume(a.radius, a.height);
    if(a.type === 'prism')
      vol += prismVolume(a.height, a.width, a.depth);    
  }
  return vol;

}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
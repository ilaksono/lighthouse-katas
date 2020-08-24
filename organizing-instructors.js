const organizeInstructors = instructors => {
  var courseNames = [];
  var instructorObj = {};
  var courseIns = [];
  var ins = [];
  for(let a of instructors){
    if(courseNames.indexOf(a.course) === -1)
      courseNames.push(a.course);
  }
  for(let i = 0; i < courseNames.length; i++){
    for(a of instructors){
      if(a.course === courseNames[i])
      ins.push(a.name);
    }
    courseIns[i] = ins;
    ins = [];
  }
  i = 0;
  for(a of courseNames){
    instructorObj[courseNames[i]] = courseIns[i]
    i++; 
  }
  return instructorObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

const talkingCalendar = str => {  
  let monthDigs = parseInt(str.slice(5,7));
  let dayDigs = parseInt(str.slice(-2));
  var monthsArray = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dayExt = '';
  if(dayDigs % 10 === 1 && dayDigs != 11)
    dayExt = 'st';
  else if(dayDigs % 10 === 2 && dayDigs != 12)
    dayExt = 'nd';
  else if(dayDigs % 10 === 3 && dayDigs != 13)  
    dayExt = 'rd';
  else  
    dayExt = 'th';
  return `${monthsArray[monthDigs - 1]} ${dayDigs}${dayExt}, ${str.slice(0,4)}`; 
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1421/08/03"));
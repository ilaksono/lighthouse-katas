const talkingCalendar = str => {  
  let monthDigs = parseInt(str.slice(5,7));
  let dayDigs = parseInt(str.slice(-2));
  var monthsArray = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dayExt = '';
  if(dayDigs === 1 || dayDigs === 21 || dayDigs === 31)
    dayExt = 'st';
  else if(dayDigs === 2 || dayDigs === 22)
    dayExt = 'nd';
  else  
    dayExt = 'th';
  return `${monthsArray[monthDigs - 1]} ${dayDigs}${dayExt}, ${str.slice(0,4)}`; 
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
const calculateChange = (price, amt) => {
   const billValue = [2000,1000,500,200,100,25,10,5,1];
   const billName = ['twentyDollars', 'tenDollars', 'fiveDollars', 'twoonies', 'loonies', 'quarters', 'dimes', 'nickels', 'pennies'];
   let billAmt = Array(9).fill(0);
   let diff = amt - price;
   var obj = {};
   for(let i = 0; i < billName.length; i++){
     billAmt[i] = Math.floor(diff/billValue[i]);
     diff -= billValue[i] * billAmt[i];
     if(billAmt[i] > 0)
      obj[billName[i]] = billAmt[i];
   }
   return obj;
} 

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
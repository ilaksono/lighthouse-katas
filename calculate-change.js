const calculateChange = (price, amt) => {
  var change = amt - price;
  const res = {};
  var billNames = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  var bills = [0,0,0,0,0,0,0,0,0]
  do{
    if(change >= 2000){
      bills[0]++;
      change -= 2000
    }
    else if(change >= 1000){
      bills[1]++;
      change -= 1000
    }
    else if(change >= 500){
      bills[2]++;
      change -= 500;
    }
    else if(change >= 200){
      bills[3]++;
      change -= 200;
    }
    else if(change >= 100){
      bills[4]++;
      change -=100;
    }
    else if(change >= 25){
      bills[5]++;
      change -= 25;
    }
    else if(change >= 10){
      bills[6]++;
      change -= 10;
    }
    else if(change >= 5){
      bills[7]++;
      change -= 5;
    }
    else if(change >=1){
      bills[8]++;
      change -= 1;
    }
  }while(change>0);

  for(i = 0; i< bills.length; i++){
    if(bills[i]>0){
      res[billNames[i]] = bills[i];
    }
  }

  return res;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
//Program
//https://github.com/GabiMilaibe/javascript-practice.git


const taxRate = 0.1;
const phonePrice = 100;
const accessory = 50;
let balance = 600;
let totalPurchase = 0;

function calculateTax(amount){
  return amount * taxRate;
};

function format(amount) {
  return '$'+amount.toFixed(2);
};

function keepPurchase(balance,total){
  // alert((balance - total) > 0);
  // alert("balance"+balance);
  // alert("total"+total);
  return (balance - total) > 0;
};

while (true){
  const purchase = phonePrice + accessory;
  totalPurchase += calculateTax(purchase) + purchase;
  if (!keepPurchase(balance,totalPurchase)){
    alert('You are about to be out of money.');
    break;
  }

  alert(format(totalPurchase));
};

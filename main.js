let readlineSync = require("readline-sync");

let memberStatus = readlineSync.question(
  "Input yes if you're a member, no if you're not. \n"
);
let hoursParked = Number(readlineSync.question("how hours parked \n"));
if (memberStatus === "yes") {
  memberStatus = parseFloat((memberStatus = 1.5));
  console.log("Yes driver is member");
} else if (memberStatus === "no") {
  memberStatus = parseFloat((memberStatus = 3));
  console.log("Driver is not member ");
}

  if (hoursParked === 1) {
    let hoursParked = 2;
    let total = hoursParked + memberStatus;
    console.log(`Total amount is ${total}$`);

  } else if (hoursParked === 2) {
       hoursParked=1.5
       total=2;
    let totalAmount=total+hoursParked+memberStatus;
    console.log(`Total amount is ${totalAmount}$`);
    
  } else if (hoursParked === 3) {
    hoursParked = 1;
    totalSum = total + totalAmount;
    sum = +3;
    console.log(`${sum} Hours has parked`);
    console.log(`Total amount is ${totalSum}$`);
   
  } else if (hoursParked === 4) {
    hoursParked = 0.5;
    totalSum = total + totalAmount + totalSasi;
    sum = +4;
    console.log(`${sum} Hours has parked`);
    console.log(`Total amount is ${totalSum}$`);
  
  }



let readlineSync = require("readline-sync");
let total = 2;
let totalAmount = 4;
let totalSum;
let totalSasi = 0.5;
let sum = 0;
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
while (true) {
  if (hoursParked === 1) {
    hoursParked = 2;
    total = hoursParked + memberStatus;
    sum = +1;
    console.log(`${sum} Hours has parked`);
    console.log(`Total amount is ${total}$`);

    break;
  } else if (hoursParked === 2) {
    hoursParked = 1.5;
    totalAmount = hoursParked + hoursParked + memberStatus;
    sum = +2;
    console.log(`${sum} Hours has parked`);
    console.log(`Total amount is ${totalAmount}$`);
    break;
  } else if (hoursParked === 3) {
    hoursParked = 1;
    totalSum = total + totalAmount;
    sum = +3;
    console.log(`${sum} Hours has parked`);
    console.log(`Total amount is ${totalSum}$`);
    break;
  } else if (hoursParked === 4) {
    hoursParked = 0.5;
    totalSum = total + totalAmount + totalSasi;
    sum = +4;
    console.log(`${sum} Hours has parked`);
    console.log(`Total amount is ${totalSum}$`);
    break;
  }
}




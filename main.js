const readlineSync = require("readline-sync");
let sum=0;
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
  const hoursParked = 2;
  const sumParked1 = hoursParked + memberStatus;
  sum=+1
  console.log(`${sum} Hours has parked`)
  console.log(`Total amount is ${sumParked1}$  Exit Program`);
} else if (hoursParked === 2) {
  const hoursParked = 1.5;
  const sumParked1 = 2;
  const sumParked2 = sumParked1 + hoursParked + memberStatus;
  sum=+2
  console.log(`${sum} Hours has parked`)
  console.log(`Total amount is ${sumParked2}$  Exit Program`);
} else if (hoursParked === 3) {
  const hoursParked = 1;
  const sumParked1 = 2;
  const sumParked2 = 1.5;
  const sumParked3 = sumParked2 + sumParked1 + hoursParked + memberStatus;
  sum=+3
  console.log(`${sum} Hours has parked`)
  console.log(`Total amount is ${sumParked3}$  Exit Program`);
} else if (hoursParked === 4) {
  const hoursParked = 0.5;
  const sumParked1 = 2;
  const sumParked2 = 1.5;
  const sumParked3 = 1;
  const sumParked4 =sumParked1 + sumParked2 + sumParked3 + hoursParked + memberStatus;
  sum=+4
  console.log(`${sum} Hours has parked`)
  console.log(`Total amount is ${sumParked4}$   Exit Program`);
} else if (hoursParked === 5) {
  const hoursParked = 0.5;
  const sumParked1 = 2;
  const sumParked2 = 1.5;
  const sumParked3 = 1;
  const sumParked4 = 0.5;
  const sumParked5 =sumParked1 +sumParked2 + sumParked3 +sumParked4 +hoursParked + memberStatus;
  sum=+5
  console.log(`Total amount is ${sumParked5}$  Exit Program`);
} else if(hoursParked ===6){
  const hoursParked = 0.5;
  const sumParked1 = 2;
  const sumParked2 = 1.5;
  const sumParked3 = 1;
  const sumParked4 = 0.5;
  const sumParked5 = 0.5;
  const sumParked6 =sumParked1 +sumParked2 + sumParked3 +sumParked4 +sumParked5 +hoursParked +memberStatus;
  sum=+6
  console.log(`${sum} Hours has parked`)
  console.log(`Total amount is ${sumParked6}$  Exit Program`);
}



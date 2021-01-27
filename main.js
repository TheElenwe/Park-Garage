let readlineSync = require("readline-sync");

let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");
let hoursParked = Number(readlineSync.question("how hours parked \n"));

if (memberStatus === "yes") {
  memberStatus=parseFloat(memberStatus=3)
} else if (memberStatus === "no") {
  hoursParked = 1.5;
}

if (hoursParked === 2) {
  hoursParked = 2;
} else if (hoursParked == 3) {
  hoursParked = 3;
}
total = hoursParked +  memberStatus;
console.log(total);


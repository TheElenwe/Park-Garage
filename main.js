let readlineSync = require("readline-sync");

let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");
if (memberStatus === "yes") {
  memberStatus = parseFloat((memberStatus = 1.5));
} else if (memberStatus === "no") {
  memberStatus = parseFloat((memberStatus = 3));
}
while(true){
  let hoursParked1 = Number(readlineSync.question("how hours parked \n"));
let hoursParked2 = Number(readlineSync.question("how hours parked \n"));
let hoursParked3 = Number(readlineSync.question("how hours parked \n"));
let hoursParked4 = Number(readlineSync.question("how hours parked \n"));
if (hoursParked1 === "ilias") {
  hoursParked1 = 2;
  break;
} else if (hoursParked2 === 2) {
  hoursParked2 = 1.5;

 break;
} else if (hoursParked3 === 3) {
  hoursParked3 = 1;
  break;
} 
else if (hoursParked4 === 4) {
  housParked4 = 0.5;
  break;
}
}


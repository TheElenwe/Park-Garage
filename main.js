let readlineSync = require("readline-sync");
let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");
let hoursParked = Number(readlineSync.question("how hours parked \n"));
if (memberStatus === "yes") {
  memberStatus = parseFloat((memberStatus = 1.5));
} else if (memberStatus === "no") {
  memberStatus = parseFloat((memberStatus = 3));
}
while(true){
if (hoursParked === 1) {
  hoursParked = 2;
  total=hoursParked+memberStatus
  console.log(total)
  break;

} else if (hoursParked === 2) {
  hoursParked = 1.5;
  totalAmount=hoursParked+hoursParked+memberStatus;
console.log(totalAmount)
  
 break;

} 

}



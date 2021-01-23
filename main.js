let readlineSync = require("readline-sync");

let hoursParked = readlineSync.question("Please input how many hours you have spent \n");
let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");


 hoursParked=parseFloat(hoursParked) 

if (memberStatus === "yes") {
  console.log(hoursParked +1.5)
}else if (memberStatus ==="no"){
console.log(hoursParked +3)
}

let readlineSync = require("readline-sync");

let hoursParked = readlineSync.question("Please input how many hours you have spent \n");
let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");

hoursParked=1.5;
if (memberStatus === "yes") {
  console.log(hoursParked +2)
}
let readlineSync = require("readline-sync");


let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");

memberStatus=parseFloat(memberStatus=2);

if(memberStatus === "yes") {
  console.log(hoursParked )
}else if (memberStatus ==="no"){
console.log(hoursParked)
}

let hoursParked = readlineSync.question("how hours parked \n");
hoursParked=parseFloat(hoursParked=2);
  if (hoursParked===2){
  hoursParked=2;
 
}
else if(hoursParked==3){
  hoursParked=3;
  
}
total=hoursParked+hoursParked+memberStatus;
console.log(total)


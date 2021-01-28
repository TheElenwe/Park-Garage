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
    let sumParked1 = hoursParked + memberStatus;
    console.log(`Total amount is ${sumParked1}$`);

  } else if (hoursParked === 2) {
      let hoursParked=1.5
      let sumParked1=2;
    let sumParked2=sumParked1+hoursParked+memberStatus;
    console.log(`Total amount is ${sumParked2}$`);
    
  } else if (hoursParked === 3) {
   let hoursParked = 1;
   let sumParked1=2
   let sumParked2=1.5;
   let sumParked3=sumParked2+sumParked1+hoursParked+memberStatus
  
    console.log(`Total amount is ${sumParked3}$`);
   
  } else if (hoursParked === 4) {
  let hoursParked = 0.5;
  let sumParked1=2;
  let sumParked2=1.5
  let sumParked3=1;
  let sumParked4=sumParked1+sumParked2+sumParked3+hoursParked+memberStatus

    console.log(`Total amount is ${sumParked4}$`);
  
  }
  else {
    let hoursParked = 0.5;
   sumParked4+=hoursParked
    let sumParked5=sumParked4+hoursParked+memberStatus
    console.log(sumParked5)
  }




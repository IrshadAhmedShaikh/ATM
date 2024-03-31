
import inquirer from "inquirer";

let myBalance = 15640;
let myPin = 4455;

console.log("Wellcome To IR ATM Machine");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin Code",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin code");

  let operationans = await inquirer.prompt([
    {
      name: "operation",
      message: "select your option",
      type: "list",
      choices: ["withdraw", "check balance", "fastcash"],
    },
  ]);
  if (operationans.operation === "withdraw") {
    let amountans = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountans.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance -= amountans.amount;
      console.log(`your remaing balace is: ${myBalance}`);
    }
  } else if (operationans.operation === "check balance") {
    console.log(`your current balance is: ${myBalance}`);
  } else if (operationans.operation === "fastcash") {
    let amountans = await inquirer.prompt([
      {
        name: "amount",
        message: "choose your amount",
        type: "list",
        choices: ["500", "4000", "6000", "10000"],
      },
    ]);
    myBalance -= amountans.amount;
    console.log(`fastcash your remaing balance is:${myBalance}`);
  }
} else {
  console.log("invalid pin code");
}

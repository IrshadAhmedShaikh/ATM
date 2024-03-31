#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 15640;
var myPin = 4455;
console.log("Wellcome To IR ATM Machine");
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    var operationans = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "select your option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"],
        },
    ]);
    if (operationans.operation === "withdraw") {
        var amountans = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountans.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountans.amount;
            console.log("your remaing balace is: ".concat(myBalance));
        }
    }
    else if (operationans.operation === "check balance") {
        console.log("your current balance is: ".concat(myBalance));
    }
    else if (operationans.operation === "fastcash") {
        var amountans = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "choose your amount",
                type: "list",
                choices: ["500", "4000", "6000", "10000"],
            },
        ]);
        myBalance -= amountans.amount;
        console.log("fastcash your remaing balance is:".concat(myBalance));
    }
}
else {
    console.log("invalid pin code");
}

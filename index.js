#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the opertors to perform action",
        type: "list",
        name: "oprator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditinol statment
if (asnwer.oprator === "addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.oprator === "subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.oprator === "multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.oprator === "division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {
    console.log("pleace select valid oprator");
}

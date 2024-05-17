import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
        
    }
]
)
//  12345  ===  1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw Amount","check Balance"]
            }
        ]
    )

if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]
        ) 
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw Successfully`);
console.log(`Your Remaining Balance is: ${myBalance}`);
        }

    } else if (operationAns.operation === "check Balance"){
        console.log(`your Account Balance is: ${myBalance}`);
    }
}
else{
    console.log("Pin is Incorrect, Try Again");

    }

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let addButton = document.getElementById("add-button");
let subButton = document.getElementById("sub-button");
let mulButton = document.getElementById("mul-button");
let divButton = document.getElementById("div-button");

let outputP = document.getElementById("output-p");

addButton.addEventListener("click",calculate);
subButton.addEventListener("click",calculate);
mulButton.addEventListener("click",calculate);
divButton.addEventListener("click",calculate);

function calculate() {
    let mathOperator = this.value;
    let input1Val = parseInt(input1.value);
    let input2Val = parseInt(input2.value);
    let result;
    if (mathOperator == "add") {
        result = input1Val + input2Val;
    } else if (mathOperator == "sub") {
        result = input1Val - input2Val;
    } else if (mathOperator == "mul") {
        result = input1Val * input2Val;
    } else if (mathOperator == "div") {
        result = input1Val / input2Val;
    }
    outputP.innerHTML = "Result: " + result;
}
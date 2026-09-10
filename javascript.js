function sum() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let sum = number1 + number2;
    document.getElementById("result").innerHTML = "Result: " + sum;
}
function subtract() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let difference = number1 - number2;
    document.getElementById("result").innerHTML = "Result: " + difference;
}
function multiply() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let product = number1 * number2;
    document.getElementById("result").innerHTML = "Result: " + product;
}
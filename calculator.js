// add() function
function add(a, b){
    return alert(a + b);
}

// subtract() function
function subtract(a, b){
    return alert(a - b);
}

// multiply() function
function multiply(a, b){
    return alert(a * b);
}

// divide() function
function divide(a, b){
    return alert(a / b);
}

// operator() function
// The function takes 3 arguments:
// 2 numbers and 1 operator
// Then it call one of the above function
// depending on the operator
function operator(){
    let firstNumber = +prompt("Enter first number");
    let theOperator = prompt("Enter operator");
    let secondNumber = +prompt("Enter second number");
    switch (theOperator) {
        case '*':
            return multiply(firstNumber, secondNumber)
        case '/':
            return divide(firstNumber, secondNumber);
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        default:
            return alert("Operator has to be: + - * /");         
    }
}

// operator();
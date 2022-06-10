// FUNCTIONS

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

// Create populate() function
// This function will get the pressed number and return it for now
function populate(e){
    return console.log(e.target.textContent);
}



// REFERENCES AND EVENTS HANDLERS

// Get numbers references
const theNumbers = document.querySelectorAll('.each-btn-num');
// Add an event handler to each number button. The event handler
// should call the populate() function
theNumbers.forEach(eachNumber => eachNumber.addEventListener('click', populate));
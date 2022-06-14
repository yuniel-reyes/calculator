// FUNCTIONS

// add() function
function add(a, b){
    return Number(a) + Number(b);
}

// subtract() function
function subtract(a, b){
    return a - b;
}

// multiply() function
function multiply(a, b){
    return a * b;
}

// divide() function
function divide(a, b){
    return a / b;
}

// operator() function
// The function takes 3 arguments:
// 2 numbers and 1 operator
// Then it call one of the above function
// depending on the operator
function operator(firstNumber, secondNumber, theOperator){
    let thisFirstNumber = firstNumber;
    let thisOperator = theOperator;
    let thisSecondNumber = secondNumber;
    switch (thisOperator) { 
        case '×':
            let theMultiplication = multiply(thisFirstNumber, thisSecondNumber)
            if (Number.isInteger(theMultiplication)){
                return theMultiplication;
            } else {
                return theMultiplication.toFixed(1);
            }
        case '÷':
            let theDivision = divide(thisFirstNumber, thisSecondNumber);
            if (Number.isInteger(theDivision)){
                return theDivision;
            } else {
                return theDivision.toFixed(1); 
            }
        case '+':
            let theSum = add(thisFirstNumber, thisSecondNumber);
            return theSum;
        case '−':
            let theSubtraction = subtract(thisFirstNumber, thisSecondNumber);
            return theSubtraction;
        default:
            return alert("Operator has to be: + - × /");         
    }
}

// The getFirstNumber function check for the firstNumber 
function getFirstNumber(thisBtn){
    let thisNumber = thisBtn;
    // do not repeat 0 and do not enter . as first char
    if (firstNumber.length == 0 && thisNumber.match(/[1-9]/)){
        // Store firstNumber
        firstNumber = thisNumber;
        return firstNumber
    } else if (Boolean(firstNumber)) { 
        // firstNumber is of two or more digits
        firstNumber += thisNumber;
        return firstNumber;  
    }
}

// The getOperator() function
function getOperator(thisBtn){
    // let thisOperator = thisBtn;

    // Operation with 0
    if (firstNumber.length == 0){
        firstNumber = 0;
    }

    // If not operator yet
    if (theOperator.length == 0){
        theOperator = thisBtn;
        return theOperator;
    }

    // If operator already exist
    if (theOperator.length !== 0 && secondNumber.length == 0){
        theOperator = thisBtn;
        return theOperator;
    }

    // If operator, first and second number already exist
    // call operation

} 


// The getSecondNumber() function
function getSecondNumber(thisBtn){
    let thisNumber = thisBtn;

    if (secondNumber.length == 0){
        secondNumber = thisNumber;
    } else {
        secondNumber += thisNumber;
    }
    return secondNumber;
}


// Create populate() function
// This function will get the pressed number and return it for now
function populate(e){
    let pressedBtn = e.target.textContent;
    console.log(pressedBtn);

    // The getFirstNumber function will be called if not operator 
    if (theOperator.length == 0 && !pressedBtn.match(/[\−=×÷\+]/)
        && !(firstNumber.length == 0 && pressedBtn == "0")){
        getFirstNumber(pressedBtn);
        return calculationArea.textContent = firstNumber;
    }
    // Get operator
    if (pressedBtn.match(/[\−=\×÷\+]/) && !secondNumber){
        getOperator(pressedBtn);
        return theResultDisplay.textContent = firstNumber + " " + theOperator;
    }
    // Get second number
    if (theOperator.length !== 0 && pressedBtn.match(/[0-9]/)){
            getSecondNumber(pressedBtn);
            if (secondNumber === "0" && theOperator == "÷"){
                secondNumber = "";
                return alert("You can't divide by 0!");
            } else {
            return calculationArea.textContent = secondNumber;    
        }
    }
    // Check result
    if (pressedBtn.match(/[−=\×÷\+]/) && secondNumber){
        if (pressedBtn == "="){
            let thisOperation = operator(firstNumber, secondNumber, theOperator);
            calculationArea.textContent = thisOperation;
            theResultDisplay.textContent = theResultDisplay.textContent + " " + secondNumber + " =";   
        } else {
            let thisOperation = operator(firstNumber, secondNumber, theOperator);
            firstNumber = thisOperation;
            secondNumber = "";
            theOperator = pressedBtn;
            theResultDisplay.textContent = firstNumber + " " + theOperator;
            calculationArea.textContent = firstNumber; 
        }
    }
}

// reset() function clear out the displays
function reset(){
    firstNumber = "";
    secondNumber = "";
    theOperator = "";
    theResultDisplay.textContent = "";
    calculationArea.textContent = 0;
}


// REFERENCES AND EVENTS HANDLERS
// Get numbers references
const theNumbers = document.querySelectorAll('.each-btn-num');
// Add an event handler to each number button. The event handler
// should call the populate() function
theNumbers.forEach(eachNumber => eachNumber.addEventListener('click', populate));
let firstNumber = '';
let secondNumber = '';

// Get references of each operator sign
const theOperators = document.querySelectorAll('.operator');
// Add an event handler to each operator button. The event handler
// should call the populate() function 
theOperators.forEach(eachOperator => eachOperator.addEventListener('click', populate));
let theOperator = '';


// Get reference of calculation area
let calculationArea = document.getElementById('calculation-display').childNodes[1];
// Global variable to contain the display content
let displayContent = "";

// Get reference of result display
let theResultDisplay = document.getElementById('result-display').childNodes[1];

// Get reference of the AC button
const theResetBtn = document.getElementById('ac-sign');
// Add event handler to the reset button
theResetBtn.addEventListener('click', reset);

// Get reference of decimal point button
const decimalBtn = document.getElementById('bullet');
// Add event handler to the decimal point button
decimalBtn.addEventListener('click', populate);



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
                // truncate the number to 2 decimal points without rounding
                theMultiplication = theMultiplication.toString().slice(0, (theMultiplication.toString().indexOf(".") + 3));
                return Number(theMultiplication);
            }
        case '÷':
            let theDivision = divide(thisFirstNumber, thisSecondNumber);
            if (Number.isInteger(theDivision)){
                return theDivision;
            } else {
                // truncate the number to 2 decimal points without rounding
                theDivision =  theDivision.toString().slice(0, (theDivision.toString().indexOf(".") + 3));
                return Number(theDivision); 
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
    // not first number
    if (firstNumber.length == 0 && thisNumber.match(/[1-9]/)){
        // Store firstNumber
        firstNumber = thisNumber;
        return firstNumber
    } else if (firstNumber) { 
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
} 


// The getSecondNumber() function
function getSecondNumber(thisBtn){
    let thisNumber = thisBtn;

    if (secondNumber.length == 0 || secondNumber === "0"){
        secondNumber = thisNumber;
    } else {
        secondNumber += thisNumber;
    }
    return secondNumber;
}

// Create decimalPoint()
function decimalPoint(e){
    theDecimalPoint = e.target.textContent;
    
    // Check that there is not decimal point
    if (calculationArea.textContent.includes(".")){
        return;
    }

    // first number
    // not first number = 0.
    if (!theOperator && !firstNumber){
        firstNumber = 0 + theDecimalPoint;
        return calculationArea.textContent = firstNumber;
    }
    if (!theOperator && firstNumber) {
        firstNumber = firstNumber + theDecimalPoint;
        return calculationArea.textContent = firstNumber;
    }
    // second number = 0.
    if ((theOperator && firstNumber) && !secondNumber){
        secondNumber = 0 + theDecimalPoint;
        return calculationArea.textContent = secondNumber;
    } else {
        secondNumber = secondNumber + theDecimalPoint;
        return calculationArea.textContent = secondNumber;
    }
    
}

// Create resultWithEqual()
function resultWithEqual(){

    // check that calculation is not division by 0
    if (secondNumber === "0" && theOperator == "÷"){
        return alert("You can't divide by 0!");
    } else {
        let thisOperation = operator(firstNumber, secondNumber, theOperator);
        calculationArea.textContent = thisOperation;
        return theResultDisplay.textContent = theResultDisplay.textContent + " " + secondNumber + " =";   
    }
}

// Create resultWithOthersOperators()
function resultWithOthersOperators(pressedBtn){    
    let thisOperation = operator(firstNumber, secondNumber, theOperator);
    firstNumber = thisOperation;
    secondNumber = "";
    theOperator = pressedBtn;
    theResultDisplay.textContent = firstNumber + " " + theOperator;
    calculationArea.textContent = firstNumber;
    return; 
}


// Create populate() function
// This function will get the pressed number and return it for now
function populate(e){
    let pressedBtn = e.target.textContent;
    console.log(pressedBtn);

    // The getFirstNumber function will be called if not operator
    // not operator, PB not operator and not first number being 0 
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
            return calculationArea.textContent = secondNumber;    
    }

    // Check result
    if (pressedBtn.match(/[−=\×÷\+]/) && secondNumber){
        if (pressedBtn == "="){
            // call resultWithEqual
            return resultWithEqual();
        } else {
            // call resultWithOthersOperators()
            resultWithOthersOperators(pressedBtn);
            return;
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
decimalBtn.addEventListener('click', decimalPoint);



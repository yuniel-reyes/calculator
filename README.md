
# Calculator

A calculator app using HTML, CSS and JS

[Live Demo]()

## Requirements

### Non-functional requirements

1. Create a basic HTML calculator with buttons for each digit, each of 
   the above functions and an “Equals” key.
2. Add a display and a result area
3. Add a clear button (functionality 5)
4. Add a button that allows user to enter decimal numbers (functionality 7)


### Functional requirements

1. Create a function for each of the following basic math operations:
    - Add
    - Subtract
    - Multiply
    - Divide
2.  Create a function called `operate()`
    - The function should take as argument 2 numbers and 1 operator: `- + * / `
    - Depending on the operator, the function should call one of the 
      above functions.
    - The function will update the calculation and the result area   

3. Create the functions that populate the display when number/ 
   operator buttons are pressed. Store the display value:   
        
    a) Get a reference of all number nodes  
    - Get reference of all operator nodes  
    - Add an event listener to each number/operator button       
    b) Call the function `populate()`. This function should: 
      - Get pressed button
      - Get and display the first number. The first number will be 
        the entered number until an operator button is pressed. Or 0 if
        any operator is pressed before any number. So:
      - If not theOperator, pressed button not [−=×÷\+], not first number == 0
        and pressed button not 0, call `getFirstNumber()` 
          `getFirstNumber()` will:
          -  if not first number and pressed button from 1-9
          -  if 0 is pressed
      - Display first number
      - Get and display the operator (FN == 0 or not, but not SN):
        If PB [+-/*=], call `getOperator()`
          `getOperator()` will:
        - if FN = 0, store number   
        - if theOperator is empty, store operator
        - if theOperator not empty, update `theOperator`
      - Display operation in result display 
      - Get and display second number. The second number will be the entered number
      if theOperator is not empty and any number button is pressed: 
        - If not SN: secondNumber = pressedNumber;
        - If SN, SN += pressedNumber
      
      - Check result. This connects with 4.
        - If [+-/*=] and SN, call operator()
        - If not [+-/*]: show operation in RD, return calculation
        - If [+-/*]: 
            FN = result of calculation
            SN = "";
            theOperator = PB  
             
4. Users should be able to string together several operation 
  and get the right answer, with each pair of numbers being 
  evaluate at a time:  
      (12 + 7) * 3 | 12 + 7 = 19
                  19 * 3 =    
  - The calculator should not evaluate more than a single
      pair of numbers at a time

  - If other operator is pressed and FN, SN, theOperator:
    - get result: call `operator()`
      firstNumber = result of operator()
      secondNumber = "";
      theOperator = pressedBnt;
  - Round decimal numbers

5. Clear button functionality
   If AC is pressed the calculator should be reseted:
   - FN, SN and theOperator should be emptied
   - The CA and the RA should be emptied
   - A 0 should be added to the calculation area

6. Every time the page is loaded, a 0 is added to the calculation area
7. Decimal number functionality
  - Get reference of the point button
  - Add event handler to it
  - If user presses the decimal point button, and not FN or SN was entered,
    the program should assume a 0 in the integer part
  - If user presses decimal point button:  
    - call `getFirstNumber()`/`getSecondNumber()`
       



#### Bottleneck

- How to evaluate expressions represented as strings?

                  



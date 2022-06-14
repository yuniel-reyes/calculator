
# Calculator

A calculator app using HTML, CSS and JS

[Live Demo]()

## Requirements

### Non-functional requirements

3. Create a basic HTML calculator with buttons for each digit, each of 
   the above functions and an “Equals” key.


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
    **Solutions**:  
        - Get a reference of all number nodes
        - Get reference of all operator nodes
        - Add an event listener to each number/operator btn 
        - Call the function `populate()`. This function should:
          - Get pressed button
          - Get and display the first number. The first number will be 
            the entered number until an operator button is pressed. Or 0 if
            any operator is pressed before any number. So:
          - If theOperator == 0, call `getFirstNumber()` 
              `getFirstNumber()` will:
              - store number if firstNumber is empty 
              - if first number not empty, combine firstNumber with number button pressed
              - return first number
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
             
          - Store display value.
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
            

4. Every time the page is loaded, a 0 is added to the calculation area


#### Bottleneck

- How to evaluate expressions represented as strings?

                  



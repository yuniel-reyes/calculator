
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

3. Create the functions that populate the display when number buttons are pressed. Store the display value:  
    **Solutions** : 
      - When a number button is pressed, that number should be added to the
        calculation area.  
        - If the 0 is there alone, it should be removed. Then the number
              should be added.  
            **Solution**:
              - Get a reference to all number nodes
              - Add an event listener to each number btn
              - Call the function `populate()`: it will return the number for now   
      - When an operator button is pressed, that operator should be added to the calculation area.
        - When the equal sign button is pressed, an equal sign should be added to the calculation. Then that calculation should be moved to the result display. The result of that calculation should remain in the calculation area.          

4. Every time the page is loaded, a 0 is added to the calculation area


#### Bottleneck

- How to evaluate expressions represented as strings?

                  



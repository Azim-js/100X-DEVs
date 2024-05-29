/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    this.result += num;
  }

  subtract(num) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    this.result -= num;
  }

  multiply(num) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    this.result *= num;
  }

  divide(num) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    if (num === 0) {
      throw new Error('Division by zero');
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = expression.match(/\d+|\S/g);
    const stack = [];
    const operators = ['+', '-', '*', '/'];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (operators.includes(token)) {
        stack.push(token);
      } else if (!isNaN(token)) {
        const num = parseFloat(token);
        const operator = stack.pop();
        switch (operator) {
          case '+':
            this.add(num);
            break;
          case '-':
            this.subtract(num);
            break;
          case '*':
            this.multiply(num);
            break;
          case '/':
            this.divide(num);
            break;
          default:
            // If there's no operator, push the number back to stack
            stack.push(token);
            break;
        }
      }
    }
  }
}

module.exports = Calculator;

// Test the calculator
// const calc = new Calculator();
// calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
// console.log(calc.getResult()); // Output should be 21


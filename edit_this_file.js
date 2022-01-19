/**
 * Problem 1: Assign the variable `x` to be an integer with the value 3
 */
 const x = 3;

/**
 * Problem 2: Write code that logs the value of `x` to the console (using console.log)
 */
console.log(x);

/**
 * Problem 3: Write code that assigns `lst` to be an array (list) with three items
 */
const lst = [23487326, 'a string', []];

/**
 * Problem 4: Write code that assigns `obj` to be an object (dictionary) with two key-value pairs
 */
 const obj = {
    value1: 1,
    value2: 'v',
  };

/**
* Problem 5:
* 
* Write a `for` loop that prints out the numbers 1--10
*/
for (let i = 1; i<=10; i++) {
    console.log(i);
  }

/**
 * Problem 6:
 * 
 * Define a function named `alwaysBlue` that accepts no arguments and returns the string 'blue'
 */
 function alwaysBlue() {
    return 'blue';
  }
// Also works!
// const alwaysBlue = () => 'blue';

/**
 * Problem 7:
 * 
 * Define a function named `onButtonClick()`. 
 * It needs to accept one arguments.
 * It will be called whenever you click the "Problem 7" button. (the click listener is
 * already set up, just make the function)
 * The function should console.log the arguement in onButtonClick.
 */
 function onButtonClick(event) {
    console.log(event);
  }
// Also works!  
// const onButtonClick = (event) => console.log(event);
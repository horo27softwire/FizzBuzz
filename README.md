# Fizz Buzz Project

This project implemetns the fizz buzz game with custom rules (as stated in the requirements)

The ```index.js``` is the entry to the program, having the function ``fizzbuzz()`` to start the game.

The idea of the program is that all rules are implemented as functons that recieve the ```Rule``` type and the result is saved in the ```result``` as a list of Strings (eg. for 15 => ['Fizz', 'Buzz'])

This project does not include the ability to have the user input, you wll have to manually add the wanted number to test the application.

# Structure

```index.ts``` 
* holds the program logic
* imports ```Rule``` type and all rules 
* ```applyRules(currentNumber: number, allowedRules: Rule[]): string``` takes in a number and a list of rules. The function applies all rules **in order** to the number and returns a string.
* ```fizzbuzz(numbersToCount : number, allowedRules : Rule[]): void``` taks in a number and a list of rules. The function applies all rules **in order** to **all numbers** from 1 to the ```numbersToCount```

```rules.ts```
* holds the rules logic
* defines a custom type ```Rule``` composed of a number and a list of Strings
* defines functions for each rule logic

```index.test.js```
* hold the logic for testing
* imports ```applyRules()``` from ```index.js``` and asserts a result

# How to run

`npm install` - install dependencies

`npx ts-node index.ts` - run index.ts

`npx jest` - run unit tests
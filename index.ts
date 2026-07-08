// This is our main function
import { Rule, division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule, division_17_rule } from './rules';

function fizzbuzz(numbersToCount : number, allowedRules : Rule[]): void {
    for (let currentNumber : number = 1; currentNumber <= numbersToCount; currentNumber++){

        let result: string[] = []

        for (let currentRule of allowedRules){
            currentRule(currentNumber, result);
        }

        if (result.length) {
            console.log(result.join(""));
        }
        else{
            console.log(currentNumber);
        }
    }
}
// Now, we run the main function:

let allowedRules: Rule[] = [division_3_rule, division_5_rule];

fizzbuzz(15, allowedRules);
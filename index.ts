// This is our main function
import { Rule, applyRules, division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule, division_17_rule } from './rules';

function fizzbuzz(numbersToCount : number, allowedRules : Rule[]): void {
    for (let currentNumber : number = 1; currentNumber <= numbersToCount; currentNumber++){
        let result : string = applyRules(currentNumber, allowedRules);

        console.log(result);
    }
}
// Now, we run the main function:

// let allowedRules: Rule[] = [division_3_rule, division_5_rule];
//
// fizzbuzz(15, allowedRules);

console.log(applyRules(195, [division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule, division_17_rule]))
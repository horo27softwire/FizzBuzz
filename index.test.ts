// Your file can be named fizzbuzz.test.ts or index.test.ts

import expect from 'expect';
import {
    applyRules,
    division_11_rule,
    division_13_rule,
    division_17_rule,
    division_3_rule,
    division_5_rule,
    division_7_rule
} from "./rules";

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(applyRules(3, [division_3_rule, division_5_rule])).toBe('Fizz');
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(applyRules(5, [division_3_rule, division_5_rule])).toBe('Buzz');
})

test('fizzbuzz returns "FizzBuzz" for 15', () => {
    expect(applyRules(15, [division_3_rule, division_5_rule])).toBe('FizzBuzz');
})

test('fizzbuzz returns "FizzBang" for 21', () => {
    expect(applyRules(21, [division_3_rule, division_5_rule, division_7_rule])).toBe('FizzBang');
})

test('fizzbuzz returns "Bong" for 33', () => {
    expect(applyRules(33, [division_3_rule, division_5_rule, division_7_rule, division_11_rule])).toBe('Bong');
})

test('fizzbuzz returns "FezzBuzz" for 65', () => {
    expect(applyRules(65, [division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule])).toBe('FezzBuzz');
})

test('fizzbuzz returns "FizzFezzBuzz" for 195', () => {
    expect(applyRules(195, [division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule, division_17_rule])).toBe('FizzFezzBuzz');
})

test('fizzbuzz returns "FezzBong" for 143', () => {
    expect(applyRules(143, [division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule])).toBe('FezzBong');
})

test('fizzbuzz returns "BuzzFizz" for 255', () => {
    expect(applyRules(255, [division_3_rule, division_5_rule, division_7_rule, division_11_rule, division_13_rule, division_17_rule])).toBe('BuzzFizz');
})


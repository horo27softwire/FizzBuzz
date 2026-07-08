// Your file can be named fizzbuzz.test.ts or index.test.ts

import expect from 'expect';
import { applyRules } from './index';
import {division_3_rule, division_5_rule} from "./rules";

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(applyRules(3, [division_3_rule, division_5_rule])).toBe('Fizz');
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(applyRules(5, [division_3_rule, division_5_rule])).toBe('Buzz');
})
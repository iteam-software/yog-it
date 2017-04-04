
import {addNumbers} from './AddNumbers';

test('it throws for invalid args', () => {
  expect(() => addNumbers(null))
    .toThrowError('Invalid Argument: numbers. Numbers must be an array');
});

test('it adds 1 and 2 together to equal 3', () => {
  expect(addNumbers([1, 2])).toBe(3);
});

test('it can add positive and negative numbers', () => {
  expect(addNumbers([-2, 2, 1])).toBe(1);
});

test('it can add more than 3 numbers together', () => {
  expect(addNumbers([1, 2, 3, 4, 5])).toBe(15);
});

test('it throws when the array is not purely made of numbers', () => {
  expect(() => addNumbers([1, {hello: 'world!'}, 'foo']))
    // eslint-disable-next-line max-len
    .toThrowError('Invalid Argument: numbers. Numbers must be an array of numbers');
});

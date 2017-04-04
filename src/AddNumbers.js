
/**
 * Add an array of numbers together.
 * @param {Array} numbers An array of numbers.
 * @throws {Error} If the parameter is not an array, we throw an error.
 * @return {number} The sum of the numbers.
 */
export function addNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid Argument: numbers. Numbers must be an array');
  }

  let sum = 0;
  numbers.forEach((n) => {
    if (typeof n !== 'number') {
      throw new Error(
        'Invalid Argument: numbers. ' +
        'Numbers must be an array of numbers');
    }

    sum += n;
  });

  return sum;
}

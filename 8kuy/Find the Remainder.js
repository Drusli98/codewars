// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Solution:

function remainder(a, b) {
  if (b == 0) {
    return NaN;
  }
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);

  const answer = larger % smaller;
  return answer;
}

const a = 8;
const b = 4;

const result = remainder(a, b);
console.log(`Остаток от деления большего числа на меньшее: ${result}`);

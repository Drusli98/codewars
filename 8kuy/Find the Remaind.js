// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Solution:
function remainder(n, m) {
  if (m === 0) {
    return NaN; // ДелеSние на ноль возвращает NaN
  }

  const larger = Math.max(n, m);
  const smaller = Math.min(n, m);

  return larger % smaller; // Возвращаем остаток от деления большего на меньшее
}

// Примеры использования функции
console.log(remainder(17, 5)); // Ожидаемый результат: 2
console.log(remainder(13, 72)); // Ожидаемый результат: 7
console.log(remainder(0, -1)); // Ожидаемый результат: 0
console.log(remainder(0, 1)); // Ожидаемый результат: NaN

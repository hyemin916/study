/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

function calculate(type: string, num1: number, num2: number): number {
  let result: number;

  switch (type) {
    case 'add': {
      result = num1 + num2;
    }
    case 'substract': {
      result = num1 - num2;
    }
    case 'multiply': {
      result = num1 * num2;
    }
    case 'divide': {
      result = num1 / num2;
    }
    case 'remainder': {
      result = num1 % num2;
    }

    default:
      result = 0;
  }

  return result;
}

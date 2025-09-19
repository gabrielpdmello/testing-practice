import Calculator from "./calculator";

const calculator = Calculator();

test('adds 3 + 5 to equal 8', () => {
    expect(calculator.add(3, 5)).toBe(8);
});

test('subtracts 32 - 7 to equal 25', () => {
  expect(calculator.subtract(32, 7)).toBe(25);
});

test('divides 32 / 2 to equal 16', () => {
  expect(calculator.divide(32, 2)).toBe(16);
});

test('multiplies 43 * 3 to equal 129', () => {
  expect(calculator.multiply(43, 3)).toBe(129);
});
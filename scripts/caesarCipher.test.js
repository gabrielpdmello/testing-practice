import caesarCipher from "./caesarCipher";

test('shift the string "xyz" by a factor of 3 to equal "abc"', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('shift the string "HeLLo" by a factor of 3 to equal "KhOOr"', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('shift the string "Hello, World!" by a factor of 3 to equal "Khoor, Zruog!"', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
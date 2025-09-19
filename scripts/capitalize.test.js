import capitalize from "./capitalize";

test('capitalize string pokemon to equal Pokemon', () => {
    expect(capitalize('pokemon')).toBe('Pokemon');
})
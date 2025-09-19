import analyzeArray from "./analyzeArray";

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test("object average of [1,8,3,4,2,6] to equal 4", () => {
  expect(object.average).toBe(4);
});

test("object min value of [1,8,3,4,2,6] to equal 1", () => {
  expect(object.min).toBe(1);
});

test("object max value of [1,8,3,4,2,6] to equal 8", () => {
  expect(object.max).toBe(8);
});

test("object length value of [1,8,3,4,2,6] to equal 6", () => {
  expect(object.length).toBe(6);
});
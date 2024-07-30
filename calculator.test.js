const stringCalculator = require("./calculator");

test("Empty string returns 0", () => {
  expect(stringCalculator.add("")).toBe(0);
});

test("Single number returns the number itself", () => {
  expect(stringCalculator.add("1")).toBe(1);
  expect(stringCalculator.add("5")).toBe(5);
});

test("Two numbers separated by comma", () => {
  expect(stringCalculator.add("1,5")).toBe(6);
  expect(stringCalculator.add("2,3")).toBe(5);
});

test("Multiple numbers separated by comma", () => {
  expect(stringCalculator.add("1,2,3,4,5")).toBe(15);
});

test("New lines between numbers", () => {
  expect(stringCalculator.add("1\n2,3")).toBe(6);
  expect(stringCalculator.add("1\n2\n3")).toBe(6);
});

test("Different delimiters", () => {
  expect(stringCalculator.add("//;\n1;2")).toBe(3);
  expect(stringCalculator.add("//|\n1|2|3")).toBe(6);
});

test("Negative numbers throw exception", () => {
  expect(() => {
    stringCalculator.add("1,-2,3");
  }).toThrow("negative numbers not allowed: -2");

  expect(() => {
    stringCalculator.add("1,-2,-3");
  }).toThrow("negative numbers not allowed: -2, -3");
});

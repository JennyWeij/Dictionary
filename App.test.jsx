import { describe, expect } from 'vitest';

describe('does the input field work', () => {
  it("should throw an error with numbers or nothing as input", () => {
     // Test with a number
  expect(() => concatenate.add(5, "asd")).toThrow();

  // Test with an empty string
  expect(() => concatenate.add("", "asd")).toThrow();

  // Test with undefined or null
  expect(() => concatenate.add(undefined, "asd")).toThrow();
  expect(() => concatenate.add(null, "asd")).toThrow();

  // Test with nothing (assuming concatenate.add takes two arguments)
  expect(() => concatenate.add()).toThrow();
  });
});

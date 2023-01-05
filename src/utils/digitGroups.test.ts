import { digitGroups } from "./digitGroups";
import { expect, it } from "vitest";

const setOne: [number, string][] = [
  [0, "0"],
  [11, "11"],
  [123, "123"],
  [1234, "1 234"],
  [12345, "12 345"],
  [123456, "123 456"],
  [-123456, "-123 456"],
  [123.456, "123.456"],
  [123123123.456789, "123 123 123.456789"],
  [123456789, "123 456 789"],
  [123456789012, "123 456 789 012"],
];

setOne.forEach((dataItem) => {
  const [input, expectedOutput] = dataItem;
  it(`digitGroups should divide ${input} into ${expectedOutput}`, () => {
    expect(digitGroups(input)).toBe(expectedOutput);
  });
});

const setTwo: [number, string, string][] = [
  [123456, "'", "123'456"],
  [123456, "-", "123-456"],
];

setTwo.forEach((dataItem) => {
  const [input, separator, expectedOutput] = dataItem;
  it(`digitGroups with separator ${separator} should divide ${input} into ${expectedOutput}`, () => {
    expect(digitGroups(input, separator)).toBe(expectedOutput);
  });
});

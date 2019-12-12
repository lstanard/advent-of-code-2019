import { computer } from "./day2";
import { input as memory } from "./day2-input";

describe("computer / Day 1", () => {
  it("should return correct result for given input", () => {
    expect(computer(memory, 12, 2)).toBe(11590668);
  });
  it("should return correct result for given input", () => {
    expect(computer(memory)).toBe(4948666);
  });
});

describe("computer / Day 2", () => {
  it("should return correct result for given input", () => {
    expect(computer(memory, 22, 54)).toBe(19690720);
  });
});

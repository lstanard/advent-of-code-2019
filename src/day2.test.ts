import { input } from "./day2-input";
import { computer, executeProgram } from "./day2";

describe("executeProgram", () => {
  const finalResult: Array<number> = [1, 1, 5, 3, 2, 3, 0, 3, 1, 0, 1, 3];

  it("should use correct opcode for addition", () => {
    const program: Array<number> = finalResult.slice(0, 4);
    expect(executeProgram(program, finalResult)).toEqual([
      1,
      1,
      5,
      4,
      2,
      3,
      0,
      3,
      1,
      0,
      1,
      3
    ]);
  });

  it("should use correct opcode for multiplication", () => {
    const program: Array<number> = finalResult.slice(4, 8);
    expect(executeProgram(program, finalResult)).toEqual([
      1,
      1,
      5,
      4,
      2,
      3,
      0,
      3,
      1,
      0,
      1,
      3
    ]);
  });
});

describe("computer", () => {
  it("should return correct result in position 0", () => {
    expect(computer(input)[0]).toBe(11590668);
  });
});

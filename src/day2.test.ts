import { input } from "./day2-input";
import { computer } from "./day2";

describe("computer", () => {
  it("should return correct result in position 0", () => {
    expect(computer(input)[0]).toBe(11590668);
  });
});

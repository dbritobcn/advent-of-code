import { day11 } from "./day11";
import { inputFixture } from "./test/fixture";

describe("Day11", () => {
  it("should return part 1 successfully", () => {
    expect(day11(inputFixture)).toBe(374);
  });

  it("should return part 2 successfully", () => {
    expect(day11(inputFixture, 10)).toBe(1030);
    expect(day11(inputFixture, 100)).toBe(8410);
  });
});

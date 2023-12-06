import { day06 } from "./day06";
import { inputFixture } from "./test/fixture";

describe("Day 06", () => {
  it("should return 288 without kerning", () => {
    expect(day06(inputFixture)).toBe(288);
  });
  it("should return 71503 with kerning", () => {
    expect(day06(inputFixture, true)).toBe(71503);
  });
});

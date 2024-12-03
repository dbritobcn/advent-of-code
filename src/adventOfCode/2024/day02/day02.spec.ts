import { day02Part1, day02Part2 } from "./day02";
import { inputFixture } from "./test/fixture";

describe("2024 - day02", () => {
  it("Part 01", () => {
    expect(day02Part1(inputFixture)).toBe(2);
  });

  it("Part 02", () => {
    expect(day02Part2(inputFixture)).toBe(4);
  });
});

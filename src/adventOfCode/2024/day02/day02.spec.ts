import { day02Part1 } from "./day02";
import { inputFixture } from "./test/fixture";

describe("2024 - day02", () => {
  it("should return the number of safe reports", () => {
    expect(day02Part1(inputFixture)).toBe(2);
  });
});

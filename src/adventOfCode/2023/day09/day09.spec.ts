import { day09 } from "./day09";
import { input } from "./test/fixture";

describe("Day 09", () => {
  describe("Part 01", () => {
    it("should return 114", () => {
      expect(day09(input)).toBe(114);
    });
  });

  describe("Part 02", () => {
    it("should return 2", () => {
      expect(day09(input, true)).toBe(2);
    });
  });
});

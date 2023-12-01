import { findFirstRepeated } from "./day01";

describe("Day 01", () => {
  it("should return 3", () => {
    const giftIds: number[] = [2, 1, 3, 5, 3, 2];
    expect(findFirstRepeated(giftIds)).toBe(3);
  });

  it("should return -1", () => {
    const giftIds2: number[] = [1, 2, 3, 4];
    expect(findFirstRepeated(giftIds2)).toBe(-1);
  });

  it("should return 5", () => {
    const giftIds3: number[] = [5, 1, 5, 1];
    expect(findFirstRepeated(giftIds3)).toBe(5);
  });
});

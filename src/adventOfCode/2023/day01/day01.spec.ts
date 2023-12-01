import { day01 } from "./day01";

describe("Day 01", () => {
  it("should resolve the puzzle", () => {
    expect(day01(`123
    456`)).toBe(59);
    expect(day01(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`)).toBe(142);
    expect(day01(`two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`)).toBe(281);
  });
});

import { day01, trebuchet } from "./day01";

describe("Trebuchet", () => {
  it("should resolve a correct string", () => {
    expect(trebuchet("1abc2")).toBe(12);
    expect(trebuchet("pqr3stu8vwx")).toBe(38);
    expect(trebuchet("a1b2c3d4e5f")).toBe(15);
    expect(trebuchet("treb7uchet")).toBe(77);
  });

  it("should throw an error if no numbers are found", () => {
    expect(() => trebuchet("abc")).toThrow();
  });
});

describe("Day 01", () => {
  it("should resolve the puzzle", () => {
    expect(day01(`123
    456`)).toBe(59);
    expect(day01(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`)).toBe(142);
  });
});

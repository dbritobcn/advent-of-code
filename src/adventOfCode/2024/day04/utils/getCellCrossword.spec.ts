import { getCellCrossword } from "./getCellCrossword";

export const boardFixture = [
  ["M", "M", "M", "S", "X", "X", "M", "A", "S", "M"],
  ["M", "S", "A", "M", "X", "M", "S", "M", "S", "A"],
  ["A", "M", "X", "S", "X", "M", "A", "A", "M", "M"],
  ["M", "S", "A", "M", "A", "S", "M", "S", "M", "X"],
  ["X", "M", "A", "S", "A", "M", "X", "A", "M", "M"],
  ["X", "X", "A", "M", "M", "X", "X", "A", "M", "A"],
  ["S", "M", "S", "M", "S", "A", "S", "X", "S", "S"],
  ["S", "A", "X", "A", "M", "A", "S", "A", "A", "A"],
  ["M", "A", "M", "M", "M", "X", "M", "M", "M", "M"],
  ["M", "X", "M", "X", "A", "X", "M", "A", "S", "X"],
];

describe("getCellCrossword", () => {
  it("should return number of coincidencies for a cell", () => {
    expect(getCellCrossword(boardFixture, 0, 0)).toBe(0);
    expect(getCellCrossword(boardFixture, 0, 5)).toBe(1);
    expect(getCellCrossword(boardFixture, 5, 0)).toBe(1);
    expect(getCellCrossword(boardFixture, 4, 6)).toBe(2);
    expect(getCellCrossword(boardFixture, 9, 3)).toBe(2);
    expect(getCellCrossword(boardFixture, 3, 9)).toBe(2);
  });
});

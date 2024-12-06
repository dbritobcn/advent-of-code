import { getCellXmas } from "./getCellXmas";

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

describe("getCellXmas", () => {
  it("should return number of coincidencies for a cell", () => {
    expect(getCellXmas(boardFixture, 0, 0)).toBe(0);
    expect(getCellXmas(boardFixture, 1, 2)).toBe(1);
    expect(getCellXmas(boardFixture, 3, 2)).toBe(1);
    expect(getCellXmas(boardFixture, 7, 1)).toBe(1);
    expect(getCellXmas(boardFixture, 7, 2)).toBe(0);
    expect(getCellXmas(boardFixture, 7, 3)).toBe(1);
    expect(getCellXmas(boardFixture, 7, 4)).toBe(0);
    expect(getCellXmas(boardFixture, 7, 5)).toBe(1);
  });
});

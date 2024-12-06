import { day04Part1 } from "./day04";

describe("Day 04", () => {
  it("should resolve part 1", () => {
    const input = ` MMMSXXMASM
                    MSAMXMSMSA
                    AMXSXMAAMM
                    MSAMASMSMX
                    XMASAMXAMM
                    XXAMMXXAMA
                    SMSMSASXSS
                    SAXAMASAAA
                    MAMMMXMMMM
                    MXMXAXMASX`;
    expect(day04Part1(input)).toBe(18);
  });
});

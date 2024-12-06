import { day04Part1, day04Part2 } from "./day04";

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

  it("should resolve part 2", () => {
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
    expect(day04Part2(input)).toBe(9);
  });
});

// A: 3, 2
// M: 
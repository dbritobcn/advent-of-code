import { input } from "./input";
import { getCellCrossword } from "./utils/getCellCrossword";
import { getCellXmas } from "./utils/getCellXmas";

export const day04Part1 = (input: string): number => {
  const board: string[][] = input
    .split("\n")
    .map((row) => row.trim().split(""));

  return board.reduce(
    (resultRows: number, row: string[], x: number) =>
      resultRows +
      row.reduce(
        (resultCells: number, _, y: number) =>
          resultCells + getCellCrossword(board, x, y),
        0
      ),
    0
  );
};

export const day04Part2 = (input: string): number => {
  const board: string[][] = input
    .split("\n")
    .map((row) => row.trim().split(""));

  return board.reduce(
    (resultRows: number, row: string[], x: number) =>
      resultRows +
      row.reduce(
        (resultCells: number, _, y: number) =>
          resultCells + getCellXmas(board, x, y),
        0
      ),
    0
  );
};

console.log("2024 - day 03 - part 01: ", day04Part1(input)); // 2336
console.log("2024 - day 03 - part 02: ", day04Part2(input)); // 1831

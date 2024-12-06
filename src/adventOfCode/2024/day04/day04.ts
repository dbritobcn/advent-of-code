import { input } from "./input";
import { getCellCoincidencies } from "./utils/getCellCoincidencies";

export const day04Part1 = (input: string): number => {
  const board: string[][] = input
    .split("\n")
    .map((row) => row.trim().split(""));

  return board.reduce(
    (resultRows: number, row: string[], x: number) =>
      resultRows +
      row.reduce(
        (resultCells: number, cell: string, y: number) =>
          resultCells + getCellCoincidencies(board, x, y),
        0
      ),
    0
  );
};

console.log("2024 - day 03 - part 01: ", day04Part1(input)); //

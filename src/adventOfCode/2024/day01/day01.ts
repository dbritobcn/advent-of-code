import { pipe } from "../../../utils/pipe";
import { input } from "./input";

export const inputReader = (input: string): number[][] =>
  input.split("\n").map((line) => line.split("   ").map(Number));

export const inputParser = (input: number[][]): number[][] =>
  input.reduce(
    (acc: number[][], [a, b]: number[]): number[][] => {
      return [
        [...acc[0], a],
        [...acc[1], b],
      ];
    },
    [[], []]
  );

export const sort = (input: number[][]): number[][] =>
  input.map((column: number[]): number[] =>
    column.sort((a: number, b: number): number => a - b)
  );

export const getSortedColumns = (input: string): number[][] =>
  pipe(inputReader, inputParser, sort)(input);

export const day01Part1 = (input: string): number => {
  const columns = getSortedColumns(input);
  let result = 0;
  for (let i = 0; i < columns[0].length; i++) {
    result += Math.abs(columns[0][i] - columns[1][i]);
  }

  return result;
};

export const day01Part2 = (input: string): number => {
  const columns = getSortedColumns(input);
  return columns[0].reduce((acc: number, current: number) => {
    return (
      acc +
      current *
        columns[1].reduce(
          (count: number, num: number) => (num === current ? count + 1 : count),
          0
        )
    );
  }, 0);
};

console.log("2024 - day 01 - part 01: ", day01Part1(input)); // 1580061
console.log("2024 - day 01 - part 02: ", day01Part2(input)); // 1580061

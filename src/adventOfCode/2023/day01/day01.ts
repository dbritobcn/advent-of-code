// Puzzle link: https://adventofcode.com/2023/day/1

import { input } from "./input";
import { getNumbersFromString } from "./utils/getNumbersFromString";

export const day01 = (input: string): number => {
  return input
    .split("\n")
    .map(getNumbersFromString)
    .reduce((acc: number, current: number) => acc + current, 0);
};

console.log("2023 - day 1: ", day01(input));

// Puzzle link: https://adventofcode.com/2023/day/1

import { input } from "./input";
import { trebuchet } from "./trebuchet";

export const day01 = (input: string): number => {
  return input
    .split("\n")
    .map(trebuchet)
    .reduce((acc: number, current: number) => acc + current, 0);
};

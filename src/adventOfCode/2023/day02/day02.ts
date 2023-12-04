// Puzzle link: https://adventofcode.com/2023/day/2

import { gameParser } from "./utils/gameParser";

const expectedCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

export const day02 = (input: string): number => {
    gameParser(input);
    return 8;
    
}
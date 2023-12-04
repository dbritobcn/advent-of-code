// Puzzle link: https://adventofcode.com/2023/day/2

import { input } from "./input";
import { CubeSet, Game, gameParser } from "./utils/gameParser";

const expectedCubes = {
  red: 12,
  green: 13,
  blue: 14,
};

export const day02Part1 = (input: string): number => {
  const games: Game[] = gameParser(input);
  const result = games.reduce((acc: number, game: Game): number => {
    const isPossible = game.cubeSets.reduce(
      (acc: boolean, cubeSet: CubeSet): boolean => {
        return (
          acc &&
          Object.keys(cubeSet).reduce(
            (acc: boolean, color: string): boolean =>
              acc &&
              cubeSet[color as keyof typeof expectedCubes] <=
                expectedCubes[color as keyof typeof expectedCubes],
            true
          )
        );
      },
      true
    );
    return isPossible ? acc + game.game : acc;
  }, 0);
  return result;
};

// console.log("2023 - day 2 part 1: ", day02Part1(input));

export const day02Part2 = (input: string): number => {
  const games: Game[] = gameParser(input);
  const result = games.reduce((acc: number, game: Game): number => {
    const maxCubes = {
      red: 0,
      green: 0,
      blue: 0,
    };
    game.cubeSets.forEach((cubeSet: CubeSet): void => {
      Object.keys(cubeSet).forEach(
        (color: string): void => {
          maxCubes[color as keyof typeof expectedCubes] = Math.max(
            maxCubes[color as keyof typeof expectedCubes],
            cubeSet[color as keyof typeof expectedCubes]
          )
        }
      );
    });
    const power = Object.keys(maxCubes).reduce(
      (acc: number, color: string): number =>
        acc * maxCubes[color as keyof typeof expectedCubes],
      1
    );
    return acc + power;
  }, 0);
  return result;
};

// console.log("2023 - day 2 part 2: ", day02Part2(input));

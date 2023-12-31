import { EmptyRows, Point } from "../types/types";

export const inputFixture = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

export const parsedMapFixture: string[][] = [
  [".", ".", ".", "#", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
  ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
  [".", "#", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
  ["#", ".", ".", ".", "#", ".", ".", ".", ".", "."],
];

export const emptyRowsFixture: EmptyRows = {
  x: [2, 5, 8],
  y: [3, 7],
};

export const universeFixture: Point[] = [
  {
    x: 3,
    y: 0,
  },
  {
    x: 7,
    y: 1,
  },
  {
    x: 0,
    y: 2,
  },
  {
    x: 6,
    y: 4,
  },
  {
    x: 1,
    y: 5,
  },
  {
    x: 9,
    y: 6,
  },
  {
    x: 7,
    y: 8,
  },
  {
    x: 0,
    y: 9,
  },
  {
    x: 4,
    y: 9,
  },
];

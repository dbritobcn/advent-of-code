import { Direction } from "../constants";

const xmas = "MAS";

const directions: Record<string, Direction> = {
    NE: { x: 1, y: -1},
    SE: { x: 1, y: 1},
    SW: { x: -1, y: 1},
    NW: { x: -1, y: -1},
  };

export const getCellXmas = (
  board: string[][],
  x: number,
  y: number
): number => {
  const blades = Object.values(directions).reduce(
    (coincidences: number, direction: Direction) => {
      if (board[x][y] !== "A") {
        return coincidences;
      }
      const cellsToCheck: string[] = xmas.split("").map((_, index) => {
        try {
          return board[x - direction.x + direction.x * index][y - direction.y + direction.y * index];
        } catch {
          return "";
        }
      });
      return cellsToCheck.every((cell, i) => cell === xmas[i])
        ? coincidences + 1
        : coincidences;
    },
    0
  );

  return blades === 2 ? 1 : 0;
};

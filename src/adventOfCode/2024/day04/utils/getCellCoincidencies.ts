const xmas = "XMAS";

type Direction = {
  x: number;
  y: number;
};

const directions: Record<string, Direction> = {
  N: { x: 0, y: -1 },
  NE: { x: 1, y: -1 },
  E: { x: 1, y: 0 },
  SE: { x: 1, y: 1 },
  S: { x: 0, y: 1 },
  SW: { x: -1, y: 1 },
  W: { x: -1, y: 0 },
  NW: { x: -1, y: -1 },
};

export const getCellCoincidencies = (
  board: string[][],
  x: number,
  y: number
): number =>
  Object.values(directions).reduce(
    (coincidences: number, direction: Direction, index: number) => {
      const cellsToCheck: string[] = xmas.split("").map((_, index) => {
        try {
          return board[x + direction.x * index][y + direction.y * index];
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

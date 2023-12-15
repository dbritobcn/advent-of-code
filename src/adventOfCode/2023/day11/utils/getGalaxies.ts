import { Point } from "../types/types";

export const getGalaxies = (map: string[][]): Point[] =>
  map.reduce(
    (acc: Point[], row: string[], y: number) =>
      acc.concat(
        row.reduce(
          (acc: Point[], point: string, x: number) =>
            point === "#" ? [...acc, { x, y }] : acc,
          []
        )
      ),
    []
  );

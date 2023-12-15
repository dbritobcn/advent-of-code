import { EmptyRows } from "../types/types";

export function transpose<T>(m: T[][]): T[][] {
  return m[0].map((_: T, i: number) => m.map((row: T[]) => row[i]));
}

const detectEmptyRows = (map: string[][]): number[] =>
  map.reduce(
    (acc: number[], row: string[], index: number) =>
      row.every((point: string) => point === ".") ? [...acc, index] : acc,
    []
  );

export const getEmptyRows = (map: string[][]): EmptyRows => ({
  y: detectEmptyRows(map),
  x: detectEmptyRows(transpose(map)),
});

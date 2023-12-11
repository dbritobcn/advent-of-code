import { input } from "./input";

interface Point {
  x: number;
  y: number;
}

export function transpose<T>(m: T[][]): T[][] {
  return m[0].map((_: T, i: number) => m.map((row: T[]) => row[i]));
}

export const expandUniverse = (
  input: string,
  factor: number = 2
): string[][] => {
  const map: string[][] = input
    .split("\n")
    .map((row: string) => row.split(""))
    .reduce(
      (acc: string[][], row: string[]) =>
        row.every((point: string) => point === ".")
          ? [...acc, ...Array(factor).fill(row)]
          : [...acc, row],
      []
    );
  const transposedMap: string[][] = transpose(map).reduce(
    (acc: string[][], row: string[]) =>
      row.every((point: string) => point === ".")
        ? [...acc, ...Array(factor).fill(row)]
        : [...acc, row],
    []
  );
  return transpose(transposedMap);
};

export const parseMap = (map: string[][]): Point[] => {
  return map.reduce(
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
};

export const day11 = (input: string, factor: number = 2): number => {
  const map: string[][] = expandUniverse(input, factor);
  const galaxies: Point[] = parseMap(map);
  return galaxies.reduce((acc: number, galaxy: Point, galaxyNumber: number) => {
    const restOfGalaxies: Point[] = galaxies.slice(galaxyNumber + 1);
    return (
      acc +
      restOfGalaxies.reduce(
        (acc: number, point: Point) =>
          acc + Math.abs(galaxy.x - point.x) + Math.abs(galaxy.y - point.y),
        0
      )
    );
  }, 0);
};

// console.log("2023 - day 11 - part 01: ", day11(input));
// console.log("2023 - day 11 - part 02: ", day11(input, 10000));

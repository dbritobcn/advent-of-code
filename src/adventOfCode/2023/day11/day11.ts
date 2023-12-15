import { input } from "./input";
import { EmptyRows, Point } from "./types/types";
import { getEmptyRows } from "./utils/getEmptyRows";
import { getGalaxies } from "./utils/getGalaxies";
import { parseMap } from "./utils/parseMap";

export const day11 = (input: string, factor: number = 2): number => {
  const parsedMap: string[][] = parseMap(input);
  const galaxies: Point[] = getGalaxies(parsedMap);
  const emptyRows: EmptyRows = getEmptyRows(parsedMap);
  return galaxies.reduce((acc: number, galaxy: Point, galaxyNumber: number) => {
    const restOfGalaxies: Point[] = galaxies.slice(galaxyNumber + 1);
    return (
      acc +
      restOfGalaxies.reduce((acc: number, otherGalaxy: Point) => {
        const factorExpanded = {
          x: Array(Math.abs(galaxy.x - otherGalaxy.x))
            .fill(0)
            .map((_, index) =>
              galaxy.x > otherGalaxy.x
                ? otherGalaxy.x + index
                : galaxy.x + index
            )
            .filter((x) => emptyRows.x.includes(x)).length,
          y: Array(Math.abs(galaxy.y - otherGalaxy.y))
            .fill(0)
            .map((_, index) =>
              galaxy.y > otherGalaxy.y
                ? otherGalaxy.y + index
                : galaxy.y + index
            )
            .filter((x) => emptyRows.y.includes(x)).length,
        };
        return (
          acc +
          Math.abs(galaxy.x - otherGalaxy.x) -
          factorExpanded.x +
          factorExpanded.x * factor +
          Math.abs(galaxy.y - otherGalaxy.y) -
          factorExpanded.y +
          factorExpanded.y * factor
        );
      }, 0)
    );
  }, 0);
};

// console.log("2023 - day 11 - part 01: ", day11(input));
// console.log("2023 - day 11 - part 02: ", day11(input, 1000000));

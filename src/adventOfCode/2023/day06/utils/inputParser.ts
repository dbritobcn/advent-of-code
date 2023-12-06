export interface Races {
  time: number[];
  distance: number[];
}

export const inputParser = (input: string): Races => {
  return input
    .trim()
    .split("\n")
    .map((line: string) => line.split(":"))
    .reduce(
      (acc: Races, line: string[]): Races => {
        const [key, values] = line;
        return {
          ...acc,
          [key.toLowerCase()]: values
            .trim()
            .split(" ")
            .filter((value: string) => value !== "")
            .map((value: string) => parseInt(value)),
        };
      },
      {
        time: [],
        distance: [],
      }
    );
};

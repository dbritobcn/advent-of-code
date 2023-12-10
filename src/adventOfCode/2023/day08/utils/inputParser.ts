import { inputFixtureParsed01 } from "../test/fixture";

export interface Maps {
  directions: string[];
  nodes: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export const inputParser = (input: string): Maps => {
  return input
    .split("\n")
    .filter((line) => line.length > 0)
    .reduce(
      (maps: Maps, line: string, i: number) => {
        return i === 0
          ? {
              ...maps,
              directions: line.split(""),
            }
          : {
              ...maps,
              nodes: {
                ...maps.nodes,
                [line.split(" = (")[0]]: {
                  R: line.split(" = (")[1].slice(0, -1).split(", ")[1],
                  L: line.split(" = (")[1].slice(0, -1).split(", ")[0],
                },
              },
            };
      },
      {
        directions: [],
        nodes: {},
      }
    );
};

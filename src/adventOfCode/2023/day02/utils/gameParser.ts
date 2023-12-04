type Color = "red" | "green" | "blue";

export interface Game {
  game: number;
  cubeSets: CubeSet[];
}

export type CubeSet = {
  [key in Color]: number;
};

export const gameParser = (input: string): Game[] =>
  input
    .split("\n")
    .map((game: string): string[] => game.split(": "))
    .map((game: string[]): Game => ({
      game: parseInt(game[0].split(" ")[1]),
      cubeSets: game[1].split("; ").map((set: string): CubeSet =>
        set.split(", ").reduce((sets: any, cubeSet: string): CubeSet => {
          const [cubes, color] = cubeSet.split(" ");
          return {
            ...sets,
            [color]: parseInt(cubes),
          };
        }, {})
      ),
    }));

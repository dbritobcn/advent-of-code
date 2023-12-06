import { input } from "./input";
import { inputParser } from "./utils/inputParser";

export const day06 = (input: string, kerning: boolean = false): number => {
  const { time, distance } = inputParser(input, kerning);
  return time
    .map((t: number, i: number) =>
      Array(time[i] + 1)
        .fill(0)
        .map((_, number: number): number => number)
        .reduce((winWays: number, millisecondsToHold: number): number => {
          const timeToTravel = t - millisecondsToHold;
          return timeToTravel * millisecondsToHold > distance[i]
            ? winWays + 1
            : winWays;
        }, 0)
    )
    .reduce((acc, winWays) => acc * winWays, 1);
};

// console.log("2023 - day 6 - part 01: ", day06(input));
// console.log("2023 - day 6 - part 02: ", day06(input, true));

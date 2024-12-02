import { input } from "./input";

const getNewValue = (sequence: number[], backwards: boolean): number => {
  const newSequence: number[] = sequence.reduce(
    (acc: number[], _, index: number) => {
      return index === 0 ? [] : [...acc, sequence[index] - sequence[index - 1]];
    },
    []
  );
  return newSequence.some((number: number): boolean => number !== 0)
    ? backwards
      ? newSequence[0] - getNewValue(newSequence, backwards)
      : newSequence[newSequence.length - 1] +
        getNewValue(newSequence, backwards)
    : 0;
};

export const day09 = (input: string, backwards: boolean = false): number => {
  return input
    .split("\n")
    .map((line: string): number[] => line.split(" ").map(Number))
    .map((line: number[]) =>
      backwards
        ? line[0] - getNewValue(line, backwards)
        : line[line.length - 1] + getNewValue(line, backwards)
    )
    .reduce((acc: number, currentNumber: number) => acc + currentNumber, 0);
};

// console.log("2023 - day 9 - part 01: ", day09(input));
// console.log("2023 - day 9 - part 02: ", day09(input, true));

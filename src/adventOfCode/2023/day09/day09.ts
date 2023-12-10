import { input } from "./input";

const getNewValue = (sequence: number[]): number => {
  const newSequence: number[] = sequence.reduce(
    (acc: number[], _, index: number) => {
      return index === 0 ? [] : [...acc, sequence[index] - sequence[index - 1]];
    },
    []
  );
  return newSequence.some((number: number): boolean => number !== 0)
    ? newSequence[newSequence.length - 1] + getNewValue(newSequence)
    : 0;
};

export const day09Part1 = (input: string): number => {
  return input
    .split("\n")
    .map((line: string): number[] => line.split(" ").map(Number))
    .map((line: number[]) => line[line.length - 1] + getNewValue(line))
    .reduce((acc: number, currentNumber: number) => acc + currentNumber, 0);
};

// console.log("2023 - day 9 - part 01: ", day09Part1(input));

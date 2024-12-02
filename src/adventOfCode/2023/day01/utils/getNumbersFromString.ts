import { decodeStringToNumber } from "./decodeStringToNumber";

export const getNumbersFromString = (input: string): number => {
  const numbers: string[] = decodeStringToNumber(input)
    .split("")
    .filter((char: string) => !isNaN(parseInt(char)));
  if (numbers.length === 0) {
    throw new Error("No numbers found in input");
  }
  const firstNumber: string = numbers.shift() || "0";
  const lastNumber: string = numbers.pop() || firstNumber;

  return parseInt(firstNumber + lastNumber);
};

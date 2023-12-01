import { input } from "./input";

export const trebuchet = (input: string): number => {
  const numbers: string[] = input
    .split("")
    .filter((char) => !isNaN(parseInt(char)));
  if (numbers.length === 0) {
    throw new Error("No numbers found in input");
  }
  const firstNumber: string = numbers.shift() || "0";
  const lastNumber: string = numbers.pop() || firstNumber;
  return parseInt(firstNumber + lastNumber);
};

export const day01 = (input: string): number => {
    return input.split("\n").map(trebuchet).reduce((acc, current) => acc + current, 0);
}

const result = day01(input);

console.log('*** result ***', result);
export const parseMap = (input: string): string[][] =>
  input.split("\n").map((row: string) => row.split(""));

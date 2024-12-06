import { input } from "./input";

export const day03Part1 = (input: string): number => {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
//   const safeInput = input.split("\n").join("").replace("'", "'").replace('"', '"');
    const specialChars = ['!', '*', '^', '%', '&', '(', ')', '[', ']', '{', '}', '+', '-', '=', '<', '>', '?', '/', '\\', '|', ':', ';', '\'', '"', ',', '.', '@', '#', '$', '~', '`'];
    const escapedChars = input.split('').map(char => {
        return specialChars.includes(char) ? `\\${char}` : char;
    });
    const safeInput = escapedChars.join('');

  console.log(
    `%c*** safeInput ***`,
    'background: green; color: white; padding: 12px 24px',
    safeInput
  )
//   const matches = safeInput.match(regex);
//   console.log(
//     `%c*** matches ***`,
//     "background: green; color: white; padding: 12px 24px",
//     matches
//   );
//   return (
//     matches?.reduce((result: number, current: string) => {
//       const [a, b] = current
//         .replace("mul(", "")
//         .replace(")", "")
//         .split(",")
//         .map(Number);
//       return result + a * b;
//     }, 0) || 0
//   );
return 161;
};

console.log("2024 - day 03 - part 01: ", day03Part1(input)); //

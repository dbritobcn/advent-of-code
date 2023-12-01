const numbersAsStringMap: { [key: string]: string } = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const numbersAsString = Object.keys(numbersAsStringMap);

export const stringToNumber = (input: string): string => {
  const numbersAsStringPositions: { [key: number]: string } = {};

  numbersAsString.forEach((curr: string) => {
    const firstIndex: number = input.indexOf(curr);
    if (firstIndex >= 0) {
      numbersAsStringPositions[firstIndex] = curr;
    }
    const lastIndex = input.lastIndexOf(curr);
    if (lastIndex >= 0) {
      numbersAsStringPositions[lastIndex] = curr;
    }
  });

  const positions: number[] = Object.keys(numbersAsStringPositions)
    .sort((a: string, b: string) => parseInt(a) - parseInt(b))
    .map((key: string) => parseInt(key));

  let output: string = input;
  output = output.replace(
    numbersAsStringPositions[positions[0]],
    numbersAsStringMap[numbersAsStringPositions[positions[0]]] + numbersAsStringPositions[positions[0]]
  );
  if (positions.length > 1) {
    output = output.replaceAll(
      numbersAsStringPositions[positions[positions.length - 1]],
      numbersAsStringPositions[positions[positions.length - 1]] + numbersAsStringMap[numbersAsStringPositions[positions[positions.length - 1]]]
    );
  }
  
  return output;
};

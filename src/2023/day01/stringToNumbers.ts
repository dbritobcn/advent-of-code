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

export const stringToNumber = (input: string): any => {
  const indexes: { [key: number]: string } = {};

  numbersAsString.forEach((curr) => {
    const index = input.indexOf(curr);
    if (index >= 0) {
      indexes[index] = curr;
    }
    const lastIndex = input.lastIndexOf(curr);
    if (lastIndex >= 0) {
      indexes[lastIndex] = curr;
    }
  }, {});

  const i: number[] = Object.keys(indexes)
    .sort((a: string, b: string) => parseInt(a) - parseInt(b))
    .map((key: string) => parseInt(key));

  let output = input;
  output = output.replace(
    indexes[i[0]],
    numbersAsStringMap[indexes[i[0]]] + indexes[i[0]]
  );
  if (i.length > 1) {
    output = output.replaceAll(
      indexes[i[i.length - 1]],
      indexes[i[i.length - 1]] + numbersAsStringMap[indexes[i[i.length - 1]]]
    );
  }
  
  return output;
};

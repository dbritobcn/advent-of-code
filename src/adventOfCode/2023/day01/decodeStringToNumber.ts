const numbersAsStringMap: { [key: string]: string } = {
  zero: "ze0ro",
  one: "o1ne",
  two: "tw2o",
  three: "thr3ee",
  four: "fo4ur",
  five: "fi5ve",
  six: "s6ix",
  seven: "se7ven",
  eight: "eig8ht",
  nine: "ni9ne",
};

const numbersAsString: string[] = Object.keys(numbersAsStringMap);

export const decodeStringToNumber = (input: string): string => {
  return numbersAsString.reduce((acc: string, current: string) => {
    return acc.replaceAll(current, numbersAsStringMap[current]);
  }, input);
};

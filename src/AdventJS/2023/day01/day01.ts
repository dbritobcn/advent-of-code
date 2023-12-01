// Puzzle link: https://adventjs.dev/es/challenges/2023/1

export function findFirstRepeated(gifts: number[]): number {
  const giftIds: { [key: string]: boolean } = {};
  for (const gift of gifts) {
    if (giftIds[gift]) return gift;
    giftIds[gift] = true;
  }
  return -1;
}

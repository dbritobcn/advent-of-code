export const mcd = (a: number, b: number): number =>
  b == 0 ? a : mcd(b, a % b);

export const mcm = (list: number[]): number =>
  list.reduce(
    (acc: number, current: number) => (acc * current) / mcd(acc, current)
  );

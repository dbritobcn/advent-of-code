export const getReports = (input: string): number[][] => {
  return input
    .split("\n")
    .map((report: string): number[] =>
      report.split(" ").map((num: string): number => parseInt(num))
    );
};

import { input } from "./input";
import { getReports } from "./utils/getReports";
import { isReportSafe } from "./utils/isReportSafe";

export const day02Part1 = (input: string): number => {
  const reports: number[][] = getReports(input);

  return reports.reduce((totalSafe: number, current: number[]) => {
    return isReportSafe(current) ? totalSafe + 1 : totalSafe;
  }, 0);
};

// console.log("2024 - day 02 - part 01: ", day02Part1(input)); // 421

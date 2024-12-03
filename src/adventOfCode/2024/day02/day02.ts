import { input } from "./input";
import { generateArrayVariants } from "./utils/generateArrayVariants";
import { getReports } from "./utils/getReports";
import { isReportSafe } from "./utils/isReportSafe";

export const day02Part1 = (
  input: string,
): number => {
  const reports: number[][] = getReports(input);

  return reports.reduce((totalSafe: number, report: number[]) => {
    return isReportSafe(report) ? totalSafe + 1 : totalSafe;
  }, 0);
};

export const day02Part2 = (input: string): number => {
  const reports: number[][] = getReports(input);

  return reports.reduce((totalSafe: number, report: number[]) => {
    const variants = generateArrayVariants(report);
    const isSafeSome = variants.some((variant) => isReportSafe(variant));
    return isSafeSome ? totalSafe + 1 : totalSafe;
  }, 0);
};

// console.log("2024 - day 02 - part 01: ", day02Part1(input)); // 421
// console.log("2024 - day 02 - part 02: ", day02Part2(input)); // 476

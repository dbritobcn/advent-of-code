enum Trend {
  UP = "UP",
  DOWN = "DOWN",
}

const PROBLEM_DAMPENER_TOLERANCE = 1;

export const isReportSafe = (
  report: number[],
  problemDampener = false
): boolean => {
  let trend: Trend;
  let diffs: number[] = [];

  report.map((num: number, index: number): void => {
    const nextNum: number = report[index + 1];
    if (nextNum) {
      const diff: number = nextNum - num;
      if (!trend) {
        trend = diff > 0 ? Trend.UP : Trend.DOWN;
      }
      diffs = [...diffs, diff];
    }
  });

  const isSafe = diffs.every((diff: number): boolean => {
    return trend === Trend.UP ? diff >= 1 && diff <= 3 : diff <= -1 && diff >= -3;
  });

  return isSafe;
};

enum Trend {
  UP = "UP",
  DOWN = "DOWN",
}

const MIN_DIFF = 1;
const MAX_DIFF = 3;

export const isReportSafe = (report: number[]): boolean => {
  let trend: Trend;

  const diffs = report.reduce((acc: number[], num: number, index: number) => {
    let nextNum: number = report[index + 1];
    if (!nextNum) {
      return acc;
    }
    let diff: number = nextNum - num;
    if (!trend) {
      trend = diff > 0 ? Trend.UP : Trend.DOWN;
    }
    return [...acc, diff];
  }, []);

  return diffs.every((diff: number): boolean =>
    trend === Trend.UP
      ? diff >= MIN_DIFF && diff <= MAX_DIFF
      : diff <= -MIN_DIFF && diff >= -MAX_DIFF
  );
};

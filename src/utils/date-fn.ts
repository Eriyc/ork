const decompose = (total: number, breakpoints: number[]) => {
  return breakpoints.reduceRight<(r: number) => number[]>(
    (p, b) => r => [Math.floor(r / b)].concat(p(r % b)),
    r => [r],
  )(total);
};

export const toHHMMSS = (date: Date) =>
  decompose(Math.floor(date.getTime() / 1000), [3600, 60])
    .map(a => a.toString().padStart(2, '0'))
    .join(':');

export const calcDiff = (dateA: Date, dateB: Date) => {
  return toHHMMSS(new Date(dateA.getTime() - dateB.getTime()));
};

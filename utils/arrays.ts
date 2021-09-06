export const makeRange = (from: number, to: number): number[] => {
  const arr: number[] = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return arr;
};

export const rangeFromLength = (length: number, withNegative = true): number[] => {
  const middle = length / 2;
  const middleFloored = Math.floor(middle);
  const to = middle > middleFloored ? middleFloored : middleFloored - 1;

  return withNegative
    ? makeRange(-middleFloored, to)
    : makeRange(0, length - 1);
};

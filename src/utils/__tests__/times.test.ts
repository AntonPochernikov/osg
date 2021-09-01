import { times } from '../times';

const inc = (n: number) => n + 1;
const double = (n: number) => n * 2;
const sumOfSymbols = (str: string) => {
  const sum = str.split('').reduce((acc, s) => acc + Number(s), 0);
  return String(sum);
};

test('times', () => {
  const inc2 = times(inc, 2);
  expect(inc2(0)).toBe(2);

  const double2 = times(double, 2);
  expect(double2(1)).toBe(4);

  const sumOfSymbols3 = times(sumOfSymbols, 3);
  expect(sumOfSymbols3('987')).toBe('6');
});

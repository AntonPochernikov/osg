import times from 'libs/times';

const inc = n => n + 1;
const double = n => n * 2;
const sumOfSymbs = (str) => {
  const sum = str.split('').reduce((acc, s) => acc + Number(s), 0);
  return String(sum);
};

test('times', () => {
  const inc2 = times(inc, 2);
  expect(inc2(0)).toBe(2);

  const double2 = times(double, 2);
  expect(double2(1)).toBe(4);

  const sumOfSymbs3 = times(sumOfSymbs, 3);
  expect(sumOfSymbs3('987')).toBe('6');
});

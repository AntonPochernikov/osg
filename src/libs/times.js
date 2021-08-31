const compose = (f, g) => (...args) => g(f(...args));

export const times = (f, n) => {
  if (n > 1) {
    return compose(f, times(f, n - 1));
  }
  return f;
};

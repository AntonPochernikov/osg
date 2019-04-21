const compose = (f, g) => (...args) => g(f(...args));

const times = (f, n) => {
  if (n > 1) {
    return compose(f, times(f, n - 1));
  }
  return f;
};

export default times;

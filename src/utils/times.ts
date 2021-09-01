function compose<A, R>(
  f: (arg: A) => R,
  g: (arg: R) => R,
): ((arg: A) => R) {
  return arg => g(f(arg));
}
export const times = <T extends any>(f: ((arg: T) => T), n: number): (arg: T) => T => {
  if (n > 1) {
    return compose<T, T>(f, times<T>(f, n - 1));
  }

  return f;
}

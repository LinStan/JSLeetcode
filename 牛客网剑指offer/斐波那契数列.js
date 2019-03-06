function Fibonacci(n) {
  // write code here
  if (n == 0) {
    return [0]
  } else if (n == 1) {
    return [1]
  } else if (n > 39) {
    return false
  } else {
    let ret = [0, 1];
    let i = 2;
    while (i <= n) {
      ret[i] = ret[i - 1] + ret[i - 2];
      i++;
    }
    return ret[ret.length - 1]
  }
}
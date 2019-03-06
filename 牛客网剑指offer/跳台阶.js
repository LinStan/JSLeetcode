// 一只青蛙一次可以跳上1级台阶， 也可以跳上2级。 求该青蛙跳上一个n级的台阶总共有多少种跳法（ 先后次序不同算不同的结果）。
// 分析： 
// 1） 当n = 1， 只有1中跳法； 当n = 2 时， 有两种跳法； 当n = 3 时， 有3种跳法； 当n = 4 时， 有5种跳法； 当n = 5 时， 有8种跳法；.......
// 规律类似于Fibonacci数列
function jumpFloor(number) {
  // write code here
  if (number == 0 || number == 1) {
    return 1
  }
  let ret = [1, 1];
  let i = 2;
  while (number >= i) {
    ret[i] = ret[i - 2] + ret[i - 1];
    i++;
  }
  return ret[number]
}
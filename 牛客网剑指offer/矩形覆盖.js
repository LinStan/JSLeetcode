// 我们可以用2 * 1 的小矩形横着或者竖着去覆盖更大的矩形。 请问用n个2 * 1 的小矩形无重叠地覆盖一个2 * n的大矩形， 总共有多少种方法？
// 有横竖两种放置方法，由于第一次若放置2*1 则剩余2*（n-1）也就是相当于target-1的摆放
// 若第一次放置1*2 则剩余2*(n-2) 因为第一个防止1*2相当于必须再放置一个1*2 构成了2*2 也就是相当于target-2的摆放
function rectCover(number) {
  // write code here
  ret = [0, 1, 2];
  let i = 3;
  while (number >= i) {
    ret[i] = ret[i - 1] + ret[i - 2];
    i++;
  }
  return ret[number]
}
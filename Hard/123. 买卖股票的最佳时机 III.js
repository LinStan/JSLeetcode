// 执行用时: 9304 ms, 在Best Time to Buy and Sell Stock III的JavaScript提交中击败了7 .14 % 的用户
// 内存消耗: 66.5 MB, 在Best Time to Buy and Sell Stock III的JavaScript提交中击败了6 .67 % 的用户
// 莽就完事儿了，分为两段，分别莽一下，做几个判断剪枝，居然通过了。服气
// 动态规划的方法还没写，后期补上
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = prices.length,
    temp, ret = 0;
  for (let i = 0; i < l; i++) {
    if (Math.max(...prices.slice(0, i)) <= prices[0] && Math.max(...prices.slice(i)) <= prices[i]) {} else {
      temp = calu([...prices.slice(0, i), prices[i]]) + calu([...prices.slice(i)])
      if (temp > ret) {
        ret = temp
      }
    }
    // console.log(temp)
  }
  return ret
};
var calu = function (arr) {
  let mr = 0,
    mc = 0,
    ret = 0,
    temp;
  for (let i = 0; i < arr.length; i++) {
    mr = arr[i];
    temp = arr.slice(i);
    mc = Math.max(...temp)
    // console.log(mc,mr,arr.slice(i),temp)
    if (mc - mr > ret) {
      ret = mc - mr
    } else if (mc - mr < 0) {
      break;
    }
  }
  return ret
}
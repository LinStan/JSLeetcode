/**
 * @param {number[][]} dominoes
 * @return {number}
 基于Map实现
 注意一下Map只有传入字符串和数字才会被认定是同一个key，如果传入的是其他类型数据，即使一模一样也会被认定是不同的key
 */
var numEquivDominoPairs = function (dominoes) {
  let tempArr = new Map(), l = dominoes.length, ret = 0;
  for (let i = 0; i < l; i++) {
    let ori = dominoes[i].sort((a, b) => { return a - b }).join('');
    // console.log(ori,tempArr)
    // console.log(tempArr.has(ori),ori)
    if (!tempArr.has(ori)) {
      tempArr.set(ori, 1)
    }
    else {
      tempArr
      tempArr.set(ori, tempArr.get(ori) + 1)
    }
  }
  for (let [, value] of tempArr) {
    if (value >= 2) {
      ret += (value * (value - 1)) / 2
    }
  }
  return ret
};
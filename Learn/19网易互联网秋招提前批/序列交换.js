// 给一个数组，如果数组两个元素相加为奇数，即可交换位置，可以无限次交换，直到排列出字典序最小
// 刚开始直接暴力了，只过了30%  其实只要判断是否同时有奇数偶数 有的话可以直接排序
var arr = [5, 9, 8, 4, 2, 3]
var exchangeList = function (arr) {
  let b = arr.findIndex((a) => { return a % 2 == 0 });
  let c = arr.findIndex((a) => { return a % 2 == 1 })
  if (b !== -1 && c !== -1) {
    arr = arr.sort((a, b) => { return a - b })
  }
  console.log(arr)
  return arr
}(arr)
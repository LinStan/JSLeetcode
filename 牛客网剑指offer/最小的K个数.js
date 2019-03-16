// 题目描述
// 输入n个整数， 找出其中最小的K个数。 例如输入4, 5, 1, 6, 2, 7, 3, 8 这8个数字， 则最小的4个数字是1, 2, 3, 4, 。
function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (k > input.length) {
    return []
  }
  input = input.sort(function (a, b) {
    return a - b
  })
  // console.log(input)
  return input.splice(0, k)
}
console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4))
console.log(GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 10))
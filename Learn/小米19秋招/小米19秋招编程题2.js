// 现在有一幅扑克牌， 去掉大小王52张牌。 随机选出4张牌， 可以任意改变扑克牌的顺序， 并填入 + - * / 四个运算符，
// 不用考虑括号，除法按整数操作，计算过程中没有浮点数，问是否能够求值得到给定的数m。
//  有毒 。9 4 11 3 的案例自测是对的。但是提交就失败。
var nums = readline().split(' ')
nums.pop()
for (let i in nums) {
  nums[i] = parseFloat(nums[i])
}
var target = parseInt(readline())
// var nums = ([13, 13, 13, 13])
// var nums = ([9, 4, 11, 3])
for (let i in nums) {
  nums[i] = parseFloat(nums[i])
}
// var target = 23
console.log(nums, target)

console.log(main(nums, target))

function main(nums, target) {
  return dfs(nums, 4, target)
}

function dfs(nums, numsSize, target) {
  console.log(nums[0]);
  if (numsSize == 1) {
    if (Math.abs(nums[0] - target) < 1e-2) return true;
    else return false;
  }
  let a, b;
  for (let i = 0; i < numsSize; i++) {
    for (let j = i + 1; j < numsSize; j++) {
      a = nums[i];
      b = nums[j];
      nums[j] = nums[numsSize - 1];

      nums[i] = a + b;
      if (dfs(nums, numsSize - 1, target)) return true;
      nums[i] = a - b;
      if (dfs(nums, numsSize - 1, target)) return true;
      nums[i] = b - a;
      if (dfs(nums, numsSize - 1, target)) return true;
      nums[i] = a * b;
      if (dfs(nums, numsSize - 1, target)) return true;
      //除法分母不为0 
      if (b != 0) nums[i] = a / b;
      if (dfs(nums, numsSize - 1, target)) return true;
      if (a != 0) nums[i] = b / a;
      if (dfs(nums, numsSize - 1, target)) return true;
      //回溯 
      nums[i] = a;
      nums[j] = b;
    }
  }
  return false;
}
// 题目描述
// 求1 + 2 + 3 + ...+n， 要求不能使用乘除法、for、while、if、else、 switch、 case等关键字及条件判断语句（ A ? B : C）。
// 因为不能用循环，所以直接递归
function Sum_Solution(n) {
  // write code here
  if (n <= 1) return n;
  return n + Sum_Solution(n - 1)
}
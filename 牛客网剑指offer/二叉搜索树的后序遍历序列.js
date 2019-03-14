// 题目描述
// 输入一个整数数组， 判断该数组是不是某二叉搜索树的后序遍历的结果。 如果是则输出Yes, 否则输出No。 假设输入的数组的任意两个数字都互不相同。
// 思路：
// 已知条件： 后序序列最后一个值为root； 二叉搜索树左子树值都比root小， 右子树值都比root大。
// 1、 确定root；
// 2、 遍历序列（ 除去root结点）， 找到第一个大于root的位置， 则该位置左边为左子树， 右边为右子树；
// 3、 遍历右子树， 若发现有小于root的值， 则直接返回false；
// 4、 分别判断左子树和右子树是否仍是二叉搜索树（ 即递归步骤1、 2、 3）。
function VerifySquenceOfBST(sequence) {
  // write code here
  let l = sequence.length;
  if (l == 0) {
    return false
  }
  let rootnode = sequence[l - 1];
  let left;
  let right;
  if (sequence) {
    let ret = loopfind(sequence);
    if (ret == false) {
      return false
    }
  }
  return true

  function loopfind(sequence) {

    for (let i = 0; i < l; i++) {
      if (sequence[i] > rootnode) {
        left = sequence.splice(0, i);
        right = sequence.splice(0, sequence.length - 1);
        for (let j = 0; j < right.length; j++) {
          if (right[j] < rootnode) {
            return false
          }
        }
      }
    }
  }
}
// console.log(VerifySquenceOfBST([1, 2, 3, 4, 6, 7, 8, 9, 5]))
console.log(VerifySquenceOfBST([4, 8, 6, 12, 16, 14, 10]))
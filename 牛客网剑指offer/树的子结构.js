// 题目描述
// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
// 子结构不是子树。即当
// [3, 4, 5, 1, 2, null, null, 0]
// [4, 1, 2]
// 也是返回true
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var HasSubtree = function (pRoot1, pRoot2) {
  let result = false;
  if (!pRoot1 || !pRoot2) {
    return false
  }
  if (pRoot1.val == pRoot2.val) {
    result = HasSubTree2(pRoot1, pRoot2)
  }
  if (!result) {
    result = HasSubtree(pRoot1.right, pRoot2)
  }
  if (!result) {
    result = HasSubtree(pRoot1.left, pRoot2)
  }
  return result
};
var HasSubTree2 = function (s, t) {
  if (!t) {
    return true
  }
  if (!s) {
    return false
  }
  if (s.val != t.val) {
    return false
  }
  return HasSubTree2(s.left, t.left) && HasSubTree2(s.right, t.right)
}
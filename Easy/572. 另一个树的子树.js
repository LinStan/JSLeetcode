// 执行用时: 128 ms, 在Subtree of Another Tree的JavaScript提交中击败了45 .45 % 的用户
// 内存消耗: 38.8 MB, 在Subtree of Another Tree的JavaScript提交中击败了0 .00 % 的用户
// 子树，代表t必须和s的某一子树完全相同，不能是子树的一部分结构相同
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
var isSubtree = function (s, t) {
  let result = false;
  if (!s || !t) {
    return false
  }
  if (s.val == t.val) {
    result = HasSubTree(s, t)
  }
  if (!result) {
    result = isSubtree(s.right, t)
  }
  if (!result) {
    result = isSubtree(s.left, t)
  }
  return result
};
var HasSubTree = function (s, t) {
  if (!t) {
    if (!s) {
      return true
    }
    //注意这个else 去掉后就只是子结构相同
    else {
      return false
    }
  }
  if (!s) {
    return false
  }
  if (s.val != t.val) {
    return false
  }
  return HasSubTree(s.left, t.left) && HasSubTree(s.right, t.right)
}
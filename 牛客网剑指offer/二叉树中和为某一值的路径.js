// 题目描述
// 输入一颗二叉树的跟节点和一个整数， 打印出二叉树中结点值的和为输入整数的所有路径。 
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中， 数组长度大的数组靠前) 
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
  // write code here
  let ret = [];

  if (root == null) {
    return ret;
  }
  pathfind(root, expectNumber, [], 0, ret)
  return ret;
}

function pathfind(head, target, path, cursum, ret) {
  cursum += head.val
  path.push(head.val);
  if (cursum == target && head.left == null && head.right == null) {
    ret.push(path.slice(0));
  }
  if (head.left != null) {
    pathfind(head.left, target, path, cursum, ret)
  }
  if (head.right != null) {
    pathfind(head.right, target, path, cursum, ret)
  }
  path.pop()
}
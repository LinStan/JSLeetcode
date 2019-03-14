// 题目描述
// 从上往下打印出二叉树的每个节点， 同层节点从左至右打印。
// 经典的广度优先搜索。
// 初始化两个数组，一个存放结果，一个存放树结构
// 当存在子树，推出上一次的树结构
// 存入子树，迭代直到子树都为空
// 当数组中存入的是树结构时，push会弹出整个树
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  // write code here
  let ret = [];
  let temp = []
  if (root) {
    temp.push(root);
  }
  while (temp.length) {
    let node = temp.shift();
    if (node.left) {
      temp.push(node.left)
    }
    if (node.right) {
      temp.push(node.right)
    }
    ret.push(node.val)
  }
  return ret
}
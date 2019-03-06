/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length == 0 || vin.length == 0) {
    return null;
  };
  //通过分割中序。把中序分为中序左右子树 由于index是中序的根节点
  //通过分割前序，再将前序分割为左右子树 由于0，index是中序左子树的长度，因此也是前序左子树的长度
  //由于前序的根节点在第一位，因此要从1开始slice
  //前序第一个为根节点 也是中序左右子树的分割点
  var index = vin.indexOf(pre[0]);
  var left = vin.slice(0, index); //中序左子树
  var right = vin.slice(index + 1); //中序右子树

  // 这里返回的是一个树结构。 可以替换地写成这样
  // var head = new TreeNode(pre[0]);
  // head.left = reConstructBinaryTree(pre.slice(1, index + 1), left)
  // head.right = reConstructBinaryTree(pre.slice(index + 1), right)
  // return head

  return {
    val: pre[0],
    //递归左右子树的前序，中序
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right)
  };
}
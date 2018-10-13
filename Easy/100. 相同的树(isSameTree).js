 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
  }
//递归判断val相等。
//左右节点由于不相等时传回false，
//条件成立需要true，因此对其取反即可
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p ==null&&q==null){return true}
  else if
  (
    (p==null&&q!=null)||
    (p!=null&&q==null)||
    (p.val!=q.val)||
    !isSameTree(p.left,q.left)||
    !isSameTree(p.right,q.right)
  )
  {return false}
  else
  {return true}
}
console.log(isSameTree([1,2,3],[1,2,2]));
console.log(isSameTree([1,2,3],[1,2,3]));
console.log(isSameTree([1,2,3],[1,null]));

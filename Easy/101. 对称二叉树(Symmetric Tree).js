/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 //96 ms, 在Symmetric Tree的JavaScript提交中击败了30.94% 的用户
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var issame = function(q,p)
{
    if(!q&&!p)//相当于两个皆为null
   // if(q==null&&p==null)
        {return true;}
    else if(q&&p&&q.val==p.val)//当两个节点均非空且相等，向下一层
        {
            return issame(q.left,p.right) && issame(q.right,p.left)
        }
    else
        {return false}
}
var isSymmetric = function(root) {
    if(root==null){return true}
    return issame(root.left,root.right);
};

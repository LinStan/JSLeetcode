/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 //96 ms, 在Maximum Depth of Binary Tree的JavaScript提交中击败了46.02% 的用户
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //树为空 depth=0
    if(root==null)
        {
            return 0;
        }
    else
        {
            //递归求最大深度。
            var leftdepth = maxDepth(root.left);
            console.log(leftdepth,rightdepth,root,root.left,root.right)
            var rightdepth = maxDepth(root.right);
            console.log(leftdepth,rightdepth,root,root.left,root.right)
            return Math.max(leftdepth,rightdepth)+1;
        }

};

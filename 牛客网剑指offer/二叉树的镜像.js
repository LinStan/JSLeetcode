// 题目描述
// 操作给定的二叉树，将其变换为源二叉树的镜像。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//先递归时间短。若递归放到交换后面增加用时
function Mirror(root)
{
    // write code here
    if(root)
    {
        Mirror(root.left);
        Mirror(root.right)
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
}

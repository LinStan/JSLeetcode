/**
 * @param {number} n
 * @return {string[]}
 */
//  执行用时: 112 ms, 在Generate Parentheses的JavaScript提交中击败了24.79% 的用户
// 内存消耗: 15.9 MB, 在Generate Parentheses的JavaScript提交中击败了4.17% 的用户
//回溯法
var generateParenthesis = function(n) {
    if(n==0){return [""]}
    let ret = [];
    //内置函数 便于ret的定义和添加
    var backtrack = function(S,left,right)
    {
        //当达到有效括号串长度 加入数组
    if(S.length==2*n)
        {
     //       console.log(ret)
            ret.push(S);
            return
        }
        //
    if(left<n)
        {
            backtrack(S+'(',left+1,right)
        }
    if(right<left)
        {
            backtrack(S+')',left,right+1)
        }
    }
    //考虑一下这个为什么可以直接统计所有组合
    backtrack('',0,0);
    return ret
};

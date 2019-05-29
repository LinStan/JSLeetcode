/**
 * @param {string} S
 * @return {string}
 */
// 执行用时 : 120 ms, 在Remove Outermost Parentheses的JavaScript提交中击败了32.62% 的用户
// 内存消耗 : 37.2 MB, 在Remove Outermost Parentheses的JavaScript提交中击败了15.38% 的用户
// 由于给定的是一个有效的括号字符串，因此可以直接通过栈来实现。
// 当括号匹配就弹出括号，直到为空，开始继续匹配下一个最外括号对
var removeOuterParentheses = function (S) {
  let len = S.length,
    l = 0,
    r = 0,
    ret = '';
  let stack = [];
  for (let i = 0; i < len; i++) {
    if (stack.length == 0) {
      stack.push(S[i])
      l = i;
    } else {
      if (S[i] == ')') {
        stack.pop()
        if (stack.length == 0) {
          r = i;
          // substring(start,end)  切割的为[start,end)
          ret += S.substring(l + 1, r);
        }
      } else {
        stack.push(S[i])
      }
      // console.log(stack)
    }
  }
  return ret
};
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {

    var stack = [];//初始化一个空栈
    var num=0;
    for (var i = 0; i < S.length; i++) {
        var c = S[i];
        switch (c) {//推入一个对称的括号符号
            case '(':
                stack.push(')');
                //console.log(stack);
                break;
            default://当输入为右括号，弹出栈，判断是否相等
            //!stack.length 和stack.length==0相等
            //if (!stack.length|| stack.pop() !== c) {
                if (stack.length==0|| stack.pop() !== c) {
                    num++;
                }

        }
    }
    if(stack.length==0)//当栈长度为0返回true
    {return num}
    else
    {return num+stack.length}
};
console.log(isValid("())"));
console.log(isValid("((("));
console.log(isValid("()))(("));
console.log(isValid("()"));

/**
 * @param {string} s
 * @return {boolean}
 * 栈
 */
var isValid = function (s) {

    var stack = [];//初始化一个空栈
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        switch (c) {//推入一个对称的括号符号
            case '(':
                stack.push(')');
                console.log(stack);
                break;
            case '[':
                stack.push(']');console.log(stack);
                break;
            case '{':
                stack.push('}');console.log(stack);
                break;
            default://当输入为右括号，弹出栈，判断是否相等
                if (!stack.length || stack.pop() !== c) {
                    console.log(stack);
                    return false;
                }

        }
    }
    if(stack.length==0)//当栈长度为0返回true
    {return true}
    else
    {return false}
};
console.log(isValid("[]"));
console.log(isValid(""));
console.log(isValid("[{}]()"));

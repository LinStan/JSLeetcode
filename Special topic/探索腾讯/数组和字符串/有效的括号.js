/**
 * @param {string} s
 * @return {boolean}
 */
// 我的提交执行用时
// 已经战胜 19.74 % 的 javascript 提交记录
// 练习了一下if的缩写
var isValid = function (s) {
  let l = s.length;
  if (l % 2 == 1) {
    return false
  }
  let temp = [];
  for (var i = 0; i < l; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      temp.unshift(s[i]);
      //      console.log(temp)
    } else {
      switch (s[i]) {
        case ')':
          if (temp[0] == '(') {
            temp.shift()
            //     console.log(temp)
          } else {
            return false
          }
          break;
        case ']':
          if (temp[0] == '[') {
            temp.shift()
            //    console.log(temp)
          } else {
            return false
          }
          break;
        case '}':
          if (temp[0] == '{') {
            temp.shift()
            //    console.log(temp)
          } else {
            return false
          }
          break;

      }
    }
  }
  return temp.length == 0 ? true : false;
};
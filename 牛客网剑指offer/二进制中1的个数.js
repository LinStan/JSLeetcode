// 输入一个整数， 输出该数二进制表示中1的个数。 其中负数用补码表示。
// 运行时间： 13 ms
// 占用内存： 5336 k
// 思路：首先明确补码的概念
// 负数的补码是将原码取反，在末尾+1，而且题目中没有说的是二进制是32位的，因此负数时需要扩充到32位。正数不需要是因为扩充的0在n为正时无需考虑
function NumberOf1(n) {
  // write code here
  if (n >= 0) {
    let num = n.toString(2);
    let ret = 0;
    num = num.split('');
    console.log(num)
    for (let i = 0; i < num.length; i++) {
      if (num[i] == '1') {
        ret++;
      }
    }
    return ret;
  } else {
    // 扩充到32位
    let num = (-n).toString(2);
    while (num.length < 32) {
      num = "0" + num;
    }
    // console.log(-n, num)
    // 替换字符串中的0/1
    num = num.replace(/0/g, "2")
    num = num.replace(/1/g, "0")
    num = num.replace(/2/g, "1")
    let ret = 0;
    num = num.split('');
    // console.log(num)
    // 末尾+1
    num[num.length - 1] = (parseInt(num[num.length - 1]) + 1).toString();
    // 迭代进位
    if (num[num.length - 1] == '2') {
      let index = num.length - 1
      while (num[index] == '2') {
        num[index] = '0';
        index--;
        num[index] = (parseInt(num[index]) + 1).toString();
      }
    }
    // console.log(num)
    for (let i = 0; i < num.length; i++) {
      if (num[i] == '1') {
        ret++;
      }
    }
    return ret;
  }
}
// console.log(NumberOf1(-2147483648))
console.log(NumberOf1(-1))
// console.log(NumberOf1(-6))
// console.log(NumberOf1(20))
// console.log(NumberOf1(1))
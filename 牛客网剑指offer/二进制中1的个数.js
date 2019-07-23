// 输入一个整数， 输出该数二进制表示中1的个数。 其中负数用补码表示。
// 运行时间： 13 ms
// 占用内存： 5336 k
// 思路：首先明确补码的概念
// 负数的补码是将原码取反，在末尾+1，而且题目中没有说的是二进制是32位的，因此负数时需要扩充到32位。正数不需要是因为扩充的0在n为正时无需考虑
function NumberOf1 (n) {
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
/*
整体思路 位运算 如果一个数非0，则二进制至少有一个1 然后该整数-1，则原来最右边的1变0，后续的0变1
例如： 1100  1100-1=1011   1100&1011=1000
如此就消去了最右边的1
整数得解
负数的话可以通过和0xFFFFFFF求与 相当于将最高位 符号位的1变为0 相当于将其转为正数，然后继续处理 注意ret++ 是因为符号位的1也要计数
*/
//基于位运算的新实现
function NumberOf1 (n) {
  let ret = 0;
  if (n < 0) {
    n = n & 0xFFFFFFF
    ret++;
  }
  while (n != 0) {
    ret += 1;
    n = n & (n - 1)
  }
  return ret
}

console.log(NumberOf1(-2147483648))
console.log(NumberOf1(-1))
console.log(NumberOf1(-6))
console.log(NumberOf1(20))
console.log(NumberOf1(1))
// 运行时间： 19 ms

// 占用内存： 5532 k
// 给定一个double类型的浮点数base和int类型的整数exponent。 求base的exponent次方。
function Power(base, exponent) {
  // write code here
  //将exponent转为他的约数
  let ret = base;
  let flag = 0;
  if (exponent == 0) {
    return 1
  } else if (exponent == 1) {
    return base
  } else if (exponent == -1) {
    return -base
  } else if (base == 0) {
    return 0
  }

  if (exponent < 0) {
    flag = 1;
    exponent = -exponent;
  }
  //exponent 当存在约数，处理exponent
  for (let i = 2; i <= exponent; i++) {
    while (exponent % i == 0) {
      exponent = exponent / i;
      let temp = ret;
      for (let j = 1; j < i; j++) {
        ret = ret * temp;
      }
    }
  }
  if (flag == 1) {
    return 1 / ret
  } else {
    return ret
  }
}
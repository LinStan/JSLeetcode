// 米兔从兔米那里了解到有一个无限长的数字序列 1, 2， 3， 3， 4， 4， 4, 5， 5， 5， 5， 5..., 
// (已知此数列有一定规律， 现将这些数字按不同数值堆叠， 相同值的数字在同一层)。 米兔想知道这个数字序列的第n个数所在的那一层之前的所有层里共有多少个数。
//通过65%
// 后续数字过大。需要处理大数相加
var num = readline().split('')
num = parseInt(num)
//console.log(num)
var numlist = [1, 1]
if (num == 1) {
  console.log(0)
} else if (num == 2) {
  console.log(1)
} else {
  let ret = 2;
  for (let i = 2;; i++) {
    numlist[i] = numlist[i - 1] + numlist[i - 2];
    ret += numlist[i];
    if (ret >= num) {
      console.log(ret - numlist[i])
      break;
    }
  }
}
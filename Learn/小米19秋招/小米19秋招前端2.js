// 给定n个非负整数表示每个宽度为1的柱子的高度题， 计算按此排列的珠子， 下雨之后能接多少雨水。
// 输入描述:
//   逗号分隔的整数， 表示每根柱子的高度。
// 柱子数n <= 1000000, 每根柱子的高度不大于100000
// var data = readline().split(',')
// case通过率为73.33%
var data = "0,1,0,2,1,0,1,3,2,1,2,1".split(',')
var l = data.length;
for (let i = 0; i < l; i++) {
  data[i] = parseInt(data[i])
}
console.log(data, l)
let tempv = data[0];
let tempi = 0;
let ret = 0;
let tempsum = 0;
for (let i = 1; i < l; i++) {
  if (data[i] >= tempv) {
    ret += tempsum;
    tempi = i;
    tempv = data[i];
    tempsum = 0;
  } else {
    tempsum += tempv - data[i];
  }
}
console.log(ret)
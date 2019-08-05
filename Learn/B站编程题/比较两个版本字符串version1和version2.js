// 如果version1 > version2 返回1，如果 version1 < version2 返回 - 1，不然返回0.
//   输入的version字符串非空，只包含数字和字符.。.字符不代表通常意义上的小数点，只是用来区分数字序列。
// 例如字符串2.5并不代表二点五，只是代表版本是第一级版本号是2，第二级版本号是5.
//     输入描述:
// 两个字符串，用空格分割。
// 每个字符串为一个version字符串，非空，只包含数字和字符.
//   输出描述:
// 只能输出1, -1，或0
// 输入例子1:
// 0.1 1.1
// 输出例子1:
// -1
let data = readline();
let l = data.indexOf(' ');
let d1 = data.slice(0, l).split('.'), d2 = data.slice(l).split('.');
l = Math.max(d1.length, d2.length);
let flag = 0;
//console.log(d1,d2)
for (let i = 0; i < l; i++) {
  d1[i] = (d1[i] || 0) * 1;
  d2[i] = (d2[i] || 0) * 1;
  //console.log(d1[i],d2[i],d1[i]==d2[i])
  if (d1[i] > d2[i]) {
    flag = 1;
    console.log(1)
    break;
  }
  else if (d1[i] < d2[i]) {
    flag = 2;
    console.log(-1);
    break;
  }
}
if (flag === 0) {
  console.log(0)
}
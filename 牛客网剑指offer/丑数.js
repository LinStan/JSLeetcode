// 题目描述
// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
// // 超时了
// function GetUglyNumber_Solution(index) {
//   // write code here
//   if (index == 1) {
//     return 1
//   }
//   let ret = 1;
//   let retnum = 1;
//   for (let i = 2; retnum < index; i++) {
//     if (isugly(i)) {
//       //ret.push(i)
//       //console.log(ret)
//       ret = i;
//       retnum++;
//     }
//   }
//   return ret
// }

// function isugly(n) {
//   while (n % 2 == 0) {
//     n = n / 2
//   }
//   while (n % 3 == 0) {
//     n = n / 3
//   }
//   while (n % 5 == 0) {
//     n = n / 5
//   }
//   if (n != 1) {
//     return false
//   } else {
//     return true
//   }
// }


function GetUglyNumber_Solution(index) {
  let t2 = 0,
    t3 = 0,
    t5 = 0,
    i;
  if (index < 7) {
    return index
  }
  let ret = [];
  ret[0] = 1;
  for (i = 1; i < index; i++) {
    ret[i] = Math.min(ret[t2] * 2, Math.min(ret[t3] * 3, ret[t5] * 5));
    if (ret[i] == ret[t2] * 2) t2++;
    if (ret[i] == ret[t3] * 3) t3++;
    if (ret[i] == ret[t5] * 5) t5++;
  }
  //console.log(ret)
  return ret[index - 1]
}
console.log(GetUglyNumber_Solution(7))
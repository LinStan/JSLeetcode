// 牛客网提交失败
let num = readline()
num = parseInt(num)
//let data = []
//let ret = []
while (num) {
  if (num == 0) {
    break;
  }
  // data.push(num)
  let tempret = calu(num)
  //ret.push(tempret)
  console.log(tempret)
  let temp = readline()
  num = parseInt(temp)
}
// 两个作用相同
// function calu(pgnum) {
//   let ret = 0;
//   while (parseInt(pgnum / 3) >= 1) {
//     let temp = parseInt(pgnum / 3);
//     ret += temp;
//     pgnum = pgnum % 3 + temp;
//   }
//   if (pgnum == 2) {
//     ret += 1;
//   }
//   return ret;
// }

function calu(pgnum) {
  let ret = 0;
  ret = parseInt(pgnum / 2)
  return ret;
}
// console.log(calu(1))
// console.log(calu(2))
// console.log(calu(3))
// 对数组内的数据进行排序，按照 将a和b转为string后
// 若 a＋b < b + a  a排在在前 的规则排序,
// 如 2 21 因为 212 < 221 所以 排序后为 21 2 
function PrintMinNumber (numbers) {
  // write code here
  let l = numbers.length;
  numbers = numbers.sort(function (a, b) {
    let A = "", B = "";
    A += a; A += b;
    B += b; B += a;
    return A > B
  })
  let ret = "";
  for (let i = 0; i < l; i++) {
    ret += numbers[i]
  }
  return ret
}
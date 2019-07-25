// 遍历一次，添加到Map中
// 再遍历一次Map 如果value为1 返回
function FirstNotRepeatingChar (str) {
  // write code here
  let map = new Map(), l = str.length;
  for (let i = 0; i < l; i++) {
    if (map.has(str[i])) {
      let t = map.get(str[i])
      // console.log(t)
      map.set(str[i], t + 1)
    }
    else {
      map.set(str[i], 1)
    }
  }
  for (let i = 0; i < l; i++) {
    if (map.get(str[i]) == 1) {
      return i
    }
  }
  return -1
}
console.log(FirstNotRepeatingChar("google"))

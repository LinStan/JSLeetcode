/* 小米秋招编程题1 */
let data = '36 255 10'.split(' ')
data = data.map((v) => { return v * 1 })
console.log(data)
let mp = data[0], dis = data[1], time = data[2], ret = [0]
for (let i = 1; i <= time; i++) {
  if (mp >= 10) {
    ret[i] = ret[i - 1] + 50;
    mp = mp - 10;
  }
  else {
    ret[i] = ret[i - 1];
    mp += 4;
  }
}
for (let i = 1; i <= time; i++) {
  ret[i] = Math.max(ret[i], ret[i - 1] + 13)
}
if (ret[time] < dis) {
  console.log('No ' + ret[time])
}
else {
  let temp;
  for (let i = time; i > 0;) {
    temp = i;
    if (ret[i] >= dis) {
      i--
    }
    else { break; }
  }
  temp = temp + 1;
  console.log('Yes ' + temp)
}
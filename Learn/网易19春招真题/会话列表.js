let n = readline() * 1;
while (n) {
  let xn = readline() * 1;
  let ret = readline().split(' ');
  ret = ret.reverse()
  //console.log(ret)
  let temp = Array.from(new Set(ret)).join(' ')
  console.log(temp)
  n--;
}
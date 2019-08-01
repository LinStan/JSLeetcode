isHefa = function (time) {
  time = time.split(':');
  //console.log(time)
  if (time[0] >= '00' && time[0] <= '24') {
    if (time[0] === '24') {
      if (time[1] !== '00' || time[2] !== '00') {
        time[0] = time[0].split('')
        time[0][0] = '0'
        time[0] = time[0].join('')
      }
    }
  }
  else {
    time[0] = time[0].split('')
    time[0][0] = '0'
    time[0] = time[0].join('')
    //console.log(time[0])
  }

  if (time[1] >= '00' && time[1] <= '59') {
  } else {
    time[1] = time[1].split('')
    time[1][0] = '0'
    time[1] = time[1].join('')
    //console.log(time[1])
  }
  if (time[2] >= '00' && time[2] <= '59') {
    return time.join(':')
  }
  else {
    time[2] = time[2].split('')
    time[2][0] = '0'
    time[2] = time[2].join('')
  }
  return time.join(':');
}

let n = readline() * 1;
let rett = [], ret = []
while (n) {
  let temp = readline()
  console.log(isHefa(temp))
  //rett.push(readline());
  n--;
}
// console.log(rett)
//for (let i in rett) {
//  ret.push(isHefa(rett[i]))
//}
//console.log(ret)
let numsum = parseInt(readline());
while (numsum) {
  let data = []
  for (let i = 0; i < numsum; i++) {
    let temp = parseInt(readline())
    data.push(temp)
  }
  let ret = [...new Set(data)].sort(function (a, b) {
    return a > b ? 1 : -1
  })
  //console.log(ret)
  for (let i = 0; i < ret.length; i++) {
    console.log(ret[i])
  }
  numsum = parseInt(readline());
}
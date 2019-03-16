//为面试题准备的工具文件
var caluNodeNum = function (n) {
  let ret = 0;
  let temp = n - 1;
  let floor = 1;
  while (temp > 0) {
    let tempnum = Math.pow(2, floor)
    temp = temp - tempnum;
    if (temp > 0) {
      ret += tempnum;
    }
    floor++;
  }
  //最后一层
  ret = n - ret;

  ret += Math.pow(2, floor - 2) - Math.ceil(ret / 2)
  return ret;
}
console.log(caluNodeNum(698))
/**
 * @param {string} target
 * @return {string}
 */
//说是不需要顺序都对，其实还是要和他的答案顺序一模一样
var alphabetBoardPath = function (target) {
  let ret = [];
  let l = target.length;
  for (let i = 0; i < l; i++) {
    let index;
    if (i == 0) { index = 'a' }
    else { index = temp }
    var temp = target[i];
    // console.log(temp,index,target.charCodeAt()-index.charCodeAt())
    var findRoad = function (start, end, ret) {
      let flag = 0;
      //起点终点转为二维数组中的值
      if (start == 'z' && end == 'z') {
        ret.push('!');
        return ret
      }
      if (start == 'z') {
        // flag=1
        ret.push('U');
        start = 'u'
      }
      if (end == 'z') {
        flag = 2
        // ret.push('D');
        end = 'u'
      }
      start = start.charCodeAt() - 'a'.charCodeAt();
      end = end.charCodeAt() - 'a'.charCodeAt();
      // console.log(start,end)
      let startIndex = [Math.floor(start / 5), start % 5],
        endIndex = [Math.floor(end / 5), end % 5];
      // console.log(startIndex,endIndex)
      //开始寻路
      let road = [startIndex[0] - endIndex[0], startIndex[1] - endIndex[1]]
      // console.log(road)
      while (road[0] !== 0) {
        if (road[0] < 0) { ret.push('D'); road[0]++; }
        else {
          ret.push('U'); road[0]--;
        }
      }
      while (road[1] !== 0) {
        if (road[1] < 0) { ret.push('R'); road[1]++; }
        else {
          ret.push('L'); road[1]--;
        }
      }
      if (flag == 2) {
        ret.push('D');
      }
      ret.push('!')
      return ret
    }
    ret = findRoad(index, temp, ret)
    // console.log(ret)
  }
  return ret.join('')
};

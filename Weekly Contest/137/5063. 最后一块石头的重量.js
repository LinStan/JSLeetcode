/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let l = stones.length,
    ma, mi, mai, mii;
  while (l >= 2) {
    mai = stones.indexOf(Math.max(...stones))
    ma = stones.splice(mai, 1)
    // console.log(ma,mai,stones)
    mii = stones.indexOf(Math.max(...stones))
    mi = stones.splice(mii, 1)
    // console.log(mi,mii,stones)
    if (mi == ma) {
      continue;
    } else {
      stones.push(ma - mi)
    }
    // console.log(ma)
    l = stones.length;
  }
  if (stones.length == 1) {
    return stones[0]
  } else {
    return 0
  }
};
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let l = hours.length,
    temp = 0,
    ret = 0,
    dy = 0,
    xy = 0;
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      hours[j] > 8 ? dy++ : xy++;
      if (dy > xy) {
        temp = dy + xy;
        if (temp > ret) {
          ret = temp
        }
        // console.log(dy,xy,temp)
      }
    }
    // if(dy>xy)
    //     {
    //         temp = l-i;
    //     }
    dy = 0, xy = 0;
    // if(temp>ret)
    // {ret=temp}
  }
  return ret
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 
给出基数为 -2 的两个数 arr1 和 arr2，返回两数相加的结果。
数字以 数组形式 给出：数组由若干 0 和 1 组成，按最高有效位到最低有效位的顺序排列。
例如，arr = [1,1,0,1] 表示数字 (-2)^3 + (-2)^2 + (-2)^0 = -3。
数组形式 的数字也同样不含前导零：以 arr 为例，这意味着要么 arr == [0]，要么 arr[0] == 1。
返回相同表示形式的 arr1 和 arr2 相加的结果。两数的表示形式为：不含前导零、由若干 0 和 1 组成的数组。
 */
// 其实挺简单的一道题，做题期间一直没想到
// 规则很简单，因为是-2底数，因此为 1 -2 4 -8 16
// 也就是说，逢4隔位进1，逢2 前两位各进1
// 需要注意一下的就是为了方便计算，最开始对其做了翻转操作，最后翻转回来需要处理前置0，还有就是顶位进1的时候需要判断是否存在该位
var addNegabinary = function (arr1, arr2) {
  let l1 = arr1.length,
    l2 = arr2.length,
    ret = 0,
    flag, temp = [];
  arr1 = arr1.reverse(), arr2 = arr2.reverse();
  if (l1 > l2) {
    flag = 1
  } else {
    flag = 2
  }
  for (let i = 0; i < Math.min(l1, l2); i++) {
    temp[i] = arr1[i] + arr2[i];
  }
  if (flag == 1) {
    temp = temp.concat(arr1.slice(l2))
  } else {
    temp = temp.concat(arr2.slice(l1))
  }
  // console.log(temp.join(''))
  let l = temp.length;
  for (let i = 0; i < l; i++) {
    if (temp[i] >= 2 && temp[i + 1] > 0) {
      temp[i] -= 2, temp[i + 1] -= 1;
      // console.log(temp)
    } else if (temp[i] >= 2) {
      temp[i] -= 2;
      if (temp[i + 1]) {
        temp[i + 1] += 1
      } else {
        temp[i + 1] = 1
      }
      if (temp[i + 2]) {
        temp[i + 2] += 1
      } else {
        temp[i + 2] = 1
      }

      // console.log(temp)
    }
  }
  // console.log(temp)
  temp = temp.reverse().join('');
  // console.log(temp)
  // console.log(typeof(temp))
  // temp=~~temp;
  // console.log(temp)
  // temp = temp+"";
  // console.log(temp)
  temp = temp.split("")
  for (let i = 0; i < temp.length; i++) {
    temp[i] = parseInt(temp[i])
  }
  // console.log(temp)
  if (temp.length > 1) {
    for (i = 0;;) {
      // console.log(temp,temp[i])
      if (temp.length == 1) {
        break;
      }
      if (temp[i] == 0) {
        temp.shift()
      } else {
        break;
      }
    }
    // console.log(temp)
  }
  return temp
};
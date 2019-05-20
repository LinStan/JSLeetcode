/**
 * @param {number} num
 * @return {number[]}
 */
// 执行用时 : 236 ms, 在Counting Bits的JavaScript提交中击败了24.10% 的用户
// 内存消耗 : 44.7 MB, 在Counting Bits的JavaScript提交中击败了6.06% 的用户
// 常规方法，每一位都转为2进制，通过filter方法，筛选出其中为1的元素，然后记录。
var countBits = function (num) {
  let ret = [];
  for (let i = 0; i <= num; i++) {
    let temp = i.toString(2).split('');
    let t = temp.filter(n => {
      return n == '1'
    })
    // console.log(temp,t)
    ret.push(t.length)
  }
  return ret
};
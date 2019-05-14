/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 注意arr每次要push深拷贝的新数组，不然最后会使得ret内全部是同一个排列
// 全排列（ 递归交换） 算法
// 1、 将第一个位置分别放置各个不同的元素；
// 2、 对剩余的位置进行全排列（ 递归）；
// 3、 递归出口为只对一个元素进行全排列。
// Your runtime beats 28.36 % of javascript submissions
// Your memory usage beats 5.29 % of javascript submissions(38.1 MB)
var permute = function (nums) {
  let arr = nums.slice(0),
    ret = []
  fn(0)

  function fn(n) { //为第n个位置选择元素  
    for (var i = n; i < arr.length; i++) {
      [arr[i], arr[n]] = [arr[n], arr[i]]
      if (n + 1 < arr.length - 1) //判断数组中剩余的待全排列的元素是否大于1个  
      {
        fn(n + 1); //从第n+1个下标进行全排列  
      } else {
        ret.push(arr.slice())
        // console.log(ret)
      }
      [arr[i], arr[n]] = [arr[n], arr[i]]
    }
  }
  return ret.sort()
};
// 运行时间： 15 ms
// 占用内存： 5320 k
// 输入一个整数数组， 实现一个函数来调整该数组中数字的顺序， 使得所有的奇数位于数组的前半部分， 
// 所有的偶数位于数组的后半部分， 并保证奇数和奇数， 偶数和偶数之间的相对位置不变。
function reOrderArray(array) {
  // write code here
  let l = array.length;
  let array1 = [];
  let num = 0;
  for (let i = 0; i < l; i++) {
    if (array[i] % 2 == 0) {
      array1.push(array[i])
    } else {
      num++;
      array1.splice(num - 1, 0, array[i])
    }
  }
  return array1
}
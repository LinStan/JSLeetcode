// 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半， 请找出这个数字。 例如输入一个长度为9的数组 {1,2,3,2,2,2,5,4,2}。
// 由于数字2在数组中出现了5次， 超过数组长度的一半， 因此输出2。 如果不存在则输出0。
function MoreThanHalfNum_Solution(numbers) {
  let l = numbers.length;
  var myMap = new Map();
  for (let i in numbers) {
    if (myMap.get(numbers[i]) == null) {
      myMap.set(numbers[i], 1);
    } else {
      myMap.set(numbers[i], myMap.get(numbers[i]) + 1)
      let temp = myMap.get(numbers[i]);
      if (temp > l / 2) {
        return numbers[i];
      }

    }
  }
  // console.log(myMap)
  let temp = myMap.get(numbers[l - 1]);
  if (temp > l / 2) {
    return numbers[l - 1];
  } else {
    return 0;
  }
}
// console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));
// console.log(MoreThanHalfNum_Solution([2, 2, 2, 2, 2, 1, 3, 4, 5]));
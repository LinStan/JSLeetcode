// 定义栈的数据结构， 请在该类型中实现一个能够得到栈中所含最小元素的min函数（ 时间复杂度应为O（ 1））。
let s = [];
let ms = [];
//定义两个数组。一个存放栈，一个存放最小值
function push(node) {
  // write code here
  s.push(node);
  //当min为空直接push
  let l = ms.length;
  let temp = ms[ms.length - 1];
  if (node < temp || l == 0) {
    ms.push(node)
  } else {
    ms.push(temp)
  }
}

function pop() {
  // write code here
  ms.pop()
  return s.pop();
}

function top() {
  // write code here
  return s[s.length - 1];
}

function min() {
  // write code here
  return ms[ms.length - 1];
}
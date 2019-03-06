//栈 先进后出  队列 先进先出
var stack = []

function push(node) {
  // write code here
  stack.push(node);
}

function pop() {
  // write code here
  let ret = stack.shift();
  return ret;
}
//push1 push2 push3 pop push4 pop push5 pop pop
// 结果分别是
// 1
// 1 2
// 1 2 3
// 2 3
// 2 3 4
// 3 4
// 4 5
// 5
// ""
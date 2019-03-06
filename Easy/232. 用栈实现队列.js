/**
 * Initialize your data structure here.
 */
// 执行用时: 84 ms, 在Implement Queue using Stacks的JavaScript提交中击败了31 .71 % 的用户
// 内存消耗: 33.9 MB, 在Implement Queue using Stacks的JavaScript提交中击败了0 .00 % 的用户 
var MyQueue = function () {
  this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.shift();

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
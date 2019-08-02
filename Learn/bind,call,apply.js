// 手动实现call
Function.prototype.mycall = function (context) {
  // 如果没有传参，绑定到默认的window上
  context = context || window;
  // 保存当前的this指向  也就是调用mycall的函数
  context.fn = this;
  // console.log(context, context.fn)
  // 截取传入的参数
  const args = [...arguments].slice(1)
  //参数绑定到新的this上
  const result = context.fn(...args)
  // 删除临时保存的属性，返回结果
  delete context.fn;
  return result
}
//手动实现apply 
Function.prototype.myApply = function (context) {
  context = context || window
  context.fn = this
  let result
  // 唯一的区别就是 apply 传入的参数是一个数组，因此要对传入的数组做一个展开操作
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
//手动实现bind
Function.prototype.myBind = function (ctx, ...args) {
  // bind是类似call改变this指向，但是返回的是一个可执行函数
  return (...innerArgs) => { return this.call(ctx, ...args, ...innerArgs) }
}



//测试bind
const obj = {
  q: '1'
}
let f1 = function (a, b) {
  this.a = a;
  this.b = b;
  return this
}
console.log(f1.myBind(obj, 3, 2)())
//{ q: '1', a: 3, b: 2 }
// 执行函数传参无效
console.log(f1.myBind(obj, 4, 4)(5, 6))
//{ q: '1', a: 4, b: 4 }
console.log(f1.myBind(obj)())
//{ q: '1', a: undefined, b: undefined }
// 测试函数不传参，执行函数传参有效
console.log(f1.myBind(obj)(1, 2))
// { q: '1', a: 1, b: 2 }
console.log(f1.myBind(null, 3, 4)())
// 绑定到全局对象上



//测试call
console.log(f1.mycall(obj, 3, 2))
//{ q: '1', a: 3, b: 2 }
// 执行函数传参无效
console.log(f1.mycall(null, 4, 4))
// golbal 对象 多了ab两个属性

//测试apply
console.log(f1.myApply(obj, [3, 2]))
//{ q: '1', a: 3, b: 2 }
// 执行函数传参无效
console.log(f1.myApply(null, [4, 4]))
// golbal 对象 多了ab两个属性
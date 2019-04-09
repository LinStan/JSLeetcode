// 写出一个程序， 接受一个十六进制的数值字符串， 输出该数值的十进制字符串。（ 多组同时输入）
// 输入描述:
//   输入一个十六进制的数值字符串。
// 输出描述:
//   输出该数值的十进制字符串。
let data = readline()
while (data) {
  console.log(parseInt(data, 16))
  data = readline()
}
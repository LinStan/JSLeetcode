// 小米食堂每年都会举办一次厨艺大赛， 假设参赛的厨师一共有n位（ n < 1000）， 
// 比赛结束后没有公布评分， 但是站在领奖台上的一排厨师中每位厨师都能看到与自己相邻的厨师（ 左或者右） 里
// 评分比自己低（ 看不到比自己分数高的人的分数） 的评分。 比赛结束之后要发奖金， 
// 以1K为单位， 每位厨师至少会发1K的奖金， 另外， 如果一个厨师发现自己的奖金没有高于比自己评分低的厨师的奖金， 
// 就会不满意， 作为比赛组织方， 小米食堂至少需要发放多少奖金才能让所有厨师满意。
var tt = readline().split(' ')
let l = parseInt(tt[0])
var data = tt.splice(1)
// 注意转为数字类型
for (let i in data) {
  data[i] = parseInt(data[i])
}
let temp = [];
temp[0] = 1;
for (let i = 1; i < l; i++) {
  if (data[i] > data[i - 1]) {
    temp[i] = temp[i - 1] + 1;
  } else {
    temp[i] = 1;
  }
}
// console.log(temp, temp.length)
for (let i = l - 2; i >= 0; i--) {
  if (data[i] > data[i + 1]) {
    temp[i] = Math.max(temp[i], temp[i + 1] + 1);
  }
}
let ret = 0;
for (let i = 0; i < temp.length; i++) {
  ret += temp[i]
}
console.log(ret)
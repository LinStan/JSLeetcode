// av394281 中，充满威严的蕾米莉亚大小姐因为触犯某条禁忌，被隙间妖怪八云紫（紫m……èi）按住头在键盘上滚动。
// 同样在弹幕里乱刷梗被紫姐姐做成罪袋的你被指派找到大小姐脸滚键盘打出的一行字中的第`k` 个仅出现一次的字。
// (为简化问题，大小姐没有滚出 ascii 字符集以外的字)
// 输入描述:
// 每个输入都有若干行，每行的第一个数字为`k`，表示求第`k`个仅出现一次的字。然后间隔一个半角空格，之后直到行尾的所有字符表示大小姐滚出的字符串`S`。
// 输出描述:
// 输出的每一行对应输入的每一行的答案，如果无解，输出字符串`Myon~`
//   (请不要输出多余的空行）
//     为了方便评测，如果答案存在且为c，请输出[c]
// 13.3%
while (line = readline()) {
  let lines = line.split('')
  let n = lines[0] * 1;
  let data = lines.slice(2) + ""
  let l = data.length, temp = 0;
  for (let i = 0; i < l; i++) {
    if (data.indexOf(data[i]) === data.lastIndexOf(data[i])) {
      temp++;
    }
    if (temp === n) {
      console.log("[" + data[i] + "]")
      break;
    }
  }
  if (temp < n) {
    console.log("Myon~")
  }
}
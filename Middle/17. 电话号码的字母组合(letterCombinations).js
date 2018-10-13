/**
 * @param {string} digits
 * @return {string[]}
 输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
var letterCombinations = function(digits) {
  var letterList = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};
  //console.log(letterList);
  var re =[];
  //console.log(re.length);
  var l = digits.length;
  //按照字符串长度循环
  for(var i = 0;i<l;i++)
  {
    var num = digits[i];
    var letter = letterList[num];
    //console.log(num,letter);
    //当re为空，赋值首数字对应字母,开始读取第二个数字
    if(re =="")
    {
      re = letterList[num];
      //console.log(re);
    }
    else
    {
      //临时存储排列
      var list =[];
      //外循环为当前的排列数量
      for(var j = 0;j<re.length;j++)
      {
        //内循环为当前数字对应的字母数量
        for(var k = 0;k<letterList[num].length;k++)
        {
          //栈操作。
          list.push(re[j]+letterList[num][k]);
          //console.log(list,i,j,k);
        }

      }
      re = list;
    }
  }
  return re;

};
console.log(letterCombinations("232"));

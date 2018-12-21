/**
 * @param {string[]} words
 * @return {number}
 */
 //160 ms, 在Unique Morse Code Words的JavaScript提交中击败了6.35% 的用户
function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
var uniqueMorseRepresentations = function(words) {
    if(words.length==1){return 1}
    if(words.length==0){return 0}
    //建立对应字典
    var mr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",
              ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
              "...","-","..-","...-",".--","-..-","-.--","--.."];
    var dic = {}
    var a = "a".charCodeAt();
    //console.log(a);
    for(var i = 0;i<26;i++)
        {
            dic[String.fromCharCode(a+i)]=mr[i];
        }
          //  console.log(dic)
    var re = [];
    var num=0;
    var flag=0;
    for(i = 0;i<words.length;i++)
        {
            var temp = '';
            //获取每个单词的摩尔斯密码
            for(var j = 0;j<words[i].length;j++)
                {
                    temp = temp+dic[words[i][j]];
                }
            //console.log(temp)
            re[i]=temp;
        }
    re = unique(re);
   // console.log(re,);
    return re.length;

};

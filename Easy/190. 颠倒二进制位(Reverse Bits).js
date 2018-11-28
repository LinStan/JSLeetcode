/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 //112 ms, 在Reverse Bits的JavaScript提交中击败了40.65% 的用户
var reverseBits = function(n) {

    var re =n.toString(2);
    console.log(re);
    var l = re.length;    //获取要格式化数字的长度，如二进制1的话长度为1
    if(l < 32){     //补全位数 0000，这里我要显示4位
        for(var i = 0; i < 32-l; i++) {
            re = "0" + re;     //不够的就在前面补0
        }
    }
    re = re.split('').reverse().join('');
    console.log(re);
    re = parseInt(re,2);
    return re;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 //执行用时: 64 ms, 在Hamming Distance的JavaScript提交中击败了99.21% 的用户
var hammingDistance = function(x, y) {
    //转为二进制，然后统计1的数量
    //x = x.toString(2);
    //y = y.toString(2);
    //^运算后是不是字符串，无法正则，需要转为字符串
   // var c = (x ^ y).toString(2);
    //var d = c.replace(/0/g, '').length;
    //console.log(x,y,c,d)
   // return d;
    return (x ^ y).toString(2).replace(/0/g, '').length;
};

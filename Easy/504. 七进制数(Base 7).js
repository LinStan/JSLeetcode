/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var re = [];
    var i = 0;
    var flag = "";
    if(num<0){num = -num;flag = "-"}
    if(num==0){return "0"}
    while(num/7!=0)
        {
            re[i] = num%7;
            i++;
            num = parseInt(num/7);
        }
    re = flag+re.reverse().join('')
    return re;
};

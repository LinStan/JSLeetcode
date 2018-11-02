/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString().split("");
    var re = 0;
    for(var i = 0;i<num.length;i++)
        {
            re = re +parseInt(num[i]);
        }
    //注意一下10也要处理
    if(re>=10)
    {re = addDigits(re)
     return re;
    }
    else
    {return re}
};

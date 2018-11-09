/**
 * @param {number} n
 * @return {boolean}
 */
var sq = function(re)
{
    re = re.toString().split("");
   // console.log(re)
    var result = 0;
        for(var i = 0;i<re.length;i++)
        {
           result = result+parseInt(re[i])*parseInt(re[i]);
        }
    return result;
}
var sq1 = function(re)
{
   // console.log(re)
    var result = 0;
        for(var i = 0;i<re.length;i++)
        {
           result = result+parseInt(re[i])*parseInt(re[i]);
        }
    return result;
}
var isHappy = function(n) {
    var re = n.toString().split("");
    //re = re.split("");
    var result = re;
    result = sq1(result);
    if(result==1){return true}
    var resultnum=0;
    for(resultnum=0;resultnum<50;resultnum++)
        {
            result = sq(result);
            if(result==1){break;}
            //console.log(result,resultnum)
        }
    if(result==1){return true}
    else{return false}
};

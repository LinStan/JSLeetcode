/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var i = 1;
    if(num==1||num==64){return true}
    for(;Math.pow(4,i)<=num;i++)
        {
            if(Math.pow(4,i)==num){return true}
           // var p = Math.pow(64,1/3);
           // console.log(Math.pow(3,i));
        }
    //console.log(p)
    return false
};

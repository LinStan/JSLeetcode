/**
 * @param {number} num
 * @return {boolean}
 */
 //执行用时: 84 ms, 在Ugly Number的JavaScript提交中击败了94.30% 的用户
var isUgly = function(num) {
    if(num==0){return false}
    while(num!=1)
        {
            //console.log(num)
            if(num%3==0)
                {num = num/3}
            else if(num%2==0)
                {num = num/2}
            else if(num%5==0)
                {num = num/5}
            else
            {return false}

        }
    return true
};

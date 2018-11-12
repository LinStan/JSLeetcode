/**
 * @param {number} n
 * @return {number}
 */
 //时间太长待改进
var isPrimes = function(n)
{
    for(var i = 2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
                {return false}
        }
    if(n>=2)
        {
            return true
        }
}
var countPrimes = function(n) {
    var num = 0;
    for(var i = 1;i<n;i++)
        {
            if(isPrimes(i))
                {
                    num++;
                }
        }
    return num;
};

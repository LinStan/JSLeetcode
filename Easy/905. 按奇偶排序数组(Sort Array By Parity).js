/**
 * @param {number[]} A
 * @return {number[]}
 */
 //执行用时: 104 ms, 在Sort Array By Parity的JavaScript提交中击败了82.24% 的用户
var sortArrayByParity = function(A) {
    var ji=[] ;
    var ou =[];
    var ounum=0,jinum=0;
    for(let i = 0;i<A.length;i++)
        {
            if(A[i]%2==0)
                {
                    ou[ounum]=A[i];ounum++;
                }
            else
                {ji[jinum]=A[i];jinum++;}

        }
    var c = ou.concat(ji)
    return c
};

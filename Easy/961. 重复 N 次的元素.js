/**
 * @param {number[]} A
 * @return {number}
 */
 //	320 ms 在N-Repeated Element in Size 2N Array的JavaScript提交中击败了100.00% 的用户
var repeatedNTimes = function(A) {
    var dist = new Array();
    var num = [];
    var distnum = 0;
    for(var i = 0;i<A.length;i++)
        {
            var temp = dist.indexOf(A[i]);
            if(temp==-1)
                {
                    dist[distnum]=A[i];
                    num[distnum]=1;
                    distnum++;
                }
            else
                {
                    num[temp]=num[temp]+1;
                    if(num[temp]==(A.length/2))
                        {return dist[temp]}
                }
        }
};

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
 // 108竞赛题，当时差了一点。
var numSubarraysWithSum = function(A, S) {
    var al = A.length;
    var re =0;
    var resultnum=0;
    for(var i = 0;i<al;i++)
        {
            //re = A[i];
            //原本是re=A[j]，会少计算最后一个可行的0解
            re=0;
            for(var j = i;j<al;j++)
                {
                    re = re+A[j];
                    if(re==S)
                        {
                            resultnum++;
                            //console.log(resultnum,re,A[j])
                            var k = j;
                            while(A[k+1]==0)
                                {
                                    resultnum++;
                                    k++;
                                }
                            break;
                        }
                }
        }
    return resultnum;
};
console.log(numSubarraysWithSum([0,0,0,0,0],0));

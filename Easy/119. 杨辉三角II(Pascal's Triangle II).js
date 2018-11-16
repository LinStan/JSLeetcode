/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 //80 ms, 在Pascal's Triangle II的JavaScript提交中击败了42.38% 的用户
var getRow = function(rowIndex) {
    if(rowIndex==0){return [1]}
    else if(rowIndex==1){return [1,1]}
    var re = [];
    re[0]=[1];
    re[1]=[1,1];
    for(var i = 2;i<=rowIndex;i++)
        {
            re[i]=[];
            //console.log(re[i],i)
            for(var j = 0;j<=i;j++)
                {
                    if(j==i||j==0){re[i][j]=1}
                    else
                        {

                    re[i][j]=re[i-1][j-1]+re[i-1][j]
                        }
                }
            //console.log(re[i],i)
        }
    return re[rowIndex]
};

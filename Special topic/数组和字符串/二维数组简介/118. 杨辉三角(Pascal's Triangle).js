/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var re = [];
    if(numRows==0){return re};
    re[0]=[1];
    if(numRows==1){return re};
    re[1]=[1,1];
    for(var i = 2;i<numRows;i++)
        {
            re[i]=[];
            re[i][0]=re[i][i]=1;
            for(var j = 1;j<i;j++)
                {
                    re[i][j]=re[i-1][j]+re[i-1][j-1];
                }
        }
    return re;
};

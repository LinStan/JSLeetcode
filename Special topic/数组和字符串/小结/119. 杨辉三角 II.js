/**
 * @param {number} numRows
 * @return {number[][]}
 */
 //已经战胜 18.45 % 的 javascript 提交记录
var generate = function(numRows) {
    if(numRows==0){return []}
    else if(numRows==1){return [[1]]}
    else if(numRows==2){return [[1],[1,1]]}
    var re = [];
    re[0]=[1];
    re[1]=[1,1];
    for(var i = 2;i<numRows;i++)
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
    return re
};
console.log(generate(34));

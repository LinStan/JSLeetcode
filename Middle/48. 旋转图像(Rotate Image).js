/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 //104 ms, 在Rotate Image的JavaScript提交中击败了17.58% 的用户
var rotate = function(matrix) {
    var n = matrix.length;
    for(var i=0;i<n/2;i++)
        {
            for(var j=0;j<n;j++)
                {
                    var temp = matrix[i][j];
                    matrix[i][j]=matrix[n-1-i][j];
                    matrix[n-1-i][j]=temp;
                }
        }
   // console.log(matrix)
    //镜像翻转
        for(i=0;i<n;i++)
        {
            for(var j=0;j<=i;j++)
                {
                    var temp = matrix[i][j];
                    matrix[i][j]=matrix[j][i];
                    matrix[j][i]=temp;
                }
        }
};
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

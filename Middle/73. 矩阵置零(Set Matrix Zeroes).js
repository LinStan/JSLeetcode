/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 //执行用时: 112 ms, 在Set Matrix Zeroes的JavaScript提交中击败了80.00% 的用户
var setZeroes = function(matrix) {
    var m = matrix.length;//多少行
    var n = matrix[0].length;//列
    var temp = [];
    var num = 0;
    console.log(m,n)
    for(var i = 0;i<m;i++)
        {
            for(var j = 0;j<n;j++)
                {
                    if(matrix[i][j]==0){temp[num]=[i,j];num++}
                }
        }
  //  console.log(temp)
    for(i = 0;i<temp.length;i++)
        {
            var ti = temp[i][0];
            var tj = temp[i][1];
            for(var j = 0;j<n;j++)//ti是0的行下标，将该行全部置为0
                {
                    matrix[ti][j]=0
                }
            for(var j = 0;j<m;j++)//tj是0的列下标，将该列全部置为0
                {
                    matrix[j][tj]=0
                }
           // console.log(matrix)
        }
};

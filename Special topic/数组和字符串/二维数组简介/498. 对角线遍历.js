/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 //160 ms, 在Diagonal Traverse的JavaScript提交中击败了52.58% 的用户
var findDiagonalOrder = function(matrix) {
    var m = matrix.length;//行数
    if(m<1){return matrix}
    var n = matrix[0].length;//列数
    var re = [];
    var i = 0,j=0;
    //2*2 翻3次  3*2 翻4次 3*3 翻5次
    // 总元素个数为m*n
    for(var dnum = 0;dnum<(m*n);dnum++)
        {
            let temp = matrix[i][j];
            re[dnum]=temp;
            // 当行列和为偶数，向上遍历
            if((i+j)%2==0)
                {
                    //当到n-1列即（1，2）这种位置，右移一位，改变遍历方向
                    if(j==n-1)
                        {i++}
                    //当到达i=0处，下移一行，改变遍历方向
                    else if(i==0)
                        {j++}
                    else
                        {
                            i--;j++;
                        }
                }
            // 当行列和为奇数，向下遍历
            else
                {
                    //同理，i=m-1，（2，1）这种位置，下移，改变方向
                    if(i==m-1)
                        {j++}
                    //右移，改变方向
                    else if(j==0)
                        {i++}
                    else
                        {i++;j--}
                }
        }
    return re

};

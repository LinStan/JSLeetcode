/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 // 76 ms, 在Search a 2D Matrix的JavaScript提交中击败了61.62% 的用户
var searchMatrix = function(matrix, target) {
    if(matrix==null||matrix.length==0||(matrix.length==1&&matrix[0].length==0)){return false}
    var m = matrix.length;
    var n = matrix[0].length;
    if(target>matrix[m-1][n-1]){return false}
    if(target<matrix[0][0]){return false}
    for(var i = 0;i<m;)
        {
            if(target>=matrix[i][0])
            {
                if(target>matrix[i][n-1])
                {
                    //console.log(matrix[i][n-1])
                    i++
                }
                else
                {
                        for(var j = 0;j<n;j++)
                            {
                                console.log(matrix[i][j],i,j)
                                if(target==matrix[i][j])
                                {return true}
                            }
                        return false
                }
            }
            else
                {i++}
        }
    return false
};
console.log(searchMatrix([],0));
console.log(searchMatrix([[1],[3],[5]],3));
console.log(searchMatrix([[1],[5]],3));

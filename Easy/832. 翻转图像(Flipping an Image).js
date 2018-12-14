/**
 * @param {number[][]} A
 * @return {number[][]}
 */
 //88 ms, 在Flipping an Image的JavaScript提交中击败了78.25% 的用户
var flipAndInvertImage = function(A) {
    var m = A.length;
    var n = A[0].length;
    for(var i = 0;i<m;i++)
        {
            A[i].reverse();
            for(var j = 0;j<n;j++)
                {
                    A[i][j]=1^A[i][j];
                }
        }
    //console.log(A)
    return A
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));

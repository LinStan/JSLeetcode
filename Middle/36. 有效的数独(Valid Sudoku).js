/**
 * @param {character[][]} board
 * @return {boolean}
 */
  //104 ms, 在Valid Sudoku的JavaScript提交中击败了79.53% 的用户
var isValidSudoku = function(board) {
    var m = board.length;
    var n = board[0].length;
  //  console.log(m,n)
    for(var i = 0;i<9;i++)
        {
            //判断每列
            var temp1 = [];
            for(var p=0;p<9;p++)
                {
                    temp1[p]=board[p][i]
                //    console.log(temp1,board[p][i],p,i)
                }
            temp1 = temp1.sort();
         //   console.log(temp1)
            for(var j = 8;j>1;j--)
                {
                    if(temp1[j]>9||temp1[j]<1){return false}
                    if(temp1[j]=='.'){break;}
                    if(temp1[j]==temp1[j-1]){return false}
                }
        }
   // console.log(board)
        for(var i = 0;i<9;i++)
        {
            //判断每行
            var temp = board[i].slice().sort();
        //    console.log(temp)
            for(var j = 8;j>1;j--)
                {
                    if(temp[j]>9||temp[j]<1){return false}
                    if(temp[j]=='.'){break;}
                    if(temp[j]==temp[j-1]){return false}
                }
        }
  //  console.log(board)
    //判断每个小矩阵
    for(i = 0; i < board.length; i+=3){
        for(var j = 0; j < board.length; j+=3){
            var dupCheck = [];

            for(var x = 0; x < 3; x++){
                for(var y = 0; y < 3; y++){
                    if(board[i+x][j+y] !== '.' && dupCheck[board[i+x][j+y]]){
                        return false;
                    } else {
                        dupCheck[board[i+x][j+y]] = true;
                    }
                }
            }
        }
    }
    return true
};
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))

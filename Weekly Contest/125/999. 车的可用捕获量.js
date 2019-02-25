/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let ri, rj;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == "R") {
                ri = i;
                rj = j;
            }
        }
    }
    // console.log(ri,rj)
    //第3行第4列 下标是2,3
    let left, right, temp;
    let ret = 0;
    for (left = rj; left >= 0;) {
        if (board[ri][left] == "." || board[ri][left] == "R") {
            left--
        } else if (board[ri][left] == "B") {
            break;
        } else {
            ret++;
            break;
        }
    }
    for (right = rj; right < 8;) {
        if (board[ri][right] == "." || board[ri][right] == "R") {
            right++
        } else if (board[ri][right] == "B") {
            break;
        } else {
            ret++;
            break;
        }
    }
    //down
    for (temp = ri; temp < 8;) {
        if (board[temp][rj] == "." || board[temp][rj] == "R") {
            temp++
        } else if (board[temp][rj] == "B") {
            break;
        } else {
            ret++;
            break;
        }
    }
    //up
    for (temp = ri; temp >= 0;) {
        if (board[temp][rj] == "." || board[temp][rj] == "R") {
            temp--
        } else if (board[temp][rj] == "B") {
            break;
        } else {
            ret++;
            break;
        }
    }
    return ret
};
console.log(numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
]))
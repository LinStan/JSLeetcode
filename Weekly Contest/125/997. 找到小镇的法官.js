/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    let l = trust.length;
    let temp1 = [];
    let temp2 = [];
    for (let i = 1; i <= N; i++) {
        temp1[i - 1] = i;
        temp2[i - 1] = 0;
    }
    //  console.log(temp1,temp2)
    for (i = 0; i < l; i++) {
        //信任人的编号
        let num1 = trust[i][0];
        if (temp1.indexOf(num1) != -1) {
            temp1.splice(temp1.indexOf(num1), 1)
        }
        let num2 = trust[i][1];
        //        console.log(num2)
        if (num2 <= N) {
            temp2[num2 - 1] += 1;
        }
    }
    //  console.log(temp1,temp2)
    // console.log(Math.max.apply(Math,temp2))
    if (Math.max.apply(Math, temp2) < N - 1) {
        return -1
    } else if (temp1.length == 0) {
        return -1
    } else {
        return temp1[0]
    }
};
console.log(findJudge(2,[[1,2]]));
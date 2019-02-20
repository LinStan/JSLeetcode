/**
 * @param {number[]} height
 * @return {number}
 */
// 1300 ms	16.7 MB
//我的提交执行用时已经战胜 10.75 % 的 javascript 提交记录
var maxArea = function(height) {
    let temp=0,ret=0;
    for(let i = 0;i<height.length-1;i++)
        {
            for(let j = i+1;j<height.length;j++)
                {
                    temp = Math.min(height[i],height[j])*(j-i);
                    if(temp>ret){ret = temp;}
                }
        }
    return ret
};

/**
 * @param {number[]} height
 * @return {number}
 */
 //迭代
var maxArea = function(height) {
    var l = height.length;
    var maxnum =0;
    var temp = 0;
    if(l<=1){return 0;}
    for(var i=0;i<l;i++)
    {
      for(var j=1;j<l;j++)
      {
        temp = Math.min(height[i],height[j])*(j-i);
        if(temp>maxnum){maxnum=temp}
      }
    }
    return maxnum
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

/**
 * @param {number[]} nums
 * @return {number}
 */
 //执行用时: 448 ms, 在Third Maximum Number的JavaScript提交中击败了7.14% 的用户
var thirdMax = function(nums) {
    var max = -Number.MAX_VALUE
    var second = -Number.MAX_VALUE
    var third = -Number.MAX_VALUE
    for(var i = 0;i<nums.length;i++)
        {
            console.log(nums[i])
            if(nums[i]>max){
                if(max!=-Number.MAX_VALUE)
                    {
                        if(second!=-Number.MAX_VALUE){third = second}
                        {second = max}
                    }

                max=nums[i]
            }
            else if(nums[i]>second&&nums[i]<max){
                if(second!=-Number.MAX_VALUE){third = second}
                second = nums[i]
            }
            else if(nums[i]>third&&nums[i]<second){third = nums[i]}
    //console.log(max,second,third)
        }
    if((third==-Number.MAX_VALUE&&nums.indexOf(-Number.MAX_VALUE)==-1))
    {return max}
    else{
    return third
    }
};

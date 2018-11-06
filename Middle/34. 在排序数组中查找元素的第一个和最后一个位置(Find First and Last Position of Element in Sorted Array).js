/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var flagi = 0;var flagj = 0;
    for(var i = 0,j = nums.length-1;i<=j;)
        {
            if(flagi==0){
            if(nums[i]==target)
                {var first = i;flagi++;}
                 //console.log(first,nums[i])}
            else{
                i++
            }
            }

            if(flagj==0)
{
            if(nums[j]==target)
                {var last = j;flagj++;}
            else{
                if(flagj==0)
                {j--}
            }
}
            if(flagi==1&&flagj==1){return [first,last];}
        }
    return [-1,-1];
};

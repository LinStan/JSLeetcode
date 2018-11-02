/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  //两次for会超时
    /*
    var l = nums.length;
    var j;
    for(var i = 0;i<l;i++)
        {
            if(i+k>l){j=l-1}
            else{j=i+k}
            for(;j>i;j--)
                {
                    if(nums[i]==nums[j]){return true;}
                }
        }
    return false;
    */
    //定义hash表
    var hash = {};

    for(var i = 0; i < nums.length; i++){
        var val = nums[i];
        if(hash[val] !== undefined){
            if((i - hash[val]) <= k){
                return true;
            }
            //若大于意味前面都没有符合条件的。所以直接将第二次找到的val地址记录
            else {
                hash[val] = i;
            }
        } else {
            hash[val] = i;
        }


    }

    return false;
};

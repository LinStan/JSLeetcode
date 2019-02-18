/**
 * @param {number[]} nums
 * @return {number[]}
 */
//执行用时: 332 ms, 在Find All Numbers Disappeared in an Array的JavaScript提交中击败了35.68% 的用户
//内存消耗: 33 MB, 在Find All Numbers Disappeared in an Array的JavaScript提交中击败了5.26% 的用户
var findDisappearedNumbers = function(nums) {
    nums = nums.sort(function(a,b){return a-b})
    let n = nums.length;
    var result = [];
    var j = 0;
  //  console.log(nums)
    for(let i = 0;i<n;i++)
        {
            if(result[nums[i]-1])
            {
                result[nums[i]-1]+=1;
            }
            else
            {
                result[nums[i]-1]=1;
            }
            if(!result[i]){result[i]=0;}
        }
    for(let i = 0;i<nums.length;i++)
        {
            if(result[i]==0)
                {result.push(i+1)}
        }
    return result.slice(nums.length)
};

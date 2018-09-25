function sortNumber(a,b)
{
  return a-b
}
var threeSum = function(nums) {
    var result = [];
    //不足3个直接返回空
    if(nums.length < 3){
        return result;
    }
    //sort()括号内需要是一个函数
    //nums.sort(function(a,b){return a>b ? 1 : -1;});
    //按照从小到大对nums进行排序
    nums.sort(sortNumber);
    console.log(nums);

    var len = nums.length;

    for(var i = 0; i < len-2; i++){
      //转为两数相加问题
        if(i == 0 || nums[i] > nums[i-1]){ //跳过相同数值例如111
            var target = 0 - nums[i];//从头尾两端向中间移动
            var j = i + 1;
            var k = len - 1;
            while(j < k){
                if(nums[j] + nums[k] === target){//若两者满足条件，再判断是否有相同元素，跳过相同元素
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]){j++;}
                    while(j < k && nums[k] === nums[k+1]){k--;}
                } else if(nums[j] + nums[k] < target){
                    j++;
                } else {
                    k--;
                }
            }
        }
        // 用于跳过相同数，可以替换掉line21的if判断
        // if(i < len - 1){
        //     while(nums[i] === nums[i+1]){i++;}
        // }
    }
    return result;
};
console.log(threeSum([-1,0,1,2,-1,-4]));

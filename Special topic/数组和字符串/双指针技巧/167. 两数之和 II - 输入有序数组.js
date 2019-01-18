/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 //已经战胜 41.11 % 的 javascript 提交记录
var twoSum = function(numbers, target) {
    var l = numbers.length;
    var i = l;
    //多虑了。可以直接遍历不考虑也可以通过
    while(numbers[i]>target)
        {
            i = Math.ceil(i/2);
        }
    for(var j=0;j<i;)
        {
            if(numbers[i]+numbers[j]==target)
                {return [j+1,i+1]}
            else if(numbers[i]+numbers[j]<target)
                {
                    j++;
                }
            else
                {i--;}
        }
};

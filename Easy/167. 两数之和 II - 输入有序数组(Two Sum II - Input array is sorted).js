/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var i =0;var j = numbers.length-1;
    for(;i<j;)
        {
            if(numbers[i]+numbers[j]==target)
                {return [i+1,j+1]}
            if(numbers[i]+numbers[j]>target)
                {j--;}
            if(numbers[i]+numbers[j]<target)
                {i++;}
        }
    return [i+1,j+1]
};

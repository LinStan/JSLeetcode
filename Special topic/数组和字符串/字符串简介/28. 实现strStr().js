/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 //已经战胜 16.77 % 的 javascript 提交记录
var strStr = function(haystack, needle) {
    var lh = haystack.length;
    var ln = needle.length;
    if(needle==""){return 0}
    if(lh==ln){
        if(haystack==needle){return 0}
        else
            {return -1}
    }
    var flag;
    for(var i=0;i<=(lh-ln);i++)
        {
            for(var j = 0;j<ln;j++)
            {
                flag=0;
                if(haystack[i+j]!=needle[j])
                    {
                        flag=1;
                        break;
                    }
            }
            if(flag==0)
                {return i}
        }
    return -1;
};

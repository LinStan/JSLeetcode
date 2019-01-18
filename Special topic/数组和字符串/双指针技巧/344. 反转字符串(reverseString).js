/**
 * @param {string} s
 * @return {string}
 */
 //已经战胜 12.49 % 的 javascript 提交记录
var swap = function(i,j)
{
    var temp = i;
    i=j;
    j=temp;
    return {i:i,j:j}
}
var reverseString = function(s) {
    s = s.split('');
    var i = 0,j=s.length-1;
    for(;i<j;i++,j--)
        {
            let temp = swap(s[i],s[j])
            s[i]=temp.i;
            s[j]=temp.j;
        }
    return s.join('');
};

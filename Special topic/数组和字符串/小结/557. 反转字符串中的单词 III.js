/**
 * @param {string} s
 * @return {string}
 */
 //已经战胜 25.59 % 的 javascript 提交记录
var reverseWords = function(s) {
    let l = s.length;
    let t = 0;
    let re = '';
    for(let i = 0;i<l;i++)
        {
            if(s[i]==' ')
                {
                    let temp = s.slice(t,i);
                    temp = temp.split('').reverse().join('')
                    re += temp;
                    re+=' ';
                  //  console.log(temp)
                    t = i+1;
                }
            else if(i==l-1)
                {
                    let temp = s.slice(t,i+1);
                    temp = temp.split('').reverse().join('')
                    re += temp;
                  //  console.log(temp)
                }
        }
    return re;
};

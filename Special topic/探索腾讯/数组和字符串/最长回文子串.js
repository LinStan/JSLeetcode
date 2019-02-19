/**
 * @param {string} s
 * @return {string}
 */
 //暴力法 time limited
var longestPalindrome = function(s) {
    let temp = [];
    let maxtemp;
    if(s.length==0)
        {
            maxtemp='';
        }
    else
        {
            maxtemp = s[0];
        }
    let len = 1;
    let l = s.length;
    let s1 = s.split('').reverse().join('');
    console.log(s,s1)
    for(let i = 0;i<l;i++)
        {
            for(let j = 0;j<l;j++)
                {
                    //寻找最大共同子串
                    if(s[i]==s1[j])
                        {
                            len=0;
                            for(let k = 0;k+j<l;k++,len++)
                                {
                                    if(s[i+k]==s1[j+k])
                                        {
                                            temp[len]=s[i+k];
                                        }
                                    else
                                        {break;}
                                }
                           // console.log(temp,maxtemp)
                            //判断是否回文
                            for(let q=0,w=temp.length-1;q<w;q++,w--)
                                {
                                    if(temp[q]!=temp[w])
                                        {temp=[];break;}
                                }
                            if(temp.length>maxtemp.length)
                                {maxtemp = temp.join('');}
                            temp=[];
                        }
                }
        }
    return maxtemp
}

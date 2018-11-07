/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.split("");
   // console.log(s)
    for(var i = 0;i<s.length;i++)
        {
            s[i]=s[i].charCodeAt()-64;
        }
   // console.log(s);
    s =s.reverse();
   // console.log(s);
    var re = 0;
    for(i = 0;i<s.length;i++)
        {
            if(s[i]==26)
                {
                    re = re+Math.pow(26,i+1);
                }
            else
                {
                    re = re+s[i]*Math.pow(26,i);
                }
        }
    return re
};

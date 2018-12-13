/**
 * @param {string} str
 * @return {string}
 */
 //76 ms, 在To Lower Case的JavaScript提交中击败了35.96% 的用户
var toLowerCase = function(str) {
    var l = str.length;
    var re =[];
    for(var i = 0;i<l;i++)
        {
            if(str[i].charCodeAt()>=65&&str[i].charCodeAt()<=90)
                {
                    //console.log(str[i].charCodeAt())
                    re[i]=String.fromCharCode(str[i].charCodeAt()+32);
                }
            else
                {
                    re[i]=str[i]
                }
        }
   // console.log(str,re)
    return re.join('')
};
console.log(toLowerCase('NIUSDdgasb4165'))

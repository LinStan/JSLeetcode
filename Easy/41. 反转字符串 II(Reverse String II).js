/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 //112 ms, 在Reverse String II的JavaScript提交中击败了29.17% 的用户
var reverseStr = function(s, k) {
    var num=0;
    var l = s.length;
    if(l<k){return s.split('').reverse().join('')};
    s = s.split('');
   // console.log(s);
    var re = [];
    var i = 0;
    while(l>=k)
        {
            var temp = s.splice(0,k);
            if(num%2==0)
                {
                    temp = temp.reverse().join('');
                }
            else
                {
                    temp = temp.join('');
                }
            re = re+temp;
            //console.log(re);
            l = s.length;
            num++;
        }
    if(num%2==0)
        {
                re = re+s.reverse().join('');
        }
    else
        {
                re = re+s.join('');
        }
    //console.log(re);
    return re;

};

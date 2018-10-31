/**
 * @param {string} s
 * @return {string}
 */
function reverse1(s)
{
    var l = s.length;
    //console.log(l,s)
    var re = "";
    for(var i =l-1;i>=0;i--)
        {
          if(s[i]!=" ")
            {re = re+s[i];}
            //console.log(re);
        }
    return re;
}
var reverseWords = function(s) {
    var l = s.length;
    var temp = "";
    var re = "";
    for(var i =0 ;i<l;i++)
        {

            temp = temp+s[i];
            //console.log(temp)
            if(s[i]==" "||i==l-1)
                {
                    //temp = temp.substr(0,i);
                    console.log(temp);

                    var temp = reverse1(temp);
                    console.log(temp);
                    re = re+temp
                    temp = "";
                    if(i!=l-1)
                    {re = re+" "}
                }

        }
    return re;
};
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("qwertyuioip"));

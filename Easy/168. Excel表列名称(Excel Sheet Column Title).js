/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var re = [];
    var i =0;
    while(n/26>1&&n!=26)
        {
            if(n%26==0){n = n-26;}
            re[i]=n%26;
            i++;
            n = parseInt(n/26);
        }
    re[i]=n%26;
    re = re.reverse();
    for(var j = 0;j<i+1;j++)
        {
            if(re[j]==0){re[j]=26}
            re[j]= String.fromCharCode(64 + parseInt(re[j]))
        }
    re = re.join("");
    return re;
};

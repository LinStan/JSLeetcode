/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var l = s.length;
    var re = "";
    for(var i = l-1;i>=0;i--)
        {
            re = re+s[i];
        }
    return re
};

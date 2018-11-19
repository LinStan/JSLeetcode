/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // /执行用时: 72 ms, 在Isomorphic Strings的JavaScript提交中击败了98.67% 的用户
    var isIsomorphic = function(s, t) {
    var ls = s.length;
    var lt = t.length;
    if(ls!=lt){return false}
    for(var i = 0;i<ls;i++)
        {
            if(s.indexOf(s[i])!=t.indexOf(t[i]))
            {return false}
        }
    return true
};

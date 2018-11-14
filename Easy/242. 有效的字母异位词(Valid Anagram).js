/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//执行用时: 136 ms, 在Valid Anagram的JavaScript提交中击败了59.58% 的用户
var isAnagram = function(s, t) {
    var ls = s.length;
    var lt = t.length;
    //console.log(ls,lt)
    if(ls!=lt){return false}
    t = t.split("").sort().join("");
    s = s.split("").sort().join("");
    //console.log(t,s);
    if(s==t){return true}
    else{return false}
};
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("anagtam","nagaram"));

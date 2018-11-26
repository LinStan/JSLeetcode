/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
//主要思想为循环判断来进行加减
var addp = function(tokens,P,pnum)
{
    P = P-tokens[0];
    pnum=pnum+1;
    tokens.splice(0,1);
    //console.log(tokens,P,pnum)
    return {a:P,b:tokens,c:pnum}
}
var addP = function(tokens,P,pnum)
{
    var lt = tokens.length;
    pnum=pnum-1;
    P = P+tokens[lt-1];
    tokens.splice(lt-1,1);
    //console.log(tokens,P,pnum)
    return {a:P,b:tokens,c:pnum}

}
var calre = function(tokens)
{
    var l = tokens.length;
    var re = 0;
    for(var i = 0;i<l;i++)
        {
            re=re+tokens[i];
        }
    return re;
}
var bagOfTokensScore = function(tokens, P) {
    //数组按照从小到大排序。
    tokens.sort(function(a,b){return a>b?1:-1});
    if(P<tokens[0]){return 0}
    var l = tokens.length;
    var re = calre(tokens);
    var pnum=0;
    var maxp = 0;
    var time = 0;
    while(P<re)
        {
            if(tokens.length==1)
                {
                    if(P<tokens[0]){return pnum}
                    else
                        {return pnum+1;}
                }
            if(P>=tokens[0])
                {
                    var obj=addp(tokens,P,pnum)
                    tokens = obj.b;
                    P = obj.a;
                    pnum=obj.c;
                    //if(pnum>maxp){maxp=pnum}
                    re = calre(tokens);
                   // console.log(tokens,P,pnum,re)
                }
            else if(P<tokens[0])
                {
                    var obj = addP(tokens,P,pnum)
                    tokens = obj.b;
                    P = obj.a;
                    pnum=obj.c;
                    re = calre(tokens);
                   // console.log(tokens,P,pnum,re)
                }
            else
                {
                    return pnum;
                }

        }
    return pnum+tokens.length;
};
